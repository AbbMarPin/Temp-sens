<template>
    <div id="app">
        <canvas id="temp-chart"></canvas>
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
