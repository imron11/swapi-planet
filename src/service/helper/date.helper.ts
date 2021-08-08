const formatDate = (date) => {
  const formatedDate = new Date(date).toLocaleDateString("en-US");
  console.log(formatDate);
  return formatedDate;
}

export { formatDate }