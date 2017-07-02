var gulp = require("gulp");
var babel = require("gulp-babel");
gulp.task("es2015", function(){
   // 匹配所有的文件
   return gulp.src("src/**/*.js")
          .pipe(babel())
          .pipe(gulp.dest("dist"))
});

gulp.task("default", ["es2015"])
