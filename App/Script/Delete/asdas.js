/*Доп функция по поиску на js вроде должна работать но выдаёт ошибку replace-null or not function */
var WRDSRH=function WRDSRH(){

      
    /*Достаём текст из тела*/
      var searched = document.getElementById("search").value.trim();

    /*Заменяем текст добавляем ему атрибут с классом*/
    var bodyRefresh=bodyTab.replace(searchtxt, '<span class="SearchWords">'+ searchtxt +'</span>', 'gi');       
    /*Обновляем текст на странице*/
    bodyInTab.innerHTML = bodyRefresh;
}

/*Скрипт по поиску слова на js*/
var WRDSRHJAVA=function WRDSRHJAVA(){
  chrome.storage.sync.get("searchtxt", ({ searchtxt }) => {/*Значение первой textarea  по словам*/
         chrome.storage.sync.get("IdButTEXT", ({ IdButTEXT }) => {/*Достаём переменную которую сохранили на момент отправки функции отвечает за цвет выделение*/

   // получаем текст
    var body =  document.getElementById('body');        
    // производим замену текста
    var body_re = body.replace(searchtxt, '<span class="search">'+ searchtxt +'</span>', 'gi');       
    // обновляем весь текст
    body.innerHTML = body_re;
})
})
}

var SearchJAva=function SearchJAva(){
  chrome.storage.sync.get("searchtxt", ({ searchtxt }) => {
   var myString = searchtxt.innerHTML;
  var myPattern = new RegExp('.'+searchtxt,'g');
    var mark="<span class='FocusPokus'>" + searchtxt + "</span>";/*Помечаем слово которое мы нашли*/
  var myResult = myString.split(" ");  
      var bodyRefresh=bodyTab.replace(searchtxt,mark);       
                               /*Перепроверить*/
  for(var i=0; i<myResult.length; i++) {
    var result = myResult[i].match(myPattern);
    if(result) break;
  }

  document.getElementById("body").innerHTML = myResult;
})
}
function searchWRD(searchtxt) {
    chrome.storage.sync.get("searchtxt", ({ searchtxt }) => {
          var mark="<span class='FocusPokus'>" + searchtxt + "</span>";/*Помечаем слово которое мы нашли*/
          var myPattern = new RegExp('.'+searchtxt,'g');
    for (var i = 0; i < searchtxt.length; i++){
              if (searchtxt != ""){
                searchtxt[i].innerHTML=searchtxt[i].innerHTML.replace(myPattern,mark)      
            }
}
})
}
var srcWRD=function srcWRD() {
      chrome.storage.sync.get("searchtxt", ({ searchtxt }) => {// Текст, который надо найти
       chrome.storage.sync.get("IdBut", ({ IdBut }) => {

      var  textSaver=searchtxt/*Закидываем в локальное хранилище хрома переменную того что мы в последний раз вписывали*/

      var styles = document.createElement('style');/*Переменная создания стиля*/
     
     /*Пишем стиль */
      styles.innerHTML =
          '.Focus {' +  
            'background-color:'+ IdBut +';' +/*Вместо green будет переменная отвечающая за цвет*/
            'color:white;'+
          '}'
                          document.body.append(styles);/*Добавляем стиль перед концом body*/

     var regexp = new RegExp(searchtxt, 'i');
     alert("I")

      if (searchtxt != ""){    
        alert("II")
    // Если нашло, то выполнить это
    var reg = new RegExp(searchtxt, 'g');
    alert("III")
    var helper=new RegExp(searchtxt, "ig");
    var mark="<span class='FocusPokus'>" + searchtxt + "</span>";/*Помечаем слово которое мы нашли*/
        alert("IV")
     for (var i = 0; i < searchtxt.length; i++){/*Ищем атрибут*/
              var element=searchtxt[i]         
              /*Добавляем тому атрибуту который мы нашли класс Focus чтоб его обозначит*/
            element.replace(helper,mark);  
                    alert("IIV")

}
}
})
})
} 
        $('body').each(function(){ Резерв
            $(this).html($(this).html().replace(helper, mark));