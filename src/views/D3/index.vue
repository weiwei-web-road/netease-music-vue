<style lang="less">
  .line-chart {
    font: 10px sans-serif;
  }

  .axis path,
  .axis line {
    fill: none;
    stroke: #000;
    shape-rendering: crispEdges;
  }

  .line {
    fill: none;
    // stroke: steelblue;
    stroke: red;

    stroke-width: 1.5px;
  }

  h1 {
    color: red;
  }
  // zoom in out
.white-popup {

    position: relative;

    background: #FFF;

    padding: 10px 20px;

    width: auto;

    max-width: 100%;

    margin: 0 auto;

}
</style>

<template lang="html">
  <div
    id="d3-container"
    @click="zoomOutSvg()"
  >
    专业D3工程师
  </div>
</template>

<script>
import LineChart from './LineChart'
// import * as magnificPopup from 'magnific-popup';
// import $ from 'jquery'

export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.run()
  },
  methods: {
    zoomOutSvg () {
      // let gridChartWrapper = $('#d3-container')

      // $.magnificPopup.open({
      //   items: {
      //     src: gridChartWrapper,
      //     type: 'inline'
      //   },
      //   type: 'image',
      //   tClose: 'Close (Esc)',
      //   closeBtnInside: true,
      //   closeOnBgClick: true,
      //   closeOnContentClick: true,
      //   enableEscapeKey: true,
      //   callbacks: {
      //     open: function () {
      //       const mfpClose = $('.mfp-close')

      //       // Will fire when this exact popup is opened
      //       // this - is Magnific Popup object
      //       gridChartWrapper.addClass('white-popup')
      //       mfpClose.appendTo('.mfp-content')
      //       gridChartWrapper.css({
      //         cursor: 'zoom-out'
      //       })
      //     },
      //     close: function () {
      //       gridChartWrapper.removeClass('white-popup')
      //       gridChartWrapper.removeClass('mfp-hide')
      //       gridChartWrapper.prop('style', false)

      //       // Clear the cache
      //       gridChartWrapper = null
      //     }
      //   }
      // })
    },
    run () {
      const initData = [
        { month: 0, value: 5 },
        { month: 1, value: 5 },
        { month: 2, value: 5 },
        { month: 3, value: 5 },
        { month: 4, value: 5 },
        { month: 5, value: 5 },
        { month: 6, value: 5 },
        { month: 7, value: 5 },
        { month: 8, value: 5 },
        { month: 9, value: 5 },
        { month: 10, value: 5 },
        { month: 11, value: 5 },
        { month: 12, value: 5 }
      ]
      const data = [
        { month: 0, value: 2 },
        { month: 1, value: 4 },
        { month: 2, value: 5 },
        { month: 3, value: 6 },
        { month: 4, value: 6 },
        { month: 5, value: 9 },
        { month: 6, value: 6 },
        { month: 7, value: 4 },
        { month: 8, value: 3 },
        { month: 9, value: 0 },
        { month: 10, value: 4 },
        { month: 11, value: 6 },
        { month: 12, value: 3 }
      ]

      const lineChart = new LineChart({
        width: 700,
        height: 400,
        margin: { top: 20, right: 30, bottom: 20, left: 30 },
        initData,
        data,
        xPath: 'month',
        yPath: 'value',
        constainer: '#d3-container'
      })

      setTimeout(() => {
        data[5].value = 6
        data[9].value = 2

        lineChart.render()
      }, 1000)
    }
  }
}
</script>
