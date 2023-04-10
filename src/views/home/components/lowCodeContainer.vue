<template>
  <div class="low-code-box">
    <div class="node-material">
      <TButton type="button">
        default按钮
      </TButton>
    </div>
    <div class="node-container">
      布局区
    </div>
    <div class="node-config">
      属性区
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LowCodeContainer",
};
</script>

<script lang="ts" setup></script>

<style lang="scss">
.low-code-box {
  display: flex;
  border-top: 2px solid #f2f2f2;

  .node-material {
    width: 300px;
    height: 900px;
    background-color: #f2f2f2;
    padding: 10px;
  }

  .node-container {
    background-color: white;
    flex: 1;
    padding: 10px;
  }

  .node-config {
    width: 300px;
    height: 900px;
    background-color: #f2f2f2;
    padding: 10px;
  }
}
</style>
