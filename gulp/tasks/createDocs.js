module.exports = function () {
	// $.gulp.task('createDocs', function () {
	// 	return $.gulp.src('build/**/*').pipe($.gulp.dest('docs'));
	// });
	$.gulp.task('createDocs', function () {
		return $.gulp.src('build/**/*').pipe($.gulp.dest('docs'));
	});
};
