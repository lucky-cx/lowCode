import { useLocalStorage } from "@vueuse/core";
import { createApp } from "vue";
// Vue Router
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import TDesign from "tdesign-vue-next";
import draggable from "vuedraggable";
import mitt from "mitt";
import { router } from "./router";

import { registerStore } from "./store";
import { initCommonEvent } from "./commonEvent/eventActuator";
import App from "~/App.vue";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/styles/main.css";
import { registerGloalComponent } from "~/utils/registerCompent";
import { registerComponentsSchema } from "~/utils/registerMaterialModel";
import "uno.css";

// 引入组件库全局样式资源
import "tdesign-vue-next/es/style/index.css";

// 引入全局事件模型

const app = createApp(App);

app.use(TDesign);

const messages = Object.fromEntries(
  Object.entries(import.meta.glob<{ default: any }>("./locales/*.json", { eager: true })).map(
    ([key, value]) => {
      return [key.slice(10, -5), value.default];
    },
  ),
);
app.use(
  createI18n({
    legacy: false,
    locale: unref(useLocalStorage("locale", "zh-CN")),
    messages,
  }),
);
app.use(createPinia());
registerStore();
app.use(router);

// 注册全局组件
registerGloalComponent(app);
// 注册物料节点
registerComponentsSchema();

app.component("Draggable", draggable);
const Evenbus = mitt();
app.config.globalProperties.Bus = Evenbus;
initCommonEvent(Evenbus);

app.mount("#app");
