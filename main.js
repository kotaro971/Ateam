
let kaitoi
let quiz = [
    ["問題"]
]
let answer=[
    ["答え"]
]
let answerjudge=[
    ["比較"]
]

let answercount=0

let count=0

//問題を表示させる関数
function quest(){

}
//入力フォーム
function write(){
    var a=document.getElementsByName('a')
answerjudge[count]=a

}
//解答ボタン
//判定関数
function judge(){
    if(answer[count]==answerjudge[count]) {
        //正解
        answercount+=answercount
        count+=count
    }
    else{
        //不正解
        count+=count
    }
}






