var skill = document.getElementById("skills");
var education = document.getElementById("education");
var contentskill = document.getElementById("skillx");
var contentedu = document.getElementById("edux");
var colx = document.getElementById("colx");

function edutab()
{
    contentskill.style.display = "none";
    contentedu.style.display = "block";
    colx.style.display = "block";
    education.style.color = "white";
    skill.style.color = "#130101";
}
function skitab()
{
    contentedu.style.display = "none";
    contentskill.style.display = "block";
    colx.style.display = "block";
    education.style.color = "#130101";
    skill.style.color = "white";

}
function collapse()
{
    contentedu.style.display = "none";
    contentskill.style.display = "none";
    colx.style.display = "none";
    education.style.color = "#130101";
    skill.style.color = "#130101";
}


 var sidemenu = document.getElementById("sidemenu");

 function openmenu()
 {
    sidemenu.style.right = "0";
 }
 function closemenu()
 {
    sidemenu.style.right = "-200px";
 }