import request from 'request';

export default async () => {
  console.log('-----User Piscine Start-----');

  const user_ids = [];
  const piscine_ids = [];

  await new Promise((resolve, reject) => {
    const option = {
      uri: 'https://betti.kr:9000/api/piscines/all',
      method: 'GET',
    };

    request.get(option, function (error, response, body) {
      if (error) reject();
      body = JSON.parse(body);
      body.forEach(piscine => {
        piscine_ids.push(piscine.piscine_id);
      });
      resolve();
    });
  });

  await new Promise((resolve, reject) => {
    const option = {
      uri: 'https://betti.kr:9000/api/users/all',
      method: 'GET',
    };

    request.get(option, function (error, response, body) {
      if (error) reject();
      body = JSON.parse(body);
      body.forEach(user => {
        user_ids.push(user.user_id);
      });
      resolve();
    });
  });

  const datas = [];
  user_ids.forEach((user, index) => {
    datas.push({
      user_id: user,
      piscine_id: piscine_ids[index % piscine_ids.length],
    });
  });

  const options = datas.map(data => {
    return {
      uri: `https://betti.kr:9000/api/users/${data.user_id}/piscines/${data.piscine_id}`,
      method: 'GET',
    };
  });

  await Promise.all(
    options.map(option => {
      return new Promise((resolve, reject) => {
        request.post(option, function (error, response, body) {
          if (error) reject();
          body = JSON.parse(body);
          console.log(
            body.user.user_id + '_' + body.piscine.piscine_id + ' done!',
          );
          resolve();
        });
      });
    }),
  );
};
