TegSearshButton.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
    var TEXTTEST=document.getElementById('textAreaSecond').value;/*Это у нас id textarea*//*Добавили разделитель по строкам*/
      chrome.storage.sync.set({ TEXTTEST });/*Закидываем в local storege google значчение*/ /*СПАСИТЕЛЬ!*/
      /*alert(TEXTTEST)Просто выводит для проверки что мы вписали*/   
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ATRB,/*Выполняем выбранную нами функцию*/
}); 
});
SrcText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
      var searchtxt=document.getElementById('searchtxt').value/*Это у нас id textarea*/
      /*alert(searchtxt)Просто выводит для проверки что мы вписали*/  
      chrome.storage.sync.set({ searchtxt });/*Закидываем в куки значчение*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: WRD,/*Выполняем выбранную нами функцию*/
}); 
});
CleanerText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: deleteClassText,/*Выполняем выбранную нами функцию*/
}); 
});
CleanerAtribute.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: deleteClassAtribute,/*Выполняем выбранную нами функцию*/
}); 
});
/*---------------------------------------------------------------------------------------------------------------------------*/
greenId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickGreenButten,/*Выполняем выбранную нами функцию*/
}); 
});
yellowId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickYellowButten,/*Выполняем выбранную нами функцию*/
}); 
});
redId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickRedButten,/*Выполняем выбранную нами функцию*/
}); 
});
blueId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickBlueButten,/*Выполняем выбранную нами функцию*/
}); 
});
pinkId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickPinkButten,/*Выполняем выбранную нами функцию*/
}); 
});
orangeId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickOrangeButten,/*Выполняем выбранную нами функцию*/
}); 
});
blackId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickBlackButten,/*Выполняем выбранную нами функцию*/
}); 
});
purpulId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickPurpulButten,/*Выполняем выбранную нами функцию*/
}); 
});
turquoiseId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickTurquoiseButten,/*Выполняем выбранную нами функцию*/
}); 
});
whiteId.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickWhiteButten,/*Выполняем выбранную нами функцию*/
}); 
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
greenIdText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickGreenButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
yellowIdText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickYellowButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
redIdText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickRedButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
blueIdText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickBlueButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
pinkIdText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickPinkButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
orangeIdText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickOrangeButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
blackIdTEXT.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickBlackButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
purpulIdTEXT.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickPurpulButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
turquoiseIdTEXT.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickTurquoiseButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
whiteIdText.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ClickWhiteButtenTEXT,/*Выполняем выбранную нами функцию*/
}); 
});
/*-------------------------------------------------------Atribute FOCUS CHANGE----------------------------------------------------------------------------------------*/
function ClickGreenButten(){/*Функция для определение цвета выделение*/
    IdBut='#00FF00'/*Даём цвет переменной по атрибутам*/
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
    document.getElementById("StyleAtribute").innerHTML=".Focus {background-color:" +IdBut+ ";color:white;}"/*Для смены цвета в существ стиле*/
}
function ClickYellowButten(){/*Функция для определение цвета выделение*/
    IdBut='#FFFF33'/*Даём цвет переменной по атрибутам*/
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
function ClickRedButten(){/*Функция для определение цвета выделение*/
    IdBut='#FF0000'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/  
}
function ClickBlueButten(){/*Функция для определение цвета выделение*/
  IdBut='#0000FF'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
function ClickPinkButten(){/*Функция для определение цвета выделение*/
  IdBut='#FFC0CB'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
function ClickOrangeButten(){/*Функция для определение цвета выделение*/
  IdBut='#FFA500'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
function ClickBlackButten(){/*Функция для определение цвета выделение*/
  IdBut='#000000'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
function ClickPurpulButten(){/*Функция для определение цвета выделение*/
  IdBut='#800080'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
function ClickTurquoiseButten(){/*Функция для определение цвета выделение*/
  IdBut='#40E0D0'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
function ClickWhiteButten(){/*Функция для определение цвета выделение*/
  IdBut='#FFFFFF'/*Даём цвет переменной по атрибутам*/ 
  chrome.storage.sync.set({ IdBut });/*Сохраняем в локальном хранилище*/
}
/*------------------------------------------------------------------------------------------------------TEXT FOCUS CHANGE------------------------------------------------------------------------------------------------------*/
function ClickGreenButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#00FF00'/*Даём цвет переменной по текстам*/
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
      document.getElementById("StyleText").innerHTML=".FocusPokus {background-color:" +IdButTEXT+ ";color:white;}"/*Для смены цвета в существ стиле*/

}
function ClickYellowButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#FFFF33'/*Даём цвет переменной по текстам*/
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickRedButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#FF0000'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickBlueButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#0000FF'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickPinkButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#FFC0CB'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickOrangeButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#FFA500'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickBlackButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#000000'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickPurpulButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#800080'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickTurquoiseButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#40E0D0'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}

function ClickBlackButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#000000'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickPurpulButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#800080'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickTurquoiseButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#40E0D0'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
function ClickWhiteButtenTEXT(){/*Функция для определение цвета выделение*/
  IdButTEXT='#FFFFFF'/*Даём цвет переменной по текстам*/ 
  chrome.storage.sync.set({ IdButTEXT });/*Сохраняем в локальном хранилище*/
}
var ATRB=function SearchAtributeFunc(){ /*Для успрощённой работы с функциями даём ей переменную*/
   chrome.storage.sync.get("TEXTTEST", ({ TEXTTEST }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
    chrome.storage.sync.get("IdBut", ({ IdBut }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/  
    var TEXTTEST2=TEXTTEST.split('\n')/*Разделили по строкам*/
        var searchAtrb1=document.querySelectorAll(TEXTTEST2)/*Ищем атрибут*/
       var searchAtrb2=document.getElementsByClassName(TEXTTEST2)/*Ищем класс*/
      var AtributeSaver=TEXTTEST/*Закидываем в локальное хранилище хрома АТРИБУТЫ того что мы в последний раз вписывали*/  
            chrome.storage.sync.set({ AtributeSaver });/*Сохраняем переменную в local google chrome*/
                var elementWithAttribute = document.querySelectorAll('[' + TEXTTEST2 + ']');/* search Atribut*/
                alert(elementWithAttribute)
                  var QualAtrb=elementWithAttribute.length; /*Считаем кол-во найденных атрибутов*//*Работает*/
              alert("Кол-во найденых атрибутов:"+QualAtrb)/*Выводим пользователю сколько мы нашли атрибутов*/
          for (var i = 0; i < elementWithAttribute.length; i++){/*Ищем атрибут*/
              var element=elementWithAttribute[i]/*Ищем атрибут по строчкам*/  
            element.classList.add("Focus");/*Добавялем класс к атрибуту для подцветки его*/ 
            console.log(TEXTTEST2)
            }/*Закрываем for*/
    })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
   })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
  }/*Закрытие основной функциии*/
var WRD=function SearchWordH(){/*Для успрощённой работы с функциями даём ей переменную*/
     chrome.storage.sync.get("searchtxt", ({ searchtxt })=>{/*Достаём переменную которую сохранили на момент отправки функции*/
            chrome.storage.sync.get("IdButTEXT", ({ IdButTEXT })=>{/*Достаём переменную которую сохранили на момент отправки функции*/ 
                var textSaver=searchtxt/*Закидываем в локальное хранилище хрома текст того что мы в последний раз вписывали*/  
                    chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
            var searchtxt2=searchtxt.split('\n')/*Разделили по строкам, делаем его главной переменной при поиске*/
  chrome.storage.sync.set({ searchtxt });/*Сохраняем значение того что вписали*/
  chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
    var helper=new RegExp(searchtxt2, "ig");/*Проходим по всем строкам*/
    var mark="<span class='FocusPokus'>" +searchtxt2+ "</span>";/*Помечаем слово которое мы нашли*/
for (var i = 0; i < searchtxt2[i].length; i++){/*Перебираем и находим все слова на странице*/
            document.body.innerHTML = document.body.innerHTML.replace(helper, mark);/*Заменяем слово которое нашли добавля класс*/
            console.log(searchtxt2)
    }/*Закрытие for*/
})/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
})/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
}/*Закрытие функции*/
var deleteClassText=function deleteClass(){/*Даём функции переменную для облегчённой работы*/
  $("html").find(".FocusPokus").removeClass("FocusPokus");/*Удаляем стиль который добавляли*/ /*Удалем класс из текста*/
}/*Закрытие функции*/
var deleteClassAtribute=function deleteClassAtribute(){/*Даём функции переменную для облегчённой работы*/
  $("html").find(".Focus").removeClass("Focus")/*Удаляем стиль который добавляли*/ /*Удалем класс из атрибута*/
}/*Закрытие функции*/
 chrome.storage.sync.get("textSaver", ({ textSaver }) => {/*Достаём из local storage значение переменной textSaver*/
   document.getElementById("searchtxt").value=textSaver/*Получаем значение переменной textSaver с Local storage и вписываем эту переменную в textarea*/
 })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
  chrome.storage.sync.get("AtributeSaver", ({ AtributeSaver }) => {/*Достаём из local storage значение переменной AtributeSaver*/
   document.getElementById("textAreaSecond").value=AtributeSaver/*Получаем значение переменной textSaver с Local storage и вписываем эту переменную в textarea*/  
 })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
$(document).ready( async() => {
     var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
        chrome.scripting.executeScript({/*Выполняем скрипт*/
         target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
         function: barrista,
         }); 
});
async function barrista(){ 
     chrome.storage.sync.get("IdBut", ({ IdBut }) => {
        chrome.storage.sync.get("IdButTEXT", ({ IdButTEXT })=>{
            var stylPocus =document.getElementsByClassName('FocusPokus')
              if(!styles){/*Если нет стиля*/
                      console.log("EdditStyle")
                   var styles = document.createElement('style');/*Переменная создания стиля*/
                   styles.id='StyleText'
               styles.innerHTML ='.FocusPokus {' +
                                 'background-color:'+IdButTEXT+';'+/*Добавляем вот такой стиль в конце атрибута body*//*IdButTEXT переменная отвечает за цвет которым м ыбудет подцветивать слова*/
                                 'color:white;'+
                                 '}' 
                document.body.append(styles);/*Добавляем стиль перед концом body*/
             var styles2 = document.createElement('style');/*Переменная создания стиля*/  
              styles2.id='StyleAtribute'
              styles2.innerHTML ='.Focus {' +   /*Пишем стиль*/
                                'background-color:'+ IdBut +';' +/*Добавляем вот такой стиль в конце атрибута body*//*IdBut переменная отвечает за цвет которым м ыбудет подцветивать атрибуты*/
                                'color:white;'+
                                '}'
                        document.body.append(styles2);/*Добавляем стиль перед концом body*/
                    } 
                    else {/*Если есть стиль отказываеться*/
                         console.log("NoEdit")

                    }

 })
 })
 }
