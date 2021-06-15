//////////////////////////////////   
//      Поиск по странице      //
////////////////////////////////
/*ВТОРАЯ ЧАСТЬ*/
function ListSrch(){
      alert("Начала функции второй:ListSrch")
          var SrchAtrbt=document.querySelectorAll('['+ words +']')
     for (i = 0; i < listTeg.length; i++) {/*Ищем в тех тегах которые мы вписали в массивах атрибуты*/
      if (listTeg[i] == SrchAtrbt){/*Если находим*/
        console.log(SrchAtrbt)/*Проверочка*/
        stringWords.push(listTeg[i]);/*Добавляем строку в лист*/
        words.push(element);/*Добавляем слово в элемент*/
        AddStyleSpan()
      }/*закрт if */ else {/*Если не найдём ничего не делаем*/
        console.log("Ничего не найдёно")/*helper*/
      }/*зак else*/
    }/*зак */
    /*Local storage*/
    alert(listTeg)
    /*chrome.storage.sync.set({ listTeg });
    chrome.storage.sync.set({ SrchAtrbt });*/
    alert(SrchAtrbt)

    AddStyleSpan()  
}