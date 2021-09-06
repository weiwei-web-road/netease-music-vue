<style lang="less" scoped>
  .info-table {
    border-radius: 3px;
    background-color: #ffffff;
    padding: 30px;
    .info-table-border {
      border-top: solid 1px #e4e8eb;
      border-left: solid 1px #e4e8eb;
      .table-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // height: 36px;
        width: 100%;
        .name {
          font-size: 12px;
          color: #62738a;
        }
        .width-20 {
          width: 20%;
        }
        .width-30 {
          width: 30%;
        }
        .width-80 {
            width: 80%;
        }
        .content {
          font-size: 14px;
          color: #1c3755;
        }
        .common {
          border-bottom: solid 1px #e4e8eb;
          border-right: solid 1px #e4e8eb;
          text-align: left;

        }
        // .common-height {
        //   height: 36px;
        //   line-height: 36px;
        // }
        .left-padding {
            padding: 10px 0 10px 30px;
            // height: 16px;
          // line-height: 16px;
        }

        .common-line-height {
          height: 16px;
          // line-height: 16px;
        }
        // .vehicle-row {
        //   height: 64px;

        // }
      }
      .table-row:nth-child(even) {
        background-color: #f9fbfc;
      }
    }

  }
  .info-table-new {
    border-radius: 3px;
    background-color: #ffffff;
    padding: 30px;
    .info-table-border {
      border-top: solid 1px #e4e8eb;
      border-left: solid 1px #e4e8eb;
      .log-tr{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom: solid 1px #e4e8eb;
        align-items: stretch;
        .partWrap{
          width: 50%;
          display: flex;
          flex-flow: row nowrap;
          >div{
            border-right: solid 1px #e4e8eb;
            padding: 10px 30px;
            // word-break: break-all;
          }
        }
        .width100{
          width: 100%;
        }
        .flex1{
          flex: 1;
        }
        .td-left{
          width: 215px;
          min-width: 215px;
          text-align: left;
        }
        .td-right{
          flex: 1;
        }
      }
      .log-tr:nth-child(even){
        background-color: #f9fbfc;
      }
    }
  }
</style>

