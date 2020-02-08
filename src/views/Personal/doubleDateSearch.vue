<style lang="less" scoped>
.searchDate{
    input::-webkit-input-placeholder{
        color:#4c5c6a;
    }
    input::-moz-placeholder{   
        color:#4c5c6a;
    }
    input:-moz-placeholder{    
        color:#4c5c6a;
    }
    input:-ms-input-placeholder{  
        color:#4c5c6a;
    }
    .data-con{
        cursor: pointer;
        div{
            width:100%;
        }
        
        .el-input__inner{
            border-radius:2px;
            border:1px solid #e4e8eb;
            padding-left:10px;
            padding-right:0;
            width:100%;
            height:36px;
            line-height: 36px;
        }
        .el-input__prefix{
            left:100%;
        }
        .el-input__icon{
            line-height: 36px;
            position: absolute;
            right: 5px;
        }
        .el-icon-date:before{
            font-size:18px;
        }
    }
    
}
.doublDate{
    .el-date-editor .el-range-separator{
        display:flex;
        // margin-left:12px;
        align-items: center;
    }
    .el-date-editor .el-range-input{
        width:39%;
    }
}
.el-picker-panel{
    .el-picker-panel__body-wrapper{
        .el-picker-panel__sidebar{
            width:120px;
        }
    }
}
.doublDateInit{
    .el-date-editor .el-range-separator{
        display:none;
        // margin-left:0px;
        // background-color: red;
    }
    .el-date-editor .el-range-input:first-of-type{
        width:60%;
        // background-color:red;
    }
     
}
</style>
<template>
    <div class='searchDate doublDate'>
        <div class='data-con'>
            <el-date-picker :start-placeholder="initMsg" format="MMM d, yyyy"
            v-model="value"
            type='daterange'
            unlink-panels
            :picker-options="pickerOptions0"
            @change='getChange'
            :clearable='false'
            >
            </el-date-picker>
        </div>
    </div>
</template>
<script type="text/javascript">
import moment from 'moment';

  export default {
    name: 'limitDoubleDateSearch',
    components: {

    },
    props:['initMsg', 'getData'],
    data () {
        return {
            value:'',
            pickerOptions0:{
                disabledDate(time) {
                    return time.getTime() > Date.now() || time.getTime() <= new Date(Date.now() - 30*24*3600*1000);

                },
            }
        }
    },
    mounted() {
        this.dataInit();
    },
    created() {

    },
    methods:{
        dataInit(){
            let date = new Date();
            let temp = new Date(date - 6*24*3600*1000);
            let form = moment(date).format().split('T')[0];
            let endTime = moment( temp).format().split('T')[0];
            this.value = [endTime,form];
        },
        getChange(value) {
            if(value){
                // $('.searchDate').removeClass('doublDateInit').addClass('doublDate');
                let temp = [];
                value.forEach(element => {
                    temp.push(moment(element).format().split('T')[0]);
                });
                this.getData(temp);

            }else{
                // $('.searchDate').removeClass('doublDate').addClass('doublDateInit');
                this.getData(value);
            }  
        },
    } 
 }
</script>
