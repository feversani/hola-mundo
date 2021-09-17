agent { 
 
 docker {   
 
 image 'node:11'   

 args '-p 3000:5000'  

 }

}

environment {  

 CI = 'true'

}

stages {   

 stage('Build') {      

 steps {         

  sh 'npm install'      

} 
  
stage('Test') {      

 steps {          

  sh './jenkins/scripts/test.sh      
 }

}
