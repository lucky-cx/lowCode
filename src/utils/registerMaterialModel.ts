// /***
//  *
//  *  1、该文件需要注册，物料模型的 json 描述（是否可以换成 ts 文件返回 json 格式数据的形式）
//  *  2、处理 模型定义种，key-val 的关系（包含复杂数据格式的嵌套，如数组和对象）
//  *  3、将模型定义本身，放置到 store 中（之前是在全局挂载）
//  */

import appStore from "~/store";

// 初始化组件初始数据
function initDefaulValue(config: MateriaNode) {
  const { displayName, ctype, name, icon, fields } = config;
  const initializing = { ctype, name, icon, displayName };
  setDefaultValue(fields, initializing);
  return initializing;
}

// 递归设置各层级初始数据
function setDefaultValue(fields: M_FieldNode, initializing: ENode) {
  for (const key in fields) {
    const { ctype, value, child } = fields[key];
    if (ctype === "object" && child) {
      initializing[key] = {};
      setDefaultValue(child, initializing[key]);
    } else {
      initializing[key] = value;
    }
  }
  return initializing;
}

// 获取模型文件信息
const materialJsonFields: Record<string, MateriaNode> = import.meta.glob(
  "~/config/materialModel/*.ts",
  { import: "default", eager: true },
);
window.console.log(" materialJsonFields-->", materialJsonFields);
// 1、将模型的结构信息，存储到 store
// 2、根据模型的结构信息，生成初始化数据，存储到 store ，对应给画布区域组件的属性设置
export function registerComponentsSchema(): void {
  const files = materialJsonFields;
  const fields: Record<string, MateriaNode> = {};
  const initDatas = [];

  for (const path in files) {
    const filesValue: MateriaNode = files[path];
    const componentName = filesValue.name;
    if (componentName && filesValue) {
      fields[componentName] = filesValue;
      initDatas.push(initDefaulValue(filesValue));
    }
  }

  window.console.log(" registerComponentsSchema store -->", appStore);
  appStore.material.setJsonFields(fields); // json 结构信息  --> store
  appStore.material.setMaterialInitData(initDatas); // 各个文件的初始化数据 --> store
  window.console.log("initDatas -->", initDatas);
}
