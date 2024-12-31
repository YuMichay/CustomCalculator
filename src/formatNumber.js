export const formatNumber = (value) => {
  if (!Number.isInteger(value) && value.toString().length > 4) {
    let stringValue = value.toFixed(2);
    return parseFloat(stringValue.replace(/\.?0+$/, ''));
  } else {
    return parseFloat(value);
  }
}