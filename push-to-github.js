const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

// Replace these with your GitHub credentials and repository details
const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN';
const REPO_OWNER = 'YOUR_GITHUB_USERNAME';
const REPO_NAME = 'daplie-website';
const BRANCH = 'main';

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

async function pushToGitHub() {
  try {
    // Get the SHA of the latest commit on the branch
    const { data: refData } = await octokit.git.getRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: `heads/${BRANCH}`
    });

    const baseTreeSha = refData.object.sha;

    // Create a new tree with all files
    const files = [
      'package.json',
      'next.config.js',
      'tailwind.config.js',
      'postcss.config.js',
      'README.md',
      '.gitignore',
      'app/layout.js',
      'app/page.js',
      'app/globals.css'
    ];

    const tree = await Promise.all(files.map(async (file) => {
      const content = fs.readFileSync(file, 'utf8');
      const { data } = await octokit.git.createBlob({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        content,
        encoding: 'utf8'
      });
      return {
        path: file,
        mode: '100644',
        type: 'blob',
        sha: data.sha
      };
    }));

    // Create a new tree
    const { data: newTree } = await octokit.git.createTree({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      tree,
      base_tree: baseTreeSha
    });

    // Create a new commit
    const { data: newCommit } = await octokit.git.createCommit({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      message: 'Initial commit',
      tree: newTree.sha,
      parents: [baseTreeSha]
    });

    // Update the reference
    await octokit.git.updateRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: `heads/${BRANCH}`,
      sha: newCommit.sha
    });

    console.log('Successfully pushed to GitHub!');
  } catch (error) {
    console.error('Error pushing to GitHub:', error);
  }
}

pushToGitHub(); 