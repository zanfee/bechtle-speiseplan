exports.DateToUrlFriendlyString = function (date) {
  return date.getDate() + "_" + date.getMonth() + 1 + "_" + date.getFullYear().toString();
}