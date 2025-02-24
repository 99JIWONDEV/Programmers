function solution(s) {
    var count = 0; 
    var x = 0;  
    var arr = [...s]; 

    while (arr.length > 1) { 
        let newArr = [];  
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "0") {
                x++;  
            } else {
                newArr.push(arr[i]); 
            }
        }
        count++;  

        var number = newArr.length.toString(2); 
        arr = [...number]; 
    }

    return [count, x];
}