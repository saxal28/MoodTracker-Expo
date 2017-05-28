import mobx from 'mobx';
import {observable, action} from 'mobx';
import {Firebase} from "../services/Firebase";
import {daysArr} from "../util/utilityFunctions";

class Store {

    @observable store = {
        username: null,
        password: null,
        weight: [],
        dailyWeight: {
            weight: 170,
            date: formatDate(new Date()),
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

    @action initializeStats(data) {

    	if(data) {

    		console.log('data', data)

		    Object.keys(data).forEach((uid, index) => {
			    this.store.weight.push({...data[uid], uid})
		    })

	    }

    }

    @action setDailyWeight(field, value) {
        this.store.dailyWeight[field] = value;
        console.log(this.store.dailyWeight)
    }

    @action saveDailyStats(){
        const {dailyWeight} = this.store;
        Firebase.saveStats(dailyWeight);
    }

}

// 2017/05/27
function formatDate(date) {
	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

}
const UserStore = new Store();

export default UserStore;