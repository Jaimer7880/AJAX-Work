var ToolBelt = {
	megaParse : function(movieString) {
		var movieObj = JSON.parse(movieString);
		if(movieObj instanceof Array){
				$.each(movieObj, function(key,val){
				var obj = new Item(this);
				obj.display();
	 
		});
	 }
	 else
	 {
			var obj = new Item(this);
			obj.display();
	 }

	},

	addItem : function(movie) {
		var movie = {
		 title : $('#title').val(),
		 director : $('#director').val(),
		 released : $('#released').val(),
		 runTime : $('#runtime').val(),
		 rating : $('#rating').val(),
		 maleLead : $('#malelead').val(),
		 femaleLead : $('#femalelead').val()
	 }
	 

		 var obj = new Item(movie);
		 obj.display();
		 ToolBelt.clearInputs();
		  
		 
	},

	clearInputs : function() {
		
		$('#title').val('');
		$('#director').val('');
		$('#released').val('');
		$('#runtime').val('');
		$('#rating').val('');
		$('#malelead').val('');
		$('#femalelead').val('');
		
	}
}
