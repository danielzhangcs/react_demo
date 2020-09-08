export const fetchTime = async () => {
  const fetchedData = await fetch('http://worldtimeapi.org/api/ip')
  .then(resp => resp.json());

  return fetchedData.datetime;
}
