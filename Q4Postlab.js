function displayObject(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

let person = {
    name: "Ananya",
    age: 17,
    city: "Hyderabad"
};

displayObject(person);