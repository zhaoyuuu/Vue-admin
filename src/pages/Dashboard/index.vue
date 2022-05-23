<template>
  <div class='container' ref="container">
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
  import * as echarts from 'echarts';
  //引入路由函数  **vue3中接收数据**
  import { useRoute } from "vue-router";
  import PubSub from "pubsub-js";
  // import { nextTick, onMounted, onUnmounted } from '@vue/runtime-core';

  export default {
    name:'Dashboard',
    setup(){
      const route = useRoute();
      let container = ref(null)

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
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['2018', '2019', '2020', '2021', '2022']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: [
                'January',
                'March',
                'April',
                'June',
                'August',
                'September',
                'November'
              ]
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '2018',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [320, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '2019',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '2020',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '2021',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '2022',
              type: 'line',
              stack: 'Total',
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
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
          myChart1.setOption({
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
          color: ['#e44c27', '#cc6699', '#41b883'],
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 20, name: 'html' },
                { value: 30, name: 'scss' },
                { value: 50, name: 'vue' }
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
          xAxis: {
            data: ['2020-10-24', '2020-10-25', '2021-10-26', '2021-10-27']
          },
          yAxis: {},
          series: [
            {
              type: 'candlestick',
              data: [
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42]
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
        window.addEventListener('resize', antiShake(myChart1.resize, 300))
        window.addEventListener('resize', antiShake(myChart2.resize, 300))
        window.addEventListener('resize', antiShake(myChart3.resize, 300))
        window.addEventListener('resize', antiShake(myChart4.resize, 300))
        
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
        cardData,
        container
      }
    }
  }
      
</script>
  
<style scoped lang='scss'>
  .container{
    // padding-top: 20px;
    // padding-left: 30px;
    // padding-bottom: 30px;
    // background-color: #eff1f4;
    #lineChart{
      margin-top: 20px;
      width: 95%;
      height: 350px;
      background-color: #ffffff;
    }
    .smallChartsBox,
    .cardBox{
      width: 95%;
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