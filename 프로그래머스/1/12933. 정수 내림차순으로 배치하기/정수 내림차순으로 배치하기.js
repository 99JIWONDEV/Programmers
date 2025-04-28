function solution(n) {
    var answer = 0;
    const str = String(n)
    
    const newArr = [...str]
    newArr.sort((a,b) => b-a)
    const newStr = newArr.join('')
    answer = Number(newStr)
    
    
    return answer;
}