// ==============================
// firebase backend
// ==============================

import firebase from "firebase";
import { Actions } from 'react-native-router-flux';

class Db {


    initializeFirebase() {
        console.log("initializing database....");
    }

    createUser() {
        console.log("creating user....");
    }

    loginUser(email, password){
        console.log("logging user in...");
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginSuccess(dispatch, user))
            //if user doesnt exist, create user
            .catch((e) => {
                console.log(e)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(Actions.home())
                    .catch(e => {
                        console.log(e.message);
                        loginFail(dispatch, e.message);
                    });
            });
    }

    logoutUser(){
        console.log("logging out user....")

        firebase.auth().signOut()
            .then (() => {
                Actions.login();
            })
            .catch( e => console.log(e));
    }

    updateStats() {
        console.log("updating weight....");
    }

}

const AppDatabase = new Db();

export {AppDatabase}