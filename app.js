//ANSWER# 01
closure = (inner) => {
  return (closure = (outer) => {
    return inner + outer;
  });
};

let val = closure(5);

document.write(val(11));

//ANSWER# 02
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

arrCheck = (arr, value, test) => {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === value) {
    return true;
  } else {
    return arrCheck(arr.slice(1), value);
  }
};

console.log(arrCheck(arr, 00));

//ANSWER# 03
myPara = (text) => {
  document.body.innerHTML = "<p>" + text + "</p>";
};
// myPara("Hey, I am a para.")



//ANSWER# 04
addANewListItem = (text) => {
  const list = document.querySelector("ul");
  const newListItem = document.createElement("li");
  const listItemText = document.createTextNode(text);
  newListItem.appendChild(listItemText);
  list.appendChild(newListItem);
};

addANewListItem("i am a new list");


//ANSWER# 05
const htmlId = document.getElementById("change");
function changeBgColor(element, color) {
  element.style.backgroundColor = color;
}
changeBgColor(htmlId, "red");

//ANSWER# 06
const newObj = {
  Name: "Arsalan",
  ID: 1234,
  Sports: "Football",
};

addToLocalStorage = (key, obj) => {
  const objString = JSON.stringify(obj);
  localStorage.setItem(key, objString);
};

addToLocalStorage("newObj", newObj);

//ANSWER# 07

const getObj = getFromLocalStorage("newObj");
function getFromLocalStorage(key) {
  const objStr = localStorage.getItem(key);
  if (objStr === null) {
    return null;
  }
  const obj = JSON.parse(objStr);
  return obj;
}

console.log(getObj);

//ANSWER# 08

const newObj2 = {
     Name: "Rayyan",
      ID: 5678, 
      Sports: "Cricket"
     }; 

savePropertiesToLocalStorage=(obj)=> {
  const propNames = Object.keys(obj); 
  for (const propName of propNames) {
    const propValue = obj[propName];
    localStorage.setItem(propName, JSON.stringify(propValue)); 
  }
  const newObj = {};
  for (const propName of propNames) {
    const propValueString = localStorage.getItem(propName);
    const propValue = JSON.parse(propValueString);
    newObj[propName] = propValue; 
  }
  return newObj; 
}

const getObj2 = savePropertiesToLocalStorage(newObj2); 
console.log(getObj2)
