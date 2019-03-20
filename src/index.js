module.exports = function check (str = '', bracketsConfig = []) {
    if( str.length % 2 != 0 ) return false;
    const stack = [];
    for ( let element of str) {
        bracketsConfig.forEach( elem => {
            let target1 = elem[0];
            let target2 = elem[1];
            let last = stack[stack.length-1];
            if ( element === target2 && stack.length != 0 && last === target1 ) stack.pop(); 
            else{
                if ( element === target1 ) stack.push(element);
            }
        });
    } 
    return stack.length ? false : true;
}


