/////////////////////////////////////
//  Функция для смены цвета фокуса //
//       и добавление стилей       //
/////////////////////////////////////
document.querySelector("[name='Tresh']").addEventListener("click",ColorAtribute) /*Берём кнопку с атрибутом data-ColorAtribue (Достаёт не всё а первую которая находитсья в html файле)*/
document.querySelector("[name='Tresh']").addEventListener("click", async() =>
{ 
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ChangeColorFocus,/*Выполняем выбранную нами функцию*/
}); 
});
})
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
/*Переписываем стиль*/
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
$(document).ready( async() => {/*Когда страница загруженна мы выполняем функцию добавление стилей*/
   var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });/*Находим активную вкладку*/
   chrome.scripting.executeScript({/*Выполняем скрипт*/
    target:  {tabId: tab.id, allFrames: true},/*Таргет на активную вкладку*/
    function: ChangeColorFocusText,/*Выполняем выбранную нами функцию*/
}); 
});
})
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
/*Переписываем стиль*/
 function ChangeColorFocusText(){/*Отдельная функция переписывание стиля для смены цвета*/
      chrome.storage.sync.get("IdButTEXT", ({ IdButTEXT }) => {/*Достаём переменную из local storage Google которую сохранили на момент отправки функции*/  
        document.getElementById("StyleText").innerHTML=".FocusPokus {background-color:" +IdButTEXT+ ";color:white;}"/*Переписываем для смены цвета в существ стиле*/
})
}
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
            console.log(IdBut+"<-------Color-Atribut")/*Проверка*/
            console.log(IdButTEXT+"<-------Color-Text")/*Проверка всё ок терь*/
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

