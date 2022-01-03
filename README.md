# Thesar

<img src="./assets/icon.png" width="100" style="display: block"/>
Simple thesaurus app written with React Native

## Libraries used

Tab navigation:

- [React Navigation](https://github.com/react-navigation/react-navigation)

Material design:

- [React Native Paper](https://github.com/callstack/react-native-paper)

State managment:

- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- [Redux Persist](https://github.com/rt2zz/redux-persist)

## Known problems

Due to a [bug](https://github.com/callstack/react-native-paper/issues/3009) in React Native Paper library, switching between dark/light theme causes crash most of the times.

## Installing

You can either install the apk from the releases section or build it yourself.
To build it from source you need to have yarn, expo and eas-cli installed and configured. Clone the repo and run `yarn install` to install all the dependencies and then run `eas build -p android --profile preview` to build the apk.
