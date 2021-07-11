import Vue from 'vue';
import Vuex from 'vuex';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [],
        signedUser: undefined
    },
    getters: getters,
    mutations: mutations,
    actions: actions
});