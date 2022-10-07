pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing..'
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