pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing..'
                sh 'npm install'
            }
        }
        stage('Serving') {
            steps {
                echo 'Serving..'
                sh 'npm run serve'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}