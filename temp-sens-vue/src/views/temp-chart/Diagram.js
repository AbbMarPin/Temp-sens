export const tempChart = {
    type: 'line',
    data: {
        labels: ['Vardagsrummet', 'Klassrummet'],
        datasets: [
            { // one line graph
                label: 'Temperatur',
                data: [23, 22, 19],
                backgroundColor: [
                    'rgba(54,73,93,.5',
                    'rgba(54,73,93,.5', // blue
                    'rgba(54,73,93,.5'
                ],
                borderColor: [
                    '#36495d',
                    '#36495d',
                    '#36495d',
                ],
                borderWidth: 3
                    
            },
            {
                label: 'Tid',
                data: [01, 02, 03], 
                backgroundColor: [
                    'rgba(71, 183,132,.5)', // green
                  ],
                  borderColor: [
                    '#47b784',
                  ],
                  borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
}
export default tempChart;