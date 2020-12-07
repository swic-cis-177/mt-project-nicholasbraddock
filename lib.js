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

  data.forEach(({ clientNumber, ownerName, cell, petName }) => {
    const newClientRow = template.content.cloneNode(true);
    const newClientTDs = newClientRow.querySelectorAll("td");

    newClientTDs[0].textContent = clientNumber;
    newClientTDs[1].textContent = ownerName;
    newClientTDs[2].textContent = cell;
    newClientTDs[3].textContent = petName;

    tbody.appendChild(newClientRow);
  });
};

export const clientWithNumber = (elements, data) => ({
  id: data.count(),
  ...processForm(elements),
});
