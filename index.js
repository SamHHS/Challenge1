window.onload = function(){
        loadChart();
}

function loadChart(){
    var ctx = document.getElementById('waterUsage').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1st Quarter', '2nd Quarter', '3rd Quarter', '4th Quarter'],
        datasets: [{
            label: 'Water used',
            data: [1200, 1900, 800, 950],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
               'rgba(255, 99, 132, 0.2)',
               'rgba(255, 99, 132, 0.2)',
               'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

 var ctx = document.getElementById('fruitUsage').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12', '19', '3', '5', '2', '3'],
        datasets: [{
            label: 'Fruit consumed a day',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: 'rgba(255, 99, 132, 1)',
           
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    display:false
                }
            }]
        }
    }
});

     var ctx = document.getElementById('fruitSupply').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Apple', 'Banana', 'Pear', 'Orange', 'Melon', 'Grapefruit'],
        datasets: [{
            label: 'fruit in storage(KG)',
            data: [120, 190, 30, 50, 20, 30],
            backgroundColor: [
                '#ff0800',
                '#ffd429',
                '#d1e231',
                '#ffa500',
                '#fdbcb4',
                'fd5956'
            ],
             borderColor: 'rgba(0, 0, 0, 1)',
            segmentShowStroke : false,
            borderWidth: 2, 
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display:false
                }
            }]
        }
    }
});
}
    

