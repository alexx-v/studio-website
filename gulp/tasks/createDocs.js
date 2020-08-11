module.exports = function () {
	$.gulp.task('copy', function () {
		return $.gulp.src('build/**/*').pipe($.gulp.dest('docs'));
	});
};
