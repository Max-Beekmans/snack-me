import { fbDb } from '@/firebase';

const repo = function() {
    let getItems = function() {
        return fbDb.collection('items').get();
    };

    let addItem = function(item) {
        fbDb.collection("items").add({
            first: item.first,
            last: item.last
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    };

    return {
        getItems,
        addItem
    }
}();

export default repo;