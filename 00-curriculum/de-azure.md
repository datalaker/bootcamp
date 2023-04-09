# Curriculum - Data Engineering Training (Azure)

**Estimated Time:** 55 hours

- Getting Started
  - Create Azure Account
  - Install Azure Powershell
  - Install AzCopy
  - Install Azure CLI
  - A quick overview of Azure services for data engineering
- Developer Foundations
  - VS Code
    - Download and Install vscode
    - Understand vscode features
    - Install extensions in vscode
  - Anaconda (Python)
    - Download and Install Anaconda
    - Create virtual environment in anaconda
    - Create jupyter notebook in vscode and connect to venv
  - Github
    - Create github account
    - Install git cli
    - Create git repo and add students as collaborator
    - Connect local workspace to git repo
    - Learn git commands
  - Bash
    - Learn bash commands
- Data Engineering Basics
  - What is Data Engineering?
  - Role of Data Engineering in Organizations
  - Skills required to become a Data Engineer
  - Data engineer versus data scientist
  - What is data lake and data warehouse?
  - What is medallion architecture?
  - What is EL, ETL and ELT?
  - What are the benefits of cloud computing?
  - Understanding what the cloud is
  - The difference between the cloud and non-cloud era
  - The on-demand nature of the cloud
  - OLTP vs OLAP technologies
- Programming
  - SQL
    - Query Types
    - Query Engines
    - SQL Basic
      - SELECT, LIMIT, WHERE
      - Comparison and Logical Operators
      - ORDER BY
    - SQL Intermediate
      - Aggregation Functions and GROUP BY
      - CASE
      - JOINS
    - SQL Advanced
      - Dates
      - Texts
      - Subqueries
      - Window Functions
    - Query Optimizations
  - Python
    - Lists and dictionaries
    - For loops and while loops
    - Functions and Inline functions
    - Pandas Dataframes
    - `requests` library
    - `psycopg2` and `sqlalchemy` library
    - Building Functions in Python
    - Read/Write and Manipulate Data using Pandas
    - Data Format Conversion - CSV to Parquet, JSON to CSV/Parquet
    - Pulling Data from APIs using requests library
    - Connect to Postgres and Redshift from Python
    - Load and Read the data from Postgres using Python
  - PySpark
    - Spark and Hadoop Fundamentals
    - Databricks
    - Spark UDFs
    - Spark Dataframe API
    - Create Databricks Account
    - Create Spark Cluster in Databricks
    - M&M Analysis
    - Movielens and Song Analysis
    - San Francisco Fire Department Analysis
    - Data Transformation with PySpark
    - Connect AWS to PySpark
    - ETL Pipeline with AWS S3 and PySpark
  - Scala
    - Introduction to Scala Programming
    - Transform complex data types
    - Extract and Load Process with Spark Scala, S3 and Postgres
- Data Modeling
  - SQL Data Modeling
    - Music Data Modeling with Postgres
    - Healthcare Data Modeling with Postgres
    - Building Data Model in Snowflake
  - NoSQL Data Modeling
    - Music Data Modeling with Cassandra
- Azure Data Lake
  - Creating and Managing Data in Azure Data Lake
    - Provisioning an Azure storage account using the Azure portal
    - Provisioning an Azure storage account using PowerShell
    - Creating containers and uploading files to Azure Blob storage using PowerShell
    - Managing blobs in Azure Storage using PowerShell
      - Copying blobs between containers
      - Listing blobs in an Azure storage container
      - Modifying a blob access tier
      - Downloading a blob
      - Deleting a blob
    - Configuring blob lifecycle management for blob objects using the Azure portal
  - Securing and Monitoring Data in Azure Data Lake
    - Configuring a firewall for an Azure Data Lake account using the Azure portal
    - Configuring virtual networks for an Azure Data Lake account using the Azure portal
    - Configuring encryption using Azure Key Vault for Azure Data Lake
    - Creating an alert to monitor an Azure storage account
- Azure Data Factory
  - Building Data Ingestion Pipelines Using Azure Data Factory
    - Provisioning Azure Data Factory
    - Copying files to a database from a data lake using a control flow and copy activity
    - Triggering a pipeline in Azure Data Factory
    - Copying data from a SQL Server virtual machine to a data lake using the Copy data wizard
  - Incremental Data Loading using Azure Data Factory
    - Using Watermarking
    - Using File Timestamps
    - Using File partitions and folder structures
  - Develop Batch Processing Solution
    - Data Ingestion using Data Flow
    - Data Transformation using Azure Databricks
    - Data Serving using PolyBase
    - Data Pipeline using Azure Data Factory Pipeline
    - End to end data processing with Azure Batch
