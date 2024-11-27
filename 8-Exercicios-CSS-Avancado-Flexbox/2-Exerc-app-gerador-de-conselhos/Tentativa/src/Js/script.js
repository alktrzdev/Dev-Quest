const advices = [
  "Acredite em si mesmo.",
  "Nunca desista dos seus sonhos.",
  "Seja gentil com as pessoas ao seu redor.",
  "Aprenda com os erros.",
  "Sempre esteja aberto para aprender coisas novas.",
  "Tenha paciência, as coisas boas levam tempo.",
  "Não tenha medo de pedir ajuda quando precisar.",
  "Seja grato pelo que você tem.",
  "Cuide da sua saúde mental.",
  "Esteja presente e viva o momento."
];

function generateAdvice() {
  const randomIndex = Math.floor(Math.random() * advices.length);
  document.getElementById('advice').textContent = advices[randomIndex];
}