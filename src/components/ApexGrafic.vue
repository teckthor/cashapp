<template>
    <div id="chart">
      <apexchart type=line height=400 :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import store from '../../store/index'
    
export default {
      components: {
        apexchart: VueApexCharts,
      },
      data() {
          return{
        series: [{
          name: `Valor do dia`,
          data: store.state.lastWeekValues
        }],
        chartOptions: {
          chart: {
            type: 'line',
            shadow: {
              enabled: true,
              color: '#bbb',
              top: 3,
              left: 2,
              blur: 3,
              opacity: 1
            },
          },
          stroke: {
            width: 7,
            curve: 'smooth'
          },

          xaxis: {
            // type: 'datetime',
            categories: store.state.days
          },
          title: {
            text: 'Valores dos ultimos 7 dias',
            align: 'center',
            style: {
              fontSize: "16px",
              color: '#666'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: ['#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          markers: {
            size: 4,
            opacity: 0.9,
            colors: ["#FFA41B"],
            strokeColor: "#fff",
            strokeWidth: 2,
             
            hover: {
              size: 7,
            }
          },
          yaxis: { 
            min: Math.min.apply(null, store.state.lastWeekValues ),
            max: Math.max.apply(null, store.state.lastWeekValues ),
            // title: {
            //   text: 'Valores',
            //   style: {
            //   fontSize: "16px",
            //   color: '#666'
            // }
            // },
          }
        }
      }
    },
    
}

</script>