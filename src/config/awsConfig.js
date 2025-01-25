import AWS from 'aws-sdk';
import { AWS_REGION } from './serverconfing';

export const s3= new AWS.S3({
    region:AWS_REGION,
    accessKeyId:AWS_ACCESS_KEY_ID,
    secretAccessKey:AWS_SECRET_ACCESS_KEY
    
})