1.- App created following instructions from youtube video: 'Node.js & express from scratch'

2.- The express module (required within the app.js file) has its own methods such as get and listen. Get is literally a get request where you can add the route as the first argument and request and response as the second to run other express functions such as .send.

3.- By using the method listen, you can pass in a port to listen in, and therefore when you run your app.js file the server will be running listening on port 3000 and that can be visualized in your browser in localhost.

4.- The const path in app.js is a core module included in node.js by default.

5.- on the app.set method the path.join function sets the __dirname which is the current directory we are in and the folder to look in.

6.- On the package.json file you can go into the scripts hash and add npm commands by adding the command as the key and the executable as the value (see start which was manually added, it is now running your app which is listening to a port, therefore npm start command starts the server)

7.- Adding curly braces after index on a res.render method with the template to render creates objects to pass on to the template. Use Ice cream cones to render objects.

8.- Changes will not RENDER AUTOMATICALLY unless you install nodemon (npm install -g nodemon) and run the server by typing 'nodemon' in the commandline, otherwise you have to reset the server each time

9.- Decided to change view files from .html to .ejs because there is more documentation and I can actually use the <% include filepath %> to render partials

10.- Remember to npm install mysql in order to require mysql in your main.js file
