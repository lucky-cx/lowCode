<template>
  <div class="low-code-box">
    <div class="node-material">
      <Draggable
        v-model="initializing"
        item-key="name"
        :group="{ name: 'itxst', pull: 'clone' }"
        :sort="false"
        :clone="handleClone"
        animation="300"
      >
        <template #item="{ element }">
          <TButton type="button" class="node-item">
            <template #icon>
              <TIcon :name="element.icon" />
            </template>
            <span>{{ element.displayName }}</span>
          </TButton>
        </template>
      </Draggable>
    </div>
    <!-- 中间画布区域 -->
    <div class="node-container">
      <Draggable
        v-model="nodelist"
        item-key="id"
        group="itxst"
        ghost-class="ghost"
        chosen-class="chosen"
        selector="selector"
        :animation="500"
        :sort="true"
        class="panel"
      >
        <template #item="{ element, index }">
          <div class="panel-item" :class="activeClass(element)" @click="activeClick(element)">
            <!-- <span>
              {{ element.displayName }}
            </span> -->
            <Component
              :is="element.ctype"
              v-bind="element"
              v-model="element.value"
              class="item-box"
            />
            <span @click.stop="deleteIcon(index)">
              <TIcon name="delete" class="delete-icon" style="color: red" />
            </span>
          </div>
        </template>
      </Draggable>
    </div>
    <div class="node-config">
      <TTabs v-model="tabPanelValue">
        <!-- 默认插槽 和 具名插槽（panel）都是用来渲染面板内容 -->
        <TTabPanel
          value="configSet"
          label="属性设置"
          :destroy-on-hide="false"
          class="tabPanelContainer"
        >
          <div v-for="(itemKeyName, index) in keys(activeSchema)" :key="index">
            <div v-if="activeSchema[itemKeyName].ctype !== 'object'">
              <span>
                {{ activeSchema[itemKeyName].displayName }}
              </span>
              <Component
                :is="activeSchema[itemKeyName].ctype"
                v-bind="activeSchema[itemKeyName]"
                v-model="activeNode[itemKeyName]"
                :m-context="activeNode"
                class="item-box"
              />
            </div>
            <div v-else>
              <span>
                {{ `${activeSchema[itemKeyName].displayName}` }}
              </span>
              <div
                v-for="(objKey, o_index) in keys(activeSchema[itemKeyName].child)"
                :key="o_index"
                class="item-box"
              >
                <span>{{ `${activeSchema[itemKeyName].child[objKey].displayName}` }}</span>
                <Component
                  :is="activeSchema[itemKeyName].child[objKey].ctype"
                  v-model="activeNode[itemKeyName][objKey]"
                  class="item-box"
                />
              </div>
            </div>
          </div>
        </TTabPanel>
        <TTabPanel value="page" label="页面" :destroy-on-hide="false" class="tabPanelContainer">
          <p>页面属性设置</p>
        </TTabPanel>
      </TTabs>
    </div>
  </div>
</template>

<script lang="ts">
import { cloneDeep, keys, pullAt } from "lodash";
import { getRandomCode } from "~/utils/tools";
import appStore from "~/store";
import type { ENode } from "~/config/modelTypes";

export default {
  name: "LowCodeContainer",
};
</script>

<script lang="ts" setup>
const store = appStore;
const activeNode = ref();

console.log("store -->", store);
const initializing = ref(store.material.materialInitData);

const activeSchema = computed(() => {
  const activeComponentName = activeNode.value?.name;
  if (!activeComponentName) {
    return;
  }
  const data = store.material.materialJsonFiedls[activeComponentName];
  return data.fields;
});
console.log("activeSchema -->", activeSchema);

const nodelist = ref([]);

// const testComponent = ref("t-input");
const handleClone = (model: any) => {
  const data = {
    ...cloneDeep(model),
    id: getRandomCode(8),
  };
  return data;
};

const deleteIcon = async (index: number) => {
  pullAt(nodelist.value, index);
  activeNode.value = null;
};

const activeClick = (element: Partial<ENode>) => {
  activeNode.value = element;
  tabPanelValue.value = "configSet";
};

const activeClass = computed((element: Partial<ENode>) => {
  return (element: Partial<ENode>) => {
    const className = element.id === activeNode.value?.id ? "active-item" : "";
    return className;
  };
});

watch(activeSchema, (val) => {
  console.log(" watch activeSchema-->", val);
});

watch(activeNode, (val) => {
  console.log(" watch activeNode-->", activeNode);
});

const tabPanelValue = ref("configSet");
</script>

<style lang="scss">
.low-code-box {
  display: flex;
  border-top: 2px solid #f2f2f2;

  .node-material {
    width: 300px;
    height: 850px;
    background-color: #f2f2f2;
    padding: 10px;
  }

  .node-container {
    background-color: white;
    flex: 1;
    padding: 10px;
    .panel {
      width: 100%;
      max-width: 1500px;
      height: 850px;
      padding: 10px;
      border: 1px solid black;

      .panel-item {
        display: inline-flex;
        width: 100%;
        padding: 10px;
        // background-color: antiquewhite;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .item-box {
          margin-right: 10px;
          .delete-icon {
            margin-right: 10px;
          }
        }
      }

      .active-item {
        background-color: #a4e4d7;
        box-shadow: 2px 2px 5px #000;
      }
    }
  }

  .node-config {
    width: 300px;
    height: 850px;
    background-color: #f2f2f2;
    padding: 10px;
    .tabPanelContainer {
      height: 850px;
      padding: 10px;
    }
  }

  .node-item {
    margin: 10px;
  }
}
</style>
