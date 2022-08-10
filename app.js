// #2.10 Recap II
function plus(potato, salad){
    console.log(potato + salad);
}

//plus(5,10);

const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    pow: function(a,b){
        console.log(a**b);
    },
}
calculator.add(5,2);
calculator.minus(5,2);
calculator.divide(5,2);
calculator.pow(5,2);