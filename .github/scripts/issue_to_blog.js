const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');
const axios = require('axios');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const owner = 'e-gineer';
const repo = 'e-gineer.github.com';
const issueNumber = process.env.GITHUB_EVENT_PATH ? require(process.env.GITHUB_EVENT_PATH).issue.number : null;

(async () => {
  if (!issueNumber) {
    console.error('No issue number found.');
    return;
  }

  const { data: issue } = await octokit.issues.get({
    owner,
    repo,
    issue_number: issueNumber,
  });

  console.log(issue);

  const images = [];
  const issueBody = issue.body.replace(/!\[.*?\]\((.*?)\)/g, (match, url) => {
    const filename = path.basename(url);
    images.push({ url, filename });
    return `![${filename}](assets/images/${filename})`;
  });

  const postContent = `---
title: "${issue.title}"
date: ${new Date().toISOString()}
---

${issueBody}
`;

  const postFilename = `_posts/${new Date().toISOString().split('T')[0]}-${issue.number}.md`;
  //fs.writeFileSync(postFilename, postContent);

  for (const { url, filename } of images) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    console.log("write file: ", `assets/images/${filename}`);
    //fs.writeFileSync(`assets/images/${filename}`, response.data);
  }

  console.log(postContent);

  /*
  const exec = require('child_process').execSync;
  exec('git config --global user.name "github-actions[bot]"');
  exec('git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"');
  exec(`git add ${postFilename} assets/images`);
  exec('git commit -m "Convert issue to blog post"');
  exec('git push');
  */
})();
