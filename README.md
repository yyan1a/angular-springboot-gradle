# angular-springboot-gradle

This is a simple Angular 2 Spring Boot application built via Gradle. This application
contains text inputs, dropdown, a date picker and a submit button. Upon submission the
entered data is displayed.

### Development
This project is developed in Eclipse Oxygen as a Gradle project.

To start the Angular application

```
npm start
```
Go to localhost:4200

To start the Spring Boot application
Select the main Spring Boot class and run as Java application

Go to localhost:8080

### Production Build

This application will be packaged into a runnable jar and be hosted
by Spring Boot. In order to accomplish this the Angular resources need 
to be moved to the src/main/resource/static folder first via the following
command
```
npm run build
```
 
Then issue the Gradle build command to generate the runnable jar
the jar file 

Note:
Only tested in Chrome and no data validation


