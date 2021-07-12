import itemService from '../services/item-service';
import authService from '../services/auth-service';

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
    addItem({ commit }, item) {
        itemService.addItem(item)
            .then(res => {
                console.log(res);
                commit('addItem', item);
            }).catch(err => {
                console.log(err);
        });
    },
    signIn({ commit }, user) {
        return new Promise((resolve, reject) => {
            authService.emailSignIn(user.email, user.password)
                .then(res => {
                    let user = res.user;
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