export const fetchPosts = async () => {
  const response = await fetch(`/api/posts`);
  const result = await response.json();
  return result;
};
