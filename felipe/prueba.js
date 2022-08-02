let numbers=[2,5,6,3,1]
numbers.some(
    function(element){
        console.log(element);
        if(element == 6)
            return true;// para some return significa terminar
    }
)