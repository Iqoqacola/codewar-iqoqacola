function digitalRoot(n){
    
    let nToString = n.toString();
    let result = parseInt(nToString.charAt(0));
    
    do {

        for(let i = 1; i < nToString.length; i++){

            result += parseInt(nToString.charAt(i));
    
        }
            
        nToString = result.toString();
        result = parseInt(nToString.charAt(0));

    } while(nToString.length > 1)

    return result;
}

console.log(digitalRoot(132189));
