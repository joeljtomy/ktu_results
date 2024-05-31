const cmpArray = (arr1, arr2) => {
  let different = false,
    newItem = {};

  arr1.forEach((item) => {
    if (!arr2.map((i) => i.id).includes(item.id)) {
      different = true;
      newItem = item;
      return;
    }
  });

  return { different, newItem };
};

module.exports = cmpArray;
