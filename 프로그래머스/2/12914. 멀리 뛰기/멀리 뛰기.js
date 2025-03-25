function solution(n) {
    var answer = 0;
    var last1 = 1;
    var last2 = 2;
    var result = 0;
    if (n == 1) answer = 1%1234567
    else if (n == 2) answer = 2%1234567
    else{
        for(let i = 2; i < n; i++){
            answer = (last1 + last2) %1234567;
            last1 = last2;
            last2 = answer;
        }    
    }

    
    return answer;
}