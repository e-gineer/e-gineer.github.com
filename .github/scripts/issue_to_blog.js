const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');
const axios = require('axios');
const remark = require('remark');
const remarkParse = require('remark-parse');
const remarkStringify = require('remark-stringify');
const remarkFrontmatter = require('remark-frontmatter');
const visit = require('unist-util-visit');
const yaml = require('js-yaml');

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

  const result = updateImageUrls(markdown, newBaseUrl);

  console.log(result);

  /*
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

  */

  /*
  const exec = require('child_process').execSync;
  exec('git config --global user.name "github-actions[bot]"');
  exec('git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"');
  exec(`git add ${postFilename} assets/images`);
  exec('git commit -m "Convert issue to blog post"');
  exec('git push');
  */
})();


const updateImageUrls = (markdown, newBaseUrl) => {
    const images = [];
    const frontmatter = {};
  
    const updatedMarkdown = remark()
      .use(remarkParse)
      .use(remarkFrontmatter, ['yaml', 'toml', 'json'])
      .use(() => (tree) => {
        visit(tree, 'yaml', (node) => {
          Object.assign(frontmatter, yaml.load(node.value));
        });
  
        visit(tree, 'html', (node) => {
          const match = node.value.match(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]+)"[^>]*>/) ||
                        node.value.match(/<img[^>]*alt="([^"]+)"[^>]*src="([^"]+)"[^>]*>/);
          if (match) {
            const originalUrl = match[1];
            const altText = match[2];
            const newFileName = toKebabCase(altText) + originalUrl.slice(originalUrl.lastIndexOf('.')); // Keep original file extension
            const newUrl = newBaseUrl + newFileName;
            node.value = node.value.replace(originalUrl, newUrl);
  
            images.push({
              originalUrl: originalUrl,
              newUrl: newUrl,
              alt: altText
            });
          }
        });
  
        visit(tree, 'image', (node) => {
          const originalUrl = node.url;
          const altText = node.alt;
          const newFileName = toKebabCase(altText) + originalUrl.slice(originalUrl.lastIndexOf('.')); // Keep original file extension
          const newUrl = newBaseUrl + newFileName;
          node.url = newUrl;
  
          images.push({
            originalUrl: originalUrl,
            newUrl: newUrl,
            alt: altText
          });
        });
      })
      .use(remarkStringify)
      .processSync(markdown).toString();
  
    return { frontmatter, updatedMarkdown, images };
  };

// Function to convert a string to kebab-case
const toKebabCase = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };