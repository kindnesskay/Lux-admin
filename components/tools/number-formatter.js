export default function numberFormatter(num) {
  const fomattedValue = num.toLocaleString("en-US", {});
  return fomattedValue;
}
