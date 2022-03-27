// Henter html elementer 
let første_valutaEl = document.querySelector("#første_valuta");
let andre_valutaEl = document.querySelector("#andre_valuta");
let første_verdiEl = document.querySelector("#første_verdi");
let andre_verdiEl = document.querySelector("#andre_verdi");
let rateEl = document.querySelector("#rate");
let byttEl = document.querySelector("#bytt");

function calculate() {
  let første_valuta = første_valutaEl.value;
  let andre_valuta = andre_valutaEl.value; 
  // Det under er hentet fra denne youtube videon om hvordan man henter svingende data om valuta med API. https://youtu.be/UY7F37KHyI8?t=1126
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      let rate = data.rates[andre_valuta] / data.rates[første_valuta];//
      rateEl.innerText = `1 ${første_valuta} = ${rate} ${andre_valuta}`;//
      andre_verdiEl.value = (første_verdiEl.value * (rate)).toFixed(2);//
    });
}


// Legger til lyttere
første_valutaEl.addEventListener("change", calculate);
første_verdiEl.addEventListener("input", calculate);
andre_valutaEl.addEventListener("change", calculate);
andre_verdiEl.addEventListener("input", calculate);

byttEl.addEventListener('click', function() {
  let svar = første_valutaEl.value;
  første_valutaEl.value = andre_valutaEl.value;
  andre_valutaEl.value = svar;
  calculate();
});

calculate();