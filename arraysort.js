//Sort array in ascending order
const num=[10,2,41,1,8,3];
console.log("number array before sorting: "+num);
num.sort(function(a,b){
    return a-b;
})
console.log("Sorted number array in ascending order: "+num);

//Sort array in descending order

const num1=[3,2,41,1,8,10];
console.log("number array before sorting: "+num1);
num1.sort(function(a,b){
    return b-a;
})
console.log("Sorted number array in descending order: "+num1);
//String array sorting in ascending order
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
console.log("String array after sorting in ascending order:"+fruits);


//String array sorting in descending order
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort()
fruits1.reverse()
console.log("String array after sorting in desscending order:"+fruits1);

