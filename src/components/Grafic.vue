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
            label: "Valor dos ultimos 7 dias",
            backgroundColor: "#f87979",
            data: this.dataValues
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
