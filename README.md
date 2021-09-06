# Serverless AWS Plugins And Examples

While developing a project in serverless architecture with AWS Lambda, the plugins I used in the process of deploying with [Serverless Framework](https://www.serverless.com/) and examples of their usage.

### Why Serverless?
When you decide to develop your application in serverless architecture with Lambda, you need to configure between Api Gateway, Lambda, VPC and many AWS services. To deploy them without using a serverless framework, AWS CloudFormation is the most natural solution. But as your project grows, they will become more difficult to manage. During the deploy process of Serverless Framework and some plugins you can use, it creates CloudFormation templates for you.

#### Some examples to use when creating the serverless.yml file before plugins

 - [Using a variable from a .js file in a .yml file](./using-variables-in-yml-file)
 - [Split up .yml file into multiple file](./split-up-yml-file-into-multiple-file)
 - [Layers and exclude/include paths](./layers-exclude-include-paths/README.md)
