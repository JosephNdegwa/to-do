import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

//state
const state = {
    pageTitle: 'TO DO'
}

//getters
const getters = {
    getPageTitle(state) {
        return state.pageTitle;
    }
};

const store = new Vuex.Store({
    state,
    getters
})

export default store;