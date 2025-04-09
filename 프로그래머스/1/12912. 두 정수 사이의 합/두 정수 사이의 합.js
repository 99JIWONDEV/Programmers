function solution(a, b) {
    var answer = 0;
    if (a > b){
        var temp = a 
        a = b
        b = temp
    }
    if(a !== b){
        for(let i = a; i <= b; i++) answer += i    
    }else{
        answer = a;
    }
    
    return answer;
}