
let kaitoi
const quiz = ["img/380.png","img/384.png"];


//問題
let answer = [

    [""]
]//答え(入力)
let answerjudge = [

]   //答え(比較用)




let answercount = 0;

let count = 0;

quest();

console.log(quiz[0]);
//問題を表示させる関数
function quest() {
    document.querySelector("quizimg").src="img/"  +quiz[count];
    //"<img src=" +quiz[0]+">";
    console.log(mondai)


    count += count;
}
//入力フォーム
function write() {
    var ans = document.getElementsByName("ans");
    answer[count] = ans;
    button();

}
//解答ボタン
function button() {
    document.getElementsByClassName('ans-button').addEventListener('click', function () {
        judge(answer);
    })
}

//判定関数
function judge() {
    if (answer[count] == answerjudge[count]) {
        //正解
        answercount += answercount;

        window.alert("正解です!");
        count += count;
    }
    else {
        //不正解
        window.alert("残念！正解は" + quiz[count] + "です。");
        count += count;
    }
}






