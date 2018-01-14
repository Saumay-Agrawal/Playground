var array = [20, 50, 100, 30, 45, 75, 15];
var dataFruit = ["Orange", "Apple", "Grape", "Banana", "Kiwi", "Melon", "Peach"];

var colorscal = d3.scaleSequential(d3.interpolateRainbow).domain([0,7]);

var x = d3.scaleBand()
            .domain(dataFruit)
            .range([0,550])
            .paddingInner(0.109);

var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg")
    .attr('width', '100%')
    .attr('height', '100%');

// svg.selectAll('rect')
//     .data(array)
//     .enter().append('rect')
//         .attr('height', function(d,i) { return d*5; })
//         .attr('width','70') 
//         .attr('fill', function(d,i) { return colorscal(i); })
//         .attr('x',function(d,i) { return 80*i; })
//         .attr('y', function(d,i) { return 600-(d*5) });

// svg.append('g')
//     .attr('class', 'x axis hidden')
//     .attr('transform', 'translate(0,600)')
//     .call(xAxis);

var fixedX = 100;
svg.selectAll('circle.groupa')
    .data(array)
    .enter().append('circle')
        .attr('class', 'groupa')
        .attr('fill', function(d,i) { return colorscal(i); })
        .attr('cx', function(d,i) { fixedX+=((d*4)/5)+30; return fixedX;})
        .attr('cy','200')
        .attr('r',function(d,i) { return d/5;});

// var fixedX = 100;
// svg.selectAll('ellipse')
//     .data(array)
//     .enter().append('ellipse')
//         .attr('class', 'groupb')
//         .attr('cx', function(d,i) { fixedX+=((d*4)/5)+30; return fixedX;})
//         .attr('cy','500')
//         .attr('rx',function(d,i) { return d/5;})
//         .attr('ry',function(d,i) { return d;});

// var fixedX = 0;
// svg.selectAll('line')
//     .data(array)
//     .enter().append('line')
//         .attr('x1', fixedX)
//         .attr('y1', function(d,i) { return 70+(i*20); })
//         .attr('x2',function(d) { return fixedX+(d*20); })
//         .attr('y2', function(d,i) { return 70+(i*20); })
//         .attr('stroke', 'yellowgreen')
//         .attr('stroke-width', '5');

// var textarray = ['one', 'two', 'three', 'four', 'five'];
// var fixedY = 100;
// svg.append('text').selectAll('tspan')
//     .data(textarray)
//     .enter().append('tspan')
//     .text(function(d) { return d; })
//     .attr('x', '500')
//     .attr('y', function(d,i){ return fixedY+(i*100); })
//     .attr('text-anchor', 'start')
//     .attr('font-size','50')    
//     .attr('stroke','red')
//     .attr('stroke-width','2.5');    
