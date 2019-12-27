const fetchData = (url) => {
  return fetch(url, {
    'method': 'GET',
    'headers': {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'f789c18076msha688505912c6638p1c2905jsn5c436c349cda'
    }
  })
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return {
          response: false
        };
      }
    }).catch(() => 'connection lost');
};
export const fetchTeamStandingApi = () => {
  const url = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/524';
  return fetchData(url);
};