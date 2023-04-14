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
        <template #item="{ element }">
          <div class="panel-item">
            <Component :is="element.ctype" v-bind="element" />
          </div>
        </template>
      </Draggable>
    </div>
    <div class="node-config">
      属性区
    </div>
  </div>
</template>

<script lang="ts">
import { cloneDeep } from "lodash";
import { getRandomCode } from "~/utils/tools";
import appStore from "~/store";

export default {
  name: "LowCodeContainer",
};
</script>

<script lang="ts" setup>
const store = appStore;
window.console.log("store -->", store);
const initializing = ref(store.material.materialInitData);
const nodelist = ref([]);
// const testComponent = ref("t-input");
const handleClone = (model: any) => {
  const data = {
    ...cloneDeep(model),
    id: getRandomCode(8),
  };
  window.console.log("data -->", data);
  return data;
};
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
      border: 1px solid black;
      .panel-item {
        display: inline-block;
        width: 100%;
        padding: 20px;
        background-color: antiquewhite;
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
