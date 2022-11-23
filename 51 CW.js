function arrayPlusArray(arr1, arr2) {
    let sum1=0;
    let sum2=0;
    for (let i=0; i<arr1.length;i++){
        sum1+= arr1[i];
    }
    for (let j=0; j<arr2.length;j++){
        sum2+= arr2[j];
    }
    return sum1 + sum2; //something went wrong
}