#!/bin/bash
cd /home/ubuntu/diary/server

export EC2_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names EC2_PORT --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start index.js