# Thesar

<img src="./assets/icon.png" alt="app icon" width="100" style="display: block; border-radius: 5px"/>
Simple thesaurus app written using React Native

## Libraries used

Tab Navigation:

- [React Navigation](https://github.com/react-navigation/react-navigation)

Material design:

- [React Native Paper](https://github.com/callstack/react-native-paper)

State managment:

- [Redux](https://github.com/reduxjs/redux)
- [Redux persist](https://github.com/rt2zz/redux-persist)
- [Redux thunk](https://github.com/reduxjs/redux-thunk)

## Known Problems

At the time of writing, due to a [bug](https://github.com/callstack/react-native-paper/issues/3009) in React Native Paper library switching between dark/light theme causes crash most of the times.

## Installing

You can either install the apk from the releases section or build it yourself.
In case of the second variant you should have yarn, expo and eas-cli installed and configured, then you need to clone this repo and run `yarn install` to install all the dependencies and finally run `eas build -p android --profile preview`.
