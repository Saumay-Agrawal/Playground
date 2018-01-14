var dataArray = [0,30,43,56,76,89,99,106,120,150,178,198];
var dataMonths = [1,2,3,4,5,6,7,8,9,10,11,12];

var height = 400;
var width = 1000;

var curveTypes = [d3.curveCardinal, d3.curveBasis, d3.curveLinear, 
     d3.curveStep, d3.curveNatural];

var parseMonth = d3.timeParse('%m');     

var svg = d3.select('body')
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

var y = d3.scaleLinear().domain([0,200]).range([height,0]);
var yAxis = d3.axisLeft(y).ticks(20).tickPadding(10).tickSize(10);
var x = d3.scaleTime()
            .domain([d3.min(dataMonths, function(d) { return parseMonth(d); }),
                    d3.max(dataMonths, function(d) { return parseMonth(d); })])
            .range([0,width]);
var xAxis = d3.axisBottom(x) ;


for(var t=0; t<1; t++) {

    var area = d3.area()
        .x(function (d, i) { return x(parseMonth(dataMonths[i])); })
        .y0(height)
        .y1(function (d) { return y(d); })
        .curve(curveTypes[t]);

    var grp = svg.append('g')
        .attr('class', 'grp'+t)
        .attr('transform', 'translate('+((t*300)+50)+',0)');

    grp.append('g')
        .attr('class', 'axis y')
        .call(yAxis);
    
    grp.append('g')
        .attr('class', 'axis x')
        .call(xAxis)
        .attr('transform', 'translate(0,'+height+')').call(xAxis);

    grp.append('path')
        .attr('d', area(dataArray))
        .attr('fill', 'none')
        .attr('stroke-width', '1')
        .attr('stroke', 'brown');

    grp.selectAll('circle.grpcircle'+t)
        .data(dataArray)
        .enter().append('circle')
        .attr('class', function(d,i) { return 'grpcircle'+t; })
        .attr('cx', function (d, i) { return x(parseMonth(dataMonths[i])); })
        .attr('cy', function (d) { return y(d); })
        .attr('r', '2');

}
    