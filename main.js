
let kaitoi
const quiz = [
    "380.png",
    "384.png"];


//問題
let answer = []//答え(入力)
let answerjudge = [
    "クローバー",//470
    "あああ",
    "アーモンド",//466
    "メロン",//464
    "ほうこう",//463
    "ダンサー",//460
    "へんかん",//459
    "やけど",//458
    "よくじつ",//454
    "すくーる",//451
    "とかい",//450
    "STUDENT",//401
    "じゅうでん",//400
    "ペリカン",//397
    "ICE",//395
    "明日",//394
    "がっこう",//389
    "あくま",//386
    "ソーセージ",//384
    "カメラ",//380
    "ハロウィン",//408
    "スライス",//410
    "あたま",//411
    "とけい",//413
    "ロールケーキ",//414
    "カメラ",//418
    "こふんじだい",//419
    "ねこ",//420
    "ビル",//424
    "ようき",//425
    "ましかく",//428
    "マウンド",//431
    "きゅうこうばい",//432
    "カタカナ",//434
    "しきべつ",//433
    "マスク",//435
    "そのばしのぎ",//436
    "タカラ",//437
    "きなこ",//439
    "しきしゃ"//442
]   //答え(比較用)




let answercount = 0;

let count = 0;

quest();


//問題を表示させる関数
function quest() {
    document.querySelector(".quizimg").src = "img/" + quiz[count];
    //"<img src=" +quiz[0]+">";




}
//入力フォーム
var btn = document.getElementsByClassName('ans-button')[count].addEventListener('click', function () {

    const ans = document.getElementsByClassName("ans")[count];
    answer[count] = ans;

    console.log(answer[count]);


    judge();
});


//判定関数
function judge() {
    if (answer[count].value == answerjudge[count]) {
        //正解
        answercount += answercount;

        console.log(count);
        window.alert("正解です!");
        count = count + 1;
        console.log(count);
        console.log(ans.value);
        document.getElementById("ans").value = '';

        return quest();
    }
    else {
        //不正解
        window.alert("残念！正解は" + answerjudge[count] + "です。");
        count = count + 1;
        console.log(count);
        console.log(ans.value);
        document.getElementById("ans").value = '';

        return quest();
    }
}







