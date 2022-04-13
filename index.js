const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    // event.Records[0].s3.bucket.name
    
    let bucketName = 'lab-17-images';
    let key = 'images.json';
    

    let object = await s3.getObject({ Bucket: bucketName, Key: key }).promise();
    let imageData = JSON.parse(object.Body.toString());
    
    let metaData = {
        name: event.Records[0].s3.object.key,
        size: event.Records[0].s3.object.size,
        type: 'jpg'
    }
    
    if (!imageData){
        imageData = [];
        imageData.push(metaData);
    }

  
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
