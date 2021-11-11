const { request } = require('@octokit/request');
const GitUrlParse = require('git-url-parse');

/**
 * 1. github 주소를 받음
 * 2. github api로 깃헙에 있는 것들을 가져옴
 * 3. 처음에 가져와야 하는 것들
 *    ㄴ 피씬 이름
 *    ㄴ github 링크
 *    ㄴ 메인 리드미 링크
 * @param {} github_link
 * @returns
 */

async function GithubAPI(github_link) {
  var result = {
    name: '',
    github_link: '',
    readme_link: '',
  };
  const piscineContents = await getRepositoryContents(
    gitUrlParse(github_link),
    '',
  );

  console.log(piscineContents);
  return result;
}

async function GithubAPIsubject(github_link) {
  const allContents = await getRepositoryContents(gitUrlParse(github_link), '');
  const directories = allContents.data.filter(result => result.type == 'dir');

  const promises = await directories.map(result =>
    getRepositoryContents(gitUrlParse(), result.name),
  );
  const pathContents = await Promise.all(promises);

  let filteredDirectories = pathContents.filter((result, index) => {
    return pathContents[index].data[1].name.includes('README');
  });

  filteredDirectories = filteredDirectories.map(result => {
    return result.data[0];
  });
  console.log(filteredDirectories);
  filteredDirectories.forEach(result => {
    console.log(result.path, ': ', result.download_url);
  });
  return filteredDirectories;
}

function gitUrlParse(github_link) {
  const data = GitUrlParse(github_link);
  return data;
}

async function getRepositoryContents(item, path) {
  const results = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    headers: {
      Authorization: 'token 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',
    },
    owner: item.owner,
    repo: item.name,
    path: path,
  });
  return results;
}

export default { GithubAPI, GithubAPIsubject };
