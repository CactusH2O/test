/* content scripts as labelled in mainfest.json (like this file) only 
* run after webpage is loaded; run on specified urls
* background scripts run as soon as extension is launched (ie open chrome)
* 
*/

console.log("Reeady to go");

let paragraphs = document.getElementsByTagName('p');

for(let elt of paragraphs){
  elt.style['background-color'] = "#FF00FF";
}

