const create_project_cards = (qsel, data) => {

  const cards_container = data.reduce((acc, card_data) => {
    const card = new Project_Card(card_data);
    acc.appendChild(card.el);
    return acc;
  }, document.createElement("div"));

  document.querySelector(qsel).innerHTML = cards_container.outerHTML;

}
