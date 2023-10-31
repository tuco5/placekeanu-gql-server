# Full Stack coding challenge

## How to run localy

1. Clone this repository on your local machine
   `git clone git@github.com:tuco5/placekeanu-gql-server.git`

2. Install dependencies.
   `pnpm install`

3. Run the code.
   `pnpm start`

4. Go to [localhost:4000](http://localhost:4000) to visit apolo studio and start quering.

## How to run with docker

To run with docker it is necesary to have install docker on your machine. You can go and check how here [docker install guide](https://docs.docker.com/engine/install/). After installing then run docker on your machine and pull the graphql server image form my docker hub repo:

1. Pull the image container `docker pull teutorigos/apollo-server:cloud`

2. Run the container wirh `docker run -p 4000:4000 teutorigos/apollo-server:cloud`

3. Go to [localhost:4000](http://localhost:4000)

To run the front-end go to [keanu-graphql-client](https://github.com/tuco5/placekeanu-client) and follow the instructions on the README. The front-end app requires this code to be running on the background in order to work properly.
