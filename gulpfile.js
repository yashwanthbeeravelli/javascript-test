const gulp = require('gulp');
const sourcemap = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const stringify = require('stringify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulpif = require('gulp-if');

const ENV = process.env.NODE_ENV;
const isLocal = ENV === 'local';

function script({ entries, outputFileName }) {
  return browserify({
    entries,
    debug: true,
  })
  .transform(stringify, {
    appliesTo: { includeExtensions: ['.html'] },
    minigy: true,
  })
  .bundle()
  .pipe(source(outputFileName))
  .pipe(buffer())
  .pipe(gulpif(isLocal, sourcemap.init()))
  .pipe(gulpif(!isLocal, uglify()))
  .pipe(gulpif(isLocal, sourcemap.write('./')))
  .pipe(gulp.dest('public/js'));
}

gulp.task('watch', ['moveImages'], () => {
  gulp.watch('src/**/*.js', ['formApp', 'app']);
  gulp.watch('src/**/*.html', ['formApp', 'app']);
  gulp.watch('src/**/*.scss', ['style']);
  gulp.watch('src/images/**/*', ['moveImages']);
  gulp.watch('src/index.html', ['html']);
});

gulp.task('html', () => gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./public')));

gulp
  .task('app', () => script({
    entries: ['./src/js/app.js'],
    outputFileName: 'app.js',
  }));

gulp.task('style', () => gulp.src(['./src/scss/main.scss'])
  .pipe(gulpif(isLocal, sourcemap.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('> 1%'))
    .pipe(cleanCSS({ debug: true }, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulpif(isLocal, sourcemap.write()))
  .pipe(gulp.dest('./public/css')));

gulp.task('moveImages', () => gulp.src('./src/images/**/*')
  .pipe(gulp.dest('./public/images')));

gulp.task('all', ['style', 'app', 'moveImages', 'html']);
