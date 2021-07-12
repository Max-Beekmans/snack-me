import { fbAuth } from '@/firebase';

const authService = function() {

    let emailSignIn = function(email, password) {
        return fbAuth.signInWithEmailAndPassword(email, password);
    }

    let firebaseUser = function() {
        return fbAuth.currentUser;
    }

    return {
        emailSignIn,
        firebaseUser
    }
}();

export default authService