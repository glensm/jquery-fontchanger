/*
	FontChanger v0.9
	Project site: http://glensm.github.com/jquery-fontchanger/
	Copyright 2011 Glen Smith
	
	Author: Glen Smith
	Twitter: @glensm
	Site: glensm.com
	
	Description:
	Puts the guess work back into typography. Sometimes mostly late at night 
	when you just can't think of what fonts to use. This minimal plugin
	solves that problem for you. It lets you cycle through a default list of
	fonts and you can also add your own.
	
	How to use it:

	To start it up use the following code:
	
		$('body').fontchanger(options);
		
	You can add you own fonts by putting an array where options is above.
	
		$('body').fontchanger(["Museo","anonymous"]);
	
	Use the left and right keys on your keyboard (a keyboard is required)
	to cycle through the fonts.
*/

(function($) {

$.fn.fontchanger = function(options) {  
	// Default fonts - http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html
	var fonts  = ["Arial","Helvetica","sans-serif","Arial Black","Comic Sans MS","cursive","Courier New","monospace","Georgia","serif","Lucida Console","Monaco","Lucida Sans Unicode","Lucida Grande","Palatino Linotype","Palatino","Times New Roman","Times","Verdana","Tahoma","'Trebuchet MS'","Geneva"];
	
	// Adds fonts passed as options to fonts array
	if (typeof(options) != "undefined"){
		if(options.length >0) fonts = fonts.concat(options);
	}
	var total = fonts.length;
	var n=0;
	var $current = "";

	// Font changer display is added
	$('body').append('<div id="fontchanger" style="position:absolute;top:5px;right:5px;width:250px;height:20px;padding:5px;background:rgba(0, 0, 0, 0.8);color:#FFF;font-family:arial;overflow:hidden;">FontChanger - @glensm</div>');
	
	// When an element is clicked add a unique class tag to it
    $("body").delegate("*", "click", function(){
		current = String((new Date()).getTime()).replace(/\D/gi,'');
		$(this).removeClass();
		$(this).addClass(current);
		// Reset counter
		n=0;
    });

	// Catch when a key is pressed, change font 
    $(document).keydown(function(e) {
		
        keycode = e.which.toString();
		
		// Runs through each font in the array
		if(n<total-1){
			if (keycode == '37') {//left
				if(n > 0) n--;
				$("."+current).css("font-family",fonts[n]);
				$('#fontchanger').html((n+1) + " - " + fonts[n]);
			};
			if (keycode == '39') {//right
				if(n >= 0) n++;
				$("."+current).css("font-family",fonts[n]);
				$('#fontchanger').html((n+1) + " - " + fonts[n]);
			};
		}
		else{
			// Reset
			n=0;
			$("."+current).css("font-family",fonts[n]);
			$('#fontchanger').html((n+1) + " - " + fonts[n]);
		}

    });


};
})(jQuery);

