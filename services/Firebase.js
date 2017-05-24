// ==============================
// firebase backend
// ==============================

import firebase from "firebase";
import { Actions } from 'react-native-router-flux';
import UserStore from "../stores/UserStore";

class Db {


    initializeFirebase() {

        //load user and data and push to UserStore
        console.log("initializing database....");
    }

    createUser() {
        console.log("creating user....");
    }

    loginUser(email, password){
        console.log("logging user in...");
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("login success!");
                Actions.home();
            })
            //if user doesnt exist, create user
            .catch((e) => {
                console.log(e)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log("create user success!");
                        Actions.home();
                    })
                    .catch(e => {
                        console.log(e.message);
                    });
            });
    }

    logoutUser(){
        console.log("logging out user....")

        firebase.auth().signOut()
            .then (() => {
                console.log("...logged out")
                Actions.login();
            })
            .catch( e => console.log(e));
    }

    getCurrentUser() {
        return firebase.auth().currentUser;
    }

    saveStats(dailyWeight) {

    const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/stats`)
            .push(dailyWeight)
            .then((stats) => {
                console.log("stats saved", stats)
                Actions.home();
            })
            .catch(e => console.log(e));

    };

    updateStats(weight, date, uid) {

    const { currentUser } = firebase.auth();
    const statsObj = { weight, date, uid }

    firebase.database().ref(`/users/${currentUser.uid}/stats/${uid}`)
        .set(statsObj)
        .then((stats) => {
            console.log("stats updated", stats)
            Actions.home();
        })
        .catch(e => console.log(e));
    };

    getWeight() {

        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/stats`)
            .on('value', snapshot => {
                UserStore.initializeStats(snapshot);
                return snapshot.val();
            });
    }

}

const Firebase = new Db();

export {Firebase}