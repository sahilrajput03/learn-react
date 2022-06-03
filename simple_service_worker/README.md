# Readme

Source: [Intro To Service Workers & Caching
@Traversy Media](https://www.youtube.com/watch?v=ksXwaWHCW6k&t=1587s)

**Testing guide**

You must add your host pc's addess with port to `unsafely-treat-insecure-origin-as-secure` the target device which you are using to test your website with service worker!
[Source Stackoverflow Answer](unsafely-treat-insecure-origin-as-secure)

**Important**

When using _live-server_ the browser _only_ installs the Service_Worker (i.e., executes `sw_cached_pages.js` file) when that file is changed.

**Important browser tools for service worker developemnt**

- ![](https://i.imgur.com/xNJT55p.png)
- Force update Service_Worker on page reload (3)
- Trigger offiline capabilities via service worker (4)
  ![](https://i.imgur.com/7lYKxwd.png).

- When the file is run, the time for cached pages is updated. ![](https://i.imgur.com/iOBUIiW.png)
