var collection = {
    "1234" : {
        "name" : "Slash",
        "band" : "GunsNRoses",
        "song" : [
            "sweet child",
            "dont cry"
        ]
    },
    "5678" : {
        "name" : "Jimmy",
        "band" : "Led Zepplin",
        "song" : [
            "kashmir",
            "black dog"
        ]
    },
    "9012" : {
        "name" : "Buckethead",
        "band" : "GunsNRoses",
        "song" : [
            "this i love",
            "solo"
        ]
    },
    "3456" : {
        "name" : "Peter",
        "band" : "Beatles",
        "song" : [
            "hello",
            "let it go"
        ]
    }
};

function updateCollection(id,prop,val){
    if(val==="")
        delete collection[id][prop];

    else if(prop ==="song"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(val);
    }
    else
        collection[id][prop] = val;
    
    return collection;
    
}

// console.log(collection[5678].song[0]);
console.log(updateCollection(9012,))