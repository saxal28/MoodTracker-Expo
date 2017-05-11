import mobx from 'mobx';
import {observable, action} from 'mobx'

class Store {

    @observable store = {
        username: null,
        password: null
    }

    @action setStateProp(field, value) {
        this.store[field] = value;
        console.log(field, value, this.store)
    }

    @action checkStore() {
        console.log(this, this.store, this.store.username)
    }

}

const UserStore = new Store();

export default UserStore;