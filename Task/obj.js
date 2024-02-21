const obj1 = { name: 'Arthana', age: 30 };
const obj2 = { name: 'Person1', age: 30 };

const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

if (keys1.length !== keys2.length) {
    console.log("Objects are not equal");
} else {
    let isEqual = true;
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        console.log("Objects are equal");
    } else {
        console.log("Objects are not equal");
    }
}
