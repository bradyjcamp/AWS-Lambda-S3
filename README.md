# aws-lambda

A user should be able to upload an image at any size, and update a dictionary of all images that have been uploaded so far.

## Description

- Download a file called “images.json” from the S3 Bucket if it exists
- The images.json should be an array of objects, each representing an image. Create an empty array if this file is not present
- Append the data for this image to the array

## Deployment Issues

- Issues with setting up proper testing as well as trying to figure out how to append data and set up proper triggers

## Links

[images.json](https://lab-17-images.s3.amazonaws.com/images.json)