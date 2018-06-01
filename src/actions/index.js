import axios from 'axios';

const ROOT_URL = 'https://d6api.gaia.com/videos/term/119931'

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

export function fetchVideos() {
  const request = axios.get(`${ROOT_URL}`,{ headers: { 'Accept': 'application/json' }});
  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}
