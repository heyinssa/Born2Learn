import request from 'request';

export default async () => {
  console.log('-----User Start-----');

  const datas = [];

  ['', '_1', '_2', '_3'].forEach(s => {
    datas.push(
      ...[
        {
          data: {
            id: 'ycha' + s,
            password: '1234',
          },
        },
        {
          data: {
            id: 'suhshin' + s,
            password: '1234',
          },
        },
        {
          data: {
            id: 'echung' + s,
            password: '1234',
          },
        },
        {
          data: {
            id: 'dohykim' + s,
            password: '1234',
          },
        },
      ],
    );
  });

  const options = datas.map(data => {
    return {
      uri: 'http://betti.kr:9000/api/users/register',
      method: 'POST',
      body: data,
      json: true,
    };
  });

  await Promise.all(
    options.map(option => {
      return new Promise((resolve, reject) => {
        request.post(option, function (error, response, body) {
          if (error) reject();
          console.log(body.user_id + ' done!');
          resolve();
        });
      });
    }),
  );
};
