// #2.11 Returns

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    pow: function(a,b){
        return a**b;
    }
}

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);

//console.log(plusResult);
//console.log(minusResult);

// 변수에 값이 저장되어 있기에, function이 무언가를 return 했기에 각 변수에 접근하여 값을 알 수 있다.