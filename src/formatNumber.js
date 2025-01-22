export const formatNumber = (value) => {
  if (!Number.isInteger(+value) && value.toString().length > 6) {
    let stringValue = parseFloat(value).toFixed(4);
    return parseFloat(stringValue.replace(/\.?0+$/, ''));
  } else {
    return parseFloat(value);
  }
}