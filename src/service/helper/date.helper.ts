const formatDate = (date) => {
  const formatedDate = new Date(date).toLocaleDateString("en-US");
  return formatedDate;
}

export { formatDate }