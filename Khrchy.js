// Define an array of transactions
const khrchy = [
    { id: 1, category: 'Food', price: 10 },
    { id: 2, category: 'Food', price: 20 },
    { id: 3, category: 'Entertainment', price: 30 },
    { id: 4, category: 'Entertainment', price: 40 },
    { id: 5, category: 'Food', price: 50 },
    { id: 6, category: 'Shopping', price: 60 },
    { id: 7, category: 'Shopping', price: 70 },
];

function totalKhrchyByCategory(khrchy){

    const totalkhrchy = {};

     khrchy.forEach(item => {
        const {category,price} = item;
       
        if(totalkhrchy[category]){
            totalkhrchy[category] += price;
        }
else{
    totalkhrchy[category] = price;
}

 });

 const result = Object.keys(totalkhrchy).map(category => ({
    category,
    totalSpent: totalkhrchy[category]
}));

return result;



}
console.log(totalKhrchyByCategory(khrchy));
