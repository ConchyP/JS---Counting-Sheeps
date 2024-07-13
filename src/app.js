 export function countSheeps(list) {
    
    let sheepsCounter = 0;
    
    for (let i = 0; i < list.length; i++) {
      if (list[i] === true) {
        sheepsCounter++;
      }
    }
    
    if (sheepsCounter > 0) {
      return `There are ${sheepsCounter} sheeps in total`;
    } else {
      return "UPS!!! Wolfs eaten Sheeps";
    }
  };

const list1 = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ];
  const list2 = [false, false, false];
  
  console.log(countSheeps(list1)); //There are 17 sheeps in total
  console.log(countSheeps(list2)); //UPS!!! Wolfs eaten Sheeps
  