//Give a rectangular matrix of characters, add a border of asterisks(*) to it.

//input picture = [“abc”, “ded”]
// output addBorder(picture) = [“*****”, “*abc*”, “*ded*”, “*****”]

function addBorder(picture) {
  let wall = "*".repeat(picture[0].length + 2);
  picture.unshift(wall)
  picture.push(wall)

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i],"*");
  }

  return picture;
}

picture = ["abc", "ded"];

console.log(addBorder(picture));
