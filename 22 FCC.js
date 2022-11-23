function findAverage(array) {
    if (array.length ==0)
        return 0;
    let result =0;
    for (i=0;i<array.length; i++) {
        result +=array[i];
    }
    return result/array.length;
}