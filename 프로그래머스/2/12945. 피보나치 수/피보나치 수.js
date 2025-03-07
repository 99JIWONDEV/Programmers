function solution(n) {
    var answer = 0;
    function fibo(s) {
        var count = 0;
        var num = 0;
        var num1 = 0;
        var num2 = 1;
        while(count < s){
            num = (num1 + num2)%1234567;
            num2 = num1;
            num1 = num; 
            count++;
        }
        return num;
    }
    answer = fibo(n)
    // answer = fibo(n-1) + fibo(n-2);
    return answer;
}