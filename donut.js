// Basic Donut / Pie Chart widget... 

// note !!!!~~~ not yet set yet to be abstract
// note !!!!~~~ not yet set up to handle datasets





$("#add-data-btn").click(function () {

	mychart.addData({
		value: 130,
		color: "#B48EAD",
		highlight: "#C69CBE",
		label: "Purple"
	});

});

var data = [{
	value: 300,
	color: "#46BFBD",
	highlight: "#5AD3D1",
	label: "Correct"
}, {
	value: 50,
	color: "#F7464A",  
	highlight: "#FF5A5E",  
	label: "Wrong"
}, {
	value: 100,
	color: "#FDB45C",
	highlight: "#FFC870",
	label: "Incomplete"
}];
// Basic Donut / Pie Chart widget... 

// note !!!!~~~ not yet set yet to be abstract
// note !!!!~~~ not yet set up to handle datasets







var ctx = $("#canvas").get(0).getContext("2d");
var mychart = new Chart(ctx).Pie(data, {
	//Boolean - Whether we should show a stroke on each segment
	segmentShowStroke: false,

	//String - The colour of each segment stroke
	segmentStrokeColor: "#fff",

	//Number - The width of each segment stroke
	segmentStrokeWidth: 2,

	//Number - The percentage of the chart that we cut out of the middle
	percentageInnerCutout: 75, // This is 0 for Pie charts

	//Number - Amount of animation steps
	animationSteps: 10,

	//String - Animation easing effect
	animationEasing: "linear",

	//Boolean - Whether we animate the rotation of the Doughnut
	animateRotate: true,

	//Boolean - Whether we animate scaling the Doughnut from the centre
	animateScale: false,

	//String - A legend template
	legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

});
