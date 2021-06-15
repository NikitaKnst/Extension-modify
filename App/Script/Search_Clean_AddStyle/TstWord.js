
/*forEach*/

function wordSearchAndAddClass() {
     var list = ["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"]
  console.log("Start wordSearchAndAddClass")
           var searchText=document.getElementById('searchtxt').value;/*Это у нас id textarea*//*Добавили разделитель по строкам*/
  console.log("Textarea------>"+searchText+"<------Textarea")
              var listSrch=[]/*nada*/
                var textSaver=searchText/*Закидываем в локальное хранилище хрома текст того что мы в последний раз вписывали*/  
            var searchtxt2=searchText.split('\n')/*Разделили по строкам, делаем его главной переменной при поиске*/
    var helper=new RegExp(searchtxt2, "ig");/*Проходим по всем строкам*/
    var mark="<span class='FocusPokus'>" +searchtxt2+ "</span>";/*Помечаем слово которое мы нашли*/
    const array1 = searchtxt2;
    var bac=array1.forEach(element => console.log(element))/*foreach*/
    /*var arrayLength=array1.length*/
    array1.forEach(function () {
      for (var i = 0; i < searchtxt2[i].length; i++){/*Перебираем и находим все слова на странице*/
  console.log("length")
            document.body.innerHTML = document.body.innerHTML.replace(helper, mark);/*Заменяем слово которое нашли добавля класс*/
            console.log("replace")
    }/*Закрытие for*/
      console.log("End wordSearchAndAddClass")
    })


}
function saglusga() {
	console.log("Saglusga")
}