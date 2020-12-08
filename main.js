/**
 * Problem 1
 * 
 * Sum of multiples of three and five
 * 
 * 
 */



 // Solution 1;
 function sumOfThreeAndFiveOne(n){
    let sum = 0;
    let i = 1;

    while(i < n){
        if(i % 3 === 0 || i % 5 === 0) sum += i;
        i++;
    }
    
    return  sum; 
 }
 
 // Solution 2;
 function sumOfThreeAndFiveTwo(n){
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum;
 }


 



/**
 * 
 * Problem 2
 * 
 * Sum of even fibonacci numbers 
 * 
 * 
 */

 function sumOfEvenFibonacci(n){
     let sum = 0;
     let a = 1;
     let b = 1;

     while(b < n){
         if(b % 2 === 0) sum += b;
         let temp = a;
         a = b;
         b = temp + a;

     }

     return sum;
 }


 /**
  * Problem 3 
  * 
  * Largest Prime Factor
  * 
  */

//   Solution 1;
  function largestPrimeFactorOne(n){
      if(n < 2) return n + " does not have prime factors";

      let largestPrimeFactor;

      for(let i = 2; i <= n / 2; i++){
          if(n % i === 0 && isPrime(i)) largestPrimeFactor = i;
      }

      function isPrime(number){
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0) return false;
        }
        return number > 1;
      }

      return largestPrimeFactor || n;
  }

  // Solution 2;

  function largestPrimeFactorTwo(n){
    if(n < 2)  return -1;

    let i = 2;
    while(i <= n){
        if(n % i === 0){
            n /= i;
        }else{
            i++;
        }
    }

    return i;
  }

//   console.log(largestPrimeFactorOne(9380398));
// console.log(largestPrimeFactorTwo(600851475143));


/**
 * Probelm 4
 * 
 * Largest palindrome product 
 * 
 */


  function largstPalindromeProduct(){



    return num;
  }

  /**
   * Probelm 5
   * 
   * Smallest multiple
   * 
   * findes smallest number which is multiple of number from 1 to n 
   * In other words this function findes lcm of number from 1 to n 
   * 
   */

   function smallestMultiple(n){
       // primeMltiples saves prime numbers and its powrs for smallest lcm 
       let primeMultiples = {1:1};

       for(let i = 2; i <= n; i++){
           let num = i;
           let counter = 2;

           // for every num/i  find its divisors and powers and update primeMultiples;
            while(num >= counter){
                if(num % counter === 0){
                    let power = 1;
                    while(true){
                        if(num  % Math.pow(counter,power + 1) === 0){
                            power++;
                        }else{
                            break;
                        }
                    }
                    if(primeMultiples[counter]){
                        primeMultiples[counter] = Math.max(power, primeMultiples[counter]);
    
    
                    }else{
                        primeMultiples[counter] = power;
                        counter++;
    
                    }
                    num /= counter;
                }else{
                    counter++;
                }

            }
            
       }

       let lcm = 1;

       for(let key in primeMultiples){
           lcm *= Math.pow(Number(key),primeMultiples[key]);
       }


       return lcm;

   }

//    smallestMultiple(20);





/********************************************************* */
/********************************************************* */
/***************MATH FUNCTIONS NOT EULER PROJECT ******** */
/********************************************************* */
/********************************************************* */
/********************************************************* */
function findPrimeFactorization(n){
    if(n < 1){
        console.log("Please Enter NATURAL number");
        return -1;
    } 
    let divisorsArr = [];
    

    let i = 2;
    while(i <= n){
        if(n % i === 0){
            n /= i;
            divisorsArr.push(i);
            
        }else{
            i++;
        }
    }

    // console.log(divisorsArr); // array with prime factors 
    // console.log(divisorsArr.reduce((sum, num) => sum + num, 0)); // same array but sorted 

    let primeFactorization = {};

    divisorsArr.forEach(num => {
        if(primeFactorization[num]){
            primeFactorization[num]++;
        }else{
            primeFactorization[num] = 1;
        }
    })

    console.log(primeFactorization);
}

// findPrimeFactorization(10);


