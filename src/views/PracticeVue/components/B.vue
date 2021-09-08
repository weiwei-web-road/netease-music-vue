<style lang="less" scoped>
div {
  background-color: rgb(107, 107, 221);
}
</style>
<template>
  <div>
    component B
    <div>{{ messageA }}</div>
    <button @click="emitToA">
      emitToA
    </button>
    <!-- 从组件A传递过来的data 和事件中，B组件通过props 获取了自身需要用的属性，
        然后向 C组件传递了$attr, $listeners
        本质是Vue内部封装了props，不用再手动 props和v-on事件了
        $attrs, $listeners 用于隔代组件之间传递数据 -->
    <C v-bind="$attrs" v-on="$listeners" />
    <!-- messageFromB 会以value的属性传递给D组件，并未会自动绑定v-on:input事件 -->
    <D v-model="messageFromB" />
    <button @click="changeChildVal">
      Change Child
    </button>
    <div>{{ parentB }}</div>
  </div>
</template>

<script>
import C from './C';
import D from './D';

export default {
    'components': {
        C,
        D
    },
    'inject': ['forProvide'],
    'props': ['messageA'],
    data() {
        return {
            'messageFromB': 'hello from B',
            'message': 'hello from parent B',
            'parentB': 'parent B'
        };
    },
    'methods': {
        emitToA() {
            // 通过this.$emit 触发父组件注册的事件监听。Vue 内置了 $emit 事件发射和监听机制
            // React 需要调用第三方库 EventEmitter3 来实现事件的发射与监听
            this.$emit('getB', 'emit val from B to A');
            console.log(this.forProvide, 'B for provide');
        },
        changeChildVal() {
            console.log(this.$children);
            this.$children[0].childC = 'changed child C';
            this.$children[1].childD = 'changed child D';
        }
    }
};
</script>
