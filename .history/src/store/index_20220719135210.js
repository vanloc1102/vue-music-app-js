import { createStore } from 'vuex';
import { auth, userCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {
    async register({ commit }, payload) { // {commit} = context.commit : destructuring ES6
      const userCred = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      // get user by uid in firebase db, if not exist then insert new
      await userCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      userCred.user.updateProfile({
        displayName: payload.name,
      });

      commit('toggleAuth');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
    async logout({ commit }) {
      await auth.signOut();
      
      commit('toggleAuth');
    },
  },
});
