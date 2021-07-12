import { fbDb } from '@/firebase';

const repo = function() {
    let getItems = function() {
        return fbDb.collection('items').get();
    };

    let addItem = function(item) {
        return fbDb.collection("items").add({
            name: item.name,
            weight: item.weight,
            price: item.price,
            image: item.image
        });
    };

    return {
        getItems,
        addItem
    }
}();

export default repo;