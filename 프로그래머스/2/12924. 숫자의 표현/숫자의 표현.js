            function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++){
      var sum = 0;
      var j = i;
      while(sum !== n){
        console
        sum += j
        if(sum == n){
          answer ++;
        }else if(sum > n){
          break;
        }
        j++
      }
    }
    return answer;
            }