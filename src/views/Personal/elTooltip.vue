<style lang="less" scoped>
.el-tooltip__popper.fleet-manager-role-tooltip {
    // width: 128px;
    padding: 11px 22px;
    background-color: rgb(34, 55, 83);
    border-radius: 2px;
    &.is-dark {
        background-color: rgb(34, 55, 83);
        border-radius: 2px;
    }
    .admin-content-tooltip {
        font-family: OpenSans;
        font-size: 12px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
    }
    .admin-content-tooltip + .admin-content-tooltip {
        margin-top: 6px;
    }
}
</style>

<template>
  <el-tooltip
    class="item"
    effect="dark"
    placement="right"
    popper-class="fleet-manager-role-tooltip"
  >
    <div slot="content">
      <div class="admin-content-tooltip">
        A Fleet Manager<br>
      </div>
    </div>
    <el-button />
  </el-tooltip>
</template>

<script>
export default {
  name: 'ElTooltipHover',
  data () {
    return {

    }
  }
}
</script>
