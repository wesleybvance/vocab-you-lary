const getTime = () => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return (strTime);
};

export default getTime;
