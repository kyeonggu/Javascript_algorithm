/* ============================================================
* 자바스크립트 코딩테스트 연습문제
* 섹션 1
* 11. 대문자 찾기
* ============================================================ */

/*
#===========================================================================================================================#
    한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
#===========================================================================================================================#
*/

/*
#===========================================================================================================================#
    입력 설명
    - 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
    
    출력 설명
    - 첫 줄에 대문자의 개수를 출력한다.

    입력 예제 1
    KoreaTimeGood

    출력 예제 1
    3
#===========================================================================================================================#
*/

function solution(s){
    var answer = 0;
    for(var x of s) {
        if(x == x.toUpperCase()) {
            answer++;
        }
    }

    return answer;

    /*
    #===========================================================================================================================#
        1. answer를 0으로 초기화한다.
        2. for of 반복문으로 모든 s문자열의 문자들을 반복문을 돌린다.
        3. 만약 x가 x.toUpperCase()로 대문자로 바꾸었을 때 똑같다면 answer에 1씩 더해준다.
    #===========================================================================================================================#
    */
}

let str="KoreaTimeGood";
console.log(solution(str));