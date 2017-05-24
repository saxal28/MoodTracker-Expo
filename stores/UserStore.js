import mobx from 'mobx';
import {observable, action} from 'mobx';
import {Firebase} from "../services/Firebase";

class Store {

    @observable store = {
        username: null,
        password: null,
        weight: [],
        dailyWeight: {
            weight: 170,
            date: new Date(),
            generatedPickerRange: 170,
            alreadyLogged: false

        }
    }

    @action setStateProp(field, value) {
        this.store[field] = value;
        console.log(field, value, this.store)
    }

    @action checkStore() {
        console.log(this, this.store, this.store.username)
    }

    @action initializeStats(arr) {

    }

    @action setDailyWeight(field, value) {
        this.store.dailyWeight[field] = value;
        console.log(this.store.dailyWeight)
    }

    @action saveDailyStats(dailyWeight){
        Firebase.saveStats(dailyWeight);
    }

}

const UserStore = new Store();

export default UserStore;