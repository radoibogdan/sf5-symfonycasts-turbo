# Symfony UX: Turbo
 [Symfony UX: Turbo](https://symfonycasts.com/screencast/turbo) course on SymfonyCasts.

## Setup

## 1) Download Composer dependencies**
```
composer install
```

## 2) Database Setup
install and runMySQL manually + create database . When you're done, open the `.env` file and make any
adjustments you need - specifically `DATABASE_URL`.
```
symfony console doctrine:database:create
symfony console doctrine:schema:update --force
symfony console doctrine:fixtures:load
```

## 3) Start the symfony web server
```
symfony serve -d
```

## 4) Frontend Assets
```
yarn install
yarn watch
```

## 5) Install Turbo
```
composer require symfony/ux-turbo:^1.3
yarn install
```


