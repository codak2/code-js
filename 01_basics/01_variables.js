const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var keyword to declare variables
because of issue in block scope and functional scope
issue: due to its glocal scope it could update some other pre existing variable's value. So, it's recommended not to use var keyword to declare variables.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])