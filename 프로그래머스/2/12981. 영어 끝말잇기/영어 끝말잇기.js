function solution(n, words) {
    var answer = [];
    var num  = 0
    let flag = false
    for(let i = 0; i < words.length-1; i++){
        if(words[i].charAt(words[i].length-1) == words[i+1].charAt(0)){
            console.log(words[i],"와",words[i+1],"은 정상적입니다.")
            var tempArr = words.slice(0, i+1);
            console.log(tempArr,"입니다.")
            if(tempArr.includes(words[i+1])){
                console.log("같은 단어가 있습니다. 실패지점은", i)
                num = i
                flag = false
                break;
            }else{
                flag = true
            }
        }else{
            console.log("끝말잇기가 실패했습니다. 실패지점은", i)
            num = i
            flag = false
            break;
        }
    }
    if(flag) answer.push(0,0)
    else{
        var person = (num+2)%n
        if(person == 0) person = n 
        answer.push(person);
        var count = ((num+2 - person) / n) + 1 
        answer.push(count)
    }


    return answer;
}