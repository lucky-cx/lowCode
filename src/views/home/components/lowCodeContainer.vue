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
            <span>{{ element.label }}</span>
          </TButton>
        </template>
      </Draggable>
    </div>
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
            <Component :is="element.ctype" v-bind="element" class="item-box" />
            <TIcon name="delete" style="color: red" @click="deleteIcon(index)" />
          </div>
        </template>
      </Draggable>
    </div>
    <div class="node-config">
      <div>属性区</div>
      <div>{{ activeNode }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { cloneDeep, pullAt } from "lodash";
import { getRandomCode } from "~/utils/tools";
import appStore from "~/store";

export default {
  name: "LowCodeContainer",
};
</script>

<script lang="ts" setup>
const store = appStore;
const activeNode: Partial<M_Field_Init> = ref();

window.console.log("store -->", store);
const initializing = ref(store.material.materialInitData);
const activeSchema = computed(() => {
  const activeComponentName = activeNode.value?.name;
  if (!activeComponentName) {
    return;
  }
  const data = store.material.materialJsonFiedls[activeComponentName];
  return data;
});
window.console.log("activeSchema -->", activeSchema);

const nodelist = ref([]);
// const testComponent = ref("t-input");
const handleClone = (model: any) => {
  const data = {
    ...cloneDeep(model),
    id: getRandomCode(8),
  };
  return data;
};

const deleteIcon = (index: number) => {
  pullAt(nodelist.value, index);
};

const activeClick = (element: Partial<M_Field_Init>) => {
  activeNode.value = element;
};

const activeClass = computed((element: Partial<M_Field_Init>) => {
  return (element: Partial<M_Field_Init>) => {
    const className = element.id === activeNode.value?.id ? "active-item" : "";
    return className;
  };
});

watch(activeNode, (val) => {
  window.console.log(" watch activeNode-->", val);
});
</script>

<style lang="scss">
.low-code-box {
  display: flex;
  border-top: 2px solid #f2f2f2;

  .node-material {
    width: 300px;
    height: 900px;
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
      height: 100vh;
      padding: 10px;
      border: 1px solid black;

      .panel-item {
        display: inline-flex;
        width: 100%;
        padding: 10px;
        // background-color: antiquewhite;
        align-items: center;
        margin-bottom: 10px;
        .item-box {
          margin-right: 10px;
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
    height: 900px;
    background-color: #f2f2f2;
    padding: 10px;
  }

  .node-item {
    margin: 10px;
  }
}
</style>
