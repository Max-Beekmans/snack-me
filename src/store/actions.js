import itemService from '../services/item-service';
import authService from '@/services/auth-service';

export default {
    getItems({ commit }) {
        itemService.getItems()
            .then((res) => {
                const documents = res.docs.map(doc => doc.data());
                commit('addItems', documents);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    signIn({ commit }, user) {
        console.log("signIn");
        return new Promise((resolve, reject) => {
            authService.emailSignIn(user.username, user.password)
                .then(res => {
                    let user = res.user;
                    console.log(user);
                    resolve(user);
                    commit('signInUser', user);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                });
        })
    }
}