module.exports = function check(str = '', bracketsConfig = []) {
    const count = bracketsConfig.length;
    for (let i = 0; i<count; i++){
        let target1 = bracketsConfig[i][0];
        let target2 = bracketsConfig[i][1];
        let pos1 = -1;
        let pos2 = -1;
        while ( (pos1 = str.indexOf(target1, pos1+1) )!=-1) {
           while ( (pos2 = str.indexOf(target2, pos2+1) )!=-1 ) {
                if ( pos1<pos2 && (pos2-pos1)%2===1){ 
                    str=str.substr(0,pos1)+str.substr(pos1+1,pos2-pos1-1)+str.substr(pos2+1,str.length);
                    pos1=-1;
                    pos2=-1;
                    break; 
                }  
            if (str.length===0) break;     
           }          
        }      
     }
    return str.length === 0?true:false;
}


