// Function constructor
function FourWheeler(model, color, speed, fuel) {
    this.model=model;
    this.color=color;
    this.speed=speed;
    this.fuel=fuel;
}


// Parent object fro Object.create
let FourWheelerObject = {
   model:"Tototo corolla",
   color:"black",
   speed:"120mph",
   fuel:"10kmpl",
}

// Store function contructor object here
var car1 =new FourWheeler("Toyoto coralla","black","117mph","9kmpl")


// Store Object.create here
var car2=Object.create(FourWheelerObject)

export {car1, car2}