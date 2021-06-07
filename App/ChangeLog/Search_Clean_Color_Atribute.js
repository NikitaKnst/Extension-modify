
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
/*Кнопки с атрибутами цвета и смены стиля*/
document.querySelector("[name='Tresh']").addEventListener("click",ColorAtribute) /*Берём кнопку с атрибутом data-ColorAtribue (Достаёт не всё а первую которая находитсья в html файле)*/
document.querySelector("[name='Tresh']").addEventListener("click", async() =>
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ChangeColorFocus,/*Выполняем выбранную нами функцию*/
}); 
});
async function ColorAtribute(){/*Асинхронная функция для выборки и смены цвета для каждой кнопки*/
  var colorPicker = document.getElementsByName('Tresh');/*Берём элемент с html файла*/
  var colorChange = function (){/*Достаём цвет с data-ColorAtribyue*/
    var cl=this.dataset.coloratribyue/*Берём и присваеваем текст*/
  console.log(cl);/*Помощник*/
      chrome.storage.sync.set({ cl });/*Закидываем в local storege google значчение*/ /*СПАСИТЕЛЬ!*/
    };
  for (var i = 0 ; i < colorPicker.length ; i++){/*Перебираем цвета по кнопкам*/
     colorPicker[i].addEventListener('click', colorChange, false);/*функция клик по кнопкам*/
     console.log("saveColor")/*Помощник*/
  }
}
 function ChangeColorFocus(){/*Отдельная функция переписывание стиля для смены цвета*/
      chrome.storage.sync.get("IdBut", ({ IdBut }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/  
        document.getElementById("StyleAtribute").innerHTML=".Focus {background-color:" +IdBut+ ";color:white;}"/*Переписываем для смены цвета в существ стиле*/
})
}
/*---------------------------------------------------------------------------------------------------------------------------*/
/*Кнопки с текстами цвет и смена стиля*/
document.querySelector("[name='Tresh2']").addEventListener("click",ColorTextChange) /*Берём кнопку с атрибутом data-ColorAtribue (Достаёт не всё а первую которая находитсья в html файле)*/
document.querySelector("[name='Tresh2']").addEventListener("click", async() =>
{ 
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ChangeColorFocusText,/*Выполняем выбранную нами функцию*/
}); 
});
async function ColorTextChange(){/*Асинхронная функция для выборки и смены цвета для каждой кнопки*/
  var colorPic = document.getElementsByName('Tresh2');/*Берём то имя которое над*/
  var clrTextChanAge = function () {/*Достаём цвет с data-ColorText*/
   var clrTextChan=this.dataset.colortext/*Берём и присваеваем текст*/
  console.log(clrTextChan);/*Помощник в консоле для выборки*/
          chrome.storage.sync.set({ clrTextChan });/*Закидываем в local storege google значчение*/ /*СПАСИТЕЛЬ!*/
  };
  for (var i = 0 ; i < colorPic.length ; i++){/*Перебираем цвета по кнопкам*/
     colorPic[i].addEventListener('click', clrTextChanAge, false);/*функция клик по кнопкам*/
     console.log("Save Color TEXT")/*Помощник*/
  } 
}
 function ChangeColorFocusText(){/*Отдельная функция переписывание стиля для смены цвета*/
      chrome.storage.sync.get("IdButTEXT", ({ IdButTEXT }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/  
        document.getElementById("StyleText").innerHTML=".FocusPokus {background-color:" +IdButTEXT+ ";color:white;}"/*Переписываем для смены цвета в существ стиле*/
})
}
/*---------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------------------------------------*/












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
            element.classList.add("Focus");/*Добавялем класс к атрибуту для подцветки его*/ 
            console.log(TEXTTEST2)/*Проверяем как у нас вписываються атрибуты*/
            }/*Закрываем for*/
    })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
   }/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
