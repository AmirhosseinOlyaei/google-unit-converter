// Fahrenheit to Celsius
const userFahElement = document.getElementById('inputFah');
const userDemoElement = document.getElementById('demo');
userFahElement.addEventListener("change", function(){
  const userFahNum = Number(userFahElement.value);
  const convertToCel = (userFahNum - 32) * (5 / 9); 
  const roundedConvertToCel = Math.round(convertToCel*100)/100;
  userDemoElement.innerHTML = `<span class="bg-[#f9ab00]">Formula</span> ( ${userFahNum}<b>°F</b> - 32) × 5 / 9 = ${roundedConvertToCel}<b>°C</b>`;
  document.getElementById('inputCel').value = roundedConvertToCel;
});

// Celsius to Fahrenheit
const userCelElement = document.getElementById('inputCel');
const userDemoElement2 = document.getElementById('demo2');
userCelElement.addEventListener("change", function () {
  const userCelNum = Number(userCelElement.value);
  const convertToFah = (userCelNum * (9 / 5)) + 32;
  const roundedConvertToFah = Math.round(convertToFah*100)/100;
  document.getElementById('inputFah').value = roundedConvertToFah;
  userDemoElement.innerHTML = `<span class="bg-[#f9ab00]">Formula</span> ( ${roundedConvertToFah}<b>°F</b> - 32) × 5 / 9 = ${userCelNum}<b>°C</b>`;
  //userDemoElement2.innerHTML = `<span class="bg-[#f9ab00]">Formula</span> ( ${userCelNum}<b>°C</b> × 9 / 5 ) + 32 = ${roundedConvertToFah}<b>°F</b>`;
});