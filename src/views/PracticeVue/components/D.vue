<template>
  <div>
    component D
    <input v-model="message" type="text" @change="changeVal" />
    <div v-for="item in childD" :key="item">
      {{ item }}
    </div>
    <div>{{ obj.name }}</div>
  </div>
</template>

<script>
export default {
    'props': {
        'value': String // 判断value 类型
    },
    data() {
        return {
            'childD': ['a', 'b', 'c', 'd'],
            'obj': {
                'name': 'lily',
                'age': 123
            },
            'message': this.value // v-model 自动传递的字段为value的props属性
        };
    },
    mounted() {
        setTimeout(() => {
            this.deleteArr();
        }, 3000);
    },
    'methods': {
        changeVal() {
            this.$emit('input', this.message); // emit input 事件，改变父组件v-model绑定的值
        },
        deleteArr() {
            // this.childD.splice(0, 1);  // Vue 内部拦截重写了 splice 方法，使splice方法变为响应式的，和this.$delete 一样的效果
            // this.$delete(this.childD, 0); // 元素被完全删除，length 改变，键值也改变
            // delete this.childD[0];  // 被删除的元素变为 empty/undefined，length 不变，键值也不变
            // console.log(this.childD, this.childD.length);
            // delete this.obj.name; // 可以删除对象的属性，但是不会响应式的更新页面
            // this.$delete(this.obj, 'name');  // 可以删除对象的属性，并且响应式的更新页面
            // console.log(this.obj);
        }
    }
};
</script>
