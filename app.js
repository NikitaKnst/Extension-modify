// Created by Konstantin Cherkasskikh © 2021


$(document).ready(function () {
  $('.test').addClass('NOTcoolHighligth');

  var qq = $('.test');

  qq[0].insertAdjacentHTML('beforeend', spanHLStart + spanHLEnd);

  var compareAttrResults = compareAttributeAndStrings("aria-label", defaultStringList);
  console.log(compareAttrResults[0]);

});


var spanHLStart = '<span class="coolHighligth">';
var spanHLEnd = "</span>";

var myBody = document.getElementsByTagName('body');


var allTags = document.querySelectorAll('div');


for (var i = 0; i < allTags.length; i++) {

  //console.log(allTags[i]);

  if (allTags[i].innerHTML.includes("Lorem")) {

  } else {

  }
}


var mytest = document.getElementsByClassName('mytest');

var splitedVar = mytest[0].innerHTML.split('\n');

var tagList = ['div','p','span'];

tagList.forEach(element, function (){
	compareSplitedValue()
});

function compareSplitedValue(my_splitedVar, my_defaultStringList ){
	

	
}

/* ---------------------------------------------------------------------------------------
 * Get strings functions
 *
 *
 */
var defaultStringList = ['test', 'dog', 'cat', 'dog with tail'];


/* ---------------------------------------------------------------------------------------
 * Compare functions
 *
 *
 */

function compareAttributeAndStrings(Attribute, stringList) {
  var foundListNodes = [];
  var foundListStrings = [];

  var elementWithAttribute = document.querySelectorAll('[' + Attribute + ']');

  Array.prototype.forEach.call(elementWithAttribute, function (element, index) {

    for (i = 0; i < stringList.length; i++) {

      if (stringList[i] == element.getAttribute('aria-label')) {
        foundListStrings.push(stringList[i]);
        foundListNodes.push(element);
      } else {

      }
    }


  });


  return [foundListStrings, foundListNodes];
}


/* ---------------------------------------------------------------------------------------
 * Class for styles on page
 *
 *
 */

class myHighligth {

  constructor(className, Color1 = "Orange", Color2 = "Pink") {
    this.className = className;
    this.bgColor = Color1;
    this.color = Color2;
    this.Styles = '.' + this.className + ' {background-color:' + this.bgColor + '; color:' + this.color + ';} ';
  }

}


// Create styles
var hightlightString1 = new myHighligth("coolHighligth", "blue", "white");
var hightlightString2 = new myHighligth("NOTcoolHighligth");


// Add styles to the page 

var myStyles = document.createElement('style'); // Create style tag

myStyles.innerHTML = hightlightString1.Styles + hightlightString2.Styles; // Fill style tag with styles

document.body.append(myStyles); // Add style tag to the bottom
