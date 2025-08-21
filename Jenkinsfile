pipeline {
    agent any

    tools {
        nodejs "Nodev22.7.0"   // NodeJS version configured in Jenkins (Global Tool Configuration)
    }

    environment {
        DEPLOY_DIR = "/var/www/react-jenkins-demo"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/sonu-lodhi/react-p.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  rm -rf $DEPLOY_DIR/*
                  cp -r build/* $DEPLOY_DIR/
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful! Visit your React app."
        }
        failure {
            echo "❌ Build/Deployment Failed!"
        }
    }
}