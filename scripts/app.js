
var apiKey = '1-b6qotJDHosSUmcgVPi6m4nHnUISiuVVujGrfpHPMSA'; 
var Url = 'https://spreadsheets.google.com/feeds/list/@apiKey/od6/public/values?alt=json-in-script';

var finishedUrl = Url.replace('@apiKey',apiKey);

function parseGoogleData(data) {

 var retArray = [];
  $.each(data, function(){/
    var tempObj = {};
    $.each(this,function(key,val){//each property loop
      if(key.match(/gsx\$/)){
        var propName = key.slice(4);
        var ourVal = val.$t;
        tempObj[propName] = ourVal;
      }
    });
    retArray.push(tempObj);
  });
  return retArray;
}



$.ajax({
  url : finishedUrl,
  type : 'GET',
  dataType : 'jsonp',
  success : function (data){
  		var dataArray=parseGoogleData(data.feed.entry);
		var movieString = JSON.stringify(dataArray);
		ToolBelt.megaParse(movieString);
    
  },
  error : function(err){
    console.log(err);
  }
 
});
