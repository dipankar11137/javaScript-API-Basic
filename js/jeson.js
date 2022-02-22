// javaScript Object notation
// JSON
const user = { id: 11, name: 'Gorib ar Amir', job: 'actor' };

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);


const shop = {
    name: 'Alia Stor',
    address: 'Ranbir rode',
    profit: 15000,
    products: ['Laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};
// string to jSON convert
const shopStringified = JSON.stringify(shop);
// jSON to string convart
const convert = JSON.parse(shopStringified);
console.log(shop);
console.log(shopStringified);
console.log(convert);