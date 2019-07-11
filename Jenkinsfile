#!/usr/bin/env groovy

pipeline {
    agent any 
    stages {
        stage('Unit Test') {
            steps {
                git(url: "https://github.com/dsirine/node-app.git", branch: "${ghprbSourceBranch}")
                sh "npm install"
                sh "npm test"
            }
        }
    }
}

