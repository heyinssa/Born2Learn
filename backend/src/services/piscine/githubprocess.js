import { request } from '@octokit/request';
import GitUrlParse from 'git-url-parse';

async function processReadme(piscineContents) {
  const promises = piscineContents.data.filter(
    result => result.name == 'README.md',
  );
  const piscine = await Promise.all(promises);

  return piscine[0].download_url;
}

async function processName(github_link) {
  const github_data = await gitUrlParse(github_link);

  return github_data;
}

async function processPiscine(github_data) {
  const piscineContents = await getRepositoryContents(github_data, '');

  return piscineContents;
}

async function processSubject(github_data, piscineContents) {
  let inner_list = [];

  const promises = await piscineContents.data.filter(result => {
    if (result.type != 'dir') {
      return false;
    }
    return true;
  });

  const subject = await Promise.all(promises);

  async function make_inner_list(element) {
    const innerContents = await getRepositoryContents(
      github_data,
      element.name,
    );

    for (const inner of innerContents.data) {
      if (inner.name == 'README.md') {
        inner_list.push(element);
      }
    }
  }

  await Promise.all(subject.map(element => make_inner_list(element)));

  const promises2 = await piscineContents.data.filter(result => {
    for (const element of inner_list) {
      if (element.name == result.name) return true;
    }
    return false;
  });

  const subject2 = await Promise.all(promises2);

  return subject2;
}

async function gitUrlParse(github_link) {
  const data = GitUrlParse(github_link);

  return data;
}

async function getRepositoryContents(item, path) {
  const results = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    headers: {
      Authorization: 'token '토큰넣기,
    },
    owner: item.owner,
    repo: item.name,
    path: path,
  });
  return results;
}

export default {
  processName,
  processReadme,
  processPiscine,
  processSubject,
  getRepositoryContents,
};
