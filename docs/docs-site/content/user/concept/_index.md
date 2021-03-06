---
title: "Concepts"
date: 2019-03-13T18:28:09-07:00
draft: false
weight: 1
---

## Interface

The layout simplifies the interface and is a snappy single page app.

![image](/images/hue-4-interface-concept.png)

From top to bottom we have:

* Quick action (big blue button), a global search and a notification area on the right
* A collapsible hamburger menu that offers links to the various apps and a quick way to import data
* An extended quick browse on the left
* The main app area, where the fun is ;)
* A right Assistant panel for the current application. It offers a live help and depends on the currently selected application. For example in the Hive Editor, it shows a quick browse for the used tables in your query, suggestions on how to write better queries, SQL language and UDF built-in documentation.

Learn more on the [The Hue 4 user interface in detail](http://gethue.com/the-hue-4-user-interface-in-detail/).


### Top search

Have you ever struggled to remember table names related to your project? Does it take much too long to find those columns or views? Hue now lets you easily search for any table, view, or column across all databases in the cluster. With the ability to search across tens of thousands of tables, you're able to quickly find the tables that are relevant for your needs for faster data discovery.

The new search bar is always accessible on the top of screen, and it offers a document search and metadata search too if Hue is configured to access a metadata server.

Existing tags and indexed objects show up automatically, any additional tags you add appear back in metadata server, and the familiar metadata server search syntax is supported.

By default, only tables and views are returned. To search for columns, partitions, databases use the ‘type:' filter.

Example of searches:

* table:customer → Find the customer table
* table:tax* tags:finance → List all the tables starting with tax and tagged with ‘finance'
* owner:admin type:field usage → List all the fields created by the admin user that matches the usage string
* parentPath:"/default/web_logs" type:FIELD  originalName:b* → List all the columns starting with `b` of the table `web_logs` in the database `default`.

Learn more on the [Tagging](https://blog.cloudera.com/blog/2017/05/new-in-cloudera-enterprise-5-11-hue-data-search-and-tagging/).

### Tagging

In addition, you can also now tag objects with names to better categorize them and group them to different projects. These tags are searchable, expediting the exploration process through easier, more intuitive discovery.

### Left assist

Data where you need it when you need it.

Find your documents, HDFS and S3 files and more in the left assist panel, right-clicking items will show a list of actions, you can also drag-and-drop a file to get the path in your editor and more.

### Right assist

This assistant content depends on the context of the application selected and will display the current tables or available UDFs.

### Sample popup

This popup offers a quick way to see sample of the data and other statistics on databases, tables, and columns. You can open the popup from the SQL Assist or with a right-click on any SQL object (table, column, function…). In this release, it also opens faster and caches the data.

## Documents

Similarly to Google Documents, any document (e.g. SQL Query, Workflow, Dashboard...) opened in the Hue apps can be saved.

### Sharing

Sharing happens on the main page or via the top right menu of the selected application.

Two types of sharing permissions exist:

- read only
- can modify

Shared documents will show-up with a little blue icon in the homepage.

### Import / Export

Via the Home page, saved documents can be exported for backups or transferring to another Hue.

## Settings

### Changing the language

The language is automatically detected from the Browser or OS. English, Spanish, French, German, Korean, Japanese and Chinese are supported.

The language can be manual set by a user in the "My Profile" page. Please go to My Profile > Step2 Profile and Groups > Language Preference and choose the language you want.
