//Write a method to replace all spaces in a string with %20

function replaceURLSpace(str){
    const convertToArr = str.trim().split('');
    for (let i in convertToArr){
        if (convertToArr[i] === " "){
            convertToArr[i] = "%20"
        }
    }
    return convertToArr.join('');
}

console.log(replaceURLSpace('Sam I am'));