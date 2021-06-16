TegSearshButton.addEventListener("click", async() =>/*Отправляем функции выполняться при нажатии на кнопку*/
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
    var TEXTTEST=document.getElementById('textAreaSecond').value;/*Это у нас id textarea*//*Добавили разделитель по строкам*/
      chrome.storage.sync.set({ TEXTTEST });/*Закидываем в local storege google значчение*/ /*СПАСИТЕЛЬ!*/
      /*alert(TEXTTEST)Просто выводит для проверки что мы вписали*/   
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: SearchAtributeFunc,/*Выполняем выбранную нами функцию*/
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
    function: SearchWordH,/*Выполняем выбранную нами функцию*/
}); 
});
function SearchAtributeFunc(){ /*Для успрощённой работы с функциями даём ей переменную*/
   chrome.storage.sync.get("TEXTTEST", ({ TEXTTEST }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
      var librum=[]/*Просто для проверки*/
    var TEXTTEST2=TEXTTEST.split('\n')/*Разделили по строкам*/
        var searchAtrb1=document.querySelectorAll(TEXTTEST2)/*Ищем атрибут*/
       var searchAtrb2=document.getElementsByClassName(TEXTTEST2)/*Ищем класс*/
      var AtributeSaver=TEXTTEST/*Закидываем в локальное хранилище хрома АТРИБУТЫ того что мы в последний раз вписывали*/  
            chrome.storage.sync.set({ AtributeSaver });/*Сохраняем переменную в local google chrome*/
                var elementWithAttribute = document.querySelectorAll('[' + TEXTTEST2 + ']');/* search Atribut*/
                console.log(elementWithAttribute)/*Помощник*/
                  var QualAtrb=elementWithAttribute.length; /*Считаем кол-во найденных атрибутов*//*Работает*/
                  console.log("Quantity Atribut:"+QualAtrb)
              alert("Кол-во найденых атрибутов:"+QualAtrb)/*Выводим пользователю сколько мы нашли атрибутов*/
                 librum=elementWithAttribute/*Просто для проверки*/
              console.log("------>"+librum)
          for (var i = 0; i < elementWithAttribute.length; i++){/*Ищем атрибут*/
              var element=elementWithAttribute[i]/*Ищем атрибут по строчкам*/  
            element.classList.add("Atrib");/*Добавялем класс к атрибуту для подцветки его*/ 
            console.log(TEXTTEST2)/*Проверяем как у нас вписываються атрибуты*/
            }/*Закрываем for*/
    })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
  }/*Закрытие основной функциии*/
function SearchWordH(){/*Для успрощённой работы с функциями даём ей переменную*/
     chrome.storage.sync.get("searchtxt", ({ searchtxt })=>{/*Достаём переменную которую сохранили на момент отправки функции*/
              var listSrch=[]/*nada*/
                var textSaver=searchtxt/*Закидываем в локальное хранилище хрома текст того что мы в последний раз вписывали*/  
                    chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
            var searchtxt2=searchtxt.split('\n')/*Разделили по строкам, делаем его главной переменной при поиске*/
  chrome.storage.sync.set({ searchtxt });/*Сохраняем значение того что вписали*/
  chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
    var helper=new RegExp(searchtxt2, "ig");/*Проходим по всем строкам*/
    var mark="<span class='TEXT'>" +searchtxt2+ "</span>";/*Помечаем слово которое мы нашли*/
    var arrayLength=searchtxt2.length
for (var i = 0; i < arrayLength; i++){/*Перебираем и находим все слова на странице*/
        console.log("xyz:"+searchtxt2[i]);
            document.body.innerHTML = document.body.innerHTML.replace(helper, mark);/*Заменяем слово которое нашли добавля класс*/
            console.log(searchtxt2)/*Помощник в консоли проверяем как мы вписываем слова*/
            return(arrayLength)
    }/*Закрытие for*//*foreach*/
})/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
}/*Закрытие функции >*/