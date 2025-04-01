function solution(x, n) {
    var answer = [];
    answer.push(x);
    var num = x;
    for (let i = 0; i < n-1; i++){
        num += x
        answer.push(num)
    }
    return answer;
}