export const getImages = search => {
  const SearchParams = new URLSearchParams({
    key: '47396593-fa81edaacd7e53da3770e0abc',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${SearchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
