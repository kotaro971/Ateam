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
    "しきべつ",//433
    "カタカナ",//434
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
            swal('正解です!');
            // window.alert("正解です!");
            document.getElementById("ans").value = '';
            console.log(count);
            return quest();
        }
    }
    else {
        //不正解
        if (count < 11) {
            swal("残念！正解は" + answerjudge[randamnum] + "です。");
            // window.alert("残念！正解は" + answerjudge[randamnum] + "です。");
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
    btnAdd.style.top = "400px";
    btnAdd.style.left = "43%";
    btnAdd.style.fontSize="50px";
    btnAdd.style.color="#b1921b";
    btnAdd.style.borderRight="4px solid #cea82c";
    btnAdd.style.borderBottom= "10px solid #987c1e";
    btnAdd.style.borderLeft= "4px solid #ffed8b";
    btnAdd.style.borderRadius= 0;
    btnAdd.style.background="-webkit-gradient(linear, right top, left top, from(#ffd75b), color-stop(30%, #fff5a0), color-stop(40%, #fffabe), color-stop(50%, #ffffdb), color-stop(70%, #fff5a0), to(#fdd456))";
    btnAdd.style.background= "-webkit-linear-gradient(right, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
    btnAdd.style.background= "linear-gradient(-90deg, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
    btnAdd.style.textShadow="-1px -1px 1px #ffffd9";
    
    btnAdd.addEventListener('mouseover', function() {
        btnAdd.style.marginTop= "3px";
        btnAdd.style.color= "#b1921b";
        btnAdd.style.borderRight= "4px solid #cea82c";
        btnAdd.style.borderBottom= "7px solid #987c1e";
        btnAdd.style.borderLeft= "4px solid #ffed8b";
    });
    btnAdd.addEventListener('mouseleave', function() {
        btnAdd.style.marginTop= "-3px";
        btnAdd.style.color="#b1921b";
        btnAdd.style.borderRight="4px solid #cea82c";
        btnAdd.style.borderBottom= "10px solid #987c1e";
        btnAdd.style.borderLeft= "4px solid #ffed8b";
        btnAdd.style.borderRadius= 0;
        btnAdd.style.background="-webkit-gradient(linear, right top, left top, from(#ffd75b), color-stop(30%, #fff5a0), color-stop(40%, #fffabe), color-stop(50%, #ffffdb), color-stop(70%, #fff5a0), to(#fdd456))";
        btnAdd.style.background= "-webkit-linear-gradient(right, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
        btnAdd.style.background= "linear-gradient(-90deg, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
        btnAdd.style.textShadow="-1px -1px 1px #ffffd9";
      });

    btnAdd.innerHTML = "結果発表";
    document.body.appendChild(btnAdd);
    btnAdd.addEventListener(`click`, function () {
        btnAdd.style.visibility = "hidden";
        resultUI();
    });
}

function resultUI() {
    const resultText = document.createElement("p");
    resultText.innerHTML = "あなたが正解した数は<br>" + answercount + "/10です。"
    document.body.appendChild(resultText);
    resultText.style.position = "absolute";
    resultText.style.fontSize="30px";
    resultText.style.textAlign="center";
    resultText.style.top = "350px";
    resultText.style.left = "40%";
    resultText.style.justifyContent="center";
    
    const frist = document.createElement("button");
    frist.style.position = "absolute";
    frist.innerHTML = "はじめからやる";
    document.body.appendChild(frist);
    frist.style.top = "520px";
    frist.style.left = "45%";
    frist.style.fontSize="25px";
    frist.style.border="3px";
    frist.style.borderRadius="20px";
    frist.style.margin="20px 5px";
    // frist.style.outline="none";
    // frist.style.borderBottom= "5px solid #000000";
    frist.style.backgroundColor="#c2c2c2";
    frist.style.color="#fffff";
    // frist.style.background="#c2c2c2";
    // frist.style.borderBottom="2px solid #494949";
    // frist.style.outline= "none";
    frist.addEventListener('mouseover', function() {
        btnAdd.style.marginTop= "3px";
        frist.style.borderBottom= "2px solid #ff0000";
        
    });
    frist.addEventListener(`click`, function () {
        location.href = 'index.html';
    });
}









