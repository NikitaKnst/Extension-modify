/////////////////////////////////////////////////   
//      Функция для сохранение последнего     //
//   вписаного атрибута или слово в textarea //
//////////////////////////////////////////////
 /*chrome.storage.sync.get("textSaver", ({ textSaver }) => {/*Достаём из local storage значение переменной textSaver
   document.getElementById("searchtxt").value=textSaver/*Получаем значение переменной textSaver с Local storage и вписываем эту переменную в textarea
 })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили
  chrome.storage.sync.get("AtributeSaver", ({ AtributeSaver }) => {/*Достаём из local storage значение переменной AtributeSaver
   document.getElementById("textAreaSecond").value=AtributeSaver/*Получаем значение переменной textSaver с Local storage и вписываем эту переменную в textarea  
 })/*Всё что находиться внутри этих скобок могут использовать определённую локальную переменную которую мы сохранили*/