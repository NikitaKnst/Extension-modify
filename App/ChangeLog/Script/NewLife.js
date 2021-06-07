/*TegSearshButton.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку
    var TEXTTEST=document.getElementById('textAreaSecond').value;/*Это у нас id textarea*//*Добавили разделитель по строкам
      chrome.storage.sync.set({ TEXTTEST });/*Закидываем в local storege google значчение /*СПАСИТЕЛЬ!
      /*alert(TEXTTEST)Просто выводит для проверки что мы вписали
   chrome.scripting.executeScript({/*Выполняем скрипт
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку
    function: srchAtrb,/*Выполняем выбранную нами функцию
}); 
});
SrcText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку
      var searchtxt=document.getElementById('searchtxt').value/*Это у нас id textarea
      /*alert(searchtxt)Просто выводит для проверки что мы вписали  
      chrome.storage.sync.set({ searchtxt });/*Закидываем в куки значчение
   chrome.scripting.executeScript({/*Выполняем скрипт
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку
    function: srchAtrb,/*Выполняем выбранную нами функцию
}); 
});
document.getElementById("owl").addEventListener("click",showDetails(owl))*/
/*document.getElementsByName('Tresh').addEventListener("click",ColorAtribute) */
document.querySelector("[name='Timbers']").addEventListener("click",TaimerFunction) /*Берём кнопку с атрибутом data-ColorAtribue (Достаёт не всё а первую которая находитсья в html файле)*/
document.querySelector("[name='Tresh']").addEventListener("click",ColorAtribute) /*Берём кнопку с атрибутом data-ColorAtribue (Достаёт не всё а первую которая находитсья в html файле)*/
document.querySelector("[name='Tresh2']").addEventListener("click",ColorTextChange) /*Берём кнопку с атрибутом data-ColorAtribue (Достаёт не всё а первую которая находитсья в html файле)*/
/*работа всех кнопок*/
/*  
$(document).ready(function ()0 {
  $('body').addClass('Higlht');
    var TEXTTEST=document.getElementById("textAreaSecond").value
var spanHLStart = '<span class="Higlht">';
var spanHLEnd = "</span>";
  var list =["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"] /*Лист тегов
  var qq = $('body');
  qq[0].insertAdjacentHTML('beforeend', spanHLStart + spanHLEnd);
     var textAreaAtribute=TEXTTEST
    var fndListNods= [textAreaAtribute];
  var artefact= '['+ fndListNods +']'/*находим атрибуты
  var compareAttrResults = compareAttributeAndStrings(artefact, list);
  console.log(compareAttrResults[0]);

});*/

function ColorTexT(){
	var elem = document.querySelector('[data-ColorText]');/*выбираем все атрибуты*/
   var colorText=elem.getAttribute('data-ColorText')/*Берём цвет с атрибута*/
    console.log(elem)
      console.log(colorText)

	    return
}

