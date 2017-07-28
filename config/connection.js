var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,	
	host: 'i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'p8z7n34b0ww9z4oq',
	password: "gqcq1bys96542cc8",
	database: 'lw41wiyr230xig8d',
});

connection.connect(function(err){

	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

