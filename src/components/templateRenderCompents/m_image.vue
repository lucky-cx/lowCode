<template>
  <div>
    <TImage :src="value" v-bind="$attrs" :style="styles" />
  </div>
</template>

<script lang="ts">
export default {
  name: "MIMAGE",
  props: {
    value: {
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
};
</script>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped></style>
