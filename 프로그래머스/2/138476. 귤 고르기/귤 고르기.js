function solution(k, tangerine) {
    var answer = 0;
    let hashMap = new Map();
    for (let i = 0; i<tangerine.length; i++){
        hashMap.set(tangerine[i], (hashMap.get(tangerine[i]) || 0) +1)
        }
    const sortedMap = [...hashMap].sort((a,b)=>b[1]-a[1])
    let sum = 0
    for (let i = 0; i<sortedMap.length; i++){
        sum += sortedMap[i][1]
        answer++;
        if(sum >=k) return answer;
        }
    }
