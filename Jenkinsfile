// pipeline {
//   agent any

//   options {
//     timestamps()
//     ansiColor('xterm')
//   }

//   environment {
//     // --- Project settings ---
//     AWS_REGION         = credentials('') == null ? '<YOUR_AWS_REGION>' : '<YOUR_AWS_REGION>'
//     PROJECT_NAME       = 'react-eks'
//     EKS_CLUSTER_NAME   = 'react-eks-cluster'
//     ECR_REPO_NAME      = 'react-app'
//     K8S_NAMESPACE      = 'web'
//     APP_NAME           = 'react-app'

//     // --- Derived ---
//     AWS_ACCOUNT_ID     = sh(returnStdout: true, script: 'aws sts get-caller-identity --query Account --output text || true').trim()
//     ECR_REGISTRY       = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
//     IMAGE              = "${ECR_REGISTRY}/${ECR_REPO_NAME}"

//     // Path to kubeconfig generated in workspace
//     KUBECONFIG         = "${WORKSPACE}/kubeconfig"
//   }

//   parameters {
//     booleanParam(name: 'TF_APPLY', defaultValue: true, description: 'Run Terraform apply to create/update AWS infra')
//     string(name: 'IMAGE_TAG', defaultValue: 'build-${BUILD_NUMBER}', description: 'Docker image tag')
//   }

//   stages {

//     stage('Checkout') {
//       steps { checkout scm }
//     }

//     stage('Bind AWS Credentials') {
//       steps {
//         withCredentials([usernamePassword(credentialsId: 'aws-creds', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
//           sh '''
//             export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
//             export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
//             aws sts get-caller-identity
//           '''
//         }
//       }
//     }

//     stage('Node Build & Test') {
//       steps {
//         dir('react-app') {
//           sh '''
//             node -v || true
//             npm -v || true
//             # If Node is not installed on the agent, you can dockerize this step or install Node.
//             npm ci
//             npm run build
//             # Uncomment to include tests
//             # npm test -- --watchAll=false
//           '''
//         }
//       }
//     }

//     stage('Docker Build & Push to ECR') {
//       steps {
//         sh '''
//           aws ecr describe-repositories --repository-names ${ECR_REPO_NAME} --region ${AWS_REGION} >/dev/null 2>&1 \
//             || aws ecr create-repository --repository-name ${ECR_REPO_NAME} --region ${AWS_REGION}

//           aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}

//           docker build -t ${IMAGE}:${IMAGE_TAG} ./react-app
//           docker push ${IMAGE}:${IMAGE_TAG}

//           # Optionally tag as 'latest'
//           docker tag ${IMAGE}:${IMAGE_TAG} ${IMAGE}:latest
//           docker push ${IMAGE}:latest
//         '''
//       }
//     }

//     stage('Terraform Init/Plan/Apply') {
//       when { expression { return params.TF_APPLY } }
//       steps {
//         dir('infra/terraform') {
//           sh '''
//             terraform --version
//             terraform init -input=false
//             terraform plan -input=false -out=tfplan \
//               -var="region=${AWS_REGION}" \
//               -var="project_name=${PROJECT_NAME}" \
//               -var="eks_cluster_name=${EKS_CLUSTER_NAME}" \
//               -var="ecr_repo_name=${ECR_REPO_NAME}"
//             terraform apply -input=false -auto-approve tfplan
//           '''
//         }
//       }
//     }

//     stage('Configure kubectl for EKS') {
//       steps {
//         sh '''
//           aws eks update-kubeconfig --region ${AWS_REGION} --name ${EKS_CLUSTER_NAME} --kubeconfig ${KUBECONFIG}
//           kubectl version --client=true
//           kubectl get nodes --kubeconfig ${KUBECONFIG}
//         '''
//       }
//     }

//     stage('Install Ansible + k8s deps') {
//       steps {
//         sh '''
//           python3 -m pip install --upgrade pip
//           pip3 install "ansible>=9.0.0" "kubernetes>=28.0.0" "jinja2>=3.1.4"
//           ansible-galaxy collection install kubernetes.core community.kubernetes
//           ansible --version
//         '''
//       }
//     }

