# HCS-Project2-Backend
#### Server for the Around The World-Blog 

Running on:

[https://aroundtheworld-backend2.apps.functionfactory.de](https://aroundtheworld-backend2.apps.functionfactory.de/)

The Frontend-Code and Documentation for the Project is here:

https://github.com/shaefelinger/HCS-Project2-TravelBlogVue

This Project provides the Backend to run my final Project for the Full-Stack Web Development-Course at the [Hamburg Coding School.](https://hamburgcodingschool.com/)

It serves the Vue-dist, provides a REST-Api for the Frontend, comunicates with the MongoDB-Atlas-Database using mongoose and provides basic authorisation via passport.js

#### Routes

|                      | GET             | POST               | PUT                 | DELETE                 |
| -------------------- | --------------- | ------------------ | ------------------- | ---------------------- |
| `/blogposts`         | all blogposts   | new blogpost       |                     |                        |
| `/blogposts/:id`     | single blogpost |                    | put single blogpost | delete single blogpost |
| `/auth/signup`       |                 | signup new user    |                     |                        |
| `/auth/login`        |                 | login user         |                     |                        |
| `/upload/profilepic` |                 | upload profile-pic |                     |                        |
| `/help`              | show help       |                    |                     |                        |

  