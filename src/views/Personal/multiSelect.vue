<style lang="less" scoped rel="stylesheet/less">
.personal-study {
  width: 100%;
  // padding: 16px;
  > .body {
    > .box-card {
      width: 480px;
      .clearfix {
        text-align: left;
      }
      .item-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .item-unit {
          width: 33.33%;
          text-align: left;
          margin: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div class="personal-study">
    <div class="body">
      <el-card class="box-card">
        <template v-slot:header class="clearfix">
          <span>checkbox click multi selected</span>
          <el-button style="float: right; padding: 3px 0" type="text">
            操作按钮
          </el-button>
        </template>
        <el-checkbox-group v-model="checkList">
          <div
            v-for="item in formData"
            :key="item.join(',')"
            :data-data="item.join(',')"
            class="item-row"
            @click="click"
          >
            <div v-for="subItem in item" :key="subItem" class="item-unit">
              <el-checkbox :label="subItem" />
            </div>
          </div>
        </el-checkbox-group>
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
    'name': 'MultiSelect',
    data() {
        return {
            'checkList': [],
            'data': [
                '西瓜',
                '苹果',
                '栗子',
                '李子',
                '桃子',
                '梨',
                '西红柿',
                '甜瓜',
                '樱桃',
                '荔枝',
                '长工'
            ]
        };
    },
    'computed': {
        'formData': function() {
            return this.data.reduce((prev, curr, index) => {
                if (index % 3 === 0) {
                    prev.push([curr]);
                } else {
                    const target = prev.pop();

                    target.push(curr);
                    prev.push(target);
                }
                return prev;
            }, []);
        }
    },
    mounted() {
        console.log('empty function');
    },
    'methods': {
        click(e) {
            if (
                e.target &&
        (e.target.className === 'item-row' ||
          e.target.className === 'item-unit')
            ) {
                const data = (e.target.className === 'item-unit' ?
                    e.target.parentNode :
                    e.target
                ).dataset.data.split(',');

                this.checkList = data.reduce((prev, curr) => {
                    if (curr && curr.length > 0 && prev.indexOf(curr) === -1) {
                        prev.push(curr);
                    }
                    return prev;
                }, this.checkList);
            }
        }
    }
};
</script>
