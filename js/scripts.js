$(function(){

	function Button(text) {
		this.text = text || "Hello";
	};

	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $("<button>");
			this.$element.text(this.text);
			this.$element.click(function() {
				alert(self.text);
			});
			$("body").append(this.$element);
		}
	};

	var btn1 = new Button("TAK");
	var btn2 = new Button("NIE");
	var btn3 = new Button("NIE WIEM");

	btn1.create(); 
	btn2.create(); 
	btn3.create(); 

});  