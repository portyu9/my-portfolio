import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:002366342434:deployPortfolioTopic')

    location = {
        "bucketName": 'portfoliobuild.yunior-portal.com',
        "objectKey": 'portfoliobuild.zip'
    }
    try:
        job = event.get("CodePipeline.job")

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact ["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
        print "Building portfolio from " + str(location)

        s3= boto3.resource('s3', config=Config(signature_version='s3v4'))
        print "Set signature_version"

        portfolio_bucket= s3.Bucket('portfolio.yunior-portal.com')
        build_bucket= s3.Bucket(location["bucketName"])

        portfolio_zip= StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)
        print "Downloaded zip from " + str(location)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj= myzip.open(nm)
                print "Opened zip"
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "Job Completed"
        topic.publish(Subject="Portfolio Deployment", Message="Portfolio Deployed Successfully")
        if job:
            codepipeline = boto3.client('codepipeline')
            print "codepipeline init"
            codepipeline.put_job_success_result(jobId==job[id])
            print str(codepipeline.put_job_success_result(jobId=job[id]))
    except:
       topic.publish(Subject="Portfolio Deployment", Message="Portfolio Deployment Failed")
       raise

    return 'Hello from Lambda'