- Azure SQL Database
  - Configuring and Securing Azure SQL Database
    - Provisioning and connecting to an Azure SQL database using PowerShell
    - Implementing an Azure SQL Database elastic pool using PowerShell
- Azure Databricks
  - Processing Data Using Azure Databricks
    - Configuring the Azure Databricks environment
    - Integrate Databricks with Azure Key Vault
    - Mounting an Azure Data Lake container in Databricks
    - Processing data using notebooks
    - Scheduling notebooks using job clusters
    - Working with Delta Lake tables
- Azure Synapse Analytics
  - Processing Data Using Azure Synapse Analytics
    * Provisioning an Azure Synapse Analytics workspace
    * Analyzing data using serverless SQL pool
    * Provisioning and configuring Spark pools
    * Processing data using Spark pools and a lake database
    * Querying the data in a lake database from serverless SQL pool
    * Scheduling notebooks to process data incrementally
  - Transforming Data Using Azure Synapse Dataflows
    - Copying data using a Synapse data flow
    - Performing data transformation using activities such as join, sort, and filter
    - Monitoring data flows and pipelines
    - Configuring partitions to optimize data flows
    - Parameterizing mapping data flows
    - Handling schema changes dynamically in data flows using schema drift
  - Implementing the Serving Layer Star Schema
    - Delivering data in a relational star schema
    - Implementing a dimensional hierarchy
    - Delivering data in Parquet files
    - Maintaining metadata
- Snowflake Data Warehousing
  - Loading Data into Snowflake
  - Queries in Snowflake
- Data Lakes and Lakehouses
  - Delta, Iceberg and Hudi
  - Working with Delta lake in Databricks
- Azure Data Lake
  - Creating and Managing Data in Azure Data Lake
    - Provisioning an Azure storage account using the Azure portal
    - Provisioning an Azure storage account using PowerShell
    - Creating containers and uploading files to Azure Blob storage using PowerShell
    - Managing blobs in Azure Storage using PowerShell
      - Copying blobs between containers
      - Listing blobs in an Azure storage container
      - Modifying a blob access tier
      - Downloading a blob
      - Deleting a blob
    - Configuring blob lifecycle management for blob objects using the Azure portal
  - Securing and Monitoring Data in Azure Data Lake
    - Configuring a firewall for an Azure Data Lake account using the Azure portal
    - Configuring virtual networks for an Azure Data Lake account using the Azure portal
    - Configuring encryption using Azure Key Vault for Azure Data Lake
    - Creating an alert to monitor an Azure storage account
- Azure Data Factory
  - Building Data Ingestion Pipelines Using Azure Data Factory
    - Provisioning Azure Data Factory
    - Copying files to a database from a data lake using a control flow and copy activity
    - Triggering a pipeline in Azure Data Factory
    - Copying data from a SQL Server virtual machine to a data lake using the Copy data wizard
  - Incremental Data Loading using Azure Data Factory
    - Using Watermarking
    - Using File Timestamps
    - Using File partitions and folder structures
  - Develop Batch Processing Solution
    - Data Ingestion using Data Flow
    - Data Transformation using Azure Databricks
    - Data Serving using PolyBase
    - Data Pipeline using Azure Data Factory Pipeline
    - End to end data processing with Azure Batch
- Azure SQL Database
  - Configuring and Securing Azure SQL Database
    - Provisioning and connecting to an Azure SQL database using PowerShell
    - Implementing an Azure SQL Database elastic pool using PowerShell
- Batch Data Processing- Spark and Hadoop
  - Spark Jobs
  - Big Data Processing
  - Clusters
  - Horizontal and Vertical Scaling
  - Processing data using dbt in Snowflake
  - Processing data with Databricks
- Azure Databricks
  - Processing Data Using Azure Databricks
    - Configuring the Azure Databricks environment
    - Integrate Databricks with Azure Key Vault
    - Mounting an Azure Data Lake container in Databricks
    - Processing data using notebooks
    - Scheduling notebooks using job clusters
    - Working with Delta Lake tables
- Azure Synapse Analytics
  - Processing Data Using Azure Synapse Analytics
    * Provisioning an Azure Synapse Analytics workspace
    * Analyzing data using serverless SQL pool
    * Provisioning and configuring Spark pools
    * Processing data using Spark pools and a lake database
    * Querying the data in a lake database from serverless SQL pool
    * Scheduling notebooks to process data incrementally
  - Transforming Data Using Azure Synapse Dataflows
    - Copying data using a Synapse data flow
    - Performing data transformation using activities such as join, sort, and filter
    - Monitoring data flows and pipelines
    - Configuring partitions to optimize data flows
    - Parameterizing mapping data flows
    - Handling schema changes dynamically in data flows using schema drift
  - Implementing the Serving Layer Star Schema
    - Delivering data in a relational star schema
    - Implementing a dimensional hierarchy
    - Delivering data in Parquet files
    - Maintaining metadata
