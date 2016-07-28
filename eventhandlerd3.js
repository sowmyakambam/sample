var data = [120, 140, 100, 130, 150, 130, 190, 150, 190, 110,
            110, 140, 120, 100, 170, 120, 120, 160, 120, 180]
var svg=d3.select("body")
      .append("svg")
      .attr("width",500)
      .attr("height",500)

var chart = d3.select('svg')

var rects = chart.selectAll('rect')
  .data(data).enter()
  .append('rect')
  .attr('x', 0)
  .attr('y', function(d,i) {return i * 15})
  .attr('width', function(d) {return d})
  .attr('height', 14)

  rects.on("click", function(d) {
  d3.select(this)
    .attr("fill" , "rgb(0,"+d+",0)")
})

rects.on("mouseover", function(d) {
  d3.select(this)
    .attr("fill" , "rgb(0,"+d+",0)")
})


rects.on("mouseout", function(d) {
  d3.select(this)
  .transition()
    .duration(1200)
    .attr("fill" , "black")
})

var labels = chart.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(function(d) {return d})
  .attr("y", function(d,i) {return i*15 + 10})
  .attr("x", function(d) {return d - 20})
  .attr("font-family", "sans-serif")
  .attr("font-size", "10px")
  .attr("fill", "white")

