module.exports = function check(str, bracketsConfig) {
  let conf = Object.fromEntries(bracketsConfig); 
  let opened = [];
  for (let key in conf) {
    opened.push(key);
  };
    let arr = [];

    for (let i = 0; i < str.length; i++) {
      let elem = str[i];        
      

      if (arr.length === 0){  
        if (opened.includes(elem)) {
          arr.push(elem);
        } else {
          return false;
        }
      } else {

        let previous = arr[arr.length - 1];
        if (opened.includes(elem)) {
          if ((conf[elem] === elem)&&(conf[previous] === elem)) {
            arr.pop();
          } else {
            arr.push(elem);
          }                           
        } else {
          if (conf[previous] === elem) {
            arr.pop();
          } else {
            return false;
          }
        }
      }        
    }

      return (arr.length === 0) ? true : false; 
}
