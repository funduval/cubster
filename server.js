const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var exphbs = require ('express-handlebars');
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/cubs_controller.js');
app.use('/', routes);

var port = 3999;
app.listen(port, function() {
	console.log("LISTENING ON PORT:", port);
});

