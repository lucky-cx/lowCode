<template>
  <div>
    <!-- 中间属性面板区域的按钮渲染组件 -->
    <TButton>
      {{ modelValue }}
    </TButton>
  </div>
</template>

<script lang="ts">
export default {
  name: "MButon",
  props: {
    modelValue: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
};
</script>

<script lang="ts" setup>
//
// const data = {
//   name: "MCommonEvent",
//   trigger: "click",
//   type: "alert",
//   data: {},
// };
console.log("m_button -->");
</script>

<style lang="scss" scoped></style>
