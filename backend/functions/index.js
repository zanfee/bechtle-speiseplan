const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

function DateToUrlFriendlyString(date) {
  return (
    date.getDate() +
    "_" +
    date.getMonth() +
    1 +
    "_" +
    date.getFullYear().toString()
  );
}

exports.write = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  var speiseplan = {};
  speiseplan[DateToUrlFriendlyString(req.body.date)] = req.body.food;
  return admin
    .database()
    .ref("speiseplan")
    .set(speiseplan)
    .then(() => res.sendStatus(200));
});

exports.read = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  return admin
    .database()
    .ref("speiseplan/" + req.query.date)
    .on("value", snapshot => {
      res.json(snapshot.val());
    });
});