import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDoZsnN5GIvYxmVdttudSFlioY7uWTzKMU',
  databaseURL: 'https://feedbag-f7b4b.firebaseio.com',
};

firebase.initializeApp(config);

function getData({ refId }) {
  return firebase.database().ref().child(refId).once('value')
    .then(snap => snap.val());
}

export default getData;