function showPrime(n){
    for (let i=2;i<n;i++){
        if (checkPrime(i) === true){
            console.log(i);
        }
    }
}
function checkPrime(m){
    for(let i = 2; i<m;i++){
        if (m%i===0)
            return false;
    }
    return true;
}
showPrime(10)