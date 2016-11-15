var x1 = 100;
var y1 = 299;

function Run() {
    $('rect').remove();
    $('circle').remove();
    console.log('run...');
    var svgctrl = d3.select('svg');

    var c1 = svgctrl.append('rect');

    c1.attr('x', 50).attr('y', 20).attr('width', "154px").attr('height', "310px").attr('style', "fill:#ededed").attr('stroke-width', '5px').append('id', "img1");

    var c2 = svgctrl.append('rect');

    c2.attr('x', 57).attr('y', 40).attr('width', "140px").attr('height', "240px").attr('style', "fill:black").attr('stroke-width', '5px').append('id', "img2");

    var c3 = svgctrl.append('rect');

    c3.attr('x', 90).attr('y', 299).attr('width', "60px").attr('height', "20px").attr('style', "fill:#ededed;stroke:#d7d7d7;stroke-width=:3px").append('id', "img3");

    //var c4 = svgctrl.append('polygon');

    //c4.attr('points', "260,10 280,10 290,70").attr('style', "fill:blue;stroke:purple;stroke-width:1");

    var c4 = svgctrl.append('rect');

    c4.attr('x', "108").attr('y', 28).attr('ry', "10px").attr('width', 40).attr('height', 5).attr('style', 'fill:black;stroke:black;stroke-width:5;opacity:0.5').append('id', "img4");

    var c5 = svgctrl.append('circle');

    c5.attr('cx', 175).attr('cy', 30).attr('r', 5).attr('stroke', "black").attr('stroke-width', '3').attr('fill', 'black').attr('id', "img5");


}


function Strengthen() {

    var svgctrl = d3.select('svg');
    var c6 = svgctrl.append('rect');
    c6.attr('x', x1).attr('y', y1 + 33).attr('width', "30px").attr('height', "20px").attr('style', 'fill:black;stroke:black;stroke-width:5;').append('id', "img6");
    var c7 = svgctrl.append('rect');
    c7.attr('x', x1 + 10).attr('y', y1 + 53).attr('width', "10px").attr('height', "180px").attr('style', 'fill:black;stroke:black;stroke-width:5;').append('id', "img7");
    var c8 = svgctrl.append('rect');
    c8.attr('x', x1 - 10).attr('y', y1 + 223).attr('width', "50px").attr('height', "50px").attr('style', 'fill:black;stroke:black;stroke-width:5;').append('id', "img8");
    var c9 = svgctrl.append('rect');
    c9.attr('x', x1).attr('y', y1 + 273).attr('width', "5px").attr('height', "20px").attr('style', 'fill:black;stroke:black;stroke-width:1;').append('id', "img9");
    var c10 = svgctrl.append('rect');
    c10.attr('x', x1 + 23).attr('y', y1 + 273).attr('width', "5px").attr('height', "20px").attr('style', 'fill:black;stroke:black;stroke-width:1;').append('id', "img10");

}
