/*Ищем какую вкладку надо открыть берём её ид и тд*/
/*Первый вариант с внедрением функции на страницу*/
/*TegSearshButton.addEventListener("click", async () => { 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.scripting.executeScript({
  target:  {tabId: tab.id},
    function: ChoiseTg
}); 
});
*/
/*Второй вариант с внедрением самого файла скрипта в html*/
/*Один из вариантов
window.onload=function(){}
*/
/*
Правильная я полагаю */
var TegSearshButton=document.getElementById("TegSearshButton").addEventListener("click",ChoiseTg)
/*TegSearshButton.addEventListener("click", async() =>
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
   chrome.scripting.executeScript({
    target:  {tabId: tab.id, allFrames: true},
    files: ["App/Script/Search_Clean_Color_Atribute.js"],
}); 
});
*/
  var greenId = document.getElementById("greenId").addEventListener("click", function(){
    ClickGreenButten()
  });
  var yellowId = document.getElementById("yellowId").addEventListener("click", ClickYellowButten);
  var redId = document.getElementById("redId").addEventListener("click", ClickRedButten);
/*Переменная для смены цвета*/
var IdBut=0
/*Функции для смена цвета*/
    function ClickGreenButten(){ 
      IdBut=1
      alert("Select green focus"); 
    }
    function ClickYellowButten(){
      IdBut=2
       alert("Select yellow focus")   
    }
    function ClickRedButten(){ 
      IdBut=3
       alert("Select red focus")  
    } 
/*Кнопки смена фокуса*/

/*var TegSearshButton=document.getElementById("TegSearshButton").addEventListener("click",ChoiseTg)
var CleanButton=document.getElementById("Cleaner").addEventListener("click",CleanAtr)*/

/*Переменные которые берут все теги которые мы вписали и засунули их в одну переменную*/
    /*Основные теги*/
    var Body_Tg=document.querySelectorAll("body")
    var Div_Tg = document.querySelectorAll("div");
    var a_Tg = document.querySelectorAll("a");
    var address_Tg = document.querySelectorAll("address");
    var area_Tg = document.querySelectorAll("area");
    var article_Tg = document.querySelectorAll("article");
    var content_Tg= document.querySelectorAll("content");
    var span_Tg = document.querySelectorAll("span");
    var main_Tg = document.querySelectorAll("main");
    var footer_Tg = document.querySelectorAll("footer");
    var form_Tg = document.querySelectorAll("form");
    var input_Tg = document.querySelectorAll("input");
    var h1_Tg = document.querySelectorAll("h1");
    var h2_Tg = document.querySelectorAll("h2");
    var h3_Tg = document.querySelectorAll("h3");
    var h4_Tg = document.querySelectorAll("h4");
    var h5_Tg = document.querySelectorAll("h5");
    var h6_Tg = document.querySelectorAll("h6");
    var p_Tg = document.querySelectorAll("p");
    /*------------------------------------------------*/
    var Data_Tg = document.querySelectorAll("data");
    var DataList_Tg = document.querySelectorAll("datalist");
    var dl_Tg = document.querySelectorAll("dl");
    var dd_Tg = document.querySelectorAll("dd");
    var aside_Tg = document.querySelectorAll("aside");
    var button_Tg = document.querySelectorAll("button");
    var caption_Tg = document.querySelectorAll("caption");
    var cite_Tg = document.querySelectorAll("cite");
    var code_Tg = document.querySelectorAll("code");
    var colgroup_Tg = document.querySelectorAll("colgroup");
