# Getting Started with Snippet React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This React App will capture snippets and display them in the browser.

The user can categorize the topic along with its title. It also allows capturing notes associated with that title.

App will show how a front end can be used to display minimal fields and store them internally.

User can also filter the notes based on keyword entered.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Docker

Create a file 'Dockerfile' in the same project directory.

### Dockerfile

        1 # pull official base image
        2 FROM node:13.12.0-alpine
        3
        4 # set working directory
        5 WORKDIR /snippet-react
        6
        7 # add `/app/node_modules/.bin` to $PATH
        8 ENV PATH /snippet-react/node_modules/.bin:$PATH
        9
        10 # install app dependencies
        11 COPY package.json ./
        12 COPY package-lock.json ./
        13 RUN npm install --silent
        14 RUN npm install react-scripts@3.4.1 -g --silent
        15
        16 # add app
        17 COPY . ./
        18
        19 # start app
        20 CMD ["npm", "start"]
        21

### Build snippet-react Image 

Remain in same directory and run the build commmand by providing the name of image.

It will take few minutes and complete

        ~/project_dir$ docker build -t sample:snippet-react .

### Run Image

        ~/project_dir$ docker run \
        -it \
        --rm \
        -v ${PWD}:/snippet-react \
        -v /snippet-react/node_modules \
        -p 4000:3000 \
        -e CHOKIDAR_USEPOLLING=true \
        sample:snippet-react

        --rm will remove image after running

        -p 4000:3000   means port 4000 is available for external user to browse

Browse to Docker container where we can access the app.

        http://localhost:4000

### Inspect Docker container

Docker Container when being run can be checked for details. In this case we can see the image name 

        $ docker container ls
        CONTAINER ID   IMAGE                                 COMMAND                  CREATED         STATUS         PORTS                                                                                                                                  NAMES
        843b1b8348e4   sample:snippet-react                  "docker-entrypoint.s…"   2 minutes ago   Up 2 minutes   0.0.0.0:4000->3000/tcp, :::4000->3000/tcp                                                                                              exciting_dewdney

We can see the name exciting_dewdney associated with this container.

        $ docker inspect exciting_dewdney | less



