<template>
  <div>
    <!-- 右侧属性面板的 预览按钮组件 -->
    <TButton @click="clickHandler">
      {{ modelValue }}
    </TButton>
  </div>
</template>

<script lang="ts" setup name="PrewButton">
import { getCurrentInstance } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
  },
  mContext: {
    type: Object,
  },
});
defineEmits(["update:modelValue"]);
const modelValue = props.modelValue;

const instance = getCurrentInstance();
const eventBus = instance?.appContext.config.globalProperties.Bus;

const getCurrentData = () => {
  return props.mContext;
};

const clickHandler = () => {
  // 发起 event bus 的事件，在全局中监听，按配置进行触发
  // console.log("props.mContext -->", props.mContext);
  const data = {
    name: "MCommonEvent",
    trigger: "click",
    type: props.mContext?.typeCode,
    data: getCurrentData(),
  };

  eventBus.emit(data.name, data);
};
</script>

<style lang="scss" scoped></style>
