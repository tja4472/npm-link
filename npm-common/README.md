# Setup for Ionic 2
```
npm install

typings install

npm link
```

Create Ionic project using blank template
```
ionic start myApp blank --v2

cd myApp

npm link library
```
Edit gulpfile.js
```
gulp.task('watch', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts'],
    function(){
      gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
      gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
      buildBrowserify({ watch: true,
         browserifyOptions: {
          extensions: ['.js', '.ts']
        } }).on('end', done);
    }
  );
});
```
Edit app.ts
```typescript

import { TranslateServiceAAA } from 'library';

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    let a = new TranslateServiceAAA();
    a.helloWorld(); 
  }
}
```

Run.
```
ionic serve
```




Link used:

https://medium.com/@OCombe/how-to-publish-a-library-for-angular-2-on-npm-5f48cdabf435#.tjfjau6ih


### ‘import’ and ‘export’ may appear only with ‘sourceType: module’ 
https://forum.ionicframework.com/t/import-and-export-may-appear-only-with-sourcetype-module/47539/5