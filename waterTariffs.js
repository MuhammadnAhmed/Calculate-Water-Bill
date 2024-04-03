document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("calculateBill");

form.addEventListener("submit",function(event){

    event.preventDefault();
    var litres = parseFloat(document.getElementById("litres").value)

    if(litres > 0 && litres <= 6000){
        var bill = (litres/1000) * 15.73;
    }

    if(litres > 6000 && litres <= 10500){
        var bill = (6 * 15.73) + (((litres-6000)/1000) * 22.38);
    }

    if(litres > 10500 && litres <= 35000){
        var bill = (6 * 15.73) + ((10.5-6) * 22.38) + (((litres-10500)/1000) * 31.77);
    }

    if(litres > 350000){
        var bill = (6 * 15.73) + ((10.5-6) * 22.38) + ((35 - 10500) * 31.77) + (((litres-35000)/1000) * 69.76);
    } 

    let final = "Your bill will be " + bill;
    document.getElementById("bill").innerHTML = final;


})



})












