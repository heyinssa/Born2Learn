const { request } = require('@octokit/request');
const GitUrlParse = require('git-url-parse');
const axios = require('axios').default;

const mygit = 'https://github.com/euiminnn/Learn-Git-Branch';

process();

async function process() {
  const allContents = await getRepositoryContents(gitUrlParse(), '');
  const directories = allContents.data.filter((result) => result.type == 'dir');

  const promises = await directories.map((result) =>
    getRepositoryContents(gitUrlParse(), result.name)
  );
  const pathContents = await Promise.all(promises);

  let filteredDirectories = pathContents.filter((result, index) => {
    return pathContents[index].data[1].name.includes('README');
  });

  filteredDirectories = filteredDirectories.map((result) => {
    return result.data[0];
  });
  console.log(filteredDirectories);
  filteredDirectories.forEach((result, index) => {
    console.log(result.path, ': ', result.download_url);
  });
}

function gitUrlParse() {
  const data = GitUrlParse(mygit);
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
