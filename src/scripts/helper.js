export function rotate(arr){
    arr.push(arr.shift());
    return arr;
}