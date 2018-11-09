const create_project_cards = (qsel, data) => {

  const cards_container = data.reduce((acc, card_data) => {
    const li = document.createElement("li");
    li.style.margin = "10px";
    const card = new Project_Card(card_data);
    li.appendChild(card.el);
    acc.appendChild(li)
    return acc;
  }, document.createElement("ul"));
  cards_container.classList.add("cards_container");

  document.querySelector(qsel).innerHTML = cards_container.outerHTML;

}
