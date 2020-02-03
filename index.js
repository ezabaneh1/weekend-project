let readlineSync = require('readline-sync');


 cl=(words) => console.log(words);
 random5Number = () => Math.floor(Math.random()* 5);
let userName
let currentweek = 1;
let money = 50000;
let cInv = [0,0,0,0,0,0,0,0,0,0,0,0];
let totalInventory = cInv.reduce((a,b) => a+b,0);
let currentAction;

const Seller = 
{
    one :
    {
        Name: "Jose Rufino",
        Lot: {
            Size: [5,6,7,8,9],
            Price:[2.8,2.1,3.5,1.8,3,] 
            },
    },
    two :
    {
        Name: "Nicolas Marcos",
        Lot: {
            Size: [2,1,3,4,1],
            Price:[2,2.7,1.8,2.55,2.7,] 
            },
    },
    three :
    {
        Name: "Jorge Negrete",
        Lot: {
            Size: [3,4,2,3,1],
            Price:[2,3,1.9,2.2,2.7,] 
            },
    }

};

const Buyer =
{
    one:
    {
        Name: "Marco's Restaurants",
        Lot:{
            Size: [15,13,7,9,12],
            Price: [3.4,3.7,2.7,3,3.3],
            },
        Freight: 5000
    },
    two:
    {
        Name: "George's Guacamole",
        Lot:{
            Size: [10,18,7,3,13],
            Price: [3,3.5,4,3.2,3.5],
            },
        Freight: 3000
    },
    three:
    {
        Name: "Luftwaffe Avocado",
        Lot:{
            Size: [15,8,7,9,17],
            Price: [4.3,2.7,3.5,3.7,3.3],
            },
        Freight: 10000
    }

}
 

let s1CurrentLotSize =  Seller.one.Lot.Size[random5Number()];
let s1CurrentLotPrice = Seller.one.Lot.Price[random5Number()];
let totalS1CurrentOffer = s1CurrentLotPrice*s1CurrentLotSize*1000
totalS1CurrentOffer = totalS1CurrentOffer.toFixed(2);

let s2CurrentLotSize =  Seller.two.Lot.Size[random5Number()];
let s2CurrentLotPrice = Seller.two.Lot.Price[random5Number()];
let totalS2CurrentOffer = s2CurrentLotPrice*s1CurrentLotSize*1000
totalS2CurrentOffer = totalS2CurrentOffer.toFixed(2);

let s3CurrentLotSize =  Seller.three.Lot.Size[random5Number()];
let s3CurrentLotPrice = Seller.three.Lot.Price[random5Number()];
let totalS3CurrentOffer = s3CurrentLotPrice*s1CurrentLotSize*1000
totalS3CurrentOffer = totalS3CurrentOffer.toFixed(2);

let b1CurrentLotOffer = Buyer.one.Lot.Size[random5Number()];
let b1CurrentLotPrice = Buyer.one.Lot.Price[random5Number()];
let totalB1CurrentOffer =  (b1CurrentLotOffer*b1CurrentLotPrice*1000)-Buyer.one.Freight
totalB1CurrentOffer = totalB1CurrentOffer.toFixed(2);

let b2CurrentLotOffer = Buyer.two.Lot.Size[random5Number()];
let b2CurrentLotPrice = Buyer.two.Lot.Price[random5Number()];
let totalB2CurrentOffer =  (b2CurrentLotOffer*b1CurrentLotPrice*1000)-Buyer.two.Freight
totalB2CurrentOffer = totalB2CurrentOffer.toFixed(2);

let b3CurrentLotOffer = Buyer.three.Lot.Size[random5Number()];
let b3CurrentLotPrice = Buyer.three.Lot.Price[random5Number()];
let totalB3CurrentOffer =  (b3CurrentLotOffer*b1CurrentLotPrice*1000)-Buyer.three.Freight
totalB3CurrentOffer = totalB3CurrentOffer.toFixed(2);

let optionAvailability = [true,true,true,true,true,true];