- Orchestration Layer
  - Data Pipelines (ETL/ELT)
  - Apache Airflow
    - Common features
      - UI
      - Operators
      - Variables
      - Plugins
      - Schedules
    - Install Airflow in your PC
    - First DAG/Pipeline - executing Bash commands
    - CSV to JSON ETL Pipeline
  - AWS SNS and SES for Notifications
- Capstone Project - ACLED Data Pipeline

## Foundations

### Getting Started

#### Create Azure Account

To quickly get started with Azure, you could [create a free trial account](https://azure.microsoft.com/en-us/free/) in Azure Portal. An Azure free account gives you access to the Azure platform, including 12 months free for several services and $200 in credit to explore paid services for 30 days.

#### Install Azure Powershell

Install Azure PowerShell on your machine; instructions for installing it can be found at [https://docs.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-6.6.00](https://docs.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-6.6.00).

Run these commands to install and connect to azure:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force
Import-Module Az
Connect-AzAccount
```

#### Install AzCopy

First install by `brew install azcopy` (for mac users e.g.). Then login by getting the tenant id from your `Azure Active Directory` blade home page and using it in this command: `azcopy login --tenant-id cf97c957****`

#### Install Azure CLI

Follow this - https://learn.microsoft.com/en-us/cli/azure/install-azure-cli.

Login with `az login`.

### Introducing Azure Basics

[Follow here](../01-foundations/cloud/azure/README.md)

## Azure Data Lake

### Creating and Managing Data in Azure Data Lake

[Source code](../02-storage/data-lakes/azure-data-lakes/lab-create-manage-data)

This lab focuses on provisioning, uploading, and managing the data life cycle in Azure Data Lake accounts.

- Recipe 1a - Provisioning an Azure storage account using the Azure portal
- Recipe 1b - Provisioning an Azure storage account using PowerShell
- Recipe 2 - Creating containers and uploading files to Azure Blob storage using PowerShell
- Recipe 3 - Managing blobs in Azure Storage using PowerShell
  - Recipe 3a - Copying blobs between containers
  - Recipe 3b - Listing blobs in an Azure storage container
  - Recipe 3c - Modifying a blob access tier
  - Recipe 3d - Downloading a blob
  - Recipe 3e - Deleting a blob
- Recipe 4 - Configuring blob lifecycle management for blob objects using the Azure portal

### Securing and Monitoring Data in Azure Data Lake

[Source code](../02-storage/data-lakes/azure-data-lakes/lab-securing-monitoring-lakes)

This lab covers securing an Azure Data Lake account using firewall and private links, accessing data lake accounts using managed identities, and monitoring an Azure Data Lake account using Azure Monitor.

- Recipe 1 - Configuring a firewall for an Azure Data Lake account using the Azure portal
- Recipe 2 - Configuring virtual networks for an Azure Data Lake account using the Azure portal
- Recipe 3 - Configuring encryption using Azure Key Vault for Azure Data Lake
- Recipt 4 - Creating an alert to monitor an Azure storage account

## Azure Data Factory

### Building Data Ingestion Pipelines Using Azure Data Factory

[Source code](../06-orchestration/azure-data-factory/lab-data-ingestion-pipeline)

This lab covers ingesting data using Azure Data Factory and copying data between Azure SQL Database and Azure Data Lake.

- Recipe 1 - Provisioning Azure Data Factory
- Recipe 2 - Copying files to a database from a data lake using a control flow and copy activity
- Recipe 3 - Triggering a pipeline in Azure Data Factory
- Recipe 4 - Copying data from a SQL Server virtual machine to a data lake using the Copy data wizard

### Incremental Data Loading using Azure Data Factory

[Source code](../06-orchestration/azure-data-factory/lab-adf-incremental-loading)

This lab covers various methods to perform data loading in incremental fashion.

- Recipe 1 - Using Watermarking
- Recipe 2 - Using File Timestamps
- Recipe 3 - Using File partitions and folder structures

### Develop Batch Processing Solution

[Source code](../06-orchestration/azure-data-factory/lab-batch-processing-solution)

In this lab, we design an end-to-end batch processing solution by using Data Factory, Data Lake, Spark, Azure Synapse Pipelines, PolyBase, and Azure Databricks.

- Recipe 1 - Data Ingestion using Data Flow
- Recipe 2 - Data Transformation using Azure Databricks
- Recipe 3 - Data Serving using PolyBase
- Recipe 4 - Data Pipeline using Azure Data Factory Pipeline
- Recipe 5 - End to end data processing with Azure Batch

## Azure SQL Database

### Configuring and Securing Azure SQL Database

[Source code](../02-storage/azure-sql/lab-securing-azure-sql-databases)

This lab covers configuring a Serverless SQL database, Hyperscale SQL database, and securing Azure SQL Database using virtual networks and private links.

- Recipe 1 - Provisioning and connecting to an Azure SQL database using PowerShell
- Recipe 2 - Implementing an Azure SQL Database elastic pool using PowerShell

### Implementing High Availability and Monitoring in Azure SQL Database

This lab explains configuring high availability to Azure SQL Database using auto-failover groups and read replicas, monitoring Azure SQL Database, and the automated scaling of Azure SQL Database during utilization spikes.

## Azure Databricks

### Processing Data Using Azure Databricks

[Source code](../03-procesing/azure-databricks/lab-data-processing-azure-dbr)

This lab covers integrating Azure Databricks with Azure Data Lake and Azure Key Vault, processing data using Databricks notebooks, and working with Delta tables.

- Recipe 1 - Configuring the Azure Databricks environment
- Recipe 2 - Integrate Databricks with Azure Key Vault
- Recipe 3 - Mounting an Azure Data Lake container in Databricks
- Recipe 4 - Processing data using notebooks
- Recipe 5 - Scheduling notebooks using job clusters
- Recipe 6 - Working with Delta Lake tables

## Azure Synapse Analytics

### Processing Data Using Azure Synapse Analytics

[Source code](../03-procesing/azure-synapse-analytics/lab-data-processing-synapse-analytics)

This lab covers exploring data using Synapse Serverless SQL pool, processing data using Synapse Spark Pools, Working with Synapse Lake database, and integrating Synapse Analytics with Power BI.

* Recipe 1 - Provisioning an Azure Synapse Analytics workspace
* Recipe 2 - Analyzing data using serverless SQL pool
* Recipe 3 - Provisioning and configuring Spark pools
* Recipe 4 - Processing data using Spark pools and a lake database
* Recipe 5 - Querying the data in a lake database from serverless SQL pool
* Recipe 6 - Scheduling notebooks to process data incrementally

### Transforming Data Using Azure Synapse Dataflows

[Source code](../03-procesing/azure-synapse-analytics/lab-azure-synapse-dataflows)

This lab focuses on performing transformations using Synapse Dataflows, optimizing data flows using partitioning, and managing dynamic source schema changes using schema drifting.

- Recipe 1 - Copying data using a Synapse data flow
- Recipe 2 - Performing data transformation using activities such as join, sort, and filter
- Recipe 3 - Monitoring data flows and pipelines
- Recipe 4 - Configuring partitions to optimize data flows
- Recipe 5 - Parameterizing mapping data flows
- Recipe 6 - Handling schema changes dynamically in data flows using schema drift

### Building the Serving Layer in Azure Synapse SQL Pools

This lab covers loading processed data into Synapse dedicated SQL pools, performing data archival using partitioning, managing table distributions, and optimizing performance using statistics and workload management.

### Monitoring Synapse SQL and Spark Pools

This lab covers monitoring Synapse dedicated SQL and Spark pools using Azure Log Analytics workbooks, Kusto scripts, and Azure Monitor, and monitoring Synapse dedicated SQL pools using Dynamic Management Views (DMVs).

### Optimizing and Maintaining Synapse SQL and Spark Pools

This lab offers techniques for tuning query performance by optimizing query plans, rebuilding replication caches and maintenance scripts to optimize Delta tables, and automatically pausing SQL pools during inactivity, among other things.

### Implementing the Serving Layer Star Schema

[Source code](../03-procesing/azure-synapse-analytics/lab-implementing-star-schema)

In this lab, we will learn about implementing the serving layer, which involves implementing star schemas, techniques to read and write different data formats, sharing data between services such as SQL and Spark, and more. Once you complete this lab, you should be able to understand the differences between a Synapse dedicated SQL pool versus traditional SQL systems for implementing the Star schema, the various ways of accessing Parquet data using technologies such as Spark and SQL, and the details involved in storing metadata across services. All this knowledge should help you build a practical and maintainable serving layer in a data lake.

- Recipe 1 - Delivering data in a relational star schema
- Recipe 2 - Implementing a dimensional hierarchy
- Recipe 3 - Delivering data in Parquet files
- Recipe 4 - Maintaining metadata

## Azure Data Engineering Pipelines

### Monitoring and Maintaining Azure Data Engineering Pipelines

This lab covers monitoring and managing end-to-end data engineering pipelines, which includes tracking data lineage using Microsoft Purview and improving the observability of pipeline executions using log analytics and query labeling.

## Questions

### Azure Data Engineer Associate Certification Guide

[Questions and Answers](../a1-interviewprep/azure-data-engineering.md)
