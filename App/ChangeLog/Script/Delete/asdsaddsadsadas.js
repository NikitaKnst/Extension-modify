var ATRB=function SearchAtributeFunc(){
  IdBut=0
  /*Переменные цвета*/
  var Blue = '#0080FF';
  var Yellow = '#FFFF33';
  var Red = '#FF0000';
  var Green = '#00FF00';

    

  /*var textInTextarea=document.getElementById("textArea")/*Берём элемент textarea*/
  /*Сохраняем последнее ввёденное слово*/
  /*var SaveAtribute=document.getElementById("textArea").value
  localStorage("SaveAtribute")=SaveAtribute*/

    /*var TEXTPRM=textInTextarea.value/*Достаём в текстовом формате что мы вписали в textarea*/
    var TEXTPRM="div"/*Достаём в текстовом формате что мы вписали в textarea*/
    var list= ["div","footer","body","form","a","input","address","area","article","content","span","main","h1","h2","h3","h4","h5","h6","p"]/*Список атрибутов*/
    var searchAtrb=document.querySelectorAll(list)/*Тут всё из листа*/

        var searchAtrb1=document.querySelectorAll(TEXTPRM)/*Теставая то что пишем то и закрашиваем*/

        var styles = document.createElement('style');/*Переменная создания стиля*/

              styles.innerHTML =
          '.Focus {' +  
            'background-color:'+ Yellow +';' +/*Вместо green будет переменная отвечающая за цвет*/
            'color:white;'+
          '}'
                document.body.append(styles);
                  for (var i = 0; i < searchAtrb1.length; i++){/*Ищем атрибут*/
              var element=searchAtrb1[i]         
              /*Добавляем тому атрибуту который мы нашли класс Focus чтоб его обозначит*/
            element.classList.add("Focus");  


            /*Подолжение функции но с цветами*/
            if (IdBut=1) {
                   var styles = document.createElement('style');/*Переменная создания стиля

              styles.innerHTML =
          '.Focus {' +  
            'background-color:'+ Yellow +';' +/*Вместо green будет переменная отвечающая за цвет*/
            'color:white;'+
          '}'
                document.body.append(styles);
                  for (var i = 0; i < searchAtrb1.length; i++){/*Ищем атрибут*/
              var element=searchAtrb1[i]       
              /*Добавляем тому атрибуту который мы нашли класс Focus чтоб его обозначит*/
            element.classList.add("Focus");  
            }/*закрытие for*/
            };/*Закрытие if*/
            
            
             if (IdBut=2) {


                   var styles = document.createElement('style');/*Переменная создания стиля*/

              styles.innerHTML =
          '.Focus {' +  
            'background-color:'+ Red +';' +/*Вместо green будет переменная отвечающая за цвет*/
            'color:white;'+
          '}'
                document.body.append(styles);
                  for (var i = 0; i < searchAtrb1.length; i++){/*Ищем атрибут*/
              var element=searchAtrb1[i]         
              /*Добавляем тому атрибуту который мы нашли класс Focus чтоб его обозначит*/
            element.classList.add("Focus");  
            }/*закрытие for*/
            };/*Закрытие if*/
            
            
              if (IdBut=3) {

                   var styles = document.createElement('style');/*Переменная создания стиля*/

              styles.innerHTML =
          '.Focus {' +  
            'background-color:'+ Green +';' +/*Вместо green будет переменная отвечающая за цвет*/
            'color:white;'+
          '}'
                document.body.append(styles);
                  for (var i = 0; i < searchAtrb1.length; i++){/*Ищем атрибут
              var element=searchAtrb1[i]         
              /*Добавляем тому атрибуту который мы нашли класс Focus чтоб его обозначит*/
            element.classList.add("Focus");  
            }/*закрытие for*/
            };/*Закрытие if*/
            
             if (IdBut=0) {
                   var styles = document.createElement('style');/*Переменная создания стиля*/

                  styles.innerHTML =
          '.Focus {' +  
            'background-color:'+ Blue +';' +/*Вместо green будет переменная отвечающая за цвет*/
            'color:white;'+
          '}'
                document.body.append(styles);
                  for (var i = 0; i < searchAtrb1.length; i++){/*Ищем атрибут*/
              var element=searchAtrb1[i]         
              /*Добавляем тому атрибуту который мы нашли класс Focus чтоб его обозначит*/
            element.classList.add("Focus"); 
            }/*закрытие for*/
            };/*Закрытие if*/


}
}
