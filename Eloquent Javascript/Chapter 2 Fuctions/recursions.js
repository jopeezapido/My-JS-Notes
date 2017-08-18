function findSolution(target) {
  function find(current, history) {
    if (current == target)
      return history;
    else if (current > target)
      return null;
    else
      return find(current + 5, "(" + history + " + 5)") ||
             find(current * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

function isEven(n){
  if (n % 2 == 0){
    return true;
  }
  else if (n % 2 != 0){

  }
}

console.log(isEven(50))//true
console.log(isEven(75))//false
console.log(isEven(-1))//??