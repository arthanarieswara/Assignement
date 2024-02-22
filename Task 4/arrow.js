// IIFE to print odd numbers in an array

((arr) => {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// IIFE to convert all strings to title caps in a string array

((arr) => {
    const titleCapsArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log(titleCapsArray);
})(["hello", "WORLD", "good", "morning"]);

// IIFE to calculate the sum of all numbers in an array

((arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);


// IIFE to return all prime numbers in an array

((arr) => {
    const isPrime = (num) => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const primeNumbers = arr.filter(num => isPrime(num));
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// IIFE to return all palindromes in an array


((arr) => {
    const isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    };

    const palindromes = arr.filter(str => isPalindrome(str));
    console.log(palindromes);
})(["radar", "level", "hello", "world", "madam"]);


// IIFE to return median of two sorted arrays of the same size


((arr1, arr2) => {
    const mergeArrays = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergeArrays.length / 2);

    let median;
    if (mergeArrays.length % 2 === 0) {
        median = (mergeArrays[mid - 1] + mergeArrays[mid]) / 2;
    } else {
        median = mergeArrays[mid];
    }

    console.log(median);
})([1, 3, 5], [2, 4, 6]);

// IIFE to remove duplicates from an array

((arr) => {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5, 5, 6]);

