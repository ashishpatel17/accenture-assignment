pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('pull latest code from main branch') {
      steps {
        sh '''git pull origin main
'''
      }
    }

    stage('move to front-end folder and perform steps') {
      steps {
        sh '''cd frontend-react
npm install --force'''
      }
    }

  }
}
