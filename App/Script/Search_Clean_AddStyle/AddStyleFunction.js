//////////////////////////////////////////////////////////////////   
//      Функция добавление стиля найденому слову или атрибуту  //
//////////////////////////////////////////////////////////////// 
/*Третья  ЧАСТЬ*/
function AddStyleSpan() {
      alert("Начала функции:AddStyleSpan")
     /*    chrome.storage.sync.get("listTeg", ({ listTeg }) => {Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
   /*chrome.storage.sync.get("SrchAtrbt", ({ SrchAtrbt }) => {Достаём переменную из local storage Google которую сохранили на момент отправки функции*/
      for (var i = 0; i < listTeg.length; i++){/*Ищем атрибут*/
      var element=SrchAtrbt/*Ищем атрибут по строчкам*/
      /*Потеря*/
      var element2=document.querySelectorAll('[' + 'aria-label' + ']')
            element2.classList.add("Focus");/*Добавялем класс к атрибуту для подцветки его*/ 
                              alert("1111111111111111111111")

            console.log(SrchAtrbt)/*Проверяем как у нас вписываються атрибуты*/
                  alert("22222222222222222222")

            }/*Закрываем for*/
}
