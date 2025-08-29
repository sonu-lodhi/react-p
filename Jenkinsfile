pipeline {
    agent any

    environment {
        CONTAINER_NAME   = 'raectApp'
        IMAGE_NAME = 'reactapps'       // local image name
        RUN_PORT   = '80'               // serve on http://localhost/
        GIT_BRANCH = 'master'           // change to 'main' if needed
    }

    triggers {
        githubPush()       // requires GitHub webhook
        // pollSCM('H/2 * * * *') // fallback: poll every ~2 min
    }

    stages {
        stage('React-Project') {
            steps { echo 'Company Site' }
        }

        stage('Git Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: "*/${env.GIT_BRANCH}"]],
                    userRemoteConfigs: [[url: 'https://github.com/sonu-lodhi/react-p.git']]
                ])
            }
        }

        stage('Install Dependencies') {
            steps { bat 'npm ci' }
        }

        stage('Install & Build App') {
            steps { 
              bat 'npm install'
              bat 'npm run build'
             }
        }

        stage('Run Tests') {
            steps { bat 'npm test -- --watchAll=false --passWithNoTests' }
        }

        stage('Stop & Remove Docker Container') {
            steps {
                script {
                    bat """
                    REM === Stop the container if running ===
                    docker ps -q -f "name=%CONTAINER_NAME%" > tmp.txt
                    for /F %%i in (tmp.txt) do (
                        echo Stopping container %CONTAINER_NAME%...
                        docker stop %CONTAINER_NAME% || exit /b 0
                    )

                    REM === Remove the container if exists ===
                    docker ps -a -q -f "name=%CONTAINER_NAME%" > tmp.txt
                    for /F %%i in (tmp.txt) do (
                        echo Removing container %CONTAINER_NAME%...
                        docker rm %CONTAINER_NAME% || exit /b 0
                    )

                    del tmp.txt
                    """
                }
            }
        }

        stage('Remove Docker Image') {
            steps {
                script {
                    bat """
                    REM === Remove the image if it exists ===
                    docker images -q %IMAGE_NAME% > tmp.txt
                    for /F %%i in (tmp.txt) do (
                        echo Removing image %IMAGE_NAME%...
                        docker rmi -f %IMAGE_NAME% || exit /b 0
                    )
                    del tmp.txt
                    """
                }
            }
        }

        stage('Docker Build Image') {
            steps {
                script {
                    bat """
                    echo Building new Docker image...
                    set DOCKER_BUILDKIT=0
                    docker build --no-cache -f Dockerfile -t %IMAGE_NAME% .
                    """
                }
            }
        }

        stage('Deploy (Replace Container)') {
            //when { branch env.GIT_BRANCH }
            steps {
              bat """
                echo Stopping and removing old container if exists...
                docker stop %CONTAINER_NAME% || echo "No running container"
                docker rm %CONTAINER_NAME% || echo "No container to remove"
                
                echo Starting new container...
                docker run -d --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%
                """
                 bat 'docker image prune -f || echo "prune skipped"'
                 }
        }
     }

    post {
        success {
            echo "✅ Deployed! Open: http://localhost/"
        }
        failure {
            echo "❌ Build/Deployment Failed!"
        }
    }
}
