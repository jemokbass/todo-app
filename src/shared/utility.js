export const capitalizeWord = word => word.replace(/\b\w/g, l => l.toUpperCase());

export const sortArrAZ = arr =>
  arr.sort((x, y) => {
    let a = x[1].title.toUpperCase(),
      b = y[1].title.toUpperCase();
    return a === b ? 0 : a > b ? 1 : -1;
  });

export const sortArrZA = arr =>
  arr.sort((x, y) => {
    let a = x[1].title.toUpperCase(),
      b = y[1].title.toUpperCase();
    return a === b ? 0 : a < b ? 1 : -1;
  });
