var addressTabel = {home_link: "Home", samples_link: "Samples", software_link:"Software", events_link:"Events", academic_link: "Academic_Info"};
var colorTable = {home_link:"#FF0000", samples_link: "#33CC33", software_link:"#0066CC", events_link:"#FFFF00",academic_link:"#7A00CC"};
var css_template = '<style type="text/css">b,a{color:<<COLOR>>}</style>';


function loadContent(index){
	//gets the address of the content to be loaded
	var newPage = addressTabel[index];
	var data_container = document.getElementById("data_container");
	if(data_container.getAttribute("current-data") !== newPage){
		document.title = "Chem Access: " + newPage.replace("_", " ");
		data_container.setAttribute('current-data', newPage);
		requestData(newPage.toLowerCase() ,function (xHTML){changeContent(xHTML,colorTable[index]);});
	}
}

function changeContent(xHTML,color){
	var container = document.getElementById('data_container');
	$(container).fadeTo('600',0,function() {
		$(this).html(create_css_header(color) + xHTML).fadeTo('600',1);
	});
}

function create_css_header(color){
	return css_template.replace("<<COLOR>>",color);
}