// finds factosr of number;
function getFactors(num) {
    const isEven = num % 2 === 0;
    let inc = isEven ? 1 : 2;
    let factors = [1, num];
  
    for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
      if (num % curFactor !== 0) continue;
      factors.push(curFactor);
      let compliment = num / curFactor;
      if (compliment !== curFactor) factors.push(compliment);
    }
  
    console.log(factors.sort((a,b) => a - b));
}

// Checks if number is prime or not!!
function isPrime(n){
    if(n < 2) return false;
    if(n <= 3) return true;

    if(n & 1 === 0) return false;
    if(n % 3 === 0) return false;

    for(let i = 5;  i * i <= n; i+=6){
        if(n % i === 0 || n % (i + 2)) return false;
    }

    return true;

}


// finds first n palindrome numbers
function find_first_n_palindrome(n){
    let counter = 0;
    let number = 0;
    let palindromeArr = [];

    while(counter < n){
        let reverseNumber = +number.toString().split("").reverse().join("");
        if(reverseNumber === number){
            palindromeArr.push(number);
            counter++;
        }
        number++;
    }

    return palindromeArr;

}
// console.log(find_first_n_palindrome(100));

// checks if number is palindrome or not 
function isPalindrome(n){
    let n1 = +n.toString().split("").reverse().join("");
    return n === n1;
}
// console.log(isPalindrome(123321));

// 
function longest_consequativ_subarray_sum(array){
    let currSum = 0;
    let maxSum = 0;
    let index = 0;
    console.log(array);

    while(index < array.length){
        currSum = Math.max(0, currSum + array[index]);
        maxSum = Math.max(maxSum, currSum);
        index++;
    }

    return maxSum;
}

// console.log(longest_consequativ_subarray_sum([-1,-2,-3,-5,-6,-7,-3,-4]));

// LCM solution 1
function lcm(a,b){
    let lcm = 1;
    let counter = 2;
    let x = a;
    let y = b;

    while(x >= counter || y >= counter){
        if(x % counter === 0 && y % counter === 0){
            lcm *= counter;
            x /= counter;
            y /= counter;
        }else if(x % counter === 0){
            lcm *= counter;
            x /= counter;
        }else if(y % counter === 0 ){
            lcm *= counter;
            y /= counter;
        }else{
            counter++;
        }

    }

    return lcm;


}

// LCM solution 2
function lcm_2(a,b){
    function find_gcd(a,b){
        if(!b){
            return a;
        }

        return  find_gcd(b,a % b);
    }

    let gcd = find_gcd(a,b);
    console.log(gcd);
    return (a*b)/gcd;
}
// console.log(lcm(20,48));
// console.log(lcm_2(20,48));



/********************************************************* */
/********************************************************* */
/***************MATH FUNCTIONS NOT EULER PROJECT END  ******** */
/********************************************************* */
/********************************************************* */
/********************************************************* */




/* prime generator  START  !!! WARNING !!!  CPU intensive functions */

 // finde first n primes with eratostenes method 
function getPrimes(max) {
    let arr = new Array(max).fill(undefined);
    for (let i = 2; i < max; i++) {
      if (arr[i] === undefined) {
        arr[i] = true;
        for (let j = i + i; j < max; j += i) {
          arr[j] = false;
        }
      }
    }
    return arr
      .map((item, i) => item ? i : false)
      .filter(Boolean)
  }
  // getprimes argument has to be enought 
  //larg to be able to finde n prime numbers


// console.log(isPrime(1299721));
// primes STart 
//   const primes = [ 2, 3 ];
//   function isNextPrime(n) {
//     return primes.every(d => n % d > 0);
//   }
  
//   let i = 1;
//   while (primes.length < 100001) {
//     const n = i * 3 + 1.5 + .5 * (-1) ** (i + 1);
//     if (isNextPrime(n)) primes.push(n);
//     i++;
//   }
//   console.log(primes[10000]);

// primes End  

/* prime generator  END  */




const str = "1Hello 4 there4";


const regx = /^[1-9A-Z]/;

// console.log(".1js3d2hs1k1".match(""));


console.log(regx.exec(str));
