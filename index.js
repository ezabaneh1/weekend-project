let readlineSync = require('readline-sync');


 cl=(words) => console.log(words);
 random5Number = () => Math.floor(Math.random()* 5);
let userName
let currentweek = 1;
let Money = 100;
let cInv = [0,0,0,0,0,0,0,0,0,0,0,0,];
let totalInventory = cInv.reduce((a,b) => a+b,0);


const Seller = 
{
    one :
    {
        Name: "Jose Rufino",
        Lot: {
            Size: [5,6,7,8,9],
            Price:[2,1.7,1.8,1.55,2.1,] 
            },
    }

};

const Buyer =
{
    one:
    {
        Name: "Marco's Restaurants",
        Lot:{
            Size: [15,13,7,9,17],
            Price: [4.3,3.7,5,7,3.3],
            },
        Freight: 3000
    }

}
 

let s1CurrentLotSize =  Seller.one.Lot.Size[random5Number()];
let s1CurrentLotPrice = Seller.one.Lot.Price[random5Number()];
let totalS1CurrentOffer = s1CurrentLotPrice*s1CurrentLotSize*1000
totalS1CurrentOffer = totalS1CurrentOffer.toFixed(2);

let b1CurrentLotOffer = Buyer.one.Lot.Size[random5Number()];
let b1CurrentLotPrice = Buyer.one.Lot.Price[random5Number()];
let totalB1CurrentOffer =  (b1CurrentLotOffer*b1CurrentLotPrice*1000)-Buyer.one.Freight
totalB1CurrentOffer = totalB1CurrentOffer.toFixed(2);



function PrintScreen()  {

cl(`        Week ${currentweek}                 Bank Account: $${Money},000.00  `)
cl(`                             Total Inventory('000):   ${totalInventory}         `)
cl('')
cl(`    Sellers                                             Buyers`)
cl('')
cl(` 1 ${Seller.one.Name}                                    7 ${Buyer.one.Name}`);
cl('')
cl(`${s1CurrentLotSize},000 kgs, $${s1CurrentLotPrice}/kg                                 ${b1CurrentLotOffer},000 kgs, $${b1CurrentLotPrice}/kg   Freight: $${Buyer.one.Freight}`);
cl(`Total Purchase (1)    $${totalS1CurrentOffer}                    Total Sale (7)    $${totalB1CurrentOffer}`)

}



function Intro() 
{
    setTimeout(() => {  console.log(`${userName}, so you want to get into the Avocado business?`); }, 1000);
    setTimeout(() => {  console.log("Here you will be buying small lots locally"); }, 3000);
    setTimeout(() => {  console.log("and shipping them to clients around the world"); }, 5000);
    setTimeout(() => {  console.log("It is important you be careful to watch your inventory "); }, 8000);
    setTimeout(() => {  console.log("because avocados in your inventory will expire every 12 weeks"); }, 11000);
    setTimeout(() => {  console.log("Get rich, or eat Guacamole trying"); }, 17000);
}



userName = readlineSync.question("What is your name?  ");
Intro();




