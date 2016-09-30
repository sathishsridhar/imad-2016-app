var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var profiles={
     'my-profile':{
         title:`About me`,
         date:sep `25,2016`,
         heading:`Trying out my  web app tutorials in terminal`,
         content:`   <p>opening the app and stuff :) lets roickzzzz mangatha dawww.opening the app and stuff :) lets roickzzzz mangatha dawww.opening the app and stuff :) lets roickzzzz mangatha dawww.opening the app and stuff :) lets roickzzzz mangatha dawww</p>`

     },
     'my-profile1':{
         title:`About me`,
         date: `sep 25,2016`,
         heading:`this is another profile`,
         content:`   <p>opening the app and stuff :) lets roickzzzz mangatha dawww.opening the app and stuff :) lets roickzzzz mangatha dawww.opening the app and stuff :) lets roickzzzz mangatha dawww.opening the app and stuff :) lets roickzzzz mangatha daww.i am doing some changes</p>`

     }
};
function template(obj){
 title=obj.title;
 date=obj.date;
 heading=obj.heading;
 content=obj.content;
 var htmlcontent=`
 <html>
<head>
    <title> ${title}  </title>
 <link href="/ui/style.css" rel="stylesheet" />
    </head>
            <body>
		<div class="container">
                   	  <div>
                        <a href='/' >Home</a>
                      </div>
                      <div>${date}</div>
                      <hr/>
                     <div>
                        <h1>${heading}</h1>
                      </div>
                       <div>
                             <p>${content}</p>
                    </div>
		</div>
            </body>
</html>`

}

 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 
app.get('/profileName', function (req, res) {
    var profileName= req.params.profileName;
  res.send(templete(profiles[profileName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
