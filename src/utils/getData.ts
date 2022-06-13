// function to perform a fetch request for the relevant data needed for the application
export async function getData(query: string) {
  const url = `https://api-staging.metdesk.com/get/metdesk/powergen/v2/${query}`;
  const token =
    'jwt eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiZmVjaGFsbDM4Mzk4YWJhNzJiY2MyMjM4MzcyMSIsImV4cCI6MTY3MjUzMTIwMH0.gQ8Ro0neGskV0vi1qkCPNnmS7PovKNH2VamMAQZUqMY';

  let weatherData: string[] = [];

  await fetch(url, {
    headers: {
      Authorization: token
    }
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      weatherData = data.data;
    })
    .catch((err) => console.log(err));

  return weatherData;
}
