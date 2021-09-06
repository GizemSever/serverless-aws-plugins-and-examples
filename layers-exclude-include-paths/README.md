# Why use lambda layers?
There may be files that are used in common in your serverless architecture project that you started to develop with AWS Lambda. These may contain some classes, packages. It would be a waste to deploy these repetitive files for each lambda function you create.


Here is a sample .yml file run in this directory using AWS Lambda Layers and to exclude or include directories