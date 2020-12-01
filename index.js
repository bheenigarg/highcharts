document.addEventListener('DOMContentLoaded', () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Iris Dataset'
        },
        xAxis: {
            title: {
                text: 'Species'
            }
        },
        yAxis: {
            title: {
                text: 'Length/Width'
            }
        }

    };

    $.get('test.csv', csv => {
        options.data = {
            csv
        };

        Highcharts.chart('container', options);
        });
});