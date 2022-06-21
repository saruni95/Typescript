To run ts file use "tsc app.ts"

1. Install node
2. npm init
3. Execute "npm install --save-dev lite-server"
4. At the package.json add the script: "start": "lite-server"
5. Execute npm start
6. Update app.ts using "tsc app.ts" (it updates and compiles "app.js")

Don't open "app.js" and "app.ts" at the same time
To open on watch mode use tsc app.ts --watch (or simply --w)
To run all the ts project use "tsc --init". It creates a "tsconfig.json"
Tsc runs the whole project. Also has the watch mode.
