/////////////////////////////////////////////////   
//      Функция таймер для срабатывания       //
//    через опрд кол-во секунд опрд функции  //
////////////////////////////////////////////// 
Time_TestidText.addEventListener("click", TimeFunctionWord)
    function TimeFunctionWord() {/*Таймер срабатывание*/
  setInterval(function () { alert("SrGo"); wordSearchAndAddClass() }, 10000)/*Таймер с интервалом  1000мл=1сек*/ } /*Не находит функцию почему то*/
  /*window.onload = TimeFunction*/ /*Функция при запуске страницы запускался таймер*/
  