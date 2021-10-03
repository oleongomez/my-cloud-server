const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const usersRouter = require('./routes/users.js')
const dataRouter = require('./routes/data.js')
const writeRouter = require('./routes/add_user.js')
const deleteRouter = require('./routes/delete_user.js')
const modifyRouter = require('./routes/modify_user.js')
const searchRouter = require('./routes/search_user.js')
var app = express();

const { fileURLToPath } = require('url');
const { dirname } = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/data', dataRouter);
app.use('/add-user', writeRouter);
app.use('/delete-user', deleteRouter);
app.use('/modify-user', modifyRouter);
app.use('/search-user', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
