## CREDS project boilerplate (docker)

there are three major component

- backend (strapi v3.0.0-beta.9)
- frontend (next v9.0.0)
- database (mysql v5.7.26)

## before run

create `.env` in root directory
and populate it with correct data

```
DB_USER=<user>
DB_PASSWORD=<password>
DB_HOST=mysql
DB_NAME=<dbname>
```

## dev

run below command in console

```
docker-compose up
```

add `-d` if you want it to run in background
after build is done and all containers are running you should be able to see

- admin panel on localhost:1337/admin (container `CREDS-backend-dev`)
- front page on localhost:3000 (container `CREDS-frontend-end`)
- mysql should be running on default port 3306 (container `CREDS-mysql-dev`)

if you need to connect to mysql run in your console

```
mysql -u <user> -p -h 0.0.0.0 -P 3306
```

or directly in container

```
docker exec -it CREDS-mysql-dev bash
mysql -u <user> -p
```

## prod

run below command in console

```
docker-compose -f docker-compose-prod.yml up
```

add `-d` if you want it to run in background

after build is done and all containers are running you should be able to see

- admin panel on localhost:1337/admin (container `CREDS-backend-prod`)
- front page on localhost:3000 (container `CREDS-frontend-prod`)
- mysql should be running on default port 3306 (container `CREDS-mysql-prod`)

if you need to connect to mysql run in console

```
mysql -u <user> -p -h 0.0.0.0 -P 3307 # note that this port is changed compared to dev version
```

or directly in container

```
docker exec -it CREDS-mysql-prod bash
mysql -u <user> -p
```
