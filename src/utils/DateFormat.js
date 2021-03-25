export const formatDate = date => {
  const events = new Date(date);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return events.toLocaleDateString('en-EN', options);
};
