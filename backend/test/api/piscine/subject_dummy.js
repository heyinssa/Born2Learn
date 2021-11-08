import request from 'request';

export default async () => {
  console.log('-----Subject Start-----');

  const datas = [];

  const option = {
    uri: 'https://betti.kr:9000/api/piscines/all',
    method: 'GET',
  };

  await new Promise((resolve, reject) => {
    request.get(option, function (error, response, body) {
      if (error) reject();
      body = JSON.parse(body);
      body.forEach(pisince => {
        ['00', '01', '02', '03'].forEach(num => {
          datas.push({
            data: {
              piscine_id: pisince.piscine_id,
              name: pisince.name + ' subject ' + num,
              evaluation_num: 3,
              evaluation_link: 'https://github.com/euiminnn/Learn-Git-Branch',
              subject_link:
                'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md',
              default_repository:
                'https://github.com/euiminnn/Learn-Git-Branch',
            },
          });
        });
      });
      resolve();
    });
  });

  const options = datas.map(data => {
    return {
      uri: 'https://betti.kr:9000/api/subjects',
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
          console.log(body.subject_id + ' done!');
          resolve();
        });
      });
    }),
  );
};
