export default array =>
  array.length ?
    array[array.length - 1].id + 1 :
    1;
