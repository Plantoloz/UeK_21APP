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
