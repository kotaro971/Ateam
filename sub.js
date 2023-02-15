// audio1();


// function audio1() {
//     const Audio1 = document.getElementById('audio1');
//     Audio1.play();
//     Audio1.loop = true;
//     const btnAdd = document.createElement("button");
//     btnAdd.style.position = "absolute";
//     btnAdd.style.top = "700px";
//     btnAdd.style.left = "41%";
//     btnAdd.style.fontSize = "50px";
//     btnAdd.style.color = "#b1921b";
//     btnAdd.style.borderRight = "4px solid #cea82c";
//     btnAdd.style.borderBottom = "10px solid #987c1e";
//     btnAdd.style.borderLeft = "4px solid #ffed8b";
//     btnAdd.style.borderRadius = 0;
//     btnAdd.style.background = "-webkit-gradient(linear, right top, left top, from(#ffd75b), color-stop(30%, #fff5a0), color-stop(40%, #fffabe), color-stop(50%, #ffffdb), color-stop(70%, #fff5a0), to(#fdd456))";
//     btnAdd.style.background = "-webkit-linear-gradient(right, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
//     btnAdd.style.background = "linear-gradient(-90deg, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
//     btnAdd.style.textShadow = "-1px -1px 1px #ffffd9";

//     btnAdd.addEventListener('mouseover', function () {
//         btnAdd.style.marginTop = "3px";
//         btnAdd.style.color = "#b1921b";
//         btnAdd.style.borderRight = "4px solid #cea82c";
//         btnAdd.style.borderBottom = "7px solid #987c1e";
//         btnAdd.style.borderLeft = "4px solid #ffed8b";
//     });

//     btnAdd.addEventListener('mouseleave', function () {
//         btnAdd.style.marginTop = "-3px";
//         btnAdd.style.color = "#b1921b";
//         btnAdd.style.borderRight = "4px solid #cea82c";
//         btnAdd.style.borderBottom = "10px solid #987c1e";
//         btnAdd.style.borderLeft = "4px solid #ffed8b";
//         btnAdd.style.borderRadius = 0;
//         btnAdd.style.background = "-webkit-gradient(linear, right top, left top, from(#ffd75b), color-stop(30%, #fff5a0), color-stop(40%, #fffabe), color-stop(50%, #ffffdb), color-stop(70%, #fff5a0), to(#fdd456))";
//         btnAdd.style.background = "-webkit-linear-gradient(right, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
//         btnAdd.style.background = "linear-gradient(-90deg, #ffd75b 0%, #fff5a0 30%, #fffabe 40%, #ffffdb 50%, #fff5a0 70%, #fdd456 100%)";
//         btnAdd.style.textShadow = "-1px -1px 1px #ffffd9";
//     });
//     document.body.appendChild(btnAdd);
//     btnAdd.innerHTML = "再生";
//     btnAdd.addEventListener(`click`, function () {
//         if (!Audio1.muted) {
//             btnAdd.innerHTML = "停止中";
//             Audio1.muted = true;
//         }
//         else{
//             btnAdd.innerHTML = "再生中";
//             Audio1.muted=false;
//         }
//     });
// }