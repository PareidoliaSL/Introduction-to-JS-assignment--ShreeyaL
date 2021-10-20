//object property method//

let cart = {

 items: [
    
        { name: "apple", price: 33 , qty: 10 },
        { name: "banana", price: 25.5 , qty: 12},
        { name: "milk", price: 48 , qty: 2 },
        { name: "cheese", price: 250, qty: 1 },
        { name: "bread", price: 35, qty: 2 },
        { name: "baking powder", price: 200 , qty: 1},
        { name: "chocolate", price: 100, qty: 5 },
        { name: "berry packet", price: 238.5, qty: 1 },
        { name: "nuts", price: 175 , qty:1 },
        { name: "syrup", price: 300, qty:1 },

    ] ,

       

        totalPrice: function(items) {
            let sum = 0;
            items.forEach(function(item) {
                let calculation = item.price * item.qty;
                sum += calculation;
            })
            console.log('The total amount:',sum);
            }
        }
        console.log(cart);   
        cart.totalPrice(cart.items);


//simple method//

// const items = [
       
//     { name: "apple", price: 33 , qty: 10 },
//     { name: "banana", price: 25.5 , qty: 12},
//     { name: "milk", price: 48 , qty: 2 },
//     { name: "cheese", price: 250, qty: 1 },
//     { name: "bread", price: 35, qty: 2 },
//     { name: "baking powder", price: 200 , qty: 1},
//     { name: "chocolate", price: 100, qty: 5 },
//     { name: "berry packet", price: 238.5, qty: 1 },
//     { name: "nuts", price: 175 , qty:1 },
//     { name: "syrup", price: 300, qty:1 },

// ] ;

   

//    const totalPrice = function() {
//         let sum = 0;
//         items.forEach(function(item) {
//             let calculation = item.price * item.qty;
//             sum += calculation;
//         })
//         console.log('The total amount:',sum);
        
//     };
        
//     totalPrice();


