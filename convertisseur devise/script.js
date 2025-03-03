const form = document.getElementById("form");
const euroInput = document.getElementById("euro");
const cfaInput = document.getElementById("cfa");
const allBtn = document.querySelectorAll(".control div button");
const tauxFixe = 655.957;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  convert();
});

// CONVERTIR LA VALEUR
const convert = () => {
  const euro = parseFloat(euroInput.value);
  if (!euroInput.value.trim()) {
    alert("Entrer votre montant");
    return;
  }
  const result = (euro * tauxFixe).toFixed(2);
  cfaInput.value = `${result} XOF`;
};

// AJOUTE UNE VALEUR
allBtn.forEach((button) => {
  button.addEventListener("click", () => {
    euroInput.value += button.textContent;
  });
});

// ASUPPRIME UNE VALEUR
const removeOneByOne = () => {
  euroInput.value = euroInput.value.slice(0, -1);
};
