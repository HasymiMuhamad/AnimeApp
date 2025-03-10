
// API URL
export const BASE_API_ANIME = (page) => `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${page * 10}`;
export const BASE_API_ANIME_DETAIL = (id) => `https://kitsu.io/api/edge/anime/${id}`;
export const BASE_API_ANIME_FILTERED = (category, sort) => `https://kitsu.io/api/edge/anime?filter[categories]=${category}&sort=${sort}`;
export const BASE_API_ANIME_TRENDING = () => 'https://kitsu.io/api/edge/trending/anime';

// Content URL
export const BASE_URL_VIDEO_BANNER = () => 'https://cdn.pixabay.com/video/2022/08/15/127915-739777024_large.mp4';