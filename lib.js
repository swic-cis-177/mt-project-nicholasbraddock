const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

const processForm = (elements) =>
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (details, { id, value }) => ({
        ...details,
        [id]: value,
      }),
      {}
    );

export const createCurrentClients = (data) => {
  tbody.innerHTML = null;

  data.forEach(({ ownerName, cell, petName }) => {
    const newClientRow = template.content.cloneNode(true);
    const newClientTDs = newClientRow.querySelectorAll("td");

    newClientTDs[0].textContent = ownerName;
    newClientTDs[1].textContent = cell;
    newClientTDs[2].textContent = petName;

    tbody.appendChild(newClientRow);
  });
};

export const clients = (elements) => ({
  ...processForm(elements),
});
