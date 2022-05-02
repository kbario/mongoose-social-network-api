# mongoose-social-network-api
[![license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE.md) ![GitHub last commit](https://img.shields.io/github/last-commit/kbario/mongoose-social-network-api) ![GitHub top language](https://img.shields.io/github/languages/top/kbario/mongoose-social-network-api) ![GitHub language count](https://img.shields.io/github/languages/count/kbario/mongoose-social-network-api) [![GitHub followers](https://img.shields.io/github/followers/kbario?style=social)](https://github.com/kbario)

## Description
This repo is the backend for a social network type application. It utilises MongoDB as the database and has function routes to create, update, delete, and get users, and their thoughts, and add and remove reactions to thoughts and friendships.

This project uses JavaScript, NodeJS, ExpressJS and Mongoose as the ODM.

## Table of Contents
- [mongoose-social-network-api](#mongoose-social-network-api)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Set Up](#set-up)
    - [Using the Routes](#using-the-routes)
  - [Contribute to mongoose-social-network-api](#contribute-to-mongoose-social-network-api)
  - [Questions](#questions)
  - [Credits](#credits)
    - [Third-Party Assets](#third-party-assets)
  - [License](#license)



## Installation
Clone this repo on your local machine using

    git clone https://github.com/kbario/mongoose-social-network-api.git

## Usage

### Set Up

Seed the database with randomly generated data using Chance.js and start the server on your local machine using:

    node seed/seed.js

    node server.js


### Using the Routes

Open your favourite api route testing software (i am using Insomnia) and utilise the routes
- **/api/users** (GET and POST) to get and create users
- **/api/users/:userId** (GET, PUT, DELETE) to get, update and delete individual users
- **/api/users/userId/friends/friendId** (POST and DELETE) to add and remove friends
- **/api/thoughts** (GET and POST) to read all thoughts and create new ones
- **/api/thoughts/:thoughtId/** (GET, PUT and DELETE) to get, update and delete thoughts
- **/api/thoughts/:thoughtId/reactions** (POST) to create a reaction to a thought, and 
- **/api/thoughts/:thoughtId/reaction/:reactionId** (DELETE) to delete reactions

Watch me use the routes [here](https://drive.google.com/file/d/1F3z0Mx1U32WW9L3omh3zUOnf26qN5MXV/view)

## Contribute to mongoose-social-network-api

All contributions to mongoose-social-network-api are greatly appreciated and contributing is one of the many amazing things about open-source software.

To contribute to mongoose-social-network-api, all we ask is that you're empathic and supportive towards other developers and follow the standard contribution guidelines. Click the banner below for more information.
        
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

## Questions
If you have any questions, feel free to contact me through my [GitHub](https://github.com/kbario/) or [Email me](mailto:kylebario1@gmail.com).

## Credits
Below is a list of links to third-party assets that were used to create this project.

### Third-Party Assets
- https://mongoosejs.com/
- https://www.mongodb.com/
- https://expressjs.com/
- https://nodejs.dev/

## License
Licensed under the [MIT](./LICENSE.txt) license.

---
This README was created with [Gener8aREADME](https://github.com/kbario/Gener8aREADME).
