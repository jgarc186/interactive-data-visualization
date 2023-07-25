import * as d3 from 'd3';

// const dataset = [ 5, 10, 15, 20, 25 ];
// const dataset = [ 25, 7, 5, 26, 11 ];
// const dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3];
let dataset = [];
for (let i = 0; i < 25; i++) {
    let newNumber = Math.floor(Math.random() * 30);
    dataset.push(newNumber);
}
const width = 500;
const dimensions = {
    width,
    height: 50,
}

// d3.select('#app').selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .classed('bar', true)
//     .style('height', d => `${d * 5}px`);

const wrapper = d3.select('#app').append('svg')
    .attr('width', dimensions.width)
    .attr('height', dimensions.height);