//     stage('Deploy to EKS via Ansible') {
//       steps {
//         dir('ansible') {
//           sh '''
//             export KUBECONFIG=${KUBECONFIG}
//             ansible-playbook -i inventory deploy-react.yml \
//               --extra-vars "image_repo=${IMAGE} image_tag=${IMAGE_TAG} namespace=${K8S_NAMESPACE} app_name=${APP_NAME}"
//           '''
//         }
//       }
//     }
//   }

//   post {
//     always {
//       sh 'kubectl get pods -A --kubeconfig ${KUBECONFIG} || true'
//       archiveArtifacts artifacts: 'react-app/build/**', fingerprint: true, onlyIfSuccessful: false
//     }
//   }
// }




// pipeline {
//     agent any

//     stages {
//         stage('React-Project') {
//             steps {
//                 echo 'Company Site'
//             }
//         }

//         stage('Git Checkout') {
//             steps {
//                 git branch: 'master', url: 'https://github.com/sonu-lodhi/react-p.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 bat 'npm install'
//             }
//         }

//         stage('Build App') {
//             steps {
//                 bat 'npm run build'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 bat 'npm test -- --watchAll=false --passWithNoTests'
//             }
//         }

//         stage('Docker Build') {
//             steps {
//                 script {
//                     sh 'docker build -t react-app:latest .'
//                 }
//             }
//         }

//         stage('Docker Run') {
//             steps {
//                 script {
//                     sh 'docker run -d -p 3000:80 --name react-app-container react-app:latest'
//                 }
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 echo '🚀 React app deployed inside Docker container!'
//             }
//         }
//     }

//     post {
//         success {
//             echo "✅ Deployment Successful! Visit your app at http://localhost:3000"
//         }
//         failure {
//             echo "❌ Build/Deployment Failed!"
//         }
//     }
// }


pipeline {
    agent any

    environment {
        CONTAINER_NAME   = 'raectApp'
        IMAGE_NAME = 'reactapps'       // local image name
        RUN_PORT   = '80'               // serve on http://localhost/
        GIT_BRANCH = 'master'           // change to 'main' if needed
    }

    triggers {
        // Use one of the two:
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

        // Optional: run tests/build on host (requires Node installed on Jenkins)
        stage('Install Dependencies') {
            steps { bat 'npm ci' } // faster & reproducible
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
                    docker build --no-cache -t %IMAGE_NAME%:%BUILD_NUMBER% -t %IMAGE_NAME%:latest .
                    """
                }
            }
        }


        // Containerization (multi-stage build uses its own Node anyway)
        //docker build -f Dockerfile.dev -t reactapps1 .
        
        
        // stage('Docker Build Image') {

        //     steps {
               // bat """
                // docker build -t %IMAGE_NAME%:%BUILD_NUMBER% -t %IMAGE_NAME%:latest .
                              // docker build -t %IMAGE_NAME%:latest .
                // """
                // bat """
                // docker build -f Dockerfile -t %IMAGE_NAME%:latest .
                // """
        //         bat """
        //             docker build --no-cache -t %IMAGE_NAME%:%BUILD_NUMBER% -t %IMAGE_NAME%:latest .
        //         """
        //     }
        // } 

        stage('Deploy (Replace Container)') {
            when { branch env.GIT_BRANCH } // only deploy on main branch
            steps {
    //             // Stop & remove old container if present; ignore errors if not running
    //             // bat 'docker stop %APP_NAME% || echo "Container not running"'
    //             // bat 'docker rm %APP_NAME% || echo "Container not found"'

    //             // Run fresh container on port 80
    //             // bat """
    //             // docker run -d --name %APP_NAME% -p %RUN_PORT%:80 %IMAGE_NAME%:latest
    //             //docker run -d -p %RUN_PORT%:80 --name %APP_NAME% %IMAGE_NAME%:latest
    //             // """
                bat """ 
                docker run -it --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%:latest
                """

    //             // Optional: clean dangling images to save disk
    //             // bat 'docker image prune -f || echo "prune skipped"'

    //             bat 'docker stop %CONTAINER_NAME% || echo "Container not running"'
    //             bat 'docker rm %CONTAINER_NAME% || echo "Container not found"'

                // bat """
                //     docker run -d --name %CONTAINER_NAME% -p %RUN_PORT%:80 %IMAGE_NAME%:latest
                // """

    //             bat 'docker image prune -f || echo "prune skipped"'
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
