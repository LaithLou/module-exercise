function Choice(items) {
  const indx = Math.floor(Math.random() * items.length);
  return items[indx];
}

function Remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      items.splice(i, 1);
      return items;
    }
  }
  return undefined;
}

export { Choice, Remove };
