const express = require("express");
const path = require("path");
const app = express();
var compression = require("compression");
var morgan = require("morgan");

// Middleware to redirect non-www to www
app.use((req, res, next) => {
  if (req.headers.host.startsWith("www.")) {
    const redirectUrl = `https://handymanexpert24.com`;
    res.redirect(301, redirectUrl);
  } else {
    // Redirect to the www version of the URL
    next();
  }
});
app.use(
  morgan(
    ":req[x-forwarded-for] :method :url :status :res[content-length] - :response-time ms"
  )
);
app.use(compression());
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "1d", // Adjust as per your caching needs
  })
);

app.use("*", (req, res) => {
  res.sendStatus(404);
});

// app.get('/robots.txt', (req, res) => {
//     res.render('index')
// })

// app.get('/about', (req, res) => {
//     res.render('about')
// })

// app.get('/service', (req, res) => {
//     res.render('service')
// })

// app.get('/contact', (req, res) => {
//     res.render('contact')
// })

app.listen(8080, "0.0.0.0", () => {
  console.log("App running on ", 8080);
});
