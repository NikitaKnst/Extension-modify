function wordSearchAndAddClass() {
	         var searchText=document.getElementById('textAreaSecond').value;/*Это у нас id textarea*//*Добавили разделитель по строкам*/
              var listSrch=[]/*nada*/
                var textSaver=searchText/*Закидываем в локальное хранилище хрома текст того что мы в последний раз вписывали*/  
            var searchtxt2=searchText.split('\n')/*Разделили по строкам, делаем его главной переменной при поиске*/
    var helper=new RegExp(searchtxt2, "ig");/*Проходим по всем строкам*/
    var mark="<span class='FocusPokus'>" +searchtxt2+ "</span>";/*Помечаем слово которое мы нашли*/
for (var i = 0; i < searchtxt2[i].length; i++){/*Перебираем и находим все слова на странице*/
            document.body.innerHTML = document.body.innerHTML.replace(helper, mark);/*Заменяем слово которое нашли добавля класс*/
            console.log(searchtxt2)/*Помощник в консоли проверяем как мы вписываем слова*/
    }/*Закрытие for*/
function saglusga() {
	console.log("Saglusga")
}