<template>
  <div>
    <div class="info-table">
      <div class="info-table-border">
        <div class="table-row">
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              DRIVER NAME
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              DRIVER ID
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
        </div>

        <div class="table-row">
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              CO-DRIVER NAME
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              CO-DRIVER ID
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
        </div>

        <div class="table-row">
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              CARRIER
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              SHIPPING DOCS
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
        </div>

        <div class="table-row">
          <div class="name common width-20 ">
            <div
              id="log-vehicle-row-name"
              class="left-padding log-vehicle-row-name"
            >
              VEHICLES
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding log-vehicle-row-content">
              <div
                v-for="(item, index) in startEndOdemeterList"
                :key="index"
                class="common-line-height"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="name common width-20 ">
            <div class="left-padding log-vehicle-row-name">
              TRAILERS
            </div>
          </div>
          <div class="content common width-30 ">
            <div class="left-padding log-trailer-row-content">
              <div
                v-for="(item, index) in trailerList"
                :key="index"
                class="common-line-height"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>

        <div class="table-row">
          <div class="name common width-20">
            <div class="left-padding">
              DISTANCE
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding">
              Jeremy Android
            </div>
          </div>
          <div class="name common width-20">
            <div class="left-padding">
              START-END ODOMETER
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding">
              Jeremy Android
            </div>
          </div>
        </div>

        <div class="table-row">
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              MAIN OFFICE
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              HOME TERMINAL
            </div>
          </div>
          <div class="content common width-30">
            <div class="left-padding common-line-height">
              Jeremy Android
            </div>
          </div>
        </div>

        <div class="table-row">
          <div class="name common width-20">
            <div class="left-padding common-line-height">
              EXCEPTIONS
            </div>
          </div>
          <div class="content common width-80">
            <div class="left-padding common-line-height">
              EXCEPTIONS
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="info-table-new">
      <div class="info-table-border">
        <div class="log-tr">
          <div class="partWrap">
            <div class="td-left">
              DRIVER NAME
            </div>
            <div class="td-right">
              {{ driverName || '——' }}
            </div>
          </div>
          <div class="partWrap">
            <div class="td-left">
              DRIVER ID
            </div>
            <div class="td-right">
              {{ driverIDEmail || '——' }}
            </div>
          </div>
        </div>

        <div class="log-tr">
          <div class="partWrap">
            <div class="td-left">
              CO-DRIVER NAME
            </div>
            <div class="td-right">
              <div v-if="vehicleCoDriverList.length === 0">
                ——
              </div>
              <div v-if="vehicleCoDriverList.length !== 0">
                <div
                  v-for="item in vehicleCoDriverList"
                  :key="item"
                >
                  {{ item.coDriverName }}
                </div>
              </div>
            </div>
          </div>
          <div class="partWrap">
            <div class="td-left">
              CO-DRIVER ID
            </div>
            <div class="td-right">
              <div v-if="vehicleCoDriverList.length === 0">
                ——
              </div>
              <div v-if="vehicleCoDriverList.length !== 0">
                <div
                  v-for="item in vehicleCoDriverList"
                  :key="item"
                >
                  {{ item.email }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="log-tr">
          <div class="partWrap">
            <div class="td-left">
              CARRIER
            </div>
            <div class="td-right">
              {{ data.carrier || '——' }}
            </div>
          </div>
          <div class="partWrap">
            <div class="td-left">
              SHIPPING DOCS
            </div>
            <div class="td-right">
              {{ shippingDocs || '——' }}
            </div>
          </div>
        </div>

        <div class="log-tr">
          <div class="partWrap">
            <div class="td-left">
              VEHICLES
            </div>
            <div class="td-right">
              <div
                v-for="(item,index) in data.vehicle"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="partWrap">
            <div class="td-left">
              TRAILERS
            </div>
            <div class="td-right">
              <div
                v-for="item in data.trailer"
                :key="item"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>

        <div class="log-tr">
          <div class="partWrap">
            <div class="td-left">
              DISTANCE
            </div>
            <div class="td-right">
              {{ distance || '——' }}
            </div>
          </div>
          <div class="partWrap">
            <div class="td-left">
              START-END ODOMETER
            </div>
            <div class="td-right">
              <div v-if="startEndOdemeterList.length === 0">
                ——
              </div>
              <div v-if="startEndOdemeterList.length !== 0">
                <div
                  v-for="item in startEndOdemeterList"
                  :key="item"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="log-tr">
          <div class="partWrap">
            <div class="td-left">
              MAIN OFFICE
            </div>
            <div class="td-right">
              {{ data.mainOffice || '——' }}
            </div>
          </div>
          <div class="partWrap">
            <div class="td-left">
              HOME TERMINAL
            </div>
            <div class="td-right">
              {{ homeTerminalFromUserPreference || '——' }}
            </div>
          </div>
        </div>

        <div class="log-tr">
          <div class="partWrap width100">
            <div class="td-left">
              EXCEPTIONS
            </div>
            <div class="flex1">
              <span
                v-for="item in exceptionsDescArr"
                :key="item"
              >{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="other">
      <div>{{ trailerPaddingTop }}</div>
      <div>{{ vehiclePaddingTop }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Temp',
  data () {
    return {
      startEndOdemeterList: ['fef', 'fefef', 'fefef', 'fdfdsf'],
      trailerList: ['fef', 'fefef', 'fefef', 'fdfdsf', 'fggeg', 'fgsf']

    }
  },
  mounted () {
    if (this.startEndOdemeterList.length > 1 || this.trailerList.length > 1) {
      const vehicleHeight = this.startEndOdemeterList.length * 16
      const trailerHeight = this.trailerList.length * 16
      let height = ''
      let vehiclePaddingTop = ''
      let trailerPaddingTop = ''

      if (vehicleHeight > trailerHeight) {
        height = vehicleHeight + 'px'
        trailerPaddingTop = (vehicleHeight - trailerHeight) / 2 + 10 + 'px'
      } else {
        height = trailerHeight + 'px'
        vehiclePaddingTop = (trailerHeight - vehicleHeight) / 2 + 10 + 'px'
      }

      const domList = document.getElementsByClassName('log-vehicle-row-name')

      for (let i = 0; i < domList.length; i++) {
        domList[i].style.height = height
        domList[i].style.lineHeight = height
      }

      const contentDomList = document.getElementsByClassName('log-vehicle-row-content')

      for (let i = 0; i < contentDomList.length; i++) {
        contentDomList[i].style.height = height
        // contentDomList[i].style.lineHeight = height;
        // if (vehiclePaddingTop) {
        //   contentDomList[i].style.paddingTop = vehiclePaddingTop;
        // }
      }

      const trailerContentDomList = document.getElementsByClassName('log-trailer-row-content')

      for (let i = 0; i < trailerContentDomList.length; i++) {
        trailerContentDomList[i].style.height = height
        // contentDomList[i].style.lineHeight = height;
        // if (trailerPaddingTop) {
        //   trailerContentDomList[i].style.paddingTop = trailerPaddingTop;
        // }
      }
    }
  }
}
</script>