/*Основные Тег*/
var Body_Foc=Body_Tg;/**/
var  Div_Foc = Div_Tg;/**/ 
var  A_Foc = a_Tg; /**/
var  Address_Foc = address_Tg; /**/
var Article_Foc = article_Tg; /**/
var  Content_Foc = content_Tg; /**/
var  Span_Foc = span_Tg; /**/
var  Main_Foc = main_Tg; /**/
var  Footer_Foc = footer_Tg;/**/ 
var  Form_Foc = form_Tg; /**/
var  Input_Foc = input_Tg; /**/
/*Не ликвид*/
var H1_Foc= h1_Tg;
var H2_Foc= h2_Tg;
var H3_Foc= h3_Tg;
var H4_Foc= h4_Tg;
var H5_Foc= h5_Tg;
var H6_Foc= h6_Tg;
var P_Foc= p_Tg;
/*Проверка на то что мы написали*/
function ChoiseTg(){
  /*Переменные атрибутов*/
  var Div_Tg = document.querySelectorAll("div");
  var  Div_Foc = Div_Tg;
  var footer_Tg = document.querySelectorAll("footer");
  var  Footer_Foc = footer_Tg;
/*var IdBut=0*/
/*Добавления стиля для фокуса*/
    var styles = document.createElement('style');
      styles.innerHTML =
          '.StandartBlue {' +  
            'background-color: blue;' +
            'color:white;'+
          '}'+
          '.headlightsGreen {'+
            'background-color:green;'+
            'color: white;'+
          '}'+
          '.headlightsYellow {' +  
            'background-color:yellow;' +
            'color: black;'+
          '}'+
          '.headlightsRed {' +  
            'background-color:red;' +
            'color: white;'+
          '}'
      document.body.append(styles);
/*Конец добавления стиля для фокуса*/
/*Переменная строки поиска*/
  var TextInTextarea=document.getElementById("Text_Area")
  var TEXTPRM =TextInTextarea.value
  /*var TEXTPRM="div"/*TEST*/
/*Конец переменным с строки поиска*/
if (TEXTPRM=="div"|| TEXTPRM=="DIV" || TEXTPRM=="Div"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Div_Foc.length; i++){
              var elem=Div_Foc[i]
             elem.classList.add("headlightsGreen");
             
            }
          }
          else if (IdBut==2) {
            for (i = 0; i < Div_Foc.length; i++){
              var elem=Div_Foc[i]
             elem.classList.add("headlightsYellow");
             
            }
          }
          else if (IdBut==3) {
            for (i = 0; i < Div_Foc.length; i++){
              var elem=Div_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
/*--------------------------------------------------ДЛЯ ПРОВЕРКИ--------------------------------------------------*/
          else if (IdBut==0){
            for (i = 0; i < Div_Tg.length; i++){
              var elem=Div_Foc[i]         
            elem.classList.add("StandartBlue");
/*-------------------------------------------------КОНЕЦ ПРОВЕРКИ-------------------------------------------------*/
            }
          }     
}
else if (TEXTPRM=="footer"|| TEXTPRM=="FOOTER" || TEXTPRM=="Footer"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Footer_Foc.length; i++){
              var elem=Footer_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Footer_Foc.length; i++){
              var elem=Footer_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Footer_Foc.length; i++){
              var elem=Footer_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Footer_Foc.length; i++){
              var elem=Footer_Foc[i]
              elem.classList.add("StandartBlue");              
            }

          }
}
else if (TEXTPRM=="form"|| TEXTPRM=="FORM" || TEXTPRM=="Form"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Form_Foc.length; i++){
              var elem=Form_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Form_Foc.length; i++){
              var elem=Form_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Form_Foc.length; i++){
              var elem=Form_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Form_Foc.length; i++){
              var elem=Form_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }
}
else if (TEXTPRM=="input"|| TEXTPRM=="Input" || TEXTPRM=="INPUT"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Input_Foc.length; i++){
              var elem=Input_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Input_Foc.length; i++){
              var elem=Input_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Input_Foc.length; i++){
              var elem=Input_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Input_Foc.length; i++){
              var elem=Input_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }
}
else if (TEXTPRM=="main"|| TEXTPRM=="Main" || TEXTPRM=="MAIN"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }
}
else if (TEXTPRM=="main"|| TEXTPRM=="Main" || TEXTPRM=="MAIN"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Main_Foc.length; i++){
              var elem=Main_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }
}
else if (TEXTPRM=="span"|| TEXTPRM=="Span" || TEXTPRM=="SPAN"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Span_Foc.length; i++){
              var elem=Span_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Span_Foc.length; i++){
              var elem=Span_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Span_Foc.length; i++){
              var elem=Span_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Span_Foc.length; i++){
              var elem=Span_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }  
}
else if (TEXTPRM=="Content"|| TEXTPRM=="content" || TEXTPRM=="CONTENT"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }          
}
else if (TEXTPRM=="Content"|| TEXTPRM=="content" || TEXTPRM=="CONTENT"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Content_Foc.length; i++){
              var elem=Content_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }          
}
else if (TEXTPRM=="Body"|| TEXTPRM=="body" || TEXTPRM=="BODY"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Body_Foc.length; i++){
              var elem=Body_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Body_Foc.length; i++){
              var elem=Body_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i <Body_Foc.length; i++){
              var elem=Body_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Body_Foc.length; i++){
              var elem=Body_Focc[i]
             elem.classList.add("StandartBlue"); 
            }
          }          
}
else if (TEXTPRM=="Article"|| TEXTPRM=="article" || TEXTPRM=="ARTICLE"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Article_Foc.length; i++){
              var elem=Article_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Article_Foc.length; i++){
              var elem=Article_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i <Article_Foc.length; i++){
              var elem=Article_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Article_Foc.length; i++){
              var elem=Article_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }          
}
else if (TEXTPRM=="A"|| TEXTPRM=="a" || TEXTPRM=="AA"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < A_Foc.length; i++){
              var elem=A_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < A_Foc.length; i++){
              var elem=A_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i <A_Foc.length; i++){
              var elem=A_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < A_Foc.length; i++){
              var elem=A_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }          
}
else if (TEXTPRM=="Address"|| TEXTPRM=="address" || TEXTPRM=="ADDRESS"){
          /*Смена фокуса*/
          if (IdBut==1) {
            for (i = 0; i < Address_Foc.length; i++){
              var elem=Address_Foc[i]
            elem.classList.add("headlightsGreen");
            }
          }
          if (IdBut==2) {
            for (i = 0; i < Address_Foc.length; i++){
              var elem=Address_Foc[i]
             elem.classList.add("headlightsYellow");
            }
          }
          if (IdBut==3) {
            for (i = 0; i <Address_Foc.length; i++){
              var elem=Address_Foc[i]
             elem.classList.add("headlightsRed");
            }
          }
          else{
            for (i = 0; i < Address_Foc.length; i++){
              var elem=Address_Foc[i]
             elem.classList.add("StandartBlue"); 
            }
          }          
}
else{
  alert("Этого атрибута нет в списке или вы оставили пустое поле:"+TEXTPRM.value)
}
}


