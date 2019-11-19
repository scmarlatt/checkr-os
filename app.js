const admin = require('firebase-admin');
const serviceAccount = require('./key.json');
admin.initializeApp({ // firebase-adminsdk-thtcw@checkr-ons.iam.gserviceaccount.com
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://checkr-ons.firebaseio.com',
});
const express = require('express');
const bodyParser = require('body-parser');
const testRoute = require('./routes/test-route');
// const data = require('./data.json');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/sanity', testRoute);

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
