class BlossomStore {
  constructor() {
    var firebase = require("firebase/app");
    require("firebase/database");

    var config = {
      apiKey: "AIzaSyC1RZbfWfMyKPFrJX-LAPwCiu00EF-86FU",
      authDomain: "blossom-c67b4.firebaseapp.com",
      databaseURL: "https://blossom-c67b4.firebaseio.com",
      storageBucket: "blossom-c67b4.appspot.com",
    };

    firebase.initializeApp(config);

    this.database = firebase.database();
  }

  saveNewBlossom(blossom) {
    var key = this.database.ref("blossoms").push().key;
    this.database.ref('/blossoms/' + key).set(blossom);
    return key;
  }

  loadBlossom(key, callback, onNewNode, onChangedNode, onNewEdge, onChangedEdge) {
    try {
      firebase.database().ref('/blossoms/' + key).once('value', (snapshot) => {
        if (snapshot.exists()) {
          firebase.database().ref('/blossoms/' + key + "/nodes").on("child_added", n => onNewNode(n.val()));
          firebase.database().ref('/blossoms/' + key + "/nodes").on("child_changed", n => onChangedNode(n.val()));

          firebase.database().ref('/blossoms/' + key + "/edges").on("child_added", e => onNewEdge(e.key, e.val()));
          firebase.database().ref('/blossoms/' + key + "/edges").on("child_changed", e => onChangedEdge(e.key, e.val()));
        }

        callback(snapshot.exists());
      });
    } catch(err) {
      console.log(err);
      callback(null);
    }
  }

}

export default BlossomStore;
