/* ============================================================
* 자바스크립트 코딩테스트 연습문제
* 섹션 1
* 6. 홀수
* ============================================================ */

/*
#===========================================================================================================================#
    7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중
    최소값을 찾는 프로그램을 작성하세요
#===========================================================================================================================#
*/

/*
#===========================================================================================================================#
    입력 설명
    - 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
      
    출력 설명
    - 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

    입력 예제 1
    12 77 38 41 53 92 8

    출력 예제 1
    256
    41
#===========================================================================================================================#
*/

function solution(arr){
    var answer = [];
    var sum = 0, min = arr[0];

    for (let x of arr) {
        if(x % 2 === 1) {
            sum += x;
            if(x < min) {
                min = x;
            }
        }
    }

    /*
    #===========================================================================================================================#
        1. 홀수들을 담을 answer 배열을 선언하고, sum에는 홀수의 합계를 넣기위해 0으로 초기화하고 min에는 arr의 맨 첫번째 값으로 임의설정한다.
        2. for of 반복문으로 arr의 모든 반복문을 돌린다. x는 모든 배열을 돌아가는 변수이다.
        3. x를 2로 나누었을때 나머지 값이 1이 나오면 홀수이므로 sum에다가 해당하는 x값을 더해준다.
        4. 그리고 min값보다 x값이 작을 경우에 min에 x값을 넣는다.
    #===========================================================================================================================#
    */
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));