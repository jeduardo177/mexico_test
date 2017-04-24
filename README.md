# mexico_test #

Structure of proyect:
mexico_test/
    *app/ - conteint all logic code of the proyect (use mvc)
        *controllers/
            *postController.js
        *models/
            *post.js
        *routes/
            *postRoutes.js
        *validators/
            *tokenValidator.js
    *config/ -conteint all configuration of the server
        *env/
           *development.js
        *config.js
        *express.js
       * mongoose
    *test/ -conteint de mochajs test
        *test.js
    *package.json
    *server.js

## Initial setup ##

(Note: This project works with mongoDB, for this reason you need to have it installed on the computer where the project will be executed; more info
 read this link: https://docs.mongodb.com/manual/installation/)

1. Clone the proyect of https://github.com/jeduardo177/mexico_test.git
2. Find in your console the route where you donwloaded the proyect (example: cd C:\Users\Jose Pereira\Documents\mexico_test\)
3. Inside on this folder write in your console 'npm install', this comand install all dependencies used in this proyect
4. To run de server write in your console 'npm start'
5. To run the mocha test write in your console 'npm test' (Note: To run the test it is necessary that the server is running)


