var lastKeyLoaded;

var firebase = require("firebase/app");
require("firebase/database");

var config = {
  apiKey: "AIzaSyC1RZbfWfMyKPFrJX-LAPwCiu00EF-86FU",
  authDomain: "blossom-c67b4.firebaseapp.com",
  databaseURL: "https://blossom-c67b4.firebaseio.com",
  storageBucket: "blossom-c67b4.appspot.com",
};

firebase.initializeApp(config);

class BlossomStore {
  constructor() {
    this.database = firebase.database();
  }

  saveNewBlossom(blossom) {
    var key = this.database.ref("blossoms").push().key;
    this.database.ref('/blossoms/' + key).set(blossom);
    lastKeyLoaded = key;
    return key;
  }

  loadBlossom(key, callback, onNewNode, onChangedNode, onRemoveNode, onNewEdge, onChangedEdge, onChangedTitle) {
    try {
      firebase.database().ref('/blossoms/' + key).once('value', (snapshot) => {
        if (snapshot.exists()) {
          firebase.database().ref('/blossoms/' + key + "/nodes").on("child_added", n => onNewNode(n.key, n.val()));
          firebase.database().ref('/blossoms/' + key + "/nodes").on("child_changed", n => onChangedNode(n.key, n.val()));
          firebase.database().ref('/blossoms/' + key + "/nodes").on("child_removed", n => onRemoveNode(n.key));
          firebase.database().ref('/blossoms/' + key + "/edges").on("child_added", e => onNewEdge(e.key, e.val()));
          firebase.database().ref('/blossoms/' + key + "/edges").on("child_changed", e => onChangedEdge(e.key, e.val()));
          firebase.database().ref('/blossoms/' + key + "/title").on("value", t => onChangedTitle(t.val()));
        }

        lastKeyLoaded = key;
        callback(snapshot.exists());
      });
    } catch(err) {
      console.log(err);
      callback(null);
    }
  }

  addNode(node) {
    firebase.database().ref('/blossoms/' + lastKeyLoaded + "/nodes").push(node);
  }

  renameNode(key, node) {
    firebase.database().ref('/blossoms/' + lastKeyLoaded + "/nodes/" + key).set(node);
  }

  removeNode(key) {
    firebase.database().ref('/blossoms/' + lastKeyLoaded + "/nodes/" + key).remove();
  }

  setEdge(key, edge) {
    firebase.database().ref('/blossoms/' + lastKeyLoaded + "/edges/" + key).set(edge);
  }

  setTitle(title) {
    firebase.database().ref('/blossoms/' + lastKeyLoaded + "/title").set(title);
  }

  isConnected() {
    return lastKeyLoaded;
  }
}

export default BlossomStore;
