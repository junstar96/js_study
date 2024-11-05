class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

//than이 뒤쪽에 올 값을 지정하는 거라면 await은 yield처럼 중간에 멈춰두는 것에 가까워 보인다.
async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }


  // return fetch(url)
  //   .then(response => {
  //     if (response.status == 200) {
  //       return response.json();
  //     } else {
  //       throw new HttpError(response);
  //     }
  //   })
}

//async를 쓰면 비동기 함수가 들어가 있다고 여겨지게 된다.
async function koreanMovie() {
  let res;
  while(true)
  {
    try
    {
        res = await loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`);
        break;
    }
    catch(err)
    {
      if (err instanceof HttpError && err.response.status == 404) {
              alert("무언가 에러가 발생했군요!");
              return koreanMovie();
            } else {
              throw err;
            }
    }
  }

  console.log(`${res.author}: ${res.quote}`);
  return res;


  // return loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`)
  //   .then(res => {
  //     console.log(`${res.author}: ${res.quote}`);
  //     return res;
  //   })
  //   .catch(err => {
  //     if (err instanceof HttpError && err.response.status == 404) {
  //       alert("무언가 에러가 발생했군요!");
  //       return koreanMovie();
  //     } else {
  //       throw err;
  //     }
  //   });
}

koreanMovie();