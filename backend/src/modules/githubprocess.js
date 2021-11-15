import { request } from '@octokit/request';
import GitUrlParse from 'git-url-parse';
import ApiError from './error';

async function getRepositoryContents(owner, repo, path) {
  const results = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    headers: {
      Authorization: 'token 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',
    },
    owner,
    repo,
    path,
  });

  return results;
}

async function processPiscine(github_link) {
  let piscine_name;
  let readme_link;
  let subject_names = [];

  const github_data = GitUrlParse(github_link);
  const piscineContents = await getRepositoryContents(
    github_data.owner,
    github_data.name,
    '',
  );

  piscine_name = github_data.name;
  const readme = piscineContents.data.find(file => file.name == 'README.md');
  if (!readme) new ApiError(404, 'README.md file not found');
  readme_link = readme.download_url;

  subject_names = piscineContents.data
    .filter(element => element.type == 'dir')
    .map(element => element.name);

  return {
    piscine_name,
    readme_link,
    subject_names,
  };
}

async function processSubject(github_link, subject_names) {
  const subjects = [];

  const github_data = GitUrlParse(github_link);
  async function make_inner_list(subject_name) {
    const subjectContents = await getRepositoryContents(
      github_data.owner,
      github_data.name,
      subject_name,
    );

    const readme = subjectContents.data.find(file => file.name == 'README.md');
    if (readme) {
      subjects.push({
        name: subject_name,
        evaluation_num: 3,
        subject_link: readme.download_url,
        evaluation_link: 'none',
        default_repository: 'none',
      });
    }
  }

  await Promise.all(
    subject_names.map(subject_name => make_inner_list(subject_name)),
  );

  return subjects;
}

export default {
  processPiscine,
  processSubject,
};
