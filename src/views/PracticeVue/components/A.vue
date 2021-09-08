<style lang="less" scoped>
div {
  background-color: red;
}
</style>
<template>
  <div>
    component A
    <div>{{ computedOriginalData }}</div>
    <div>{{ computedCreatedData }}</div>
    <div>{{ computedDep }}</div>
    <!-- 子组件通过v-on 绑定了一个事件来监听子组件的触发事件。当监听到子组件发射的事件后，就触发本组件定义的事件 -->
    <B
      :message-a="messageA"
      :message-to-c="messageToC"
      @getB="getB"
      @getC="getC"
    />
  </div>
</template>

<script>
import B from './B';

export default {
    'components': {
        B
    },
    'provide': {
        'forProvide': 'for provide'
    },
    data() {
        return {
            'messageA': 'message from A to B',
            'messageToC': 'message from A to C',
            'original': 'original data'
        };
    },
    'computed': {
        'computedOriginalData': function() {
            // console.log(this.original, '1');
            return this.original + 'computed';
        },
        'computedCreatedData': {
            'get': function() {
                // console.log(this.createdData, '2');
                return this.createdData + 'computed';
            },
            // setter 更改的是此计算属性的依赖，不可以更改此计算属性本身，会递归引起错误
            // 参数 newVal 是要被更改的值
            'set': function(newVal) {
                // console.log(newVal, '22')
                this.createdData = newVal;
            }
        },
        'computedDep': function() {
            // console.log(this.computedCreatedData, '3')
            return this.computedOriginalData + ' dep';
        }
    },
    'watch': {
        'original': function(newVal, oldVal) {
            console.log(newVal, oldVal, '11');
        },
        'createdData': function() {
            // console.log('22');
        },
        'computedDep': function() {
            // console.log('33');
        }
    },
    created() {
        this.createdData = 'created data';
        setTimeout(() => {
            console.log(0);
            this.original = 'change original';
            this.createdData = 'change created data';
            this.computedCreatedData = 'computedCreatedData';
            // console.log(this.computedCreatedData, 'time out')
        }, 1000);
    },
    'methods': {
        getB(param) {
            console.log(param, 'get B');
        },
        getC(param) {
            console.log(param, 'get C');
        }
    }
};
</script>
