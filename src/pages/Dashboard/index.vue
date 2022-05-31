<template>
  <div class='container' ref="container">
    <h1>Dashboard</h1>
    <ul class="cardBox">
      <li class="card" v-for="(card,index) in cardData" :key="index">
        <span class="iconBox">
          <span :class="card.iconClass"></span>
        </span>
        <span class="cardText">{{card.text}}</span>
        <span class="cardNum">{{card.num}}</span>
      </li>
    </ul>
    <div id="lineChart"></div>
    <div class="smallChartsBox">
      <span class="smallChart"></span>
      <span class="smallChart"></span>
      <span class="smallChart"></span>
    </div>
  </div>
</template>
  
<script>
  import {reactive,ref,onMounted, onBeforeUnmount} from 'vue'
  // import * as echarts from 'echarts';
  //引入路由函数  **vue3中接收数据**
  import { useRoute } from "vue-router";
  import PubSub from "pubsub-js";

  export default {
    name:'Dashboard',
    setup(){
      const route = useRoute();
      const container = ref(null) // 拿到container节点

      // card数据
      const cardData = reactive([
        {
          iconClass: 'iconfont icon-visitor',
          text: 'New Visits',
          num: 121190
        },
        {
          iconClass: 'iconfont icon-liaotian',
          text: 'Messages',
          num: 81881
        },
        {
          iconClass: 'iconfont icon-rmb',
          text: 'Money',
          num: 30675428
        },
        {
          iconClass: 'iconfont icon-shopping-cart-fill',
          text: 'Shoppings',
          num: 13600
        },
      ])

      let tab = route.query.tabName
      PubSub.publish('getTab',tab)

      let myChart1 = undefined
      let myChart2 = undefined
      let myChart3 = undefined
      let myChart4 = undefined
      // 基于准备好的dom，初始化echarts实例
      onMounted(()=>{
        // console.log('我来啦');
        // 折线图
        //#region 
        let chartDom1 = document.querySelector('#lineChart');
        myChart1 = echarts.init(chartDom1);
        let option1;
        option1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series'
      },
      markLine: {
        lineStyle: {
          type: 'dashed'
        },
        data: [[{ type: 'min' }, { type: 'max' }]]
      }
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120]
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 290, 230, 220]
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [60, 72, 71, 74, 190, 130, 110]
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [62, 82, 91, 84, 109, 110, 120]
    }
  ]
};

        option1 && myChart1.setOption(option1);
        //#endregion

        // 仪表盘
        //#region   
        let chartDom2 = document.querySelectorAll('.smallChart')[0];
        myChart2 = echarts.init(chartDom2);
        let option2;
        option2 = {
          series: [
            {
              type: 'gauge',
              center: ['50%', '60%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 60,
              splitNumber: 12,
              itemStyle: {
                color: '#FFAB91'
              },
              progress: {
                show: true,
                width: 30
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 30
                }
              },
              axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 18
              },
              anchor: {
                show: false
              },
              title: {
                show: false
              },
              detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 40,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'inherit'
              },
              data: [
                {
                  value: 20
                }
              ]
            },
            {
              type: 'gauge',
              center: ['50%', '60%'],
              startAngle: 200,
              endAngle: -20,
              min: 0,
              max: 60,
              itemStyle: {
                color: '#FD7347'
              },
              progress: {
                show: true,
                width: 8
              },
              pointer: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              detail: {
                show: false
              },
              data: [
                {
                  value: 20
                }
              ]
            }
          ]
        };
        setInterval(function () {
          const random = +(Math.random() * 60).toFixed(2);
          myChart2.setOption({
            series: [
              {
                data: [
                  {
                    value: random
                  }
                ]
              },
              {
                data: [
                  {
                    value: random
                  }
                ]
              }
            ]
          });
        }, 2000);
        
        option2 && myChart2.setOption(option2);
        //#endregion

        // 圆饼图
        //#region 
        let chartDom3 = document.querySelectorAll('.smallChart')[1];
        myChart3 = echarts.init(chartDom3);
        let option3;
        option3 = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'vue' },
        { value: 38, name: 'element-ui' },
        { value: 32, name: 'scss' },
        { value: 30, name: 'echarts' },
        { value: 28, name: 'iconfont' },
        { value: 26, name: 'mockjs' },
        { value: 22, name: 'es6' },
        { value: 18, name: 'html' }
      ]
    }
  ]
};
        option3 && myChart3.setOption(option3);
        //#endregion

        // K线图
        //#region 
        let chartDom4 = document.querySelectorAll('.smallChart')[2];
        myChart4 = echarts.init(chartDom4);
        let option4;
        option4 = {
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};
        
        option4 && myChart4.setOption(option4);
        //#endregion

        // 图像大小自适应
        /**
         * 防抖
         * @param {*} event 
         * @param {*} wait 
         */
        function antiShake(event, wait){
          let timer
          return function(){
            if(timer){
              clearTimeout(timer)
            }
            timer = setTimeout(() => {
              event()
            }, wait);
          }
        }
        // 监听元素大小变化
        const elementResizeDetectorMaker = require("element-resize-detector");
        const erd = elementResizeDetectorMaker()
        erd.listenTo(container.value, antiShake(myChart1.resize, 300) )
        erd.listenTo(container.value, antiShake(myChart2.resize, 300) )
        erd.listenTo(container.value, antiShake(myChart3.resize, 300) )
        erd.listenTo(container.value, antiShake(myChart4.resize, 300) )
        
      })

      // 在组件销毁时释放echarts
      onBeforeUnmount(()=>{
        // console.log('我要走啦');
        myChart1.clear()
        myChart1.dispose()
        myChart2.clear()
        myChart2.dispose()
        myChart3.clear()
        myChart3.dispose()
        myChart4.clear()
        myChart4.dispose()
      })
      

      return {
        cardData, container
      }
    }
  }
      
