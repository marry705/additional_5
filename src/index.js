module.exports = function check (str = '', bracketsConfig = []) {
    if( str.length % 2 != 0 ) return false;
    const container = [];
    let len;
    let target1;
    let target2;
    let last;
    for ( let element of str ) {
        bracketsConfig.forEach( elem => {
            target1 = elem[0];
            target2 = elem[1];
            len = container.length;
            last = container[len-1];
            if ( element === target2 && last === target1 && len != 0 ) container.pop(); 
            else{
                if ( element === target1 ) container.push(element);
            }
        });
    } 
    return container.length ? false : true;
}


