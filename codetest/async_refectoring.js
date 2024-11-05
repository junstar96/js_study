class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }
  
  function koreanMovie() {
      return loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`)
      .then(res => {
              alert(`${res.author}: ${res.quote}`);
        return res;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("무언가 에러가 발생했군요!");
          return koreanMovie();
        } else {
          throw err;
        }
      });
  }
  
  koreanMovie();