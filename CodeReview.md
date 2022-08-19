## NodeApp
- All code is in single file
- Use [MVC pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) to divide code into different modules
  - abstract out controllers separately
  - abstract out code related to database connections into separate module
  - abstract out models (db tables)
- Move constants into a separate file
- remove unused code
- Use logger with various levels (debug, info, warn, error) in place of console.log
- ```if(err) throw err``` will throw the error to frontend. Add exception handling.
- have standard objects for success and error responses
- no need to send "statusCode" field in response body, set appropirate http response status instead



## ReactApp
- Good use of React Router :heavy_check_mark:
- Forms are a complex part of React, you've done a good job of using them
- Could've abstracted out a common component for "table" and re-used it everywhere
- remove unused code: for e.g. fetchTable.js isn't being used, also a lot of commented code
- Use '===' in javascript in place of '=='
- add logger in place of console.log
- Use '[axios](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/#:~:text=To%20send%20data%2C%20fetch(),stringify%20method)' library instead of 'fetch API' to make API calls
- HomePage.js, InvDashboard.js: Handle the cases when API returns an error
- In most of your use cases, using a class based component with APIs being called in ```componentDidMount``` would've been useful
- [JSX code is actually Javascript (and not html)](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgfAUMD05pA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.18.12&externalPlugins=&assumptions=%7B%7D). Format it properly.