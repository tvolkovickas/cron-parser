const updateNumbersList = (numbersList, rangeMin, rangeMax, increment = 1) => {
  for (let i = rangeMin; i <= rangeMax; i += increment) {
    numbersList.push(i);
  }
};

const getCronValue = (value, min, max) => {
  const numbersList = [];
  const values = value.split(",");
  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i];

    const [start, rate] = currentValue.split("/");
    if (start && rate) {
      updateNumbersList(
        numbersList,
        start === "*" ? min : parseInt(start),
        max,
        parseInt(rate)
      );
      continue;
    }

    if (currentValue === "*") {
      updateNumbersList(numbersList, min, max);
      continue;
    }

    const [rangeMin, rangeMax] = currentValue.split("-");
    if (rangeMin && rangeMax) {
      updateNumbersList(numbersList, parseInt(rangeMin), parseInt(rangeMax));
      continue;
    }

    const validNumber = parseInt(currentValue);
    if (!isNaN(validNumber) && validNumber >= min && validNumber <= max) {
      numbersList.push(validNumber);
    } else {
      numbersList.push("Invalid number");
    }
  }

  return numbersList.join(" ");
};

module.exports = getCronValue;
