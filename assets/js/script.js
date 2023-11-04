function convertButton() {
  let choixMenu = document.getElementById("choixDevise");
  switch (choixMenu.value) {
    case "usdToEur":
      const amount1 = parseFloat(document.getElementById("montant").value);
      let convert1 = ((amount1 * 1) / 1.06).toFixed(2);
      let paragraphe1 = document.createElement("p");
      paragraphe1.setAttribute("id", "conv1");
      paragraphe1.textContent = `${amount1} USD équivalent à ${convert1} EUR.`;
      document.body.appendChild(paragraphe1);
      break;

    case "eurToUsd":
      const amount2 = parseFloat(document.getElementById("montant").value);
      let convert2 = ((amount2 * 1) / 0.94).toFixed(2);
      let paragraphe2 = document.createElement("p");
      paragraphe2.setAttribute("id", "conv2");
      paragraphe2.textContent = `${amount2} EUR équivalent à ${convert2} USD.`;
      document.body.appendChild(paragraphe2);
      break;

    case "":
      alert("Choisissez la méthode de conversion.");
      break;
  }
  document.getElementById("choixDevise").selectedIndex = 0;
  document.getElementById("montant").value = "";
  return;
}

function resetButton() {
  document.getElementById("conv1").remove();
  document.getElementById("conv2").remove();
  return;
}

////////////////////////OLDER VERSION WITHOUT SWITCH()///////////////////////////
/* let continue = true;

function convertUsdToEur() {
  const amount = parseFloat(document.getElementById("montant").value);
  let convert1 = ((amount * 1) / 1.06).toFixed(2);
  let paragraphe = document.createElement("p");
  paragraphe.textContent = `${amount} USD équivalent à ${convert1} EUR.`;
  document.body.appendChild(paragraphe);
  return;
}

function convertEurToUsd() {
  const amount = parseFloat(document.getElementById("montant").value);
  let convert2 = ((amount * 1) / 0.94).toFixed(2);
  let paragraphe = document.createElement("p");
  paragraphe.textContent = `${amount} EUR équivalent à ${convert2} USD.`;
  document.body.appendChild(paragraphe);
  return;
}

function convertButton() {
  document.getElementById(choixDevise);
  while (continue) {
    if (choixDevise.value === "usdToEur") {
      convertUsdToEur();
    } else if (choixDevise.value === "eurToUsd") {
      convertEurToUsd();
    } else if (choixDevise.value === "") alert("Choisissez la méthode de conversion.");
    continue = false;
  }
  document.getElementById("choixDevise").selectedIndex = 0;
  document.getElementById("montant").value = "";
  continue = true;
  return;
} */
