# crowd-funding
Crowd Funding with NODE JS

# Routes

## /index or /

  This is the first page that handles, registration of users and if the users are registered they can choose to log-in.

## login

  This renders the Login UI for the Users
  
## register

  this renders the registration UI for Users and implements sequelize in the /create callback.
  
## users

  this fetches all the users using the users method in the UserController.js file and renders them to the page.

# Controllers

## 1. UserController

  handles all Users functions and operations.
  
 # UserController Functions/Methods.
 
 ## home
 
  this renders the index page.
 
 ## log
 
  does a simple log
 
 ## login
 
  renders the login UI
 
 ## test_connection
 
  tests connection to mysql db, initiated by sequelize js
 
 ## users
 
  fetches all users and renders them to the users page 
 
 ## create
 
  this is the registration function for users.
  


