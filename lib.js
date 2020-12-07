export const processForm = (elements) =>
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (details, { id, value }) => ({
        ...details,
        [id]: value,
      }),
      {}
    );
