#!/usr/bin/env groovy

node {
  git(url: "https://github.com/dsirine/node-app.git", branch: "${ghprbSourceBranch}")
  sh "npm install"
  sh "npm test"
}
