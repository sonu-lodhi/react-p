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
    }
     
}