</script>
  
<style scoped lang='scss'>
  .container{
    h1 {
      color: $h1Color;
      font-size: 30px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    #lineChart{
      margin-top: 20px;
      width: 95%;
      height: 500px;
      background-color: #ffffff;
    }
    .smallChartsBox,
    .cardBox{
      width: 95%;
      padding-top: 20px;
      margin: 0 inherit;
      // padding-top: 20px;
      // 三小块flex布局
      display: flex;
      justify-content: space-between;
      .smallChart,
      .card{
        flex: 0 1 inherit;
        display: inline-block;
        width: 32%;
        background-color: #ffffff;
      }
      .smallChart{
        height: 280px;
      }
      .card:hover{
        cursor: pointer;
      }
      // 卡片颜色变化交互效果
      $firstCardColor: #40c9c6;
      $secondCardColor: #36a3f7;
      $thirdCardColor: #f4516c;
      $fourthCardColor: #34bfa3;
      .card:first-child:hover {
        .iconBox{
          background-color: $firstCardColor;
        }
        .iconfont{
          color: #fff;
        }
      }
      .card:nth-child(2):hover{
        .iconBox{
          background-color: $secondCardColor;
        }
        .iconfont{
          color: #fff;
        }
      } 
      .card:nth-child(3):hover{
        .iconBox{
          background-color: $thirdCardColor;
        }
        .iconfont{
          color: #fff;
        }
      }
      .card:nth-child(4):hover{
        .iconBox{
          background-color: $fourthCardColor;
        }
        .iconfont{
          color: #fff;
        }
      }
      .card{
        position: relative;
        width: 22%;
        height: 108px;
        .iconBox{
          display: inline-block;
          width: 80px;height: 80px;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 10px;
          margin-top: 10px;
          margin-left: 10px;
          transition: all .4s;
          .iconfont{
            font-size: 60px;
          }
          .icon-visitor{
            color: $firstCardColor;
          }
          .icon-liaotian{
            color: $secondCardColor;
          }
          .icon-rmb{
            color: $thirdCardColor;
          }
          .icon-shopping-cart-fill{
            color: $fourthCardColor;
          }
        }
        .cardText{
          position: absolute;
          right: 20px;
          top: 25px;
          color: #8c8c8c;
          font-weight: 700;
        }
        .cardNum{
          position: absolute;
          right: 15px;
          top: 60px;
          font-size: 22px;
          color: #666666;
          font-weight: 700;
        }

      }
    }
  }
</style>