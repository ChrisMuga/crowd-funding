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
 
  this is the registration function for users, utilizies sequelize js for ORM issues and bcrypt js for hashing passwords

 ## validate-user

  handles authentication operations and validates a user's credential's credibility before rendering their home/profile pages.

 ## user-home/[id]
  
  fetches the user details, renders them on his profile and renders the page in turn. follows validation.

 ## create-campaign

  renders the UI for campaign creation 


  


