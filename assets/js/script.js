let continuer = true;

function convertUsdToEur() {
  const amount = parseFloat(document.getElementById("montant").value);
  let convert1 = ((amount * 1) / 1.06).toFixed(2);
  const paragraphe = document.createElement("p");
  paragraphe.textContent = `${amount} USD équivalent à ${convert1} EUR.`;
  document.body.appendChild(paragraphe);
  return;
}

function convertEurToUsd() {
  const amount = parseFloat(document.getElementById("montant").value);
  let convert2 = ((amount * 1) / 0.94).toFixed(2);
  const paragraphe = document.createElement("p");
  paragraphe.textContent = `${amount} EUR équivalent à ${convert2} USD.`;
  document.body.appendChild(paragraphe);
  return;
}

function convertButton() {
  document.getElementById(choixDevise);
  while (continuer) {
    if (choixDevise.value === "usdToEur") {
      convertUsdToEur();
    } else if (choixDevise.value === "eurToUsd") {
      convertEurToUsd();
    } else if (choixDevise.value === "") alert("Choisissez la méthode de conversion.");
    continuer = false;
  }
  return;
}

function resetButton() {
  location.reload();
}
