var tablica = "<table border=1>\n";

for(var i = 1; i<=10; i++){
    //console.log("itertacija: " + i);
    tablica += "<tr>\n" +
    "<td>Name "+i+"</td>\n" +
    "<td>Rank "+i+"</td>\n" +
    "<td>Class "+i+"</td>\n" +
    "</tr>\n"
}

tablica +="</table>";
//tablica = tablica + "</table>";

console.log(tablica);

document.write(tablica);