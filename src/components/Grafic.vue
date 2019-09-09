<script>
import VueCharts from "vue-chartjs";
import { Line } from "vue-chartjs";
import api2 from "../services/getHistorycalValues";

export default {
  extends: Line,
  props: {
    data: [],
    labels: []
  },
  mounted() {
    this.renderChart(
      {
        // labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        labels: [],
        datasets: [
          {
            label: "Valor dos ultimos 7 dias",
            backgroundColor: "#f87979",
            // data: [3.9, 3.88, 3.59, 3.99, 4.2, 4.1, 4.01]
            data: []
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
