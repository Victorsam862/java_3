var menu = [
    {
        id: 1,
        title: "Creamy mini Burger and fries",
        category: "Dinner",
        Price: 11.99,
        img: "../images/item2.jpg",
        desc: `The creamy mini burger gives you a taste of the unknown
        a combo with fries and side ketchup,`
    },
    {
        id: 2,
        title: "Italian fries & ketchup",
        category: "Snack",
        Price: 9.99,
        img: "../images/item3.jpg",
        desc: `Italian fries mixed in oregano, the signature fries
        ketchup on the side ,`
    },
    {
        id: 3,
        title: "Burger and fries",
        category: "Lunch",
        Price: 17.99,
        img: "../images/item4.jpg",
        desc: `Our signature mini burger and fries, the taste of a real good meal 
        with mustard mayo on the side,`
    },
    {
        id: 4,
        title: "Platter",
        category: "Family meal",
        Price: 32.99,
        img: "../images/item5.jpg",
        desc: `A mmix of everything on the menu, family meal, 
        combining a taste of everything on for a large taste bud if you can handle it,`
    },
    {
        id: 5,
        title: "Burger combo",
        category: "Snack",
        Price: 19.99,
        img: "../images/item6.jpg",
        desc: `Large signature burger combo,the yummy taste 
        of a star, with coke,`
    },
    {
        id: 6,
        title: "Margerrita Pizza",
        category: "Lunch",
        Price: 12.99,
        img: "../images/item7.jpg",
        desc: `Our signature margerrita pizza, give you the taste you
        never expected,`
    },
    {
        id: 7,
        title: "Grilled sandwich",
        category: "Lunch",
        Price: 10.99,
        img: "../images/item8.jpg",
        desc: `Our signature grilled sandwich, the taste you never expected,
        with creamy sauce spread ,`
    },
    {
        id: 8,
        title: "Beef patty Burger",
        category: "Lunch/Dinner",
        Price: 13.99,
        img: "../images/item9.jpeg",
        desc: `Beef patty burger, double beef,satisfy your cravings with this creamy burger,`
    },
]

var content = document.getElementById('content');

window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
        return(`<article class="col col-5" >
        <img src=${item.img} alt="${item.title}">

        <div class="item-info">
            <div class="header">
                <h4 class="mt-3">${item.title}</h4>
                <span>$${item.Price}</span>
            </div>
            <p class="mt-3">${item.desc}</p>

        <div class="footer d-flex">
            <div class="category">${item.category}</div>
            <div class="id">${item.id}</div>
         </div>
        </div>
    </article>`)
    })
    displayMenu = displayMenu.join("")
    content.innerHTML = displayMenu
})






















// var content = document.getElementById('content');

// window.addEventListener("DOMContentLoaded", function(){
//     let displayMenu = menu.map(function(item){
//         return (`<article class="col col-5" >
//         <img src=${item.img} alt="${item.title}o">

//         <div class="item-info">
//             <div class="header">
//                 <h4 class="mt-3">${item.title}</h4>
//                 <span>$${item.Price}</span>
//             </div>
//             <p class="mt-3">${item.desc}</p>
//         </div>
//     </article>`)
       
//     } );
//     displayMenu = displayMenu.join("");
//     content.innerHTML = displayMenu
    
// })
