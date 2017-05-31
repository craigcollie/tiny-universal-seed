import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC2Zof71oKO626mOvTiFEMVv22Z_eafoMs',
  databaseURL: 'https://feedbag-prod.firebaseio.com',
};

firebase.initializeApp(config);

function getDataByRef(refId) {
  return firebase.database().ref().child(refId).once('value')
    .then(snap => snap.val());
}

function deleteRefById(refId, id) {
  return firebase.database().ref(`${refId}/${id}`).remove()
    .then(() => getDataByRef(refId));
}

function addRefById(refId, formData) {
  const key = firebase.database().ref().child(refId).push().key;

  const multipathUpdates = {
    [`${refId}/${key}`]: {
      ...formData,
      id: key,
    },
  };

  return new Promise((resolve) => {
    firebase.database().ref().update(multipathUpdates, () => resolve(getDataByRef(refId)));
  });
}

export default {
  getDataByRef,
  deleteRefById,
  addRefById,
};
