//////////////////////////////////////////////////   
//      Функция добавление стиля к слову       //
//////////////////////////////////////////////// 
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
     var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
        chrome.scripting.executeScript({/*Выполняем скрипт*/
         target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
         function: saglushka,/*Функция таймера*//*Тут будет функция вот эта ------------->srwAtribute<-------------*/
         });/*Конец chrome.scripting*/ 
});/*Конец асинхронной функции*/
function saglushka(){/*Тупо заглушка*/
  console.log("Заглушка")/*Просто заглушка для проверки*/
}/*Кнц заглушки*/
  function srwAtribute(){/*Добавляем класс к найдему слову*/
  alert("srwAtribute function")/*Начало функции*/
      var AtributeSaver=TEXTTEST/*Закидываем в локальное хранилище хрома АТРИБУТЫ того что мы в последний раз вписывали*/  
            chrome.storage.sync.set({ AtributeSaver });/*Сохраняем переменную в local google chrome*/
      var QualAtrb=words.length; /*Считаем кол-во найденных атрибутов*//*Работает*/
                  console.log("Quantity Atribut:"+QualAtrb)/*видим сколько атрибутов нашли*/
              alert("Кол-во найденых атрибутов:"+QualAtrb)/*Выводим пользователю сколько мы нашли атрибутов*/
            var helper=new RegExp(words, "ig");/*Проходим по всем строкам*/
        var mark="<span class='FocusPokus'>" +words+ "</span>";/*Помечаем слово которое мы нашли*/
          AddStyleSpan()
    }/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/