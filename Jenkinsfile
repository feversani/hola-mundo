pipeline {
    agent none
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                println("HOla soy diegoBV")
                def var = [name:"diego",edad:18]
                println(var)
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
