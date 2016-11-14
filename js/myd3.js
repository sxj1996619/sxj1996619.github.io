function Run() {

    console.log('run...');
    var svgctrl = d3.select('svg');

    var c1 = svgctrl.append('rect');

    c1.attr('x', 50).attr('y', 20).attr('width', "154px").attr('height', "310px").attr('style', "fill:#ededed").attr('stroke-width', '5px').append('id', "img1");
    $('#img1').bind('click', function() {
        $('#img1').animate({ "top": "+=50" }, "slow");
    })


    var c2 = svgctrl.append('rect');

    c2.attr('x', 57).attr('y', 40).attr('width', "140px").attr('height', "240px").attr('style', "fill:black").attr('stroke-width', '5px');

    var c3 = svgctrl.append('rect');

    c3.attr('x', 90).attr('y', 299).attr('width', "60px").attr('height', "20px").attr('style', "fill:#ededed;stroke:#d7d7d7;stroke-width=:3px");

    //var c4 = svgctrl.append('polygon');

    //c4.attr('points', "260,10 280,10 290,70").attr('style', "fill:blue;stroke:purple;stroke-width:1");

    var c5 = svgctrl.append('rect');

    c5.attr('x', "108").attr('y', 28).attr('ry', "10px").attr('width', 40).attr('height', 5).attr('style', 'fill:black;stroke:black;stroke-width:5;opacity:0.5');

    var c6 = svgctrl.append('circle');

    c6.attr('cx', 175).append('cy', 30).append('r', 5).append('stroke', "black").append('stroke-width', '3').append('fill', 'black');

}



$('#run1').bind('click', Run);