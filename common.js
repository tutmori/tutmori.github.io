<!-- 
// pull down menu by categories
flag = false;
function treeMenu(tName) {
  tMenu = document.getElementById(tName).style;
  if(tMenu.display == 'none') tMenu.display = "block";
  else tMenu.display = "none";
}
//-->
<!--
//denshi mail soushin
function soushin(name, company, domain) {
	locationstring = 'ma' + 'ilto:' + name + '@' + company + '.' + domain;
	window.location.replace (locationstring);
}

//-->
