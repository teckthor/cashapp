<script>
import VueCharts from "vue-chartjs";
import { Line } from "vue-chartjs";
import api2 from "../services/getHistorycalValues";
import store from '../../store/index'

export default {
  store,
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: this.daysValues,
        datasets: [
          {
            label: "Valores dos ultimos 7 dias",
            backgroundColor: "#f87979",
            data: this.dataValues,
            fill: false,
            borderColor: "#f87979",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            pointBorderColor: "#f87979",
            // pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(220,220,220,1)",
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
  computed: {
    dataValues () {
      return store.state.lastWeekValues
    },
    daysValues () {
      return store.state.days
    }
  }
}
</script>
