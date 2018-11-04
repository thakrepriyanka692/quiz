import config from './config';

export function getQuizAPI() {
   return new Promise((resolve, reject) => {
        fetch(config.BASE_URL, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          }).then((response) => {
              if(response) {
                response.json().then((res) => {
                    resolve(res);
                });
              }
          }).catch((error) => {
            reject(error);
          });
    })
    
}