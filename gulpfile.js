const gulp = require("gulp");
const jshint = require("gulp-jshint");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const dirPath = "./development";
gulp.task("hello", function(done) {
  console.log("Hello, Karolina");
  done();
});
gulp.task("jshint", function() {
  return gulp
    .src(dirPath + "/js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter());
});
gulp.task("sass", function() {
  return gulp
    .src(dirPath + "/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirPath + "/css"));
});
gulp.task("watch", function() {
  gulp.watch(dirPath + "/scss/**/*.scss", gulp.series("sass"));
  console.log(`jestem tutaj ${dirPath} i jestem z Tobaum`)
  // gulp.watch(dirPath + "/js/**/*.js", gulp.series("jshint"));
});