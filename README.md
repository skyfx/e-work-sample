E-company work sample
====================

[![Build Status](https://travis-ci.org/skyfx/e-work-sample.svg?branch=master)](https://travis-ci.org/skyfx/e-work-sample)

Latest version is running at [e-work-sample.herokuapp.com](https://e-work-sample.herokuapp.com/?/)

This application provides the following functionality:

  * [ ] Provides a web page to add a text with a title without formatting
  * [ ] Show a list of the added items sorted by date
  * [ ] Calculate and show the difficulty of the text on a scale form 1 to 10
  * [ ] Fuzzy search trough the items
  * [ ] Edit texts

Environment
-----------

  * Java 8 (1.8.0_66 oracle)
  * Maven 3.3 (3.3.9)
  * node v5.1.1 (npm v3.3.12)
  * Gulp & Browserify
  * A browser (Chrome 46.0.2490.86 (64-bit), OS X 10.11.1)

Run from source
---------------

  * clone repo
  * ```mvn clean spring-boot:run```
  * open browser (http://localhost:8080)

Run front end separately with live reload
 
  * ```npm run start```
  * open browser (http://localhost:3000)

Build war
---------

  * clone repo
  * ```mvn clean install -Pbuild-war```
  * The war file is located in ```target/e-work-sample-1.0-SNAPSHOT.war```

The Rules
---------
  * The project must be build with Maven
  * The project delivers a war runnable in Tomcat
  * Any framework is allowed
  * A persistent store must be used
  * A search engine must be used
  * The application does not need any security
