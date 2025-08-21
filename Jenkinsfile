
pipeline {
    agent any

     tools {
        nodejs "Nodev22.7.0" 
    }
     environment {
        DEPLOY_DIR = "/var/www/react-jenkins-demo"
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        
        stage('Git Checkout') {
        steps {
            git branch: 'master', url: 'https://github.com/sonu-lodhi/react-p.git'
            }
        }
    }
    
    
    
    
}
