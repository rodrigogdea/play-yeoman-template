# Play & Yeoman Integration Template

This project is a template that integrate two popular web tools: [Play Framework](https://www.playframework.com/) and [Yeoman](http://yeoman.io/). The idea of this template is to have a server side Web API built with Play and a client side Web API built with Yeoman running in the same development environment.

## Developmet
This project use [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy) to get working Play with Yeoman. If you want to work in the client side app consuming services provided by Play, you need to start Play and Grunt, as follow:

- Run `activator run` or `activator start`. Play will start running in the default port (9000).
- Run `grunt serve`. Grunt will start running in the port 9001 

## Build & Deployment
For building app firt run `grunt`: Grunt will package the web site into `/public` directory. Then run `activator dist` or `activator stage`.

