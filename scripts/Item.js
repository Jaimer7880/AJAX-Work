function Item(props) {
	for(var key in props){
		this[key] = props[key];
	}

	
	this.display=function(){
		
		var movieTemplate = $('#movieTemplate').html();
		var compiled = Handlebars.compile(movieTemplate);
		var html = compiled(this);
		$('#items').append(html);

		}
		
	
}
