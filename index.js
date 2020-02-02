let readlineSync = require('readline-sync');


 cl=(words) => console.log(words);
 random5Number = () => Math.floor(Math.random()* 5);
let userName
let currentweek = 1;
let money = 100;
let cInv = [0,0,0,0,0,0,0,0,0,0,0,0];
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



cl(`        Week ${currentweek}                 Bank Account: $${money},000.00  `)
cl(`                             Total Inventory('000):   ${totalInventory}         `)
cl('')
cl(`    Sellers                                             Buyers`)
cl('')
cl(` 1 ${Seller.one.Name}                                    2 ${Buyer.one.Name}`);
cl('')
cl(`${s1CurrentLotSize},000 kgs, $${s1CurrentLotPrice}/kg                                 ${b1CurrentLotOffer},000 kgs, $${b1CurrentLotPrice}/kg   Freight: $${Buyer.one.Freight}`);
cl(`Total Purchase (1)    $${totalS1CurrentOffer}                    Total Sale (7)    $${totalB1CurrentOffer}`)

}


let menu = ()=>{

    buySellOptions = [`Buy ${s1CurrentLotSize} tons, $${totalS1CurrentOffer}`,'2', '3',`Sell ${b1CurrentLotOffer} tons, $${totalB1CurrentOffer}` ];
    let currentAction = readlineSync.keyInSelect(buySellOptions, null,
    {cancel : 'Exit Game'});

    if (currentAction = 1 ){

        money = money - totalS1CurrentOffer/1000;
        cInv[0] = (cInv[0] + s1CurrentLotSize);
        totalInventory = cInv.reduce((a,b) => a+b,0);
        PrintScreen();
       
    } 
    else if(currentAction = 4)
    {
        money = money+15;
        cInv[0] = -5;
        PrintScreen();
    }
    else 
    {console.log(`\nThanks for playing\n`)
        process.exit()    
    }

}



userName = readlineSync.question("What is your name?  ");
PrintScreen();
buySellOptions = [`Buy ${s1CurrentLotSize} tons, $${totalS1CurrentOffer}`,'2', '3',`Sell ${b1CurrentLotOffer} tons, $${totalB1CurrentOffer}` ];
    let currentAction = readlineSync.keyInSelect(buySellOptions, null,
    {cancel : 'Exit Game'});

    if (currentAction = 1 ){

        money = money - totalS1CurrentOffer/1000;
        cInv[0] = (cInv[0] + s1CurrentLotSize);
        totalInventory = cInv.reduce((a,b) => a+b,0);
        PrintScreen();
        menu()
       
    } 
    else if(currentAction = 4)
    {
        money = money+15;
        cInv[0] = -5;
        PrintScreen();
    }
    else 
    {console.log(`\nThanks for playing\n`)
        process.exit()    
    }
;





