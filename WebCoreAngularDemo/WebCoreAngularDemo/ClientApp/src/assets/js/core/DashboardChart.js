/* bar chart */
//function InventroyByLocationChart(invdata) {
//  var members = (typeof invdata) === 'string' ? eval('(' + invdata + ')') : invdata;
//  var LocationName = [];
//  var CurValueCnt = [];
//  $.each(members, function (i, member) {
//    LocationName.push(member.location);
//    CurValueCnt.push({ y: parseFloat(member.curValue)});

const { type } = require("os");
const { float } = require("../datagrid/datatables/datatables.export");

     
//  });

//  var barChartData = {
//    labels: LocationName,
//    datasets: [
//      {
//        label: "CurrentValue",
//        backgroundColor: "#a38cc6",
//        borderColor: "#886ab5",
//        borderWidth: 1,
//        data: CurValueCnt
//      }]

//  };
//  var config = {
//    type: 'bar',
//    data: barChartData,
//    options:
//    {
//      responsive: true,
//      legend:
//      {
//        position: 'top',
//      },
//      title:
//      {
//        display: false,
//        text: 'Bar Chart'
//      },
//      scales:
//      {
//        xAxes: [
//          {
//            display: true,
//            scaleLabel:
//            {
//              display: false,
//              labelString: "Location"
//            },
//            gridLines:
//            {
//              display: true,
//              color: "#f2f2f2"
//            },
//            ticks:
//            {
//              beginAtZero: true,
//              fontSize: 11
//            }
//          }],
//        yAxes: [
//          {
//            display: true,
//            scaleLabel:
//            {
//              display: false,
//              labelString: "CurrentValue"
//            },
//            gridLines:
//            {
//              display: true,
//              color: "#f2f2f2"
//            },
//            ticks:
//            {
//              beginAtZero: true,
//              fontSize: 11
//            }
//          }]
//      }
//    }
//  }
//  new Chart($("#barChart > canvas").get(0).getContext("2d"), config);
//}
/* bar chart -- end */

/* pie chart */
function InventroyByLocationChart(invdata) {
  var members = (typeof invdata) === 'string' ? eval('(' + invdata + ')') : invdata;
  var LocationName = [];
  var CurValueCnt = [];
  $.each(members, function (i, member) {
    LocationName.push(member.location);
    CurValueCnt.push(parseFloat(member.curValue));

  });
  var config = {
    type: 'pie',
    data:
    {
      datasets: [
        {
          data: CurValueCnt ,
          backgroundColor: [
            "#B19DCE",
            "#967bbd",
            "#7aece0",
            "#81f081",
            "#1dc9b7", "#ffd274", "#feb7d9", "#ed0e0e", "#e7026e", "#767676","#6610f2"
          ],
          label: 'CurrentValue' // for legend
        }],
      labels: LocationName
    },
    options:
    {
      responsive: true,
      legend:
      {
        display: true,
        position: 'bottom',
      }
    }
  };
  new Chart($("#pieChart > canvas").get(0).getContext("2d"), config);
}

function InventroyByNameExpiryNextMonthChart(invdata) {
  var members = (typeof invdata) === 'string' ? eval('(' + invdata + ')') : invdata;
  var ItemName = [];
  var CurValueCnt = [];

  $.each(members, function (i, member) {
    ItemName.push(member.name);
    CurValueCnt.push(parseFloat(member.curValue));

  });
  var config = {
    type: 'pie',
    data:
    {
      datasets: [
        {
          data: CurValueCnt,
          backgroundColor: [
            "#B19DCE",
            "#967bbd",
            "#7aece0",
            "#81f081",
            "#1dc9b7", "#ffd274", "#feb7d9", "#ed0e0e", "#e7026e", "#767676", "#6610f2"
          ],
          label: 'ItemName' // for legend
        }],
      labels: ItemName
    },
    options:
    {
      responsive: true,
      legend:
      {
        display: true,
        position: 'bottom',
      }
    }
  };
  new Chart($("#pieChartexpnextmonth > canvas").get(0).getContext("2d"), config);
}
/* pie chart -- end */

/* area chart */
function InventroyValueByMonthChart(invdata) {
  var members = (typeof invdata) === 'string' ? eval('(' + invdata + ')') : invdata;
  var Month = [];
  var CurValueCnt = [];
  $.each(members, function (i, member) {
    Month.push(member.month);
    CurValueCnt.push({ y: parseFloat(member.curValue) });

  });

  var config = {
    type: 'line',
    data:
    {
      labels: Month,
      datasets: [
        {
          label: "CurrentValue",
          //backgroundColor: 'rgba(136,106,181, 0.2)',
          backgroundColor: "#B19DCE",
          borderColor: "#B19DCE",
          pointBackgroundColor: "#6E4E9E",
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBorderWidth: 1,
          borderWidth: 1,
          pointRadius: 3,
          pointHoverRadius: 4,
          data: CurValueCnt,
          fill: true
        }
        ]
    },
    options:
    {
      responsive: true,
      title:
      {
        display: false,
        text: 'Area Chart'
      },
      tooltips:
      {
        mode: 'index',
        intersect: false,
      },
      hover:
      {
        mode: 'nearest',
        intersect: true
      },
      scales:
      {
        xAxes: [
          {
            display: true,
            scaleLabel:
            {
              display: false,
              labelString: 'Monthname'
            },
            gridLines:
            {
              display: true,
              color: "#f2f2f2"
            },
            ticks:
            {
              beginAtZero: true,
              fontSize: 11
            }
          }],
        yAxes: [
          {
            display: true,
            scaleLabel:
            {
              display: false,
              labelString: 'Current Value'
            },
            gridLines:
            {
              display: true,
              color: "#f2f2f2"
            },
            ticks:
            {
              beginAtZero: true,
              fontSize: 11
            }
          }]
      }
    }
  };
  new Chart($("#areaChart > canvas").get(0).getContext("2d"), config);
}
            /* area chart -- end */
