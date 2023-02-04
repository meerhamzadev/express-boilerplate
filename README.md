![banner](./assets/banner.png)

<h4 align="center">
A production ready dockerized express boilerplate to make your server-side development a breeze 🚀
</h3>

<hr>

## ⚡Features

✅ Production ready with one docker-compose command. \
✅ Use MVC architecture. \
✅ Local dockerized postgres db.\
✅ Dockerized PgAdmin to check the db records.\
✅ Sequelize ORM configured.\
✅ CRUD API (Todo App).\
✅ JEST for testing. \
✅ Seperate Database(Sqlite) configured for test cases coverage.\
✅ Hot Container reload.

## ⚒️ Techologies Used

- Sequelize: For ORM & database operations.
- JEST: For testing purposes.
- Docker & docker-compose : For Virtualization.
- postgresSQL: Database.
- PgAdmin: To interact with the Postgres database sessions.
- Swagger-Autogen: To automatically generate swagger-ui documentation.

## 💥 Setup & Usage
Make sure you have docker and docker-compose installed [docker installation guide](https://docs.docker.com/compose/install/)
### Step 1
create **.env** file in the root directory

```
DATABASE_URL=postgres://postgres:postgres@database:5432/todo-app-db
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=todo-app-db
PGADMIN_EMAIL=pgadmin@pg.com
PGADMIN_PASSWORD=password
```

### Step 2

```
docker-compose build
```

### Step 3

```
docker-compose up
```

## 🔍 Preview

Your Production Ready Express CRUD backend app is up and running on `localhost:3000` 🎉 

- Swagger docs on `localhost:3000/api/docs`
![swagger-ui](./assets/swagger.png)

- PgAdmin on `localhost:7000`
![pg-admin](./assets/pgadmin.png)

## 👨🏻‍💻 Contributing

Make sure you read the [contributing guidelines](https://github.com/meerhamzadev/express-boilerplate/blob/main/contributing.md) before opening a PR.

## 🔑 License
- MIT © [Meer Hamza](https://github.com/meerhamzadev)

## ⚡ AUTHOR

🙋🏻‍♂️ Yo! It's Meer, a senior year CS undergrad. Let's get connected

<a href="https://twitter.com/meerhamzadev"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /></a>&nbsp;
<a href="https://linkedin.com/in/meerhamzadev/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>&nbsp;
<a href="mailto:hamzababar37@gmail.com?subject=From%20GitHub&body=Hi,%20there.%20Found%20you%20from%20GitHub."><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/></a>&nbsp;
