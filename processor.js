const formatLabel = require("./formatLabel");
const getCronValue = require("./getCronValue");

const processCronExpression = (cronExpression) => {
  const [minute, hour, dayOfMonth, month, dayOfWeek, command] =
    cronExpression.split(" ");

  return `${formatLabel("minute")}${getCronValue(minute, 0, 59)}
${formatLabel("hour")}${getCronValue(hour, 0, 59)}
${formatLabel("day of month")}${getCronValue(dayOfMonth, 1, 31)}
${formatLabel("month")}${getCronValue(month, 1, 12)}
${formatLabel("day of week")}${getCronValue(dayOfWeek, 1, 7)}
${formatLabel("command")}${command}`;
};

module.exports = processCronExpression;
