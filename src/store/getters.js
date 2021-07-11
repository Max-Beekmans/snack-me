export default {
    featuredItems(state) {
        console.log(state.items);
        return state.items;
    },
    signedUser(state) {
        return state.signedUser;
    }
}
