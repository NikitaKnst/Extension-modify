document.getElementById("Testid").addEventListener('click',globalvar)
function SrGo(){
	console.log("SrGo")
}

function globalvar(){ 
   /*chrome.storage.sync.get("TEXTTEST", ({ TEXTTEST }) => {*/
					list = ["div","span","a","main","h1","h2","h3","h4","h5","h6","p","footer","body","noscript"]
					atrbsrh=TEXTTEST /*TEXTTEST = "aria-label\ndata" <---Why*/
					words=atrbsrh
					stringwords=atrbsrh.split("\n")/*Разделение не рб */
					console.log("------>"+TEXTTEST+"<------")
				     var atrbKvadrt=document.querySelectorAll('['+ stringwords +']')/*Переменная при нажатии на тест*/
				    AtributeAddClassList()
				    return(atrbsrh,atrbKvadrt)
 /*})*/
 }
function AtributeAddClassList() {
	console.log(words)
	console.log(atrbKvadrt)
	atrbKvadrt=document.querySelectorAll('['+ stringwords +']')/*Переменная при нажатии на тест*/
	        Array.prototype.forEach.call(atrbKvadrt, function (element, index) {/*sakritie i otkritie atrb---element==[   and index==0-index slov <--------------------*/
	for (i=0;i < list.length; i++){
		if (list[i] = element.getAttribute(atrbKvadrt)) {
			words.push(list[i])
			stringwords.push(element)
		}
	}
	console.log("List:"+list)
	console.log("Words:"+words)
	console.log("StrignWords:"+stringwords)
	console.log("Atrbsrh:"+atrbsrh)
	console.log("AtrbKvadrt:"+atrbKvadrt)
	console.log('Ко-во найденных атрибутов:'+atrbKvadrt.length)
		console.log("------------------------------------->"+atrbKvadrt+"<-------------------------------------")	

})/*закр */
    	    coloradd()/*переходим к след функции*/
}
function coloradd(){
	console.log("↓↓↓Сolor add↓↓↓")
	console.log(atrbKvadrt)	
	for (var i=0; i<atrbKvadrt.length; i++)
		var element=atrbKvadrt[i]
  element.classList.add("shhheeeeeeeeeeeeeeeeeeeesh");
  console.log("Atribute notes:"+atrbKvadrt)
  console.log("Найденно:"+element)
	console.log("End")

}
