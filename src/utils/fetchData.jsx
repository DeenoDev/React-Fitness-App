
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'a639bef369mshec6281b26de6741p12fecdjsn24e8017a80a0',
    },
  };

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a639bef369mshec6281b26de6741p12fecdjsn24e8017a80a0',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}