function PrintScreen()  {


cl('')
cl('')
cl(`        Week ${currentweek}                 Bank Account: $${money}`)
cl(`                             Total Inventory('000):   ${totalInventory}         `)
cl('')
cl(`    Sellers                                             Buyers`)
cl('')
cl(` (1) ${Seller.one.Name}                                    (4) ${Buyer.one.Name}`);
cl('')
cl(`${s1CurrentLotSize},000 kgs, $${s1CurrentLotPrice}/kg                                 ${b1CurrentLotOffer},000 kgs, $${b1CurrentLotPrice}/kg   Freight: $${Buyer.one.Freight}`);
cl(`Total Purchase (1)    $${totalS1CurrentOffer}                    Total Sale (7)    $${totalB1CurrentOffer}`)
cl('')
cl(` (2) ${Seller.two.Name}                                    (5) ${Buyer.two.Name}`);
cl('')
cl(`${s2CurrentLotSize},000 kgs, $${s2CurrentLotPrice}/kg                                 ${b2CurrentLotOffer},000 kgs, $${b2CurrentLotPrice}/kg   Freight: $${Buyer.two.Freight}`);
cl(`Total Purchase (1)    $${totalS2CurrentOffer}                    Total Sale (7)    $${totalB2CurrentOffer}`)
cl('')
cl(` (3) ${Seller.three.Name}                                    (6) ${Buyer.three.Name}`);
cl('')
cl(`${s3CurrentLotSize},000 kgs, $${s3CurrentLotPrice}/kg                                 ${b3CurrentLotOffer},000 kgs, $${b3CurrentLotPrice}/kg   Freight: $${Buyer.three.Freight}`);
cl(`Total Purchase (1)    $${totalS3CurrentOffer}                    Total Sale (7)    $${totalB3CurrentOffer}`)

}
let menu = ()=>{
    buySellOptions = [`Buy ${s1CurrentLotSize} tons, $${totalS1CurrentOffer}`,`Buy ${s2CurrentLotSize} tons, $${totalS2CurrentOffer}`, `Buy ${s3CurrentLotSize} tons, $${totalS3CurrentOffer}`,`Sell ${b1CurrentLotOffer} tons, $${totalB1CurrentOffer}`, `Sell ${b2CurrentLotOffer} tons, $${totalB2CurrentOffer}`, `Sell ${b3CurrentLotOffer} tons, $${totalB3CurrentOffer}`, "Next Week" ];
        currentAction = readlineSync.keyInSelect(buySellOptions, 'What do you want to do?',
        {cancel : 'Exit Game'});

        if (currentAction === 0 )
        {
            if(optionAvailability[0]===true)
            {
                if(money>=totalS1CurrentOffer){
                    buy1(totalS1CurrentOffer,s1CurrentLotSize, 0);
                    PrintScreen();
                    menu();
                }
                else{
                    console.log(`you so poor...not enough money, ${userName}`)
                    menu();
                }
    
            
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already purchased this lot    You've already purchased this lot      You've already purchased this lot")
                menu();
            }
           
        } 
        else if(currentAction == 1)
        {
            if(optionAvailability[1]===true)
            {
                if(money>=totalS2CurrentOffer){
                    buy1(totalS2CurrentOffer,s2CurrentLotSize, 1);
                    PrintScreen();
                    menu();
                }
                else{
                    console.log(`you so poor...not enough money, ${userName}`)
                    menu();
                }
    
            
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already purchased this lot    You've already purchased this lot      You've already purchased this lot")
                menu();
            }
        }
        else if(currentAction == 2){
            if(optionAvailability[2]===true)
            {
                if(money>=totalS3CurrentOffer){
                    buy1(totalS3CurrentOffer,s3CurrentLotSize, 2);
                    PrintScreen();
                    menu();
                }
                else{
                    console.log(`you so poor...not enough money, ${userName}`)
                    PrintScreen();
                    menu();
                }
    
            
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already purchased this lot    You've already purchased this lot      You've already purchased this lot")
                menu();
            }
    }
        else if(currentAction == 3)
        {
            if(optionAvailability[3]===true)
            {
            sell1(b1CurrentLotOffer,totalB1CurrentOffer, 3);
            PrintScreen();
            menu();
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already sold this lot    You've already sold this lot      You've already sold this lot")
                menu();
            }
        }
        else if(currentAction == 4)
        {
            if(optionAvailability[4]===true)
            {
            sell1(b2CurrentLotOffer,totalB2CurrentOffer, 4);
            PrintScreen();
            menu();
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already sold this lot    You've already sold this lot      You've already sold this lot")
                menu();
            }
        }
        else if(currentAction == 5)
        {
            if(optionAvailability[5]===true)
            {
            sell1(b3CurrentLotOffer,totalB3CurrentOffer, 5);
            PrintScreen();
            menu();
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already sold this lot    You've already sold this lot      You've already sold this lot")
                menu();
            }
        }
        else if(currentAction ==6)
        {
            nextday();
        }
        else 
        {console.log(`\nThanks for playing\n`)
            process.exit()    
        }
    
    }
    
 let inventoryFIFO = (inventorytosubtract)=>{

    if(inventorytosubtract>totalInventory)
    {
        console.log("not enough inventory available")
    }
    else{
        for(i=11;i>-1;i--)
        {
                if(cInv[i]>=inventorytosubtract)
            {
                cInv[i]=cInv[i]-inventorytosubtract;
                totalInventory = cInv.reduce((a,b) => a+b,0);

                i=-1;

            }
            else
            {
                inventorytosubtract=inventorytosubtract-cInv[i];
                totalInventory = cInv.reduce((a,b) => a+b,0);
                cInv[i]=0
            }
        }
    }        
 }   


