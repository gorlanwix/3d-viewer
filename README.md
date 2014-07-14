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

![alt tag](http://i.imgur.com/FNbHX8x.png)
````````````````````````````````````````````````````````````````````````````````````````````````
![alt tag](http://i.imgur.com/iMSrvhb.png)
![alt tag](http://i.imgur.com/yJhHSkd.png)
![alt tag](http://i.imgur.com/h2rY5PQ.png)
![alt tag](http://i.imgur.com/w7zSTTM.png)

The site visitors will be able to control the camera using their mouse:
* Left click and hold to orbit/rotate camera
* Middle click and hold to translate camera
* Middle scroll wheel to zoom in/out

Site visitors will also be able to change camera mode:
* Automatic orbit
* Stationary
* Pan and cut at random positions/angles

Target Widget Display & Controls (taken from SketchFab):
![alt tag](http://i.imgur.com/yI9MCKV.png)
![alt tag](http://i.imgur.com/loQI95O.png)
![alt tag](http://i.imgur.com/sG0VWRU.png)
![alt tag](http://i.imgur.com/cwtId1z.png)

Site visitors will not be able to change the model, background, or settings. This way, site owners can display their original work as intended.

### Back-end

The back end is written in Node.js and the database uses MongoDB/Mongoose. The models themselves are saved on Amazon S3 web services.
