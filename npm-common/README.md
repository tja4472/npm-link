# Setup
Clone from ??????

## Setup npm-common. 
Goto npm-common folder.
```
npm install
typings install
tsc
npm link
```
## Setup ionic-app.
Goto ionic-app folder.
```
npm install
typings install
npm link npm-common
ionic serve
```
## Notes
Initially created Ionic project using blank template
```
ionic start myApp blank --v2
```

Unchanged gulpfile gave error.

‘import’ and ‘export’ may appear only with ‘sourceType: module’ 
https://forum.ionicframework.com/t/import-and-export-may-appear-only-with-sourcetype-module/47539/5

Fixed by editing gulpfile.js:
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