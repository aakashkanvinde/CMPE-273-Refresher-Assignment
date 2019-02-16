class Shoes{
    constructor(name,size,brand,color){
        this.name = name;
        this.size = size;
        this.brand = brand;
        this.color = color;
    }

    wear(size){ 
        if (this.size < 8){
            console.log(`\nThese ${this.brand} shoes don't fit and are too small\n`);
        }
        else{
            console.log(`\nThese ${this.brand} shoes are awesome and fit perfectly\n`);
        }
    }

    sports(){
        console.log(`\nThese ${this.brand} shoes are perfect for any sports\n`);
    }
}

class Player extends Shoes{
    jog(){
        console.log(`\nThese ${this.brand} shoes are perfect for jogging and brisk walking\n`);
    }
}

let gautam = new Player("Gautam",8,"PUMA","Black");
let rooney = new Shoes("Rooney",9,"Nike","Red");

rooney.sports();
gautam.jog();
gautam.wear(8);
rooney.wear(9);
