pipeline {
    agent any
    environment {
    FRONTEND_IMAGE = 'mern-frontend:jenkins'
    BACKEND_IMAGE = 'mern-backend:jenkins'
    PORT = '5000'
    MONGODB_URI=mongodb://localhost:27017/admin_panel
    }

    stages {
       stage('Checkout Code'){
        steps {
            git url: 'https://github.com/harshlad49/admin_panel.git', branch: 'master/main'
        }
       }
       stage('Prepare .env'){
        steps {
        sh ...
          mkdir -p server
          cat > server/.env <<EOL
          PORT=${PORT}
          MONGODB_URI=${MONGODB_URI}  
          EOL
          ...
        }
       }
       stage('Build Docker Images'){
        steps {
            sh ...
            echo "building backend image..."
            docker build -t $BACKEND_IMAGE ./server
            echo "Building frontend image..."
            docker build -t $FRONTEND_IMAGE ./client  
            ...
        }
       }
       stage('Run with docker compose'){
        steps {
            sh ...
            echo "Starting MERN app docker compose..."
            docker compose up -d
            
            echo "showing running containers..."
            docker ps
            
            echo "==== Backend Logs ===="
             docker logs backend || true

             echo "==== Frontend Logs ===="
             docker logs frontend || true
            ...
        }
       }
    }


}