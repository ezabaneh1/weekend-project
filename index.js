let readlineSync = require('readline-sync');


 cl=(words) => console.log(words);
 random5Number = () => Math.floor(Math.random()* 5);
let userName
let currentweek = 1;
let money = 50000;
let cInv = [0,0,0,0,0,0,0,0,0,15,15,0];
let totalInventory = cInv.reduce((a,b) => a+b,0);
let currentAction;

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
            Price: [4.3,3.7,5,6,3.3],
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

let optionAvailability = [true,true,true,true,true,true];

function PrintScreen()  {



cl(`        Week ${currentweek}                 Bank Account: $${money}`)
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
    buySellOptions = [`Buy ${s1CurrentLotSize} tons, $${totalS1CurrentOffer}`,'hello', '3',`Sell ${b1CurrentLotOffer} tons, $${totalB1CurrentOffer}` ];
        currentAction = readlineSync.keyInSelect(buySellOptions, 'What do you want to do?',
        {cancel : 'Exit Game'});

        if (currentAction === 0 )
        {
            if(optionAvailability[0]===true)
            {
                if(money>=totalS1CurrentOffer){
                    buy1();
                    PrintScreen();
                    menu();
                }
                else{
                    console.log(`you so poor...not enough money, ${Username}`)
                    menu();
                }
    
            
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already purchased this lot    You've already purchased this lot      You've already purchased this lot")
                menu();
            }
           
        } 
        else if(currentAction == 1){
            console.log(currentAction);
        }
        else if(currentAction == 2){
        console.log(currentAction);
    }
        else if(currentAction == 3)
        {
            if(optionAvailability[3]===true)
            {
            sell1();
            PrintScreen();
            menu();
            }
            else{
                PrintScreen();
                console.log("\n\nYou've already sold this lot    You've already sold this lot      You've already sold this lot")
                menu();
            }
        }
        else 
        {console.log(`\nThanks for playing\n`)
            process.exit()    
        }
    
    }
    
 let inventoryLIFO = (inventorytosubtract)=>{

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




let buy1 = () => {
    money = money - totalS1CurrentOffer;
    cInv[0] = (cInv[0] + s1CurrentLotSize);
    totalInventory = cInv.reduce((a,b) => a+b,0);
    optionAvailability[0] = false;
}

let sell1 = () => {

    if(totalInventory>=b1CurrentLotOffer)
    {
        inventoryLIFO(b1CurrentLotOffer);
        money = +money + +totalB1CurrentOffer;
        optionAvailability[3] = false;

    }
    else
    {
        console.log("Not enough inventory available     Not enough inventory available      Not enough inventory available")
        menu();
    }
}

userName = readlineSync.question("What is your name?  ");
PrintScreen();
menu();



