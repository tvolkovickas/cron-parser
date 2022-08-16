const isValidInput = (cronExpression) =>
  typeof cronExpression === "string" && cronExpression.length > 0;

module.exports = isValidInput;
