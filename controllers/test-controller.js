const firebase = require('firebase-admin');
const db = firebase.database();

const testGet = async (req, res) => {
  const snapshot = await db.ref('/test').once('value');
  const val = snapshot.val();
  res.send(JSON.stringify(val));
};

const testPost = async (req, res) => {
  const key = req.body.fbRef;
  const val = req.body.fbData;
  const fbResponse = await db.ref(key).set(val);
  res.send(JSON.stringify(req.body.fbData));
};

module.exports = {
  testGet,
  testPost,
};
