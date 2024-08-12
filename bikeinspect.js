
const bikes = ["Pulsar NS 200", "Kawasaki Ninja 300", "Yamaha R15", "Honda CB350", "KTM RC 390"];
const prices = [125000, 350000, 150000, 300000, 275000];

alert("Available bikes: \n1. Pulsar NS 200\n2. Kawasaki Ninja 300\n3. Yamaha R15\n4. Honda CB350\n5. KTM RC 390");


const bikelist = parseInt(prompt("Enter the number of the bike you want to buy (1-5):")) - 1;

if (bikelist >= 0 && bikelist < bikes.length) 
{
    const Userchoice = bikes[bikelist];
    const bikeprice = prices[bikelist];

  
    alert(`Bike prices: 
 1. Pulsar NS 200: 125000
 2. Kawasaki Ninja 300: 350000
 3. Yamaha R15: 150000
 4. Honda CB350: 300000
 5. KTM RC 390: 275000`);

    
    const Downpayment = parseFloat(prompt(`Enter the amount you can give as down payment for ${Userchoice} :`));

    
    if (Downpayment >= bikeprice * 0.1)
         { 
        alert(`You are eligible to buy the ${Userchoice}!`);
       } 
    else 
    {
        alert(`You are not eligible to buy the ${Userchoice}. You need a down payment of at least ${bikeprice * 0.1}.`);
    }
} 
else 
{
    alert("Invalid  selection.");
}
