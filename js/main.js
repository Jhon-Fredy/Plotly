var trace0 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "markers",
};

var trace1 = {
  x: [1, 3, 4, 5],
  y: [25, 5, 30, 9],
  mode: "lines",
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines+markers",
};

var data = [trace0, trace1, trace2];

var layout = {
  title: "Line and Scatter Plot",
};


window.onload = () => Plotly.newPlot("myDiv", data, layout);
