import { fbStorage } from '@/firebase';

const repo = function() {
    const ref = fbStorage.ref();

    let getImageRef = function(imageRef) {
        return ref.child(imageRef);
    };

    let getDownloadUrl = function(ref) {
        return ref.getDownloadURL();
    };

    let uploadFile = function(ref, file) {
        return ref.put(file);
    }

    return {
        getImageRef,
        getDownloadUrl,
        uploadFile
    }
}();

export default repo;