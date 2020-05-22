

function sumPrimeNonPrime(input){
    function isPrime(value) {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return value > 1;
    }
    cmd = input.shift();
    let non_prime_sum = 0;
    let prime_sum = 0;
    while(cmd != "stop"){
        if (Number(cmd) < 0){
            console.log("Number is negative.")
        } else {
            if(isPrime(Number(cmd))){
                prime_sum += Number(cmd)
            } else {
                non_prime_sum += Number(cmd)
            }
        }
        cmd = input.shift()
    }
    console.log(`Sum of all prime numbers is: ${prime_sum}`)
    console.log(`Sum of all non prime numbers is: ${non_prime_sum}`)
}

sumPrimeNonPrime([3
    ,9
    ,0
    ,7
    ,19
    ,4
    ,"stop"
    ])