// give an array of integers, replace all the occurrences of elementToReplace with substraction element.

//  For inputArray = [1,2,1], elementToReplce = 1 and substractionElm = 3
//  the output should be arrayReplace(inputArray, elementToReplace, substractionElem) = [3,2,3]


// ALT-1


function arrayReplace(inputArray, elementToReplace, sbustractionElem) {

    inputArray.forEach((element, index) =>{
        if(element === elementToReplace){
            inputArray[index] = sbustractionElem
        }
    })
console.log(inputArray)
}


arrayReplace([1,2,4,5,1,1,8,1],1,3)



//ALT-2

// function arrayReplace(inputArray, elementToReplace, substractionElem){
//     return inputArray.map(element=>
//         element === elementToReplace ? substractionElem : element
//     )
// }
// const inputArray = [1,2,1,1,1,2];
// const elementToReplace = 1;
// const substractionElem = 5;

// const result = arrayReplace(inputArray, elementToReplace, substractionElem)
// console.log(result)


//ALT-3 

// function arrayReplace(inputArray, elementToReplace, substractionElem){

//     for ( let i = 0 ; i < inputArray.length ; i++){
//         if(inputArray[i] === elementToReplace){
//             inputArray[i] = substractionElem
//         }
//     }
//     return inputArray
// }

// const inputArray = [1,2,1,1,1,2];
// const elementToReplace = 1;
// const substractionElem = 5;

// const result = arrayReplace(inputArray, elementToReplace, substractionElem)
// console.log(result)


//ALI - 4 

// function arrayReplace(inputArray, elementToReplace, substractionElem){
//    return inputArray.reduce((acc, element)=>{
//         if(element === elementToReplace){
//             acc.push(substractionElem);
//         }
//         else{
//             acc.push(element)
//         }
//         return acc
//     },[])
// }


// const inputArray = [1,2,1,1,1,2];
// const elementToReplace = 1;
// const substractionElem = 5;

// const result = arrayReplace(inputArray, elementToReplace, substractionElem)
// console.log(result)