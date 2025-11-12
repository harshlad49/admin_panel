pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'mern-frontend:jenkins'
        BACKEND_IMAGE  = 'mern-backend:jenkins'
        PORT           = '5000'
        MONGODB_URI    = 'mongodb://localhost:27017/admin_panel'
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Cloning repository..."
                git branch: 'main', url: 'https://github.com/harshlad49/admin_panel.git'
            }
        }

        stage('Prepare .env') {
            steps {
                echo "Preparing environment file..."
                sh '''
                mkdir -p server
                cat > server/.env <<EOL
                PORT=${PORT}
                MONGODB_URI=${MONGODB_URI}
                EOL
                '''
            }
        }

        stage('Check Docker Installation') {
            steps {
                sh '''
                echo "Checking for Docker..."
                if ! command -v docker &> /dev/null; then
                  echo "❌ Docker not found! Please mount /usr/bin/docker and /var/run/docker.sock when running Jenkins."
                  exit 1
                fi
                echo "✅ Docker found: $(docker --version)"

                echo "Checking for Docker Compose..."
                if ! docker compose version &> /dev/null; then
                  echo "⚙️ Installing Docker Compose plugin..."
                  apt-get update && apt-get install -y docker-compose-plugin
                fi
                echo "✅ Docker Compose available: $(docker compose version)"
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                echo "🚧 Building backend image..."
                docker build -t $BACKEND_IMAGE ./server

                echo "🚧 Building frontend image..."
                docker build -t $FRONTEND_IMAGE ./client
                '''
            }
        }

        stage('Run with Docker Compose') {
            steps {
                sh '''
                echo "🚀 Starting MERN app with Docker Compose..."
                docker compose up -d

                echo "📦 Running containers:"
                docker ps

                echo "==== 🧠 Backend Logs ===="
                docker logs backend || true

                echo "==== 💻 Frontend Logs ===="
                docker logs frontend || true
                '''
            }
        }

        stage('Post-Build Cleanup') {
            steps {
                sh '''
                echo "🧹 Cleaning up old containers and images..."
                docker compose down || true
                docker image prune -af || true
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Build completed successfully!"
        }
        failure {
            echo "❌ Build failed. Check logs for details."
        }
    }
}
