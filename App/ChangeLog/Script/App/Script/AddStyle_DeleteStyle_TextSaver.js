$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
     var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
        chrome.scripting.executeScript({/*Выполняем скрипт*/
         target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
         function: barrista,/*Функция добавление стиля*/
         });/*Конец chrome.scripting*/ 
});/*Конец асинхронной функции*/
async function barrista(){ /*Асинхронная функция добавление стилей называем его барменорм баристой2*/
     chrome.storage.sync.get("IdBut", ({ IdBut }) => {/*Берём из локального хранилищя цвет текста*/
        chrome.storage.sync.get("IdButTEXT", ({ IdButTEXT })=>{/*Берём из локального хранилищя цвет Атрибута*/
            chrome.storage.sync.get("cl", ({ cl })=>{/*Достаём переменную которую сохранили на момент отправки функции*/ 
             chrome.storage.sync.get("clrTextChan", ({ clrTextChan })=>{/*Достаём переменную которую сохранили на момент отправки функции*/ 
            var ob4ekt_Style=document.getElementById('StyleText')/*Проверяем существование объект*/
             var IdBut=cl
             var IdButTEXT=clrTextChan
            console.log(IdBut+"<-------Atribut")
            console.log(IdButTEXT+"<-------Text")
              if(!ob4ekt_Style){/*Если объект не существует добавляем стиль*/
                      console.log("Eddit Styles")/*Проверяем на консоли всё ли норм работает*/
                   var styles = document.createElement('style');/*Переменная создания стиля*//*<------------------Первый тег/атрибут с стиляем текста*/
                   styles.id='StyleText'  /*Добавялем стилю id чтоб было легче его найти*/
               styles.innerHTML ='.FocusPokus {' +/*Название стиля*/
                                 'background-color:'+IdButTEXT+';'+/*Добавляем вот такой стиль в конце атрибута body*//*IdButTEXT переменная отвечает за цвет которым м ыбудет подцветивать слова*/
                                 'color:white;'+/*Цвет текста*/
                                 '}' 
                document.body.append(styles);/*Добавляем стиль перед концом body*/
             var styles2 = document.createElement('style');/*Переменная создания стиля*//*<------------------Второй тег/атрибут с стиляем атрибута*/ 
              styles2.id='StyleAtribute'  /*Добавялем стилю id чтоб было легче его найти*/
              styles2.innerHTML ='.Focus {' +   /*Название стиля*/
                                'background-color:'+ IdBut +';' +/*Добавляем вот такой стиль в конце атрибута body*//*IdBut переменная отвечает за цвет которым м ыбудет подцветивать атрибуты*/
                                'color:white;'+/*Цвет текста*/
                                '}'
                        document.body.append(styles2);/*Добавляем стиль перед концом body*/
                    } 
                    else {/*Если у нас уже на странице существует стиль то мы ничего не делаем кроменя как выводим в консоли что стиль уже существует*/
                         console.log("No edit style he exists")/*Говорим что всё существует*/
                    }
 })
 })
 })
})
}
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