const aws = require('aws-sdk');
const config = require('./config.json');

(async function() {
  try {
    aws.config.setPromisesDependency();

    aws.config.update({
      accessKeyId: config.aws.AWS_ACCESS_KEY,
      secretAccessKey: config.aws.AWS_SECRET_ACCESS_KEY,
      region: config.aws.REGION
    });

    const s3 = new aws.S3();
    const response = await s3
      .listObjectsV2({
        Bucket: config.aws.Bucket,
        Prefix: 'folder1'
      })
      .promise();

    console.log(response);
  } catch (error) {
    console.log('our error', error);
  }

  debugger;
})();