function SearchWordH(){/*Для успрощённой работы с функциями даём ей переменную*/
     chrome.storage.sync.get("searchtxt", ({ searchtxt })=>{/*Достаём переменную которую сохранили на момент отправки функции*/
            chrome.storage.sync.get("IdButTEXT", ({ IdButTEXT })=>{/*Достаём переменную которую сохранили на момент отправки функции*/ 
              var listSrch=[]
                var textSaver=searchtxt/*Закидываем в локальное хранилище хрома текст того что мы в последний раз вписывали*/  
                    chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
            var searchtxt2=searchtxt.split('\n')/*Разделили по строкам, делаем его главной переменной при поиске*/
  chrome.storage.sync.set({ searchtxt });/*Сохраняем значение того что вписали*/
  chrome.storage.sync.set({ textSaver });/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/
    var helper=new RegExp(searchtxt2, "ig");/*Проходим по всем строкам*/
    var mark="<span class='FocusPokus'>" +searchtxt2+ "</span>";/*Помечаем слово которое мы нашли*/
for (var i = 0; i < searchtxt2[i].length; i++){/*Перебираем и находим все слова на странице*/
            document.body.innerHTML = document.body.innerHTML.replace(helper, mark);/*Заменяем слово которое нашли добавля класс*/
            console.log(searchtxt2)/*Помощник в консоли проверяем как мы вписываем слова*/
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
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
     var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
        chrome.scripting.executeScript({/*Выполняем скрипт*/
         target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
         function: ChoiseWord,/*Функция таймера*/
         });/*Конец chrome.scripting*/ 
});/*Конец асинхронной функции*/
/*Первая часть таймер каждые 3 секунды выводит надпись*/
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
     var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
        chrome.scripting.executeScript({/*Выполняем скрипт*/
         target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
         function: TaimerFunction,/*Функция таймера*/
         });/*Конец chrome.scripting*/ 
});/*Конец асинхронной функции*/
function tbk(){
  console.log("xzy")
}
async function TaimerFunction() {/*Таймер срабатывание */
  setInterval(function (){ console.log("3 sec end"); ChoiseWord()/*отправляем выполнять определённую функцию*/ }, 3000);/*Последние число кол-во миллисекунд */ 
}
/*Вторая часть с получение слов и разделение на строки и тд*/
async function  ChoiseWord(){/*Выбираем слова и разделяем их на строки*/
     chrome.storage.sync.get("TEXTTEST", ({ TEXTTEST }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
     chrome.storage.sync.get("searchtxt", ({ searchtxt })=>{/*Достаём переменную которую сохранили на момент отправки функции*/
      var words= []/*Зарание указываем название переменных*/
      var stringWords= []/*Зарание указываем название переменных*/
      words=TEXTTEST/*ищем слова*/
      stringWords=words.split('\n')/*берём слова и разделяем их на строки*/
      var list =["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"] /*Лист тегов*/
      var SrchWord= document.querySelectorAll('['+ words +']')/*Переменная атрибута*/
      Array.prototype.forEach.call(SrchWord,function(element,index){
         for (i = 0; i < list.length; i++) {/*ищем теги*/
      if (list[i] == SrchWord){/*ищем в тегах нужное нам слово*/
        console.log(SrchWord)/*Помощник*/
        stringWords.push(list[i]);/*Дб в список*/
        words.push(element);/*Дб*/
        console.log("Yest")/*test*/
        srwAtribute()/*отправляем выполнять определённую функцию*/
      } else {
      }
    }
})
  return [stringWords, words];/*Возвращаемся*/
})
})
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





/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    function TaimerFunction() {/*Таймер срабатывание */
  setInterval(function (){ console.log("3 sec end"); ChoiseWord()/*Работает но не при расширении только на стоковой странице*/ }, 3000);/*Последние число кол-во миллисекунд 1000млскнд=1сек */ 
}/*Закрв тестовую функцию*/
function tes(){/*Фнкция для текста*/
  console.log("Proslo")/*Помощник*/
}/*закрываем функцию проверки*/
async function  ChoiseWord(){/*Выбираем слова и разделяем их на строки*/
            chrome.storage.sync.set({ AtributeSaver });/*Сохраняем переменную в local google chrome*/
  var b= document.getElementById("textAreaSecond").value/*Получаем значение с textarea*/
      var words= []/*Заранее называем переменные прст*/
      var stringWords= []/*Заранее называем переменные прст*/
      words=b/*Даём переменным значение с textarea.value*/
      stringWords= b/*Даём переменным значение с textarea.value*/
      var list =["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"] /*Лист тегов*/
      var SrchWord= document.querySelectorAll('['+ words +']')/*Выбираем атрибуты*/
      Array.prototype.forEach.call(SrchWord,function(element,index){
         for (i = 0; i < list.length; i++) {/*Ищем в тех тегах которые мы вписали в массивах атрибуты*/
      if (list[i] == SrchWord){/*Если находим*/
        console.log(SrchWord)/*Проверочка*/
        stringWords.push(list[i]);/*Добавляем строку в лист*/
        words.push(element);/*Добавляем слово в элемент*/
        srwAtribute()/*Кидаем функцию в стол*/
      } else {/*Если не найдём ничего не делаем*/
        console.log("Ничего не найдёно")/*helper*/
      }
    }
})
  return [stringWords, words];/*Возвращаем переменные*/
}
function srwAtribute(){/*Добавляем класс к найдему слову*/
            chrome.storage.sync.set({ AtributeSaver });/*Сохраняем переменную в local google chrome*/
                console.log("tb")/*Помощник*/
                  var QualAtrb=words.length; /*Считаем кол-во найденных атрибутов*//*Работает*/
                  console.log("Quantity Atribut:"+QualAtrb)/*видим сколько атрибутов нашли*/
              alert("Кол-во найденых атрибутов:"+QualAtrb)/*Выводим пользователю сколько мы нашли атрибутов*/
          for (var i = 0; i < list.length; i++){/*Ищем атрибут*/
              var element=SrchWord[i]/*Ищем атрибут по строчкам*/  
            element.classList.add("Focus");/*Добавялем класс к атрибуту для подцветки его*/ 
            console.log(SrchWord)/*Проверяем как у нас вписываються атрибуты*/
            }/*Закрываем for*/
    }/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

