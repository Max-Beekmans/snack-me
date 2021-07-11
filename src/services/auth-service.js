import { fbAuth } from '@/firebase';

const authService = function() {

    let emailSignIn = function(email, password) {
        return fbAuth.signInWithEmailAndPassword(email, password);
    }

    return {
        emailSignIn
    }
}();

export default authService