// import Vue from "vue";

// /***
//  *
//  *  1、该文件需要注册，物料模型的 json 描述（是否可以换成 ts 文件返回 json 格式数据的形式）
//  *  2、处理 模型定义种，key-val 的关系（包含复杂数据格式的嵌套，如数组和对象）
//  *  3、将模型定义本身，放置到 store 中（之前是在全局挂载）
//  */

// // 注册所有物料属性参数与初始值
// registerComponentsSchema();

// // 获取所有自定义组件schema
// function registerComponentsSchema() {
//   const files = require.context("@/custom-components", true, /component.json$/);
//   const fields = {};
//   const initializing = [];

//   files.keys().forEach((key) => {
//     const [, name] = key.split("/");
//     const config = { component: name, ...files(key) };
//     console.log(config);

//     fields[name] = config.fields;
//     initializing.push(initDefaulValue(config));
//   });
//   Vue.prototype.$fields = fields;
//   Vue.prototype.$initializing = initializing;
// }

// // 初始化组件初始数据
// function initDefaulValue(config) {
//   const { component, name, icon, fields } = config;
//   const temp = { component, name, icon };
//   setDefaultValue(fields, temp);
//   return temp;
// }

// // 递归设置各层级初始数据
// function setDefaultValue(fields, initializing) {
//   for (const key in fields) {
//     const { type, value, child } = fields[key];
//     if (type == "object") {
//       initializing[key] = {};
//       child && setDefaultValue(fields[key].child, initializing[key]);
//     } else {
//       initializing[key] = value;
//     }
//   }
//   return initializing;
// }
