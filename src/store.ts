import Vue from 'vue';
import Vuex from 'vuex';
import {state} from '@/store/models/models';
import getters from '@/store/getters/getters';
import mutations from '@/store/mutations/mutations';
import actions from '@/store/actions/actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});
