const formatDate = (date) => {
  const formatedDate = new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric', });
  return formatedDate;
}

export { formatDate }