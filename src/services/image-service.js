import { fbStorage } from '@/firebase';

const repo = function() {
    const ref = fbStorage.ref();

    let getImageRef = function(imageRef) {
        return ref.child(imageRef);
    };

    let getDownloadUrl = function(ref) {
        return ref.getDownloadURL();
    };

    return {
        getImageRef,
        getDownloadUrl
    }
}();

export default repo;