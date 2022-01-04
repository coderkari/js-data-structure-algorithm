
//MEMOIZATION

//Storing the results of expensive function calls and returning the cached result when the same inputs occur again

//memoizate solution
function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

//TABULATED VERSION
function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

//MEMOIZATION SOLUTION
function stairs(n, memo=[]) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  if (memo[n] > 0) return memo[n];
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo);
  return memo[n];
}

//TABULATION SOLUTION
//Time Complexity - O(N)
//Space Complexity - O(1)
function stairs(n) {
  if(n < 3) return n;
  let store = [1,1];
  for(let i = 2; i <= n; i++) {
    let total = store[1] + store[0]
    store[0] = store[1]
    store[1] = total
  }
  return store[1];
}

//MEMOIZATION
function fib(n, savedFib={}) {
   // base case
   if (n <= 0) { return 0; }
   if (n <= 2) { return 1; }

   // memoize
   if (savedFib[n - 1] === undefined) {
        savedFib[n - 1] = fib(n - 1, savedFib);
   }

   // memoize
   if (savedFib[n - 2] === undefined) {
        savedFib[n - 2] = fib(n - 2, savedFib);
   }

   return savedFib[n - 1] + savedFib[n - 2];
}