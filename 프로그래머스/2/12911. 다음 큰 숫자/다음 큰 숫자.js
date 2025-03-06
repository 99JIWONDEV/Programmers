function solution(n) {
    var answer = 0;
    var nStr = String(n.toString(2));
    var nArr = Array.from(nStr);
    var nCount = nArr.filter(element => '1' === element).length;
    var nextNum = n+1
    var nextCount = 0;
    while (nextCount !== nCount){
        nextStr = String(nextNum.toString(2));
        nextArr = Array.from(nextStr);
        nextCount = nextArr.filter(element => '1' === element).length;
        nextNum++
    }
    answer = nextNum-1;
    
    return answer;
}