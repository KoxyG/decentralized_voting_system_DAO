// Get the canvas element

//LINE CHART
var ctx1 = document.getElementById("myChart1").getContext("2d");
Chart.defaults.color = 'white';         
Chart.defaults.font.size = 12;

var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['PDP', 'APC', 'WYC', 'KPP'],
        datasets: [{
            label: 'Vote Chart',
            data: [30, 50, 5, 15],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(254, 105, 56)'
            ],
            hoverOffset: 4
            
        }]
    },
    options: {
        responsive: true
    }
});


            
//DOUGHNUT CHART
            var ctx = document.getElementById('myChart').getContext('2d');

            // Define the data for the chart
            var data = {
                labels: ['PDP', 'APC', 'WYC', 'KPP'],
                datasets: [{
                    label: 'Vote Percentage',
                    data: [30, 50, 5, 15],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(254, 105, 56)'
                    ],
                    hoverOffset: 4
                }]
            };

            // Create the chart
            Chart.defaults.color = 'white';
            
            Chart.defaults.font.size = 12;
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true,
                    Option: {
                        layout: {
            
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Result'
                        }
                        
                    }
                }
            });