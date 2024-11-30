// Bar chart

const barChartOptions = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: true,
    },
  },
  colors: ["#2e7d32", "#2962ff", "#d50000"],
  plotOptions: {
    bar: {
      horizontal:false,
      columnWidth: "75%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
      style: {
        color: "#f5f7ff",
      },
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "bottom",
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();

// Bar chart for Top 5 products
const barChartOptions2 = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
      name: "Products",
    },
  ],
  chart: {
    type: "bar",
    background: "transparent",
    height: 350,
    toolbar: {
      show: true,
    },
  },
  colors: ["#2962ff", "#d50000", "#2e7d32", "#ff6d00", "#583cb3"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
};

const barChart2 = new ApexCharts(
  document.querySelector("#bar-chart2"),
  barChartOptions2
);
barChart2.render();

// Bar chart for the Countries
const barChartOptions3 = {
  series: [
    {
      data: [600, 500, 400, 300, 200],
      name: "Sales",
    },
  ],
  chart: {
    type: "bar",
    background: "transparent",
    height: 350,
    toolbar: {
      show: true,
    },
  },
  colors: ["#583cb3", "#2e7d32", "#d50000","#ff6d00", "#2962ff"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: ["Canada", "Portugal", "United States", "France", "China"],
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
};

const barChart3 = new ApexCharts(
  document.querySelector("#bar-chart3"),
  barChartOptions3
);
barChart3.render();

// Area chart

const areaChartOptions = {
  series: [
    {
      name: "Purchase Orders",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Orders",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: "area",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ["#00ab57", "#d50000"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "bottom",
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
        style: {
          color: "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
        style: {
          color: "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
};

const areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();