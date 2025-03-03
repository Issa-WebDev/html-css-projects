const form = document.getElementById("form");
const euroInput = document.getElementById("euro");
const cfaInput = document.getElementById("cfa");
const removeBtn = document.getElementById("remove-btn");
const allBtn = document.querySelectorAll("#btn");
const rate = document.querySelector(".rate");

// Ajouter un sélecteur pour choisir le sens de la conversion
const conversionDirection = document.querySelector("select");
conversionDirection.addEventListener("click", () => {
  euroInput.value = "";
  cfaInput.value = "";
  rate.textContent = "";
});

// Convertir de l'euro vers le CFA
const convertEuroToCfa = async () => {
  try {
    const euro = parseFloat(euroInput.value);
    if (!euroInput.value.trim() || isNaN(euro)) {
      alert("Entrez votre montant en EUROS ou en CFA");
      return;
    }
    const tauxFixeResult = await tauxFixed();
    const tauxFixe = tauxFixeResult.conversion_rates.XOF;
    const result = (euro * tauxFixe).toFixed(2);
    cfaInput.value = `${result} XOF`;
  } catch (error) {
    console.log(error);
  }
};

// Convertir du CFA vers l'euro
const convertCfaToEuro = async () => {
  try {
    const cfa = parseFloat(cfaInput.value);
    if (!cfaInput.value.trim()) {
      alert("Entrez votre montant en EUROS ou en CFA");
      return;
    }

    const tauxFixeResult = await tauxFixed();
    const tauxFixe = tauxFixeResult.conversion_rates.XOF;
    const result = (cfa / tauxFixe).toFixed(2);
    euroInput.value = `${result} €`;
  } catch (error) {
    console.log(error);
  }
};

// Gérer la soumission du formulaire
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (conversionDirection.value === "euroToCfa") {
    convertEuroToCfa();
  } else {
    convertCfaToEuro();
  }
  try {
    const tauxFixeResult = await tauxFixed();
    const tauxFixe = tauxFixeResult.conversion_rates.XOF;
    console.log(tauxFixe);
    rate.textContent = `TAUX FIXE : ${tauxFixe}`;
  } catch (error) {
    console.log(error);
  }
});

// Ajouter une valeur
allBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (conversionDirection.value === "euroToCfa") {
      euroInput.value += button.textContent;
    } else {
      cfaInput.value += button.textContent;
    }
  });
});

// Supprimer une valeur
const removeOneByOne = () => {
  if (conversionDirection.value === "euroToCfa") {
    euroInput.value = euroInput.value.slice(0, -1);
  } else {
    cfaInput.value = cfaInput.value.slice(0, -1);
  }
};
removeBtn.addEventListener("click", removeOneByOne);

const API_KEY = "2c327115eeca436e9c9bdc60";
const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/EUR`;

// get the conversion rate
async function tauxFixed() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return 655.957;
  }
}
