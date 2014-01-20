Advanced Node.js template for starting a node webproject faster.
Overview
===
The template makes use of the following technologies:

express - web application framework for nod http://expressjs.com

mongoose - modeling application data with MongoDB http://mongoosejs.com

jade - template engine, easier and more convenient than writing html http://jade-lang.com

stylus - for dynamic and faster writing of CSS http://learnboost.github.io/stylus/

grunt - for automation tasks revolving around npm and node (back-end side of things) http://gruntjs.com

bower - not really part of the template per se, as I copied my content from an old project, but I will try updating this part. It automates management of front-end packages like jQuery or Bootstrap http://bower.io

Bootstrap - front-end framework for easier and faster web development. Comes with a lot of web site elements, already styled, like buttons or sliders. Responsiveness is an elemental feature http://getbootstrap.com

restler - Library to consume other web APIs. https://github.com/danwrong/restler
Background
===
You will find an article describing how to use module.exports here http://openmymind.net/2012/2/3/Node-Require-and-Exports/

I took the main structure of this app from here http://scotch.io/tutorials/javascript/node-and-angular-to-do-app-application-organization-and-structure
Getting started
===
As with the starter template we set up node and load the necessary modules.

For our data, we use MongoDB in this template. Other database types are possible too, but need to be configured differently, for this please look into the documentation. My bitstarter repository is based on PostgreSQL and you can take clues from there, but the setup is complexer, hence why I decided to use MongoDB here.

Install MongoDB
```brew install mongodb```

Run MongoDB in its own Terminal tab with
```mongod```

After that you can start the web application with
```node web.js```
