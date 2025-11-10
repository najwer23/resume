export const executeFetch = async (url: URL, options?: RequestInit) => {
  const response = await fetch(url, options);
  const data = await response.json();

  if (data.error) {
    throw Error(data.message);
  }

  return data;
};
