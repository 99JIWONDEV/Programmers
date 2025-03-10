function solution(brown, yellow) {
    var answer = []; 
    var S = brown + yellow;
    for (var height =1; height<brown; height++){
        var width = S/height
        if((width-2)*(height-2) == yellow){
            answer.push(width, height)
            break;
        }
    }
    return answer;
}