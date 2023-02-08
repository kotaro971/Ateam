//問題
const quiz = [
    "380.png",
    "384.png",
    "386.png",
    "389.png",
    "394.png",
    "395.png",
    "397.png",
    "400.png",
    "401.png",
    "408.png",
    "410.png",
    "411.png",
    "413.png",
    "414.png",
    "418.png",
    "419.png",
    "420.png",
    "424.png",
    "425.png",
    "428.png",
    "431.png",
    "432.png",
    "433.png",
    "434.png",
    "435.png",
    "436.png",
    "437.png",
    "439.png",
    "442.png",
    "450.png",
    "451.png",
    "454.png",
    "458.png",
    "459.png",
    "460.png",
    "463.png",
    "464.png",
    "465.png",
    "466.png",
    "470.png"
];

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

var answer ;//答え(入力)

let answercount = 0;//正解数の個数

let count = 0;//

var randamnum=0;

var randams=[]


quest();

//問題を表示させる関数
function quest() {
   randamfunc();
    // randamnum = Math.floor(Math.random() *40) ;
    document.querySelector(".quizimg").src = "img/" + quiz[randamnum];
}

function randamfunc(){
     while(true){
        randamnum = Math.floor(Math.random() *40) ;
      if(!randams.includes(randamnum)){
       randams.push(randamnum)
       break;
       }
    }
}


//入力フォーム
const btn = document.getElementsByClassName('ans-button')[count].addEventListener('click', function () {

    var ans = document.getElementsByClassName("ans")[0];
    answer = ans.value;
    judge();
});

//判定関数
function judge() {
    //正解
    if (answer == answerjudge[randamnum]) {

        answercount = answercount+1;

        console.log(count);
        window.alert("正解です!");
        count = count + 1;
       
        document.getElementById("ans").value = '';

        return quest();
    }
    else {
        //不正解
        window.alert("残念！正解は" + answerjudge[randamnum] + "です。");
        count = count + 1;
    console.log(randamnum);
        document.getElementById("ans").value = '';

        return quest();
    }
}







