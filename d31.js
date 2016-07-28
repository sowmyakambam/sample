var svg=d3.select("body")
  .append("svg")
  .attr("width", 250)
  .attr("height", 250)
  


var data = [120, 140, 150, 180]  // define width is array
var chart = d3.select('svg')     // select svg
  .selectAll('rect')
  .data(data).enter()
  .append('rect')
  .attr('x', 0)
  .attr('y', function(d,i) {return i * 30})
  .attr('width', function(d) {return d})
  .attr('height', 25)


  d3.select('svg').selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(function(d) {return d})
  .attr("y", function(d,i) {return i*30 + 20})
  .attr("x", function(d) {return d})

  var color = d3.scale.linear()
    .domain([d3.min(data), d3.max(data)])
    .range(["red", "green"])

chart.attr("fill", function(d) {return color(d)})