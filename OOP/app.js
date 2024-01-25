//OOP Principles: Polymorphism

// class Bird {
//     useWings() {
//         console.log("Flying!")
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!")
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"



class Home {
    useWater(){
        console.log("Water open!")
    }
}
class Dishwasher extends Home {
    useWater(){
        super.useWater()
        console.log("Dishwasher Works!")
    }
    useWater2(){
        console.log("Dishwasher Works but no water!")
    }
}
class Washer extends Home{
    useWater(){
        super.useWater()
        console.log("Washer Works!")
    }
}
class Clothes extends Washer{
    useWater(){
        super.useWater()
        console.log("Clothes washed!")
    }
}

var useDishwasher = new Dishwasher();
var useWasher = new Washer();
var washClothes = new Clothes();

useDishwasher.useWater();
useDishwasher.useWater2();
useWasher.useWater();
washClothes.useWater();