function srchAtrb(){
  var TEXTTEST=document.getElementById("textAreaSecond").value
    var foundListNodes = [];
    var foundListStrings = [];

    var textAreaAtribute=TEXTTEST
		fndListNods= [textAreaAtribute];
		fndListStrng=[textAreaAtribute.split('\n')]; /*разделяем*/
    console.log(TEXTTEST)/*консоль*/
		var list =["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"] /*Лист тегов*/
	var artefact= '['+ fndListNods +']'/*находим атрибуты*/
	 Array.prototype.forEach.call(artefact, function (element, index) {/*sakritie i otkritie atrb---element==[   and index==0-index slov*/
    console.log(element)
    console.log(index)
    for (i = 0; i < list.length; i++) {
      if (list[i] == artefact) {
        console.log(artefact)
        fndListStrng.push(list[i]);
        fndListNods.push(element);
      } else {

      }
    }
})
  return [fndListStrng, fndListNods];
        colorAtrib
        console.log(colorAtrib)
}
function colorstyle(){
  colorAtrib/*чекаем*/
  console.log(colorAtrib)/*чекаем*/
class MyHight {/*солздаем класс3*/

  constructor(className, Color1 = "white") {
    this.clrAtrb=colorAtrib/*Цвет бэкраунда аутрибута*/
    this.className = className;/*доп класс*/
        this.className = Higlht;/*ИМЯ КЛССА*/
    this.TextbgColor = Color1;/*Цвет текста*/
    /*this.Styles = '.' + this.className + ' {background-color:' + this.bgColor + '; color:' + this.color + ';} делаем стиль с переменными цвсета имя класса  ';*/
        this.Styles = '.' + this.Higlht + ' {background-color:' + this.clrAtrb + '; color:' + this.TextbgColor + ';} ';/*Добавляем стиль с переменными цвета*/

  }

}
// Create styles
var hightlightString1 = new MyHight("coolHighligth", "blue", "white");
var hightlightString2 = new MyHight("NOTcoolHighligth");
// Add styles to the page 

var myStyles = document.createElement('style'); /*Создаём стиль*/
myStyles.innerHTML = hightlightString1.Styles + hightlightString2.Styles; // Fill style tag with styles
document.body.append(myStyles); /*Добавляем стиль*/
}
function SearchWordH(){/*Для успрощённой работы с функциями даём ей переменную*/
     chrome.storage.sync.get("searchtxt", ({ searchtxt })=>{/*Достаём переменную которую сохранили на момент отправки функции*/
                var textSaver=searchtxt/*Закидываем в локальное хранилище хрома текст того что мы в последний раз вписывали*/  
                    chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
            var searchtxt2=searchtxt.split('\n')/*Разделили по строкам, делаем его главной переменной при поиске*/
  chrome.storage.sync.set({ searchtxt });/*Сохраняем значение того что вписали*/
  chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
    var helper=new RegExp(searchtxt2, "ig");/*Проходим по всем строкам*/
    var mark="<span class='FocusPokus'>" +searchtxt2+ "</span>";/*Помечаем слово которое мы нашли*/
    var repka='['+ searchtxt2 +']'/*Артефакт*/
for (var i = 0; i < searchtxt2[i].length; i++){/*Перебираем и находим все слова на странице*/
            document.body.innerHTML = document.body.innerHTML.replace(repka);/*Заменяем слово которое нашли добавля класс*/
    }/*Закрытие for*/
})/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
}/*Закрытие функции*/
function ColorAtribute(){
  var colorPicker = document.getElementsByName('Tresh');
  var colorChange = function () {
   var cl=this.dataset.coloratribyue
  console.log(cl);
    };
  for (var i = 0 ; i < colorPicker.length ; i++){
     colorPicker[i].addEventListener('click', colorChange, false);
     console.log("Save Color")
  } 
}
function ColorTextChange(){
  var colorPic = document.getElementsByName('Tresh2');
  var clrTextChan = function () {
   var clrTextChan=this.dataset.colortext
  console.log('------->'+clrTextChan+'<-------');
    };
  for (var i = 0 ; i < colorPic.length ; i++){
     colorPic[i].addEventListener('click', clrTextChan, false);
     console.log("Save Color TEXT")
  } 
}
function TaimerFunction() {/*Таймер срабатывание */
  setInterval(function (){ console.log("3 sec end"); tes() }, 3000);/*Последние число кол-во миллисекунд */ 
}
function tes(){
  console.log("Proslo")
}
async function  ChoiseWord(){/*Выбираем слова и разделяем их на строки*/
  var b= document.getElementById("textAreaSecond").value
      var words= []
      var stringWords= []
      words=b
      stringWords= b
      var list =["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"] /*Лист тегов*/
      var SrchWord= document.querySelectorAll('['+ words +']')/*Выбираем атрибуты*/
      Array.prototype.forEach.call(SrchWord,function(element,index){
         for (i = 0; i < list.length; i++) {/*Ищем в тех тегах которые мы вписали в массивах атрибуты*/
      if (list[i] == SrchWord){/*Если находим*/
        console.log(SrchWord)/*Проверочка*/
        stringWords.push(list[i]);/*Добавляем строку в лист*/
        words.push(element);/*Добавляем слово в элемент*/
        srwAtribute()
      } else {/*Если не найдём ничего не делаем*/
        console.log("Ничего не найдёно")
      }
    }
})
  return [stringWords, words];
}
function srwAtribute(){/*Добавляем класс к найдему слову*/
            chrome.storage.sync.set({ AtributeSaver });/*Сохраняем переменную в local google chrome*/
                console.log()/*Помощник*/
                  var QualAtrb=words.length; /*Считаем кол-во найденных атрибутов*//*Работает*/
                  console.log("Quantity Atribut:"+QualAtrb)
              alert("Кол-во найденых атрибутов:"+QualAtrb)/*Выводим пользователю сколько мы нашли атрибутов*/
          for (var i = 0; i < list.length; i++){/*Ищем атрибут*/
              var element=SrchWord[i]/*Ищем атрибут по строчкам*/  
            element.classList.add("Focus");/*Добавялем класс к атрибуту для подцветки его*/ 
            console.log(SrchWord)/*Проверяем как у нас вписываються атрибуты*/
            }/*Закрываем for*/
    }/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
