import request from 'request';

export default async () => {
  console.log('-----Evaluation Start-----');

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

  const user_subjects = await Promise.all(
    user_ids.map(user_id => {
      return new Promise((resolve, reject) => {
        const option = {
          uri: `https://betti.kr:9000/api/users/${user_id}/subjects`,
          method: 'GET',
        };

        const subjects = [];

        request.get(option, function (error, response, body) {
          if (error) reject();
          body = JSON.parse(body);
          body.forEach(subject => {
            subjects.push(subject.subject_id);
          });
          resolve({
            user_id,
            subject_id: subjects,
          });
        });
      });
    }),
  );

  const datas = [];
  user_subjects.forEach(user_subject => {
    const subjects = user_subject.subject_id;
    const subject = subjects[Math.floor(Math.random() * subjects.length)];

    // for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    datas.push({
      data: {
        evaluatee_id: user_subject.user_id,
        subject_id: subject,
      },
    });
    // }
  });

  const options = datas.map(data => {
    return {
      uri: 'https://betti.kr:9000/api/evaluations',
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
          console.log(body.evaluation_id + ' done!');
          resolve();
        });
      });
    }),
  );
};
