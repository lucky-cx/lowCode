import { defineStore } from "pinia";
// 该文件用来，定义存储，
// 1、左侧物料模型 拖拽到 中间画布区，类型定义，
// 2、中间画布区，点击激活时，该组件右侧的属性面板，每个属性应该对应渲染出哪些组件

export const material = defineStore("material", () => {
  const materialJsonFiedls = ref({}); //  存储各个模型的结构描述
  const materialInitData = ref({}); // 存储各个模型的初始化数据

  function setJsonFields(data: any) {
    materialJsonFiedls.value = data;
  }

  function setMaterialInitData(data: any) {
    materialInitData.value = data;
  }

  return { materialJsonFiedls, materialInitData, setJsonFields, setMaterialInitData };
});
