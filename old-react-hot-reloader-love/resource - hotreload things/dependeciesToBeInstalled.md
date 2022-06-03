npm install react-hot-loader
# Above is used in app.js component.
https://github.com/gaearon/react-hot-loader

npm install @hot-loader/react-dom 
# Above is used in webpack file in alias object in react-scripts.

****************
#Below packages are required, only if you want to use external overrides.js file to replace webpacks for the hot-loader/react-dom purpose.Since, my recommended appoach is to use the edit internal webpack.config file in react-scripts package, so we don't require below packages at all.

# npm install react-app-rewire-hot-loader 
https://github.com/cdharris/react-app-rewire-hot-loader

# npm install react-app-rewired
