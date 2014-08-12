## 3D Viewer

If running locally, open the terminal and run "grunt serve" in client directory or "npm run develop-client" in root directory. Then run "npm test" in server directory in another tab, and also run "mongod" in server directory in a third tab. The minified production application currently does not work due to the Grunt issue https://github.com/yeoman/grunt-usemin/issues/266 . Once this issue is resolved, you should be able to type "grunt build" in client directory to get the production ready app. After which, you can type "npm start" in the server directory in place of "npm test" to test the minified production app locally.

### Front-end

The 3D Viewer Wix app allows site creators to upload their 3D models to an environment configurable through the settings panel. Site visitors will be able to see the model on a canvas that the site owner can customize. The application is not compatible with mobile devices.

Site owners can control:
* Lighting
* Shading
* Colors
* Background color
* Default camera settings

Settings Panel Screenshots:

![alt tag](http://i.imgur.com/FNbHX8x.png)
___
![alt tag](http://i.imgur.com/iMSrvhb.png)
___
![alt tag](http://i.imgur.com/yJhHSkd.png)
___
![alt tag](http://i.imgur.com/h2rY5PQ.png)
___
![alt tag](http://i.imgur.com/w7zSTTM.png)

The site visitors will be able to control the camera using their mouse:
* Left click and hold to orbit/rotate camera
* Right click and hold to translate camera
* Middle scroll wheel to zoom in/out

Target Widget Display & Controls (taken from SketchFab):

![alt tag](http://i.imgur.com/yI9MCKV.png)
![alt tag](http://i.imgur.com/loQI95O.png)
![alt tag](http://i.imgur.com/sG0VWRU.png)
![alt tag](http://i.imgur.com/cwtId1z.png)

Site visitors will not be able to change the model, background, or settings, but they can change their view/perspective. This way, site owners can display their original work as intended. 

### Back-end

The back end is written in Node.js and the database uses MongoDB/Mongoose. The models themselves are saved on Amazon S3 web services.

To start up MongoDB, run "mongod -dbpath data/db/ --logpath data/logs/mongodb.log --logappend" in the terminal while in the server directory. Logs will be appended in server/data/logs.

### Development notes

The 3D environment completely works in localhost:9000 (when running "grunt serve" in /client or "npm run develop-client" in root). But does not work in localhost:3000 (when running "npm test" in /server). The backend saves the user identification (instance and compId) to MongoDB when the widget is opened in the Wix editor.
