# HeartBeat

A small NodeJS express server to check the archivenode Nethermind API for the block number. If the request fails, return a HTTP 503, else HTTP 200.

## Install and run

* Run `npm install` to install dependancies
* Rename `.env.example` to `.env` in this root directory and put in the correct API key
* Run `npm run run:server` - this will run the express server on port 3000 - You will get output saying "App listening at ..:3000"