function totalPriceTravel(){

    // Costante prezzo chilometri

    const kilometers = 0.21;

    // Variabile numero chilometri che deve fare l'utente

    let valueKm = document.getElementById('numbersKm').value;

    // Variabile età che ha l'utente

    let choose = document.getElementById('select').value;

    let valueNameSurname = document.getElementById('nameSurname').value;

    // Calcolo costo senza sconti al chilometro

    let price = valueKm * kilometers;

    // Calcolo costo sconto minorenne al chilometro

    let under = price * 0.2;

    const childPrice = price - under;

    // Calcolo costo sconto anziano al chilometro

    let over = price * 0.4;

    const seniorPrice = price - over;

    

    if (choose == 1 ) {
        price = childPrice.toFixed(2)
    }
    else if (choose == 3) {
        price = seniorPrice.toFixed(2)
    } 
    else {
        price = price.toFixed(2)
    }

    document.getElementById('totalKm').innerHTML = "Il costo totale del tuo percorso:" + " " + price + "€"



}