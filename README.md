# Datwyler-Assignment

### Heroku deployment###
You can see the actual application here: 
https://datwyler-assignment.herokuapp.com/

### Assumptions:
- used only applicant name to set up the credit facility
- used only loan type and amount for loans

### Packages in Spring-boot:
- JPA — Data persistence in SQL
- thymeleaf — A modern server-side Java template engine
- WEB — Build web, including RESTful, applications using Spring MVC
- H2 — Provides a volatile in-memory database

## Set up
1) Open terminal and navigate to /Datwyler-Assignment
2) run **$ mvn spring-boot:run**

3) Open another terminal and navigate to /Datwyler-Assignment
4) Install dependecies using 
   **$ npm install --legacy-peer-deps** (i.e. resort to using React 16 for compatibility)
5) run **$ npm run-script watch**

### Use Case:
Bank can open new credit facility for any applicant, and under that credit facility, the bank can give
different loan types to the applicant (home loan, car loan, etc.)
Needed functionalities:
1. Bank can open new credit facility for each applicant
2. Bank can give new loans to the applicant under that credit facility
3. Bank can monitor all loans for each applicant



with references to:
https://medium.com/swlh/spring-boot-and-react-js-fullstack-application-7ad99139e95c
