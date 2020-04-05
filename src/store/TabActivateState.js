import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ActivateId: 1    //アクティブなページのIDを表す
    },
    getters: {
        getActivateId(state) {
            return state.ActivateId;
        }
    },
    mutations: {
        setActivateId(state, id) {
            state.ActivateId = id;
        }
    },
    actions: {
        updateActivateId({ commit }, id) {

            //想定してない範囲のIDをアサーションで弾くべき
            commit("setActivateId", id);
        }
    }
});