pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing..'
                npm install
            }
        }
        stage('Serving') {
            steps {
                echo 'Serving..'
                npm run serve
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}