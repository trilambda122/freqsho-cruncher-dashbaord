const axios = require("axios");

export async function getNextweekCount() {
  const url =
    "https://6mpzh8xbx1.execute-api.us-east-1.amazonaws.com/dev/get-count-next-week";
  return axios.get(url);
}

export async function getVenueCount() {
  const url =
    "https://6mpzh8xbx1.execute-api.us-east-1.amazonaws.com/dev/get-count-venues";
  return axios.get(url);
}

export async function getTotalShows() {
  const url =
    "https://6mpzh8xbx1.execute-api.us-east-1.amazonaws.com/dev/get-count";
  return axios.get(url);
}

export async function getArtistCount() {
  const url =
    "https://6mpzh8xbx1.execute-api.us-east-1.amazonaws.com/dev/get-count-artist";
  return axios.get(url);
}

export async function getAllShows() {
  const url =
    "https://6mpzh8xbx1.execute-api.us-east-1.amazonaws.com/dev/shows";
  return axios.get(url);
}
