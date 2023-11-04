export const formatHourMinutes = (dateTimeString: string) => {
  const date = new Date(dateTimeString);

  return new Intl.DateTimeFormat('nl-NL', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const formatDate = (dateTimeString: string | number) => {
  const date = new Date(dateTimeString);
  return new Intl.DateTimeFormat('nl-NL', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};
