
export default {
    addItems(state, items) {
        state.items = items;
    },
    signInUser(state, user) {
        console.log(user);
        state.signedUser = user;
    }
}