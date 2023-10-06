pipeline {
  agent any
  stages {
    stage('pull latest code from main branch') {
      steps {
        sh '''sudo git pull origin main
'''
      }
    }

    stage('move to front-end folder and perform steps') {
      parallel {
        stage('move to front-end folder and perform steps') {
          steps {
            sh '''cd frontend-react
sudo npm install --force
sudo npm run build'''
          }
        }

        stage('move to backend folder and perform steps') {
          steps {
            sh '''cd backend-node
sudo npm install --force
sudo npm run build'''
          }
        }

      }
    }

    stage('restart nginx') {
      steps {
        sh '''cd ~
sudo systemctl restart nginx'''
      }
    }

  }
}