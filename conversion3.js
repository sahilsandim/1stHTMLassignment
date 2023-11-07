const Menu ={
    first:"application1",
    "new first":"Userofapplication1",
    second:"application2",
    third:69,
    fourth:[10,20,30,40],
    fifth:false,
    sixth:["one",'two',"three","fourth"],
    newMenu:{
        age:17,
        name:"sahil",
        email:"sahilsandim944@gmail.com"
    }
}
console.log(Menu)
console.log(Menu.first);
console.log(Menu["first"]);
console.log(Menu["sixth"][3]);
console.log(Menu.newMenu.name);
console.log(Menu["newMenu"]["name"]);
Menu.email = "sahilsandim944@gmail.com"

const newMenu = Menu;
console.log(Menu)
console.log(newMenu)
delete Menu.third;
console.log(Menu["new first"])
// console.log(Object.keys(Menu))
// console.log(Object.values(Menu))
// console.log(Object.entries(Menu))
// console.log(Menu.keyboard)
console.log(Menu.hasOwnProperty("fifth"));