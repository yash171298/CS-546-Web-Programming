const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const configRoutes = require('./routes');
app.use(cookieParser());

const static = express.static(__dirname + '/public');

const exphbs = require('express-handlebars');

const handlebarsInstance = exphbs.create({
  defaultLayout: 'main',
  // Specify helpers which are only registered on this instance.
  helpers: {
    asJSON: (obj, spacing) => {
      if (typeof spacing === 'number')
        return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

      return new Handlebars.SafeString(JSON.stringify(obj));
    }
  }
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
  // If the user posts to the server with a property called _method, rewrite the request's method
  // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
  // rewritten in this middleware to a PUT route
  if (req.body && req.body._method) {
    req.method = req.body._method;
    delete req.body._method;
  }

  // let the next middleware run:
  next();
};

app.use;
app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
// Middlewares:

/* 
req is the request object, just like how we have access to the request in our routes
 res is the response object, just like how we have access to the response in our routes
 next is a callback that will call the next middleware registered, or proceed to routes if none exist.
 If we do not call next(), we need to make sure we send a response of some sort or it will poll forever!
*/

// 1. One which will count the number of requests made to your website
let totalRequests = 0;
app.use(
  session({
    name: 'AuthCookie',
    secret: "Leo messi is best footballer",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 60000 }
    
  })
);
app.use('/private', (req, res, next) => {
  console.log(req.session.id);
  if (!req.session.user) {
    return res.status(403).render('userpages/login',{title:"Login", error: "User is not logged in You must login"});
  } else {
    next();
  }
});

app.use('/login', (req, res, next) => {
  if (req.session.user) {
    return res.redirect('/private');
  } else {
    //here I',m just manually setting the req.method to post since it's usually coming from a form
    req.method = 'POST';
    next();
  }
});

app.use(async (req, res, next) => {
  totalRequests++;
  console.log(`There have been ${totalRequests} requests made to the server method on ${req.cookies.lastAccessed} ${req.method}`);
  next();
});

// 2. One which will count the number of requests that have been made to the current path
const pathsAccessed = {};

app.use(async (req, res, next) => {
  if (!pathsAccessed[req.path]) pathsAccessed[req.path] = 0;

  pathsAccessed[req.path]++;

  console.log(
    `There have now been ${pathsAccessed[req.path]} requests made to ${
      req.path
    }`
  );
  next();
});

// 3.  We will check if the request is an odd or even request number we will then add a field to the req object
app.use(async (req, res, next) => {
  if (totalRequests % 2 === 0) {
    req.isEven = true;
  } else {
    req.isOdd = true;
  }

  next();
});

//4. We will read if the request is odd or even and set the pun field on the req depending on which it is
app.use(async (req, res, next) => {
  if (req.isEven) {
    req.pun = 'Someone is looking to get even.  ';
  }

  if (req.isOdd) {
    req.pun = "This is an odd request that doesn't make me feel comfortable  ";
  }
  next();
});

// 5. Log the pun that was made
app.use(async (req, res, next) => {
  console.log(req.pun);
  next();
});

// 6. One which will deny all users access to the /admin path.
app.use('/admin', async (req, res, next) => {
  console.log("I'm in the admin middleware");
  return res.status(403).json({ error: '403: Forbidden' });
  next();
});

// 7.  One which will change the request method for a route before it hits the route or next middleware
app.use('/posts', async (req, res, next) => {
  console.log(req);

  if (req.method == 'GET') {
    req.method = 'PUT';
  }
  next();
});

// 8. One which will log the last time the user has made a request, and store it in a cookie using the cookie-parser.
app.use(async (req, res, next) => {
  console.log('The request has all the following cookies:');
  console.log(req.cookies);
  if (req.cookies.lastAccessed) {
    console.log(
      'This user last accessed the site at ' + req.cookies.lastAccessed + req.method
    );
  } else {
    console.log('This user has never accessed the site before');
  }

  // THIS SECTION WILL EXPIRE THE COOKIE EVERY 5th request
  if (totalRequests % 5 === 0) {
    console.log('now clearing the cookie');

    const anHourAgo = new Date();
    anHourAgo.setHours(anHourAgo.getHours() - 1);

    // invalidate, then clear so that lastAccessed no longer shows up on the
    // cookie object
    res.cookie('lastAccessed', '', { expires: anHourAgo});
    res.clearCookie('lastAccessed');

    next();
    return;
  }

  const now = new Date();
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 1);

  // Providing a third parameter is optional, but allows you to set options for the cookies.
  // see: http://expressjs.com/en/api.html#res.cookie
  // for details on what you can do!
  res.cookie('lastAccessed', now.toString(), { expires: expiresAt});
  console.log(now.toString());
  res.cookie('current',new Date().toUTCString())
  console.log(new Date().toUTCString())
  res.cookie('Method',req.method)
  console.log(req.method)
  res.cookie('Yash', 'Patole');
  if(!req.session.user){
    res.cookie('User','NON-authenticated user');
    console.log("Non-Authenticated User")
  }
  else{
    res.cookie('User', 'Authenticated');
    console.log("Authenticated User")
  }
  next();
});

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});