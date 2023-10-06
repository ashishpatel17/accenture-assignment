pipeline {
  agent any
  stages {
    stage('pull latest code from main branch') {
      steps {
        sh '''git pull origin main
'''
      }
    }

    stage('move to front-end folder and perform steps') {
      parallel {
        stage('move to front-end folder and perform steps') {
          steps {
            sh '''cd frontend-react
npm install --force
npm run build'''
          }
        }

        stage('move to backend folder and perform steps') {
          steps {
            sh '''cd backend-node
npm install --force
npm run build'''
          }
        }

      }
    }

    stage('restart nginx') {
      steps {
        sh '''cd ~
systemctl restart nginx'''
      }
    }

  }
}