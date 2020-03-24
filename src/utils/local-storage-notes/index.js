export default {
  get: () => JSON.parse(localStorage.notes || '""') || {},
  set: (notes) => { localStorage.notes = JSON.stringify(notes) },
};
