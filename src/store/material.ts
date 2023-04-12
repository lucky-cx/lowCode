import { defineStore } from "pinia";
// 该文件用来，定义存储，
// 1、左侧物料模型 拖拽到 中间画布区，类型定义，
// 2、中间画布区，点击激活时，该组件右侧的属性面板，每个属性应该对应渲染出哪些组件

// 物料到画布，组件对应渲染
export enum MATERIAL_TO_COMPENT {
  TEXT = "t-input",
  SELECT = "t-select",
  number = "t-input-number",
}
// 属性面板，属性到组件动态生成，组件对应
export enum M_ATTRS_TO_COMPENT {
  TEXT = "t-input",
  SELECT = "t-select",
  NUMBER = "t-input-number",
  OBJECT = "自定义组件，需要自己封装",
}

export const counter = defineStore("material", () => {
  const count = ref<number>(1);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
