///////////////////////////////////////////////  
//     Функция выборки слов                 //
/////////////////////////////////////////////
/*Testid.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку
    var TEXTTEST=document.getElementById('textAreaSecond').value;/*Это у нас id textarea*//*Добавили разделитель по строкам
      chrome.storage.sync.set({ TEXTTEST });/*Закидываем в local storege google значчение /*СПАСИТЕЛЬ!
   chrome.scripting.executeScript({/*Выполняем скрипт
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку
    function: ChoiseWord,/*Выполняем выбранную нами функцию
}); 
});*/
/*ПЕРВАЯ ЧАСТЬ*/
document.getElementById("Testid").addEventListener("click",ChoiseWord )
   var list = ["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"]
     var listTeg = list /*Лист тегов*/ /*<-----------Потеряли*/
  var words= []/*Заранее называем переменные прст*/
        var SrchAtrbt=[]

 function  ChoiseWord(){/*Выбираем слова и разделяем их на строки*/
        alert("Начала первая функции:ChoiseWord")

   /*chrome.storage.sync.get("TEXTTEST", ({ TEXTTEST }) => {Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
    var TEXTTEST=document.getElementById("textAreaSecond").value
    alert("Что вписали:"+TEXTTEST)
  var b= TEXTTEST/*Получаем значение с textarea*/
  alert(b)
  var stringWords= []/*Заранее называем переменные прст*/
      words=b/*Даём переменным значение с textarea.value*/
        var SrchAtrbt=document.querySelectorAll('[' + words + ']')
      stringWords= b.split('\n')/*Даём переменным значение с textarea.value*/
        alert("words:"+words)
        alert("stringWords:"+stringWords)
        console.log(SrchAtrbt)
                      alert("SrchAtrbt------>"+SrchAtrbt)
            Array.prototype.forEach.call(SrchAtrbt, function (element, index) {/*sakritie i otkritie atrb---element==[   and index==0-index slov <--------------------*/

})/*закр */
       ListSrch()/*Переходим к след функции*/
}/*закр for*/

