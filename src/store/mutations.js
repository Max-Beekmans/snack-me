
export default {
    initStore(state) {
        let userKey = localStorage.getItem('signedUser');

        console.log(userKey);

        if (userKey)
            state.signedUser = userKey;
    },
    addItems(state, items) {
        state.items = items;
    },
    addItem(state, item) {
        state.items.push(item);
    },
    signInUser(state, user) {
        console.log(user.email);
        localStorage.setItem("signedUser", user.email);
        state.signedUser = user;
    }
}