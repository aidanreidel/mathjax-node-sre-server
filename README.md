# mathjax-node-sre-server
This is a dockerized version of mathjax-node-sre to run as a LeTeX to SVG and Speaktext micro service in UEB Prep

## Building this project
This is a Docker project so all you have to do to build it is:

```bash
docker build -t <docker-user-name>/mathjax-node-sre-server .
```

### Running this project 
Also because this is a Docker project all you have to run it is:

```bash
docker run -p 3000:3000 <docker-user-name>/mathjax-node-sre-server
```

Then head to `localhost:3000` and see this project in action