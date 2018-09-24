/*module.exports = function check(str, bracketsConfig) {
    var count = bracketsConfig.length;
    var n=0;
    for (var i = 0; i<count; i++){
        target1 = bracketsConfig[i][0];
        target2 = bracketsConfig[i][1];
        pos1 = -1;
        pos2 = -1;
          while ((pos1 = str.indexOf(target1, pos1 + 1))!= -1 && (pos2 = str.indexOf(target2, pos2+1))!=-1){
            if (pos1<pos2 && (pos2-pos1)%2===1) { n++; }
          }  
        }
    return str.length===n*2?true:false;
}*/
module.exports = function check(str, bracketsConfig) {
    var count = bracketsConfig.length;
    for ( i = 0; i<count; i++){
        target1 = bracketsConfig[i][0];
        target2 = bracketsConfig[i][1];
        var pos1 = -1;
        var pos2 = -1;
        while ( (pos1 = str.indexOf(target1, pos1+1) )!=-1) {
           while ( (pos2 = str.indexOf(target2, pos2+1) )!=-1) {
                if (pos1<=pos2 && (pos2-pos1)%2===1) { 
                   str=str.substr(0,pos1)+str.substr(pos1+1,pos2-pos1-1)+str.substr(pos2+1,str.length);
                   pos1=-1;
                   pos2=-1;
                   break; 
               }  
           if (str.length===0) break;     
           }     
        }      
     }
    return str.length===0?true:false;
}


