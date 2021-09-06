
  

# Serverless AWS Plugins And Examples

  

  

While developing a project in serverless architecture with AWS Lambda, the plugins I used in the process of deploying with [Serverless Framework](https://www.serverless.com/) and examples of their usage.

  

  

### Why Serverless?

  

When you decide to develop your application in serverless architecture with AWS Lambda, you need to configure between Api Gateway, Lambda, VPC and many AWS services. To deploy them without using a serverless framework, AWS CloudFormation is the most natural solution. But as your project grows, they will become more difficult to manage. During the deploy process of Serverless Framework and some plugins you can use, it creates CloudFormation templates for you.

  

  

#### Some examples to use when creating the serverless.yml file before plugins

  

  

-  [Using a variable from a .js file in a .yml file](./using-variables-in-yml-file)

  

-  [Split up .yml file into multiple file](./split-up-yml-file-into-multiple-file)

  

-  [Layers and exclude/include paths](./layers-exclude-include-paths)

  

  

### Some plugins and examples I use

  

  

-  [Serverless Prune Plugin](./serverless-prune-plugin-example)

  

Trim versions of your AWS lambda functions or layers each time you deploy within limits you set. For more information [serverless-prune-plugin](https://github.com/claygregory/serverless-prune-plugin)

  

  

-  [Split CloudFormation Stacks](./serverless-split-stacks-example)

  

The AWS Cloudformation template file can contain a maximum of 500 resources. However, as your project grows, you may want to process more resources in a deploy. It is a common problem especially in projects that continue to be developed as mono-repo. This plugin is the solution [serverless-plugin-split-stacks](https://github.com/dougmoscrop/serverless-plugin-split-stacks)

  

  

-  [Environment variables in your lambda functions or layers](./serverless-dotenv-plugin-example)

  

You will of course need environment variables when developing your application. But how would you define it with the serverless framework for AWS Lambda? [serverless-dotenv-plugin](./serverless-dotenv-plugin-example)

  

  

#### How to ... ?

  

- ##### Deploy

	Run the CLI command in the directory where the serverless.yml file for which you have made your general definitions is located.

  

	`serverless deploy`
		or
	`sls deploy`

 - ##### Deploy only a function
 
	 `serverless deploy function -f yourFunctionName`
 
 - ##### Showing CloudWatch logs with CLI for lambda function

	*last 5 hours logs*
	`serverless logs -f yourFunctionName --startTime 5h`

 - ##### [Lambda functions triggers with AWS SQS](./lambda-functions-triggers-with-sqs)


