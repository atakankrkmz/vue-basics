pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                npm install
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}