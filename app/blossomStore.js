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

  loadBlossom(key) {
    // TODO!
    //firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    //var username = snapshot.val().username;
    //});
  }

}

export default BlossomStore;
