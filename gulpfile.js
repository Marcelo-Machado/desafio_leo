var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css'); 
var concat = require('gulp-concat');
var autoPrefixer = require('gulp-autoprefixer'); 
var javaScriptMin = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

//----- Reduzir imagens
gulp.task('reduzir-image', function(){
	return gulp.src("imagem/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("gulp/imagem/"))		
});


//----- Reduzir CSS
gulp.task('reduzir-css', function(){
	return gulp.src('css/**/*.css')          
		.pipe(autoPrefixer('last 7 version'))		
		.pipe(minifyCSS())
		//.pipe(concat('cssConcatenado.css'))
		.pipe(gulp.dest('gulp/css/'))
});


//----- Reduzir JavaScript
gulp.task('reduzir-js', function(){
	return gulp.src('js/**/*.js')          
		.pipe(javaScriptMin())
		//.pipe(concat('jsConcatenado.css'))
		.pipe(gulp.dest('gulp/js/'))
});


//----- Reduzir Html
gulp.task('reduzir-html', function(){
	return gulp.src('*.html')          
		.pipe(htmlmin({
			removeComments:true, // Remover comentários em HTML
			removeScriptTypeAttributes:true, // Remova type="text/javascript"das scripttags.
			removeStyleLinkTypeAttributes:true, // Remova type="text/css"de stylee linktags.
			collapseWhitespace:true // Remover espaço em branco minificando
		}))
		.pipe(gulp.dest('gulp/'))
});


//----- Tarefa Padrão
gulp.task('default', gulp.parallel('reduzir-image','reduzir-css','reduzir-js','reduzir-html'), function(){
	gulp.watch("imagem/**/*", ['reduzir-image']);
	gulp.watch('css/**/*.css', ['reduzir-css']);
	gulp.watch("js/**/*.js", ['reduzir-js']);
	gulp.watch('*.html', ['reduzir-html']);
});







