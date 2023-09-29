export default function joinObjects<T, U>(obj1: T, obj2: U): T & U {
    // return { ...obj1, ...obj2 };
    return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: "value 1 " };
const obj2 = { key2: "value 2 " };

const unity = joinObjects(obj1, obj2);

console.log(unity);
