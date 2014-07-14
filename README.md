## 3D Viewer

### Front-end

The 3D Viewer Wix app allows site creators to upload their 3D models to an environment configurable through the settings panel. Site visitors will be able to see the model on a canvas that the site owner can customize.

Site owners can control:
* Lighting
* Shading
* Colors
* Background landscape, color, and opacity
* Default camera settings

Settings Panel Screenshots:
![alt tag](http://i.imgur.com/ShPJosB.png)
![alt tag](http://i.imgur.com/hGesPpi.png)

The site visitors will be able to control the camera using their mouse:
* Left click and hold to orbit/rotate camera
* Middle click and hold to translate camera
* Middle scroll wheel to zoom in/out

Site visitors will also be able to change camera mode:
* Automatic orbit
* Stationary
* Pan and cut at random positions/angles

Target Widget Display & Controls (taken from SketchFab):
![alt tag](http://i.imgur.com/8c7yoaz.png)
![alt tag](http://i.imgur.com/KQCHgKJ.png)
![alt tag](http://i.imgur.com/xLSJ5w7.png)
![alt tag](http://i.imgur.com/eh0W2iO.png)

Site visitors will not be able to change the model, background, or settings. This way, site owners can display their original work as intended.

### Back-end

The back end is written in Node.js and the database uses MongoDB/Mongoose. The models themselves are saved on Amazon S3 web services.
