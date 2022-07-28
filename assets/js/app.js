// Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     close: true,
// }).showToast();

// Notification Close Button 
var closebtns = document.getElementsByClassName("closeNotification");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
// Notification Close Button Ends

// Line Chart
var options = {
    series: [
    {
      name: "Memory",
      data: [10, 41, 35, 51, 49, 62]
    }
    ],
    chart: {
    fontFamily:'Poppins',
    height: 300,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
        show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Memory',
    align: 'center',
    font:'poppins',
    style: {
        fontSize: '18px'
    }
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], 
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#memorychart"), options);
  chart.render();
// Line Chart Ends

// Pie Chart
  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    fontFamily:'Poppins',
    type: 'donut',
  },
  title: {
    text: 'Traffic Sources',
    align: 'center',
    font:'poppins',
    style: {
        fontSize: '18px'
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#visitorchart"), options);
  chart.render();
// Pie Chart Ends

// Sample Chart 
var options = {
    series: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
    fontFamily:'Poppins',
    toolbar: {
        show: false
    }
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Visitors',
    align: 'center',
    font:'poppins',
    style: {
        fontSize: '18px'
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Website Blog',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Social Media'
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#samplechart"), options);
  chart.render();
  // Sample Chart Ends

  // Server Request Chart Start
  var options = {
    series: [
        {
            name: "Server Request",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Web Server",
            data: [ 31, 10, 45, 78, 35, 21, 45, 70, 90]
        }
    ],
    chart: {
    height: 350,
    type: 'line',
    fontFamily:'poppins',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Server Request',
    align: 'center',
    style: {
        fontSize: '18px',
        fontFamily:'poppins',
    }
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#serverchart"), options);
  chart.render();
  
  // Server Request Chart Ends
