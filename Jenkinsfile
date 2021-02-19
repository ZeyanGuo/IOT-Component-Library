pipeline{
    agent any
    tools {nodejs "nodejs"}
    environment {
       SSH_KEY_FILE="/home/app/scott/scripts/ssh_portal_app"
       SERVER_1="10.12.3.28"
    }
    stages {
        stage('build') {
            steps{
              sh 'yarn'
              sh 'yarn build'
              echo 'build'
            }
        }
        stage('rsync') {
            steps{
                sh 'tar -zcvf storybook-static.tar.gz storybook-static/*'
                sh 'ssh -i $SSH_KEY_FILE app@$SERVER_1 "rm -rf /opt/nginx/micrApp/storybook-static/"'
                sh 'scp -i $SSH_KEY_FILE storybook-static.tar.gz app@$SERVER_1:/opt/nginx/micrApp/'
                sh 'ssh -i $SSH_KEY_FILE app@$SERVER_1 "cd /opt/nginx/micrApp/ && tar -zxvf ./storybook-static.tar.gz"'
                echo '同步代码到服务器'  
            }
        }
        stage('delete') {
            steps{
                cleanWs()
                echo '清理工作区'  
            }
        }
    }
}
