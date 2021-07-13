# Playing with sequelize-auto

clone and install following database for playing with auto
 
    git clone https://github.com/datacharmer/test_db

    cd test_db

    mysql < employees.sql

before run change `config/config.json` username password and host to your mysql config (maybe)

hmm ok lets start the server


first install require packages;

    npm install


now start the server

    npm run dev


server will run at localhost:8000;


current routes;


- get 10 staffs record with salary and title `http://localhost:8000/staffs`

- get all department managers `http://localhost:8000/staffs/manager`