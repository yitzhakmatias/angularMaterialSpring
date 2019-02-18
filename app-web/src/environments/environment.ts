// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCEC6DxWhLg0F0DSG48O9sLfYN88fQN-3U",
    authDomain: "taskandnotes.firebaseapp.com",
    databaseURL: "https://taskandnotes.firebaseio.com",
    projectId: "taskandnotes",
    storageBucket: "taskandnotes.appspot.com",
    messagingSenderId: "1012336990774"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
