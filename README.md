# mathjax-node-sre-server
This is a dockerized version of mathjax-node-sre to run as a LeTeX to SVG and Speaktext micro service in UEB Prep

I am running this micro service on a [VPS here](https://textosvg.aidanreidel.com/)

## Building and running this project
There are a few ways of building and running this project. After using any of these options the project will be running on [localhost:3000](http://localhost:3000) To stop the server you have running locally use `ctrl-c`.

### Getting the code from GitHub
1. Clone down the repo
2. Change into the directory `cd mathjax-node-sre-server`

### Docker option 1: Run my version from Docker Hub locally 
Run this command in bash and you will be running my version of this project on your machine

```bash
docker run --init -p 3000:3000 areidel/mathjax-node-sre-server
```

### Docker option 2: Build and run your own version locally
This is a Docker project after all. To build it with the docker you have to do to build it is:

```bash
docker build -t <docker-user-name>/mathjax-node-sre-server .
```

After you build your local version, run it by running this command:

```bash
docker run --init -p 3000:3000 <docker-user-name>/mathjax-node-sre-server
```

### Node option:
1. Install the dependencies using npm with good old `npm i`
2. Then fire it up with `npm start`

## Testing
I am relying heavily on the testing for documenting this api at this time. The testing code also only works with node for the time being. 

### Testing my production code 
1. Run `npm i` to install the test dependencies 
2. Run the test script using `npm test`

### Testing locally 
1. Get the server running locally through one of the options I described above
2. Run `npm i` to install the test dependencies if you did not use node to run the server
3. Comment out `const api = 'https://textosvg.aidanreidel.com/` in `mathjax-node-sre-server/test/render.js`
4. Uncomment `const api = 'http://localhost:3000'` in the same file
5. Save and run the test script using `npm test`