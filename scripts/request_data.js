var htmlStuff = {
	home: "<div class=\"header\"><h1> Chem Access: Home </h1><div class=\"accent_image_container\"><img src=\"images/accent_images/home.png\"></div></div><hr><div>	<P>		Chemical diagrams, in particular molecule depictions are a prevalent means of conveying information in chemistry and biosciences. However, they are commonly given in standard image formats leaving them inaccessible to readers with learning difficulties and print impaired learners.	</P><P>	The ChemAccess project aims to provide support for readers with difficulties in accessing, understanding and interacting with chemical diagrams. We concentrate on the provision of fully accessible chemical diagrams for electronic documents, through creation of a fully automated software that will recognise molecule images and transform them into scalable vector graphics that will enable us to provide support for screen readers via auditory descriptions.</P><P>	We work on providing open source software for accessibility to chemical diagrams and we collaborate with a number of related projects.</P><P><B>Funded by an SBRI grant \"Ready Steady STEM\" through JISC TechDis.</B></P>" ,
	samples:"<style type=\"text/css\">ul{	list-style-type: none;}</style><div class=\"header\"><h1> Samples </h1><div class=\"accent_image_container\"><img src=\"images/accent_images/samples.png\"></div></div><hr><h2>Mollecule Images</h2><ul>	<li> <a href=\"http://www.cs.bham.ac.uk/research/groupings/reasoning/sdag/chemtest/images/example1.html\">Example 1</a> </li><li> <a href=\"http://www.cs.bham.ac.uk/research/groupings/reasoning/sdag/chemtest/images/example2.html\">Example 2</a> </li> <li> <a href=\"http://www.cs.bham.ac.uk/research/groupings/reasoning/sdag/chemtest/images/example3.html\">Example 3</a> </li></ul><h2>Navigatable Molecules</h2><ul>	<li> <a href=\"http://www.cs.bham.ac.uk/research/groupings/reasoning/sdag/chemtest/generic/generic.html?mole=../data/book1-006-03-enr\">Example 1</a> </li>	<li> <a href=\"http://www.cs.bham.ac.uk/research/groupings/reasoning/sdag/chemtest/generic/generic.html?mole=../data/book1-006-08-enr\">Example 2</a> </li>	<li> <a href=\"http://www.cs.bham.ac.uk/research/groupings/reasoning/sdag/chemtest/generic/generic.html?mole=../data/book1-012-00-enr\">Example 3</a> </li></ul>",
	software: "<!-- This is pure html -->	<div class=\"header\">	<h1> Software </h1><div class=\"accent_image_container\"><img src=\"images/accent_images/software.png\"></div>	</div>	<hr>	<ul>	  <li><a href=\"www.cs.bham.ac.uk/~nms/img2mol.php\">MolRec</a> a software for	  chemical diagram recognition.</li>	</ul>",
	events: "<!-- This is pure html --><div class=\"header\"><h1>Events</h1><div class=\"accent_image_container\"><img src=\"images/accent_images/events.png\"/></div><div><hr><ul>  <li>CDK hackathon, 22-23 March 2014, organised by Peter Murray-Rust at the  Unilever Research Centre, Cambridge, UK</li> <li> <a href=\"http://www.icchp.org/SU\"> Presenting at the international conference on Computers Helping People with Special Needs </a></li>     </ul>",
	academic_info: "<!-- This is pure html --><div id=\"people_panel\">	<div class=\"header\">	<h1>People</h1><div class=\"accent_image_container\"><img src=\"images/accent_images/academic.png\"/></div>	</div>	<hr>	<h2>		Academic Staff	</h2>	<ul>		<li><a href=\"http://www.cs.bham.ac.uk/~mgl\">Mark Lee</a> (School of Computer Science)</li>		<li><a href=\"http://www.cs.bham.ac.uk/~vxs\">Volker Sorge</a> (School of Computer Science)</li>		<li><a href=\"http://www.birmingham.ac.uk/staff/profiles/education/wilkinson-sandy.aspx\">Sandy Wilkinson</a> (School of Education)</li>	</ul>	<h2>	<h2>		Researchers	</h2>	<ul>		<li><a href=\"http://www.cs.bham.ac.uk/~igb986\">Ian Batten</a></li>		<li><a href=\"http://www.cs.bham.ac.uk/~bxs442\">Behrang Sabeghi Saroui</a></li>		<li><a href=\"http://www.cs.bham.ac.uk/~jts100\">John Saxon</a></li>	</ul>	<h2>		Students	</h2>	<ul>		<li>Basak Oren</li>	</ul>	<h2>External Collaborators</h2>	<ul>		<li>Duncan Bell</li>		<li><a href=\"http://people.brunel.ac.uk/~csstnns/\">Noureddin Sadawi</a> (Brunel University)</li>		<li><a href=\"https://blogs.ch.cam.ac.uk/pmr/\">Peter Murray-Rust</a> (University of Cambridge/Shuttleworth Foundation)</li>		<li><a href=\"http://chem-bla-ics.blogspot.co.uk\">Egon Willighagen</a> (Maastricht University)</li>	</ul></div><div id =\"related_projects_panel\">	<h1>Related Projects</h1> <hr>	<ul>		<li><a href=\"http://www.cs.bham.ac.uk/~nms/img2mol.php\">MolRec</a></li>		<li><a href=\"http://sourceforge.net/projects/cdk/\">The Chemical Development Tool</a></li>		<li><a href=\"http://openbabel.org/wiki/Blue_Obelisk\">Blue Obelisk</a></li>		<li><a href=\"http://diagramcenter.org\">Diagram Center</a></li>		<li><a href=\"https://load2learn.org.uk\">Load2Learn</a></li>	</ul></div><div id = \"publications_panel\">	<h1>Publications</h1> <hr>	<ul>      <li><a href=\"http://\"></a></li>	</ul></div><div id = \"funding_panel\">	<h1>Funding</h1><hr>	<ul>	  Funded by an SBRI grant \"Ready Steady STEM\" through JISC TechDis.	</ul></div> "}

function requestData(url, callBack)
{
	/*// Create a new XMLHttpRequest object
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// XMLHttpRequest is supported
		xmlhttp = new XMLHttpRequest();
	}
	else {
		// Create an ActiveX Object
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} 
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			callBack(xmlhttp);
		}
	}
	
	// Open the object with the filename
	xmlhttp.open("POST", url, false);
	// Send the request
	xmlhttp.send(null);*/
	callBack(htmlStuff[url]);
}
