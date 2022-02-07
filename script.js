var i=1;
let nIntervId;
function stopSlide(){
    clearInterval(nIntervId);
}
setTimeout(function() {
    plusSlides(1);
}, 2000);
nIntervId=setInterval(function() {
    plusSlides(1);
}, 10000);
function currentSlide(number,move)
{
    var hei ="500px";
    var curNum = number-move;
    if(curNum==0)curNum=3;
    else if(curNum==4)curNum=1;
    var Curname = "slide"+(curNum).toString();
    console.log(Curname);
    if(number==1)
    {
        if(move==1)
        {
            document.getElementById(Curname).style.animation="plusC2 1.5s";
            document.getElementById("slide1").style.animation="plusN 1.5s";
            // i will think about it
        }
        else if(move==-1)
        {
            document.getElementById(Curname).style.animation="minusC2 1.5s";
            document.getElementById("slide1").style.animation="minusN 1.5s";
        }
        var curSl = document.getElementById("slide1");
        curSl.style.visibility="visible";
        curSl.style.height=hei;
        var otSL1 =document.getElementById("slide2");
        otSL1.style.visibility="hidden";
        otSL1.style.height="0px";
        var otSL2 =document.getElementById("slide3");
        otSL2.style.visibility="hidden";
        otSL2.style.height="0px";
        // da gi premesta v samata animaciq tiq gore
        i=1;
    }
    else if(number==2){
        if(move==1)
        {
            document.getElementById(Curname).style.animation="plusC 1.5s";
            document.getElementById("slide2").style.animation="plusN2 1.5s";
        }
        else if(move==-1)
        {
            document.getElementById(Curname).style.animation="minusC2 1.5s";
            document.getElementById("slide2").style.animation="minusN 1.5s";
        }
        var curSl = document.getElementById("slide2");
        curSl.style.visibility="visible";
        curSl.style.height=hei;
        var otSL1 =document.getElementById("slide1");
        otSL1.style.visibility="hidden";
        otSL1.style.height="0px";
        var otSL2 =document.getElementById("slide3");
        otSL2.style.visibility="hidden";
        otSL2.style.height="0px";
        i=2;
    }
    else if(number==3){
        if(move==1)
        {
            document.getElementById(Curname).style.animation="plusC 1.5s";
            document.getElementById("slide3").style.animation="plusN2 1.5s";
        }
        else if(move==-1)
        {
            document.getElementById(Curname).style.animation="minusC 1.5s";
            document.getElementById("slide3").style.animation="minusN2 1.5s";
        }
        var curSl = document.getElementById("slide3");
        curSl.style.visibility="visible";
        curSl.style.height=hei;
        var otSL1 =document.getElementById("slide2");
        otSL1.style.visibility="hidden";
        otSL1.style.height="0px";
        var otSL2 =document.getElementById("slide1");
        otSL2.style.visibility="hidden";
        otSL2.style.height="0px";
        i=3;
    }
    
}
function plusSlides(numb){
    i=i+numb;
    if(i==0)i=3;
    else if(i==4)i=1;
    currentSlide(i,numb);
}
// let nav =document.getElementById("navbar");
// if()
var isHidden3 = 0;
function showHide(n){
    var name = "balon"+(n).toString();
     var box= document.getElementById(name);
     if(isHidden3==0){
         box.style.height="max-content";
        isHidden3=1;}
     else if (isHidden3==1){
         box.style.height="350px";
        isHidden3=0;}
 }
// calendar ->
function cal(){
const calend = document.querySelector("#app-calendar");
let endDay = 30;
const d = new Date();
var mes = d.getMonth() + 1;	// Month	[mm]	(1 - 12)
d.getDate();		// Day		[dd]	(1 - 31)
var year = d.getFullYear();
let m31 = [1,3,5,7,8,10,12];
if(mes==2)
{
    if(year%4==0)endDay=29;
    else endDay=28;
}
else{
    for(let i =0; i<7;i++){
        if(mes==m31[i])endDay=31;
    }
}
}
//tuk trqbva da dobavq kod za praznite dni ot minaliq den `<div class="day">${i.toString()}</div>` '<strong>inserted text</strong>'
// for(let i =1 ;i<=endDay; i++)
// {
    // calend.appendChild(i.toString());
    // calend.insertAdjacentHTML("afterbegin","inserted text");
    
// }

