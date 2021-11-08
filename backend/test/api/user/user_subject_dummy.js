import request from 'request';

export default async () => {
  console.log('-----User Subject Start-----');

  const user_ids = [];

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

  const user_piscines = await Promise.all(
    user_ids.map(user_id => {
      return new Promise((resolve, reject) => {
        const option = {
          uri: `https://betti.kr:9000/api/users/${user_id}/piscines`,
          method: 'GET',
        };

        const piscines = [];

        request.get(option, function (error, response, body) {
          if (error) reject();
          body = JSON.parse(body);
          body.forEach(piscine => {
            piscines.push(piscine.piscine_id);
          });
          resolve({
            user_id,
            piscine_id: piscines,
          });
        });
      });
    }),
  );

  const user_subjects = await Promise.all(
    user_piscines.map(async user_piscine => {
      const subjects_all = [];

      await Promise.all(
        user_piscine.piscine_id.map(piscine => {
          return new Promise((resolve, reject) => {
            const option = {
              uri: `https://betti.kr:9000/api/piscines/${piscine}/subjects`,
              method: 'GET',
            };

            const subjects = [];

            request.get(option, function (error, response, body) {
              if (error) reject();
              body = JSON.parse(body);
              body.forEach(subject => {
                subjects.push(subject.subject_id);
              });
              resolve(subjects);
            });
          });
        }),
      ).then(values => {
        values.forEach(value => {
          subjects_all.push(...value);
        });
      });

      return {
        user_id: user_piscine.user_id,
        subject_id: subjects_all,
      };
    }),
  );

  const datas = [];
  user_subjects.forEach(user_subject => {
    user_subject.subject_id.map(subject => {
      datas.push({
        user_id: user_subject.user_id,
        subject_id: subject,
      });
    });
  });

  const options = datas.map(data => {
    return {
      uri: `https://betti.kr:9000/api/users/${data.user_id}/subjects/${data.subject_id}`,
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
            body.user.user_id + '_' + body.subject.subject_id + ' done!',
          );
          resolve();
        });
      });
    }),
  );
};
