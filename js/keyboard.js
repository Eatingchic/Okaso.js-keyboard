//Keyboard-start

$(function() {
	var $write = $("#write"),
		shift = false,
		capslock = false;
	$("li").on("click",function() {
		var $this = $(this),
			character = $this.html(); 
		// Shift
		if ($this.hasClass("left-shift") || $this.hasClass("right-shift")) {
			$(".letter").toggleClass("uppercase");
			$(".symbol span").toggle();

			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}
		// Caps lock
		if ($this.hasClass("capslock")) {
			$(".letter").toggleClass("uppercase");
			capslock = true;
			return false;
		}

		// Delete
		if ($this.hasClass("delete")) {
			var html = $write.html();
			$write.html(html.substr(0, html.length - 1));
			return false;
		}

		// Other
		if ($this.hasClass("symbol")){
			character = $("span:visible", $this).html();
		} 
		if ($this.hasClass("space")){
			character = " ";
		} 
		if ($this.hasClass("tab")){
			character = "\t";
		} 
		if ($this.hasClass("return")){
			character = "\n";
		} 

		if ($this.hasClass("uppercase")) character = character.toUpperCase();

		$write.html($write.html() + character);
	});
});

function showKeyboard(){
	my$("okaso-keyb").style.display="block";
}

function hideKeyboard(){
	my$("okaso-keyb").style.display="none";
}


//Keyborad-end