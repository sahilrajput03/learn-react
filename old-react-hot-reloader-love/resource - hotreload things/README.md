## Anyhing in this folder is to supress the warning in chrome developers that says-

`React-Hot-Loader:  react-dom patch is not detected. React 16.6+ features may not work.}}  with hot-reloader.`

***

### Solution 1 (Recommended):

Simple approach is to add below line to node_modules/react-scripts/config/webpack.config.js file **as a property** alias object[search for this in the file]:

```js
 ...(isEnvDevelopment && { 'react-dom': '@hot-loader/react-dom' }),
/*Above line supresses warning {{ React-Hot-Loader:  react-dom patch is not detected. React 16.6+ features may not work.}}  with hot-reloader. */
```
in the alias object.

So, finally the alias object would look like this:

![image-20200716143706624](https://sahilrajput03.github.io/more/.imgs_typora/image-20200716143706624.png)

***

### Solution 2:

 Make explicit overrides.js file for webpack without altering react-scripts config file directly.
For this you may look into "other simplistics" folder.