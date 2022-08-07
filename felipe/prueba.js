/*let numbers=[2,5,6,3,1]
numbers.some(
    function(element){
        console.log(element);
        if(element == 6)
            return true;// para some return significa terminar
    }
)*/

let numbers = [2, 5, 6, 3, 1]     // Aqui declaramos una variable y creamos una arrays 
let newNumbers = numbers.filter( //aqui ponemos numbers.filter que quiere decir que numbers los vamos a filtrar
    function (num) {
        if (num % 2 == 0){
        return true 
        }
    }
)
console.log(newNumbers)




