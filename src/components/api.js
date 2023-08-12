const BASE_URL = "https://jsonplaceholder.typicode.com"; // Replace with your API base URL

export const getPosts = async (userId, page, postsPerPage) => {
  const response = await fetch(
    `${BASE_URL}/posts?userId=${userId}&_page=${page}&_limit=${postsPerPage}`
  );
  const data = await response.json();
  return data;
};

export const getCommentsForPost = async (postId) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  const data = await response.json();
  return data;
};

export const getAlbums = async (userId, page, albumsPerPage) => {
  const response = await fetch(
    `${BASE_URL}/albums?userId=${userId}&_page=${page}&_limit=${albumsPerPage}`
  );
  const data = await response.json();
  return data;
};
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};
export const getPhotosForAlbum = async (albumId) => {
  const response = await fetch(`${BASE_URL}/albums/${albumId}/photos`);
  const data = await response.json();
  return data;
};
