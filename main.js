
let kaitoi
let quiz = [
    './img/qiuz1.png','./img/qiuz2.png'
]  //問題
let answer = [

    ["クローバー"]//470
    [""]
    ["アーモンド"]//466
    ["メロン"]//464
    ["ほうこう"]//463
    ["ダンサー"]//460
    ["へんかん"]//459
    ["やけど"]//458
    ["よくじつ"]//454
    ["すくーる"]//451
    ["とかい"]//450
    ["STUDENT"]//401
    ["じゅうでん"]//400
    ["ペリカン"]//397
    ["ICE"]//395
    ["明日"]//394
    ["がっこう"]//389
    ["あくま"]//386
    ["ソーセージ"]//384
    ["カメラ"]//380
    ["ハロウィン"]//408
    ["スライス"]//410
    ["あたま"]//411
    ["とけい"]//413
    ["ロールケーキ"]//414
    ["カメラ"]//418
    ["こふんじだい"]//419
    ["ねこ"]//420
    ["ビル"]//424
    ["ようき"]//425
    ["ましかく"]//428
    ["マウンド"]//431
    ["きゅうこうばい"]//432
    ["カタカナ"]//434
    ["しきべつ"]//433
    ["マスク"]//435
    ["そのばしのぎ"]//436
    ["タカラ"]//437
    ["きなこ"]//439
    ["しきしゃ"]//442

]//答え(入力)
let answerjudge = [
    
]   //答え(比較用)

let answercount = 0;

let count = 0;

//問題を表示させる関数
function quest() {
    var mondai = document.getElementsByClassName("mondai");
    mondai = quiz[count];
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






