<template>
  <div>
    component C
    {{ $attrs.messageToC }}
    <button @click="emitToA">
      emitToA
    </button>
    <div>{{ childC }}</div>
    <button @click="changeParentB">
      changeParentB
    </button>
  </div>
</template>

<script>
export default {
    'inject': ['forProvide'],
    data() {
        return {
            'childC': 'child C'
        };
    },
    'methods': {
        emitToA() {
            // 可以通过this.$attrs 获取到A组件经由B组件传递过来的数据
            // console.log(this.$attrs, '$attrs')
            this.$emit('getC', 'emit value from C to A');
            console.log(this.forProvide, 'C for provide');
        },
        changeParentB() {
            console.log(this.$parent);
            this.$parent.parentB = 'changed parent B';
        }
    }
};
</script>
