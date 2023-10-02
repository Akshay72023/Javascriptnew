console.log('person1:shows ticket');
console.log('person2: shows ticket');

const preMovie= async ()=>{
    const promiseWifeBringTicket = new Promise((resolve,reject)=>{setTimeout(() => {resolve('ticket');},3000);});
    const getPopcorn=new Promise((resolve,reject)=>{resolve(`popcorn`)});
    const getButter=new Promise((resolve,reject)=>{resolve(`popcorn`)});
    const getColddrinks=new Promise((resolve,reject)=>{resolve(`colddrinks`)});

    let ticket= await promiseWifeBringTicket;

    console.log(`Wife:I have the ${ticket}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: i am hungry`);

    let popcorn= await getPopcorn;

    console.log(`Husband:I got some popcorn ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: i am butter on my popcorn`);

    let butter=await getButter;

    console.log(`Husband:I got some ${butter}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: i need colddrinks also`);

    let colddrinks= await getColddrinks;

    console.log(`Husband:I got some ${colddrinks}`);

    return ticket;
}
preMovie().then((ans)=>{console.log(ans)});



console.log('person4: shows ticket');
console.log('person5: shows ticket');