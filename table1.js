var table = document.getElementById("myTable"),
  sumVal = 0;
for (var i = 1; i < table.rows.length; i++) {
    console.log(table.rows[i].cells[1].innerHTML);
  sumVal = sumVal + parseFloat(table.rows[i].cells[3].innerHTML);
}

document.getElementById("val").innerHTML = sumVal;
console.log(sumVal);