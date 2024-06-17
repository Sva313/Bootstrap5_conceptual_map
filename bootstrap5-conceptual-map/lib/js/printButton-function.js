
//Activate the functionality of the
// Jquery plugin => printThis.js
$(document).ready(function(){
	
	// Get the current URL of the page
	var baseUrl = document.baseURI;

	// Remove the filename from the base URL to get the directory path
	var directoryPath = baseUrl.substring(0, baseUrl.lastIndexOf("/") + 1);

	// Construct the relative path to your CSS file
	var cssPath = directoryPath + "lib/css/bootstrap.min.css";

	$('#saveButton').click(function(){
		
		// Before printing, remove the placeholder from all textareas
		$("#floatingTextarea + label, #floatingTextarea2 + label, #floatingTextarea3 + label, #floatingTextarea4 + label, #floatingTextarea5 + label, #floatingTextarea6 + label, #floatingTextarea7 + label, #floatingTextarea8 + label, #floatingTextarea9 + label, #floatingTextarea10 + label, #floatingTextarea11 + label, #floatingTextarea12 + label, #floatingTextarea13 + label, #floatingTextarea14 + label").text("");

		$('.py-5').printThis({
			importCSS: true,
			importStyle: true,  
			loadCSS: cssPath,  
			copyTagClasses: true, 
			copyTagStyles: true,
			header: "<h1>NETIQUETTE</h1>",
			canvas: true,
		});	

		// Delay execution by 3 seconds
        setTimeout(function() {
			// Before printing, remove the placeholder from all textareas
			$("#floatingTextarea + label, #floatingTextarea2 + label, #floatingTextarea3 + label, #floatingTextarea4 + label, #floatingTextarea5 + label, #floatingTextarea6 + label, #floatingTextarea7 + label, #floatingTextarea8 + label, #floatingTextarea9 + label, #floatingTextarea10 + label, #floatingTextarea11 + label, #floatingTextarea12 + label, #floatingTextarea13 + label, #floatingTextarea14 + label").text("Γράψε εδώ...");
		}, 3000);

	});
	
});