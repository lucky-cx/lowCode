<template>
  <div>
    <TImage :src="modelValue" v-bind="$attrs" :style="styles" />
  </div>
</template>

<script lang="ts">
export default {
  name: "MIMAGE",
  props: {
    modelValue: {
      type: String,
    },
    styles: {
      type: Object,
      defaultValue: {
        width: "100px",
        height: "100px",
      },
    },
  },
  emits: ["update:modelValue"],
};
</script>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped></style>
