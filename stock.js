//Create an array containing the names of all items in the inventory maximum of 10.
let stockItems=["Papaya","Lettuce","RedOnion","Carrot","Cilantro","Orange","Kiwi"];

//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stockQuantities=[10,14,18,11,15,20,8];

//Write a function to add a new item to the inventory, updating both arrays.
function addToList(item,quantity){
    if(stockItems.length>=10 || stockQuantities>=10){
        console.log("Maximum items reached")
    }
    else{
        stockQuantities.push(quantity)  
       stockItems.push(item)
    }
}
addToList("Banana",10);
console.log(stockQuantities)
console.log(stockItems)

// Write a function to update the stock quantity of an existing item.
function updatedStock(itemName,updatedQ){
    let index= stockItems.indexOf(itemName);
    if(index !==-1){
        stockQuantities[index]=updatedQ;
    return (`quantity of ${itemName} has been updated to${updatedQ}`)
    } else{
        return "The item does not exist "
    }
}
updatedStock("Kiwi",17)
console.log(stockQuantities);

// Write a function to calculate the total number of items in the inventory.
function totalItems(){
    sum=0;
    for(let i=0;i<stockQuantities.length;i++){
        sum+=stockQuantities[i]
    
    }
    return sum
}
console.log(totalItems())

// Write a function to find the item with the lowest stock quantity.
function lowestStockQuantity(){
    let lowest=stockQuantities[0]
    let index=0
    for(let i=1;i<stockQuantities;i++){
        if(stockQuantities[i]<lowest){
            lowest=stockQuantities[i]
            index=i
        }
    }
    return(`The Item with lowest stock is:${stockItems[index]} (${lowest})`)
}
console.log(lowestStockQuantity())