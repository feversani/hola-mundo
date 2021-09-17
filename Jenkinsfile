pipeline {
    agent {
        docker {
            image 'node:11-alpine'
            args '-p 3000:5000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/script.sh'
            }
        }
    }
