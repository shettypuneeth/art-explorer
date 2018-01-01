# Art Explorer
React Native app that lets you explore the art works from [`Harvard Art Museum`](https://www.harvardartmuseums.org/)

##Demo
![](./demo-android.gif)

## Getting Started

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/shettypuneeth/art-explorer.git <my-project-name>
$ cd <my-project-name>
# Install the dependencies
$ yarn install
# OR
$ npm install
```

### Get the key for harvard museum API service.
```bash
Get an API key from : https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform

Then, open up app/config/environment.js file and update the API_KEY with your api key.
```

## Run the app

```bash
# Open the terminal in the root folder and run:
$ npm start

# Open the respective Android or iOS projects in Android Studio or XCode and run the project.
```


## Acknowledgments
1. [`Harvard Art Museum`](https://www.harvardartmuseums.org/) for all the artworks data.
2. [`react-native-parallax-scroll-view`](https://github.com/i6mi6/react-native-parallax-scroll-view) from [`Alexander Vitanov`](https://github.com/i6mi6)
3. [`react-navigation`](https://reactnavigation.org/) for routing.