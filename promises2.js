console.log('person1:shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringTicket = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
});
const getPopcorn=promiseWifeBringTicket.then((t)=>{
    console.log(`Wife:I have the tickets`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: i am hungry`);
    return new Promise((resolve,reject)=>{resolve(`${t} popcorn`)})
});

const getButter=getPopcorn.then((t)=>{
    console.log(`Husband:I got some popcorn`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: i am butter on my popcorn`);
    return new Promise((resolve,reject)=>{resolve(`${t} butter`)})
});

const getColddrinks=getButter.then((t)=>{
    console.log(`Husband:I got some butter`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: i need colddrinks also`);
    return new Promise((resolve,reject)=>{resolve(`${t} colddrinks`)})
});
getColddrinks.then((ans)=>console.log(ans));

console.log('person4: shows ticket');
console.log('person5: shows ticket');