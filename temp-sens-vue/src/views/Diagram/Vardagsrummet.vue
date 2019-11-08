<template>
    <div id="app">
        <v-flex xs6 align-center>
            <v-container >
        <canvas id="temp-chart"></canvas>
        </v-container>
        </v-flex>
    </div>
</template>

<script>
 export default {
     methods: {
       createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
           const myChart = new Chart(ctx, {
               type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        }
    },
    mounted() {
        this.createChart('temp-chart', this.tempChartData);
    }
}
</script>
