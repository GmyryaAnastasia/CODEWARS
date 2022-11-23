function pickIt(arr){
    var odd=[],even=[];
    for (let x of arr){
        if (x%2) odd.push(x);
        else even.push(x);
    }
    //coding here


    return [odd,even];
}