const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'sprite:dev', 'images:dev', 'fonts:dev', 'files:dev', 'php:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'sprite:docs', 'images:docs', 'fonts:docs', 'files:docs', 'php:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);