0

let buy1 = (total$amount,lotsize, i) => {
    money = money - total$amount;
    cInv[0] = (cInv[0] + lotsize);
    totalInventory = cInv.reduce((a,b) => a+b,0);
    optionAvailability[i] = false;
}

let sell1 = (lotsize, lot$total, i) => {

    if(totalInventory>=lotsize)
    {
        inventoryFIFO(lotsize);
        money = +money + +lot$total;
        optionAvailability[i] = false;

    }
    else
    {
        console.log("Not enough inventory available     Not enough inventory available      Not enough inventory available")
        menu();
    }
}

let nextday = () => {

    for(i=11;i>0;i--){
        cInv[i] = cInv[(i-1)];
    }
    cInv[0]=0;

    totalInventory = cInv.reduce((a,b) => a+b,0);

     s1CurrentLotSize =  Seller.one.Lot.Size[random5Number()];
     s1CurrentLotPrice = Seller.one.Lot.Price[random5Number()];
     totalS1CurrentOffer = s1CurrentLotPrice*s1CurrentLotSize*1000
     totalS1CurrentOffer = totalS1CurrentOffer.toFixed(2);

    s2CurrentLotSize =  Seller.two.Lot.Size[random5Number()];
    s2CurrentLotPrice = Seller.two.Lot.Price[random5Number()];
    totalS2CurrentOffer = s2CurrentLotPrice*s1CurrentLotSize*1000
    totalS2CurrentOffer = totalS2CurrentOffer.toFixed(2);

    s3CurrentLotSize =  Seller.three.Lot.Size[random5Number()];
    s3CurrentLotPrice = Seller.three.Lot.Price[random5Number()];
    totalS3CurrentOffer = s3CurrentLotPrice*s1CurrentLotSize*1000
    totalS3CurrentOffer = totalS3CurrentOffer.toFixed(2);
    
     b1CurrentLotOffer = Buyer.one.Lot.Size[random5Number()];
     b1CurrentLotPrice = Buyer.one.Lot.Price[random5Number()];
     totalB1CurrentOffer =  (b1CurrentLotOffer*b1CurrentLotPrice*1000)-Buyer.one.Freight
    totalB1CurrentOffer = totalB1CurrentOffer.toFixed(2);

    b2CurrentLotOffer = Buyer.two.Lot.Size[random5Number()];
    b2CurrentLotPrice = Buyer.two.Lot.Price[random5Number()];
    totalB2CurrentOffer =  (b2CurrentLotOffer*b1CurrentLotPrice*1000)-Buyer.two.Freight
    totalB2CurrentOffer = totalB2CurrentOffer.toFixed(2);

    b3CurrentLotOffer = Buyer.three.Lot.Size[random5Number()];
    b3CurrentLotPrice = Buyer.three.Lot.Price[random5Number()];
    totalB3CurrentOffer =  (b3CurrentLotOffer*b1CurrentLotPrice*1000)-Buyer.three.Freight
    totalB3CurrentOffer = totalB3CurrentOffer.toFixed(2);


    
     optionAvailability = [true,true,true,true,true,true];

     currentweek = +currentweek + 1;

     PrintScreen();
     menu();


}

userName = readlineSync.question("What is your name?  ");
PrintScreen();
menu();



