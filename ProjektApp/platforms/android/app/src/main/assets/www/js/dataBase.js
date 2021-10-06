// Dieses JS ist für die Datenbank

// variable um eingetragene Events zu speichern.
myEvents = [];

console.log('Document Ready');
// Verwenden Sie den strict Modus um Referenzfehler durch fehlerhaft geschriebene Methoden oder Variablen auszuschließen.
'use strict';
$.ajaxSetup({ async: false });
// --------------------------------------------------------------------------
// Initialize Firebase - Anonymous
// --------------------------------------------------------------------------
var config = {
    apiKey: "AIzaSyCDjv-2nF35zKl4HtchRrjLfhy1FdAbsUo",
    authDomain: "terminlocation.firebaseapp.com",
    databaseURL: "https://terminlocation-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "terminlocation",
    storageBucket: "terminlocation.appspot.com",
    messagingSenderId: "698214054752",
    appId: "1:698214054752:web:9092b1177cc661113d7c05",
    measurementId: "G-7FM50F32XQ"
};
firebase.initializeApp(config);
/*{
"provider": "anonymous",
"uid": "fe2b73cb-86ea-49d1-ba55-0be7d33e492f"
}*/
firebase.auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});
// --------------------------------------------------------------------------
// Darstellen der Daten
// --------------------------------------------------------------------------
// timeout, weil auf Firebase gewartet wird und aktionen so gut sichtbar sind
// https://console.firebase.google.com/u/1/project/m335-test/database/m335-test/data
consoleFirstDate()
function consoleFirstDate(){
    var ref = firebase.database().ref();
    ref.on('value', (snapshot) => {
        console.log(snapshot.val());
        updateStarCount(postElement, data);
    });
}
// --------------------------------------------------------------------------
// alle Daten mit Mustache darstellen
// --------------------------------------------------------------------------
function showData() {
    $('#info').html('Daten werden geladen.....');
    var ref = firebase.database().ref();
    ref.on("value", function (response) {
        // console.log(response.val());
        // Template in eine Variable speichern
        var template = $('#template').html();
        
        $('#anzeige').html(template);
    }, function (error) {
        console.log("Error: " + error.message);
    });

    ref.on('value', (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
});
}
// --------------------------------------------------------------------------
// nur einen Datensatz anzeigen
// --------------------------------------------------------------------------
function getEinDatenSatz(id) {
    var ref = firebase.database().ref("user/" + id);
    ref.on("value", function (snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.message);
    });
}
// --------------------------------------------------------------------------
// Firebase delete Daten
// --------------------------------------------------------------------------
function deleteDaten(id) {
    $('#info').html('deleteDaten');
    // Löschen 
    firebase.database().ref("user/" + id + "/").remove();
}
// --------------------------------------------------------------------------
// Firebase insert Daten mit set 
// oder push wenn id automatisch vergeben werden soll
// --------------------------------------------------------------------------
function insertDaten(id) {
    $('#info').html('insertDaten');
    firebase.database().ref("user/" + id + "/").set({
        id: parseInt(id) + 1,
        name: "Ein neuer User " + parseInt(id) + 1,
        hobbies: "keine"
    });
}
// --------------------------------------------------------------------------
// Firebase update von Daten
// --------------------------------------------------------------------------
function updateDaten(id) {
    $('#info').html('updateDaten');
    firebase.database().ref("user/" + id + "/").set({
        id: parseInt(id) + 1,
        name: "Kurt",
        hobbies: "keine"
    });
}

