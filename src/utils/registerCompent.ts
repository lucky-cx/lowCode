// 注册自定的组件，有2种，一是中间画布渲染的组件（暂时不做），二是属性区属性渲染对应的组件

import type { App, Component } from "vue";

// 注册所有全局组件,主要是一些统一的渲染模板，比如物料节点

// register(require.context("~/components/templateRenderCompents", true, /.vue/));
const templateCompents: Record<string, Component> = import.meta.glob("~/components/templateRenderCompents/*.vue", { import: "default", eager: true });

// 注册所有属性，对应组件
// register(require.context("~/components/materialConfigCompent", true, /.vue/));
const configCompents: Record<string, Component> = import.meta.glob("~/components/materialConfigCompent/*.vue", { import: "default", eager: true });

function register(app: App<Element>, components: Record<string, Component>): void {
  for (const path in components) {
    const componentName = components[path].name;
    if (componentName) {
      app.component(componentName, components[path]);
    }
  }
}

export function registerGloalComponent(app: App<Element>): void {
  // window.console.log("templateCompents -->", templateCompents);
  // window.console.log("configCompents -->", configCompents);
  register(app, templateCompents);
  register(app, configCompents);
}
