pipeline {
    agent any
    stages {
        stage("Build"){
            agent {
                docker {
                  image 'public.ecr.aws/docker/library/node:lts-alpine'
                  reuseNode true
                  alwaysPull true
                }
            }
            steps {
                sh 'node -v'
                sh 'corepack enable'
                sh 'pnpm i  && pnpm run build'
            }
        }
    }
}

