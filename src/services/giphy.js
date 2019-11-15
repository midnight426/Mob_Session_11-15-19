const GIF_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=4n8M8pGuAoMEGjOm9e7ts35IBvcSqMgb&q&q=hello
&limit=10`;
export const fetchGiphy = () => {
  return fetch(GIF_ENDPOINT)
    .then(res => res.json())
    .then(({ data }) => {
      return data.map(gif => gif.images.fixed_width.url);
    });
};
