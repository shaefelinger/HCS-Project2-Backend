# HCS-Project2-Backend
#### Server for the Around The World-Blog 

Running on:

https://aroundtheworld-blog-server.herokuapp.com

The Frontend-Code and Documentation for the Project is here:

https://github.com/shaefelinger/HCS-Project2-TravelBlogVue


This Project provides the Backend to run the Project.

It serves the Vue-dist, provides a REST-Api for the Frontend, comunicates with the MongoDB-Atlas-Database using mongoose and provides basic authorisation via passport.js


|        | /blogposts           | /blogpots/:id          | /users           | /users/:id         |
| ------ | -------------------- | ---------------------- | ---------------- | ------------------ |
| GET    | all blogposts        | single blogpost        | all users        | single user        |
| POST   | new blogpost         |                        | new user         |                    |
| PUT    |                      | put single blogpost    |                  | put single user    |
| PATCH  |                      | patch single blogpost  |                  | patch single user  |
| DELETE | delete all blogposts | delete single blogpost | delete all users | delete single user |


|      | auth/login | auth/user         | auth/logout         | /help     |
| ---- | ---------- | ----------------- | ------------------- | --------- |
| POST | login user |                   |                     |           |
| GET  |            | show current user | logout current user | show help |
|      |            |                   |                     |           |







  