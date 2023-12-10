//create a function to accept array and return new array containing arrays of minimum n elements
//n is the number of elements in each array

const chunk = (arr, n) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr.slice(i, i + n));
    }
    return newArr;
};
