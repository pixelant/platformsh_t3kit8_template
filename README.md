# t3kit [![t3kit](https://img.shields.io/badge/t3kit-9dev-blue.svg?style=flat-square)](https://github.com/t3kit/t3kit) [![TYPO3](https://img.shields.io/badge/TYPO3-9.3-orange.svg?style=flat-square)](https://typo3.org/)

## [Starter kit](http://t3kit.com/) for TYPO3 CMS. Tools, extensions, configurations and templates.

# WIP/Test branch

## !! Development branch - not for production!!

This branch is made to make it possible to check what changes that needs to be done in theme_t3kit extension. Most of the extensions included in t3kit releases aren't included in this branch for now. Also note that there are still much more to fix for TYPO3 version 9.

You can also use this branch if you need to test and prepare any extension for TYPO3 version 9.

Frontend currently throws an error if you aren't logged into BE.
see: https://forge.typo3.org/issues/85310

To get this setup to run:

 - `git clone -b t3kit9test git@github.com:t3kit/t3kit.git t3kit9test`
 - `cd t3kit9test`
 - `cp .env.example .env` (`cp .env.mac.example .env`)
 - `docker-compose up -d`
 - `composer install`
 - `composer helper:restoredb`

Since Themes extension isn't included now, we need to do some manual configurations to make frontend render.

The restoredb script also perform following steps:

 - Edit root template [1] and include static "Theme - t3kit (theme_t3kit)"
 - Edit root page [1] and:
    - Include Page TSConfig (from extensions) "Theme - t3kit (theme_t3kit)"
    - Set "Startpage" as Backend Layout (this page only) 
    - Set "MenuContent" as Backend Layout (subpages of this page).
 - Change domain located on root page [1] from "localhost" to "localhost:8888"



***


