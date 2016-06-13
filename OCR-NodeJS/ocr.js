//Load the request module
var request = require('request');

var str="";
//Lets configure and request
request({
    url: 'https://api.projectoxford.ai/vision/v1.0/ocr?', //URL to hit
    qs: {"language": "unk",
         "detectOrientation ": "true"
         }, //Query string data
            
    method: 'POST', //Specify the method
    
    headers: { //We can define headers too
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key':'<Subscription Key>'
    },
    
    body: "{'url':'<URL TO THE IMAGE OF THE DOCUMENT>'}",
    
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        var jsonObj = JSON.parse(body);
        
        var ob = jsonObj;
            for(i=0;i<ob.regions.length;i++){
                for(j=0;j<ob.regions[i].lines.length;j++){
                    for(k=0;k<ob.regions[i].lines[j].words.length;k++){
                            var str = str + " "+ob.regions[i].lines[j].words[k].text;
                    }
                    str = str + "\n";
                }
            }
            
            console.log(str);
            
    }
});
