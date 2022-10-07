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
                npm run server
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}