* [Development](#development)
* [Production](#production)
* [t3kit structure](#t3kit-structure)
* [t3kit versioning](#t3kit-versioning)
* [CHANGELOG](https://github.com/t3kit/t3kit/blob/master/CHANGELOG.md)
* [Contributing to t3kit](https://github.com/t3kit/t3kit/blob/master/CONTRIBUTING.md)


***

# Development

## Required dependencies:

* [Git](https://git-scm.com/)
* [Composer](https://getcomposer.org/)
* [Docker](https://docker.com/) >= v17.12

## Setup development environment:

***

### Start using t3kit with **git**:

1. `git clone https://github.com/t3kit/t3kit.git`

2. `cd t3kit`

3. `composer install --ignore-platform-reqs`

_*Note: To continue with Docker you need to create docker environment `.env` file for your project based on an example '.env.example' or for MAC users `.env.mac.example`. All environments variables could be adapted to your specific needs._

4. `cp .env.example .env`  _*or for MAC users_ `cp .env.mac.example .env`

5. `docker-compose up -d`

6. `docker exec -it WEB_CONTAINER_NAME /var/www/html/vendor/t3kit/db/setupdb.sh`

***

### Start using t3kit with **composer**:

1. `composer create-project t3kit/t3kit WEB_CONTAINER_NAME dev-master --keep-vcs --ignore-platform-reqs`

2. `cd t3kit`

_*Note: To continue with Docker you need to create docker environment `.env` file for your project based on an example '.env.example' or for MAC users `.env.mac.example`. All environments variables could be adapted to your specific needs._

3. `cp .env.example .env`  _*or for MAC users_ `cp .env.mac.example .env`

4. `docker-compose up -d`

5. `composer helper:setupdb`


### t3kit database manipulation - Setup/Restore/Pack:

* Setup t3kit db: `docker exec -it WEB_CONTAINER_NAME /var/www/html/vendor/t3kit/db/setupdb.sh`
* Restore t3kit db: `docker exec -it WEB_CONTAINER_NAME /var/www/html/vendor/t3kit/db/restoredb.sh`
* Pack (save) t3kit db: `docker exec -it WEB_CONTAINER_NAME /var/www/html/vendor/t3kit/db/packdb.sh`

### Verify the installation:

* Open in browser: `localhost:8888` or `0.0.0.0:8888`

### TYPO3 backend login

The credentials for login to TYPO3´ backend are:

* Username: `admin`
* Password: `admin1234`

### phpMyAdmin
#### Run phpMyAdmin docker container and connect it to t3kit:

```
docker run --name phpmyadmin -dp 8889:80 --network t3kit_default --rm -e PMA_HOST=t3kit_db phpmyadmin/phpmyadmin
```

* `t3kit_default` - default docker network name based on `t3kit` folder name.
* `t3kit_db` - default t3kit database host name (from docker-compose).

***


# Production

## Required dependencies:

* [Composer](https://getcomposer.org/)

## Create new project based on t3kit:

```
composer create-project t3kit/t3kit [<directory>] [<version>] --prefer-dist --no-dev
```

***


# t3kit structure

**t3kit** consist of **three** main parts plus additional [**extension**](https://github.com/t3kit/subtheme_t3kit_template) which intended to help extend functionality for base t3kit components.
1. [**t3kit**](https://github.com/t3kit/t3kit) - main repository with (TYPO3) website root (typo3conf, fileadmin, favicons), tests, Docker configurations and CI configurations (.circleci). **t3kit** repo depend on two mentioned below composer dependencies: `theme_t3kit` and `t3kit_db`.
2. [**theme_t3kit**](https://github.com/t3kit/theme_t3kit) - main part of t3kit conception. Theme extension based on [TYPO3 Themes](http://www.typo3-themes.org/). It consists of new content elements, Gridelements configurations, predefined BE layouts, main menu, Solr search templates, bunch of TS configurations, Theme constants (main colors, typography, show/hide elements) and independent FE part called [felayout_t3kit](https://github.com/t3kit/theme_t3kit/tree/master/felayout_t3kit) (JS, CSS, images, icons, components)
3. [**t3kit_db**](https://github.com/t3kit/t3kit_db) default database for **t3kit** with configuration, page tree and examples of content elements. Also, it includes [scripts](#t3kit-database-manipulation---setuprestorepack) to operate with DB (setup, restore, pack)

* [**subtheme_t3kit_template**](https://github.com/t3kit/subtheme_t3kit_template) - additional extension template which shows us an example how easily change t3kit configuration, modify templates and layouts and create new content elements.
  * There two ways how to create new **t3kit subtheme** based on `subtheme_t3kit_template`:
    - use [t3kit-cli](https://github.com/t3kit/t3kit-cli), _t3kit command line interface which will automatically create new `t3kit subtheme` based on your needs_
    - clone `subtheme_t3kit_template` and **manually adapt** it to your needs (change name, constants, configurations, content elements, templates)


***


# t3kit versioning

* t3kit v8 development is on `master` branch.
* t3kit v7 development is on `t3kit7` branch.
* Every release synchronized with specific release of TYPO3.
* Every release tagged by `git tag` using [Semantic Versioning](http://semver.org)
* `Major` version should be almost always the same as on TYPO3.

#### Example:
- t3kit version **7.9.12**
  - **7** - major version: version of TYPO3
  - **9** - minor version: new features in t3kit
  - **12** - patch version: bug fixes, documentation updates, code refactoring, new tests in t3kit

- t3kit version **8.1.2**
  - **8** - major version: version of TYPO3
  - **1** - minor version: new features in t3kit
  - **2** - patch version: bug fixes, documentation updates, code refactoring, new tests in t3kit

When we starting new `major` version of **t3kit** previous will be moved to new branch, so in this case we can keep developing new and support old one.

Examples:
* Branch `master` => _last t3kit release_ `t3kit 8.1.3 = TYPO3 8.6.1`
* Branch `t3kit7` => _last t3kit release_ `t3kit 7.11.3 = TYPO3 7.6.15`


***

# t3kit v7 on branch [t3kit7](https://github.com/t3kit/t3kit/tree/t3kit7)


Previous version of **t3kit v7** you can find on branch [t3kit7](https://github.com/t3kit/t3kit/tree/t3kit7), or you can use git tags to chose needed version:
```
git checkout 7.11.3
or
git checkout 7.10.0
```

***
