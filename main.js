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
    "カメラ",//380
    "ソーセージ",//384
    "あくま",//386
    "がっこう",//389
    "明日",//394
    "ICE",//395
    "ペリカン",//397
    "じゅうでん",//400
    "STUDENT",//401
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
    "しきしゃ",//442
    "とかい",//450
    "すくーる",//451
    "よくじつ",//454
    "やけど",//458
    "へんかん",//459
    "ダンサー",//460
    "ほうこう",//463 
    "めろん",//464
    "コーヒー",//465
    "アーモンド",//466
    "クローバー"//470
]   //答え(比較用)

var answer;//答え(入力)

let answercount = 0;//正解数の個数

let count = 0;//

var randamnum = 0;

var randams = []


quest();

//入力フォーム　クリックでイベント発火
const btn = document.getElementsByClassName('ans-button')[count].addEventListener('click', function () {
    console.log(count);

    var ans = document.getElementsByClassName("ans")[0];
    answer = ans.value;
    count = count + 1;
    judge();
});

//問題を表示させる関数
function quest() {
    if (count == 10) {
        result();
    }
    else {
        randamfunc();
        document.querySelector(".quizimg").src = "img/" + quiz[randamnum];
    }


}

//問題をランダム表示
function randamfunc() {
    while (true) {
        randamnum = Math.floor(Math.random() * 40);
        if (!randams.includes(randamnum)) {
            randams.push(randamnum)
            break;
        }
    }
}

//判定関数
function judge() {
    //正解
    if (answer == answerjudge[randamnum]) {
        if (count < 11) {
            answercount = answercount + 1;
            window.alert("正解です!");
            document.getElementById("ans").value = '';
            console.log(count);
            return quest();
        }
    }
    else {
        //不正解
        if (count < 11) {
            window.alert("残念！正解は" + answerjudge[randamnum] + "です。");
            document.getElementById("ans").value = '';
            console.log(count);
            return quest();
        }

    }
}

//結果発表ボタンを追加する関数
function result() {
    document.querySelector(".quizimg").style.visibility = "hidden";
    document.querySelector(".ans").style.visibility = "hidden";
    document.querySelector(".ans-button").style.visibility = "hidden";

    const btnAdd = document.createElement("button");
    btnAdd.style.position = "absolute";
    btnAdd.style.top = "38%";
    btnAdd.style.left = "32%";

    btnAdd.innerHTML = "結果発表";
    document.body.appendChild(btnAdd);
    btnAdd.addEventListener(`click`, function () {
        btnAdd.style.visibility = "hidden";
        resultUI();
    });
}

function resultUI() {
    const resultText = document.createElement("p");
    resultText.innerHTML = "あなたが正解した数は" + answercount + "/10です。"
    document.body.appendChild(resultText);
    resultText.style.position = "absolute";
    resultText.style.top = "38%";
    resultText.style.left = "32%";
}









