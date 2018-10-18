const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// Pull in the TypeScript Configuration
const tsProject = ts.createProject('tsconfig.json');

// A task to compile TypeScrips files to dist as JS
gulp.task('scripts', () => {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

// A task to watch for changes on TypeScript files in the src directory
gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

// A task for compiling assets as needed (it's an API, so only JSON at the moment)
gulp.task('assets', () => {
  return gulp.src(JSON_FILES).pipe(gulp.dest('dist'));
});
