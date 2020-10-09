demo = {
  initPickColor: function () {
    $('.pick-class-label').click(function () {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },


  showNotification: function (from, align) {
    color = 'primary';

    $.notify({
      icon: "nc-icon nc-bell-55",
      message: "Welcome to <b>Paper Dashboard</b> - a beautiful bootstrap dashboard for every web developer."

    }, {
      type: color,
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};



myChart = {
  initLineChart: function () {
    var speedCanvas = document.getElementById("lineChart");

    var dataFirst = {
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: '#ed192c',
      backgroundColor: 'transparent',
      pointBorderColor: '#ed192c',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: ['jan/20', 'feb/20', 'Mrz/20', 'Apr/20', 'Mai/20', 'Jun/20', 'Jul/20', 'Aug/20', 'Sep/20', 'Okt/20', 'Nov/20', 'Dez/20'],
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  },
  initBarChart: function () {
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['jan/20', 'feb/20', 'Mrz/20', 'Apr/20', 'Mai/20', 'Jun/20', 'Jul/20', 'Aug/20', 'Sep/20', 'Okt/20', 'Nov/20', 'Dez/20'],
        datasets: [{
          label: 'Nombre des reclamations résolu',
          data: [0, 2, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0],
          backgroundColor: [
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)'
          ],
          borderColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
          ],
          borderWidth: 0.5
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
  }

}

dataTable = {
  addCol: function () {
    var t = $('#myTable').DataTable();
    var counter = 1;
    var colCounter = 1;
    
    $('#addRow').on('click', function () {
      $('#myModal').modal('show');
      t.row.add([
        counter + '.' + colCounter++,
        counter + '.' + colCounter++,
        counter + '.' + colCounter++,
        counter + '.' + colCounter++,
        counter + '.' + colCounter++,
        counter + '.' + colCounter++,
        counter + '.' + colCounter++,
        counter + '.' + colCounter++,
        counter + '.' + colCounter++

      ]).draw(false);

      counter++;
    });
  }
}

