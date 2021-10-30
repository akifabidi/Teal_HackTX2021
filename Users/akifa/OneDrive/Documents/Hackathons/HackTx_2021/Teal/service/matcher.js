buyOrders = [];
sellOrders = []; 

const O_WALLET = "abcxyz";


export function addBuyOrder(buyer, creatorId, quantity, price) {
   let order = {
       walletAddress: buyer,
       id: creatorId,
       price: price,
       quantity: quantity,
   };
   buyOrders[buyOrders.length] = order;
   //Take eth from buyer's wallet to our wallet
   transferEth(buyer, O_WALLET, quantity);
   //Attempt Matching
   match();
}
 
export function addSellOrder(seller, creatorId, quantity, price) {
   let order = {
       walletAddress: seller,
       id: creatorId,
       price: price,
       quantity: quantity,
   };
   sellOrders[sellOrders.length] = order;
   //Transfer NFT from wallet to our wallet
   transferNFT(seller, O_WALLET, quantity);
   //Attempt Matching
   match();
}
 
function transferNFT(from, to, quantity) {
}

function transferEth(from, to, quantity) {
}

/*
Attempt matching.
Takes first element of buyOrders and first element of sellOrders and reduces their quantity by the smallest amount.
If the quantity is 0, remove the order from the list.
If successful, transfer NFT from buyer's wallet to our wallet
*/
function match() {
    while (buyOrders.length > 0 && sellOrders.length > 0) {
         let buyOrder = buyOrders[0];
         let sellOrder = sellOrders[0];

        //  let quantityLeft = buyOrder.quantity;
         let quantity = Math.min(buyOrder.quantity, sellOrder.quantity);
         let price = buyOrder.price;
         if (quantity > 0) {
              //Transfer NFT from our wallet to buyer's wallet
              //Transfer eth from our wallet to seller's wallet
              buyOrder.quantity -= quantity;
              sellOrder.quantity -= quantity;
              if (buyOrder.quantity == 0) {
                buyOrders.shift();
              }
              if (sellOrder.quantity == 0) {
                sellOrders.shift();
              }
         } 
    }
}