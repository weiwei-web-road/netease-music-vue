<style lang="less" scoped>
.lig-color {
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    color: #fff;
    background-color: #1688ca;
    border-color: #1688ca;
    -webkit-box-shadow: -1px 0 0 0 #1688ca;
    box-shadow: -1px 0 0 0 #1688ca;
  }
  .el-radio-button .el-radio-button__inner {
    font-weight: 100;
    display: flex;
    width: 81px;
    height: 36px;
    align-items: center;
  }
  .el-radio-button__inner:hover {
    color: #1688ca;
  }
}
</style>

<template>
  <el-radio-group v-model="typeSummary" class="lig-color right" size="medium">
    <el-radio-button label="Vehicle" />
    <el-radio-button label="Driver" />
  </el-radio-group>
</template>

<script>
export default {
  name: "RadioSelect",
  data() {
    return {
      typeSummary: "Vehicle",
    };
  },
};
</script>
