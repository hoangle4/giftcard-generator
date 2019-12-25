require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const db = require('./models');
const fileupload = require('express-fileupload');

const PORT = process.env.PORT || 3001;
const allowedOrigins = [ 'http://localhost:3000', 'https://master.dnsy5i4as8f52.amplifyapp.com' ];
app.use(
	cors({
		// origin: function(origin, callback) {
		//   // allow requests with no origin
		//   // (like mobile apps or curl requests)
		//   if (!origin) return callback(null, true);
		//   if (allowedOrigins.indexOf(origin) === -1) {
		//     var msg =
		//       "The CORS policy for this site does not " +
		//       "allow access from the specified Origin.";
		//     return callback(new Error(msg), false);
		//   }
		//   return callback(null, true);
		// }
		origin: '*'
	})
);
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileupload());

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

var syncOptions = { force: false, alter: false };
if (process.env.NODE_ENV === 'test') {
	syncOptions.force = true;
}

app.use(routes);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
	syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
	app.listen(PORT, function() {
		console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
	});
});
