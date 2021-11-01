// import React from 'react';
// import { useEffect, useState } from 'react';
// import MDEditor from '@uiw/react-md-editor';
// // import { request } from '@octokit/request';
// import GitUrlParse from 'git-url-parse';
// import axios from 'axios';

// const mygit = 'https://github.com/euiminnn/Learn-Git-Branch';

// async function process() {
//   const allContents = await getRepositoryContents(gitUrlParse(), '');

//   console.log(allContents);
//   const directories = allContents.data.filter((result) => result.type == 'dir');

//   const promises = await directories.map((result) =>
//     getRepositoryContents(gitUrlParse(), result.name)
//   );
//   const pathContents = await Promise.all(promises);

//   let filteredDirectories = pathContents.filter((result, index) => {
//     return pathContents[index].data[1].name.includes('README');
//   });

//   filteredDirectories = filteredDirectories.map((result) => {
//     return result.data[0];
//   });
//   return filteredDirectories;
// }

// function gitUrlParse() {
//   const data = GitUrlParse(mygit);

//   return data;
// }

// async function getRepositoryContents(item, path) {
//   const results = await request('GET /repos/{owner}/{repo}/contents/{path}', {
//     headers: {
//       Authorization: 'token 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',
//     },
//     owner: item.owner,
//     repo: item.name,
//     path: path,
//   });
//   console.log(item.owner, item.name);
//   return results;
// }

// const Sample = () => {
//   const [contents, setContents] = useState([]);

//   useEffect(() => {
//     const asyncProcess = async () => {
//       const result = await process();

//       axios
//         .get(result[0].download_url)
//         .then((response) => {
//           console.log(response.data);
//           setContents(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
//     asyncProcess();
//   });

//   return (
//     <div>
//       <MDEditor.Markdown source={contents} />
//     </div>
//   );
// };

// export default Sample;
