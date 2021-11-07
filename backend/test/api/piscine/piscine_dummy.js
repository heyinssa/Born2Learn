import request from 'request';

export default async () => {
  console.log('-----Piscine Start-----');

  const datas = [
    {
      data: {
        name: 'git branch piscine',
        github_link: 'https://github.com/euiminnn/Learn-Git-Branch',
        readme_link:
          'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md',
      },
    },
    {
      data: {
        name: 'food piscine',
        github_link: 'https://github.com/euiminnn/Learn-Git-Branch',
        readme_link:
          'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md',
      },
    },
    {
      data: {
        name: 'mac book piscine',
        github_link: 'https://github.com/euiminnn/Learn-Git-Branch',
        readme_link:
          'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md',
      },
    },
    {
      data: {
        name: 'coffee piscine',
        github_link: 'https://github.com/euiminnn/Learn-Git-Branch',
        readme_link:
          'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md',
      },
    },
  ];

  const options = datas.map(data => {
    return {
      uri: 'http://betti.kr:9000/api/piscines',
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
          console.log(body.piscine_id + ' done!');
          resolve();
        });
      });
    }),
  );
};
