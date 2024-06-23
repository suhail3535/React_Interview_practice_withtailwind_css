<!-- <================Node.js==============> -->
Q1: What is Node.js and why is it used?
A1: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for building scalable network applications because it uses an event-driven, non-blocking I/O model which makes it lightweight and efficient.
<!-- <-------------------------->
Q2: What is the Event Loop in Node.js?
A2: The Event Loop is a mechanism in Node.js that handles asynchronous operations. It allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.
<!-- <-------------------------->

Q3: How does Node.js handle concurrency?
A3: Node.js handles concurrency using a single-threaded event loop. It can manage multiple connections concurrently without creating multiple threads, which makes it efficient in handling I/O operations.
<!-- <-------------------------->

Q4: What are streams in Node.js?
A4: Streams are objects that allow reading or writing of data in a continuous flow. There are four types of streams in Node.js: Readable, Writable, Duplex, and Transform. They provide a way to work with large amounts of data efficiently.
<!-- <-------------------------->

Q5: What is npm?
A5: npm (Node Package Manager) is the default package manager for Node.js. It helps manage and share packages of code, and it allows users to install, update, and uninstall Node.js packages.
<!-- <-------------------------->

Q6: How do you handle asynchronous operations in Node.js?
A6: Asynchronous operations in Node.js can be handled using callbacks, promises, and async/await.
<!-- <-------------------------->

Q7: What is a callback in Node.js?
A7: A callback is a function passed as an argument to another function. It is invoked after the completion of a given task to avoid blocking the main thread.
<!-- <-------------------------->

Q8: What are some common Node.js modules?
A8: Common Node.js modules include http, fs (file system), path, url, and events.
<!-- <-------------------------->

Q9: How do you create a simple HTTP server in Node.js?
A9:
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
<!-- <-------------------------->

Q10: What is the purpose of the package.json file in a Node.js project?
A10: The package.json file contains metadata about the project. It includes information like the project name, version, dependencies, scripts, and author information.
<!-- <-------------------------->

Q11: What is the difference between require and import in Node.js?
A11: require is used in CommonJS modules, while import is used in ES6 modules. CommonJS modules are the original Node.js module system, while ES6 modules are the modern JavaScript module standard.
<!-- <-------------------------->

Q12: What is the buffer module in Node.js?
A12: The buffer module is used to handle binary data directly in Node.js. It can be used to manipulate streams of binary data.
<!-- <-------------------------->

Q13: How can you improve the performance of a Node.js application?
A13: Performance can be improved by optimizing code, using asynchronous methods, caching data, using a load balancer, and profiling the application to find bottlenecks.
<!-- <-------------------------->

Q14: What is the role of the cluster module in Node.js?
A14: The cluster module allows you to create child processes (workers) that share the same server port. It helps in taking advantage of multi-core systems by creating multiple processes.
<!-- <-------------------------->

Q15: How do you handle exceptions in Node.js?
A15: Exceptions can be handled using try-catch blocks, the error event, or process-level event handlers like process.on('uncaughtException').
<!-- <-------------------------->

<!-- <============Express.js===========> -->
Q1: What is Express.js?
A1: Express.js is a web application framework for Node.js. It provides a robust set of features for building web and mobile applications, including routing, middleware, and templating.
<!-- <-------------------------->

Q2: How do you create a simple Express.js application?
A2:
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
<!-- <-------------------------->

Q3: What is middleware in Express.js?
A3: Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. They can execute code, modify the request and response objects, end the request-response cycle, and call the next middleware function.
<!-- <-------------------------->
Q4: How do you handle errors in Express.js?
A4:
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
Q5: What is the role of the next function in Express.js middleware?
A5: The next function is used to pass control to the next middleware function in the stack. If next is not called, the request will be left hanging.
<!-- <-------------------------->
Q6: How do you define routes in Express.js?
A6:
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});
<!-- <-------------------------->
Q7: How do you serve static files in Express.js?
A7:
app.use(express.static('public'));
This serves static files from the "public" directory.
<!-- <-------------------------->
Q8: How do you handle form data in Express.js?
A8: To handle form data, you need to use middleware like body-parser or the built-in express.urlencoded for parsing URL-encoded data.
app.use(express.urlencoded({ extended: true }));
app.post('/form', (req, res) => {
  res.send(`Hello, ${req.body.name}`);
});
<!-- <-------------------------->
Q9: How can you structure an Express.js application?
A9: An Express.js application can be structured by separating routes, controllers, models, and views into different directories. You can use modules to import these components into the main application file.
<!-- <-------------------------->

Q10: What is the purpose of the res.json method in Express.js?
A10: The res.json method sends a JSON response. It converts a JavaScript object into a JSON string and sends it to the client.
<!-- <-------------------------->

Q11: How do you use query parameters in Express.js?
A11:
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});
<!-- <-------------------------->
Q12: How do you handle file uploads in Express.js?
A12: File uploads can be handled using middleware like multer.

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded!');
});
<!-- <-------------------------->
Q13: How do you use template engines in Express.js?
A13:


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
<!-- <-------------------------->

Q14: How can you secure an Express.js application?
A14: Security can be improved by using middleware like helmet to set HTTP headers, validating input, sanitizing data, and using HTTPS.
<!-- <-------------------------->

Q15: How do you handle cookies in Express.js?
A15: Cookies can be handled using the cookie-parser middleware.
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/setcookie', (req, res) => {
  res.cookie('name', 'express').send('Cookie set');
});
<!-- <-------------------------->

<!-- <==============MongoDB====================> -->
Q1: What is MongoDB?
A1: MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance.
<!-- <-------------------------->

Q2: What is the difference between SQL and NoSQL databases?
A2: SQL databases are relational and use structured query language for defining and manipulating data. They are table-based. NoSQL databases, like MongoDB, are non-relational and store data in a variety of ways (document-based, key-value pairs, graph formats). NoSQL databases are designed for horizontal scaling and can handle unstructured data more effectively.
<!-- <-------------------------->

Q3: What is a document in MongoDB?
A3: A document is a record in MongoDB and is the basic unit of data. It is stored in a BSON format (binary JSON) and consists of field-value pairs.
<!-- <-------------------------->

Q4: How do you create a collection in MongoDB?
A4:
db.createCollection("myCollection");
<!-- <-------------------------->

Q5: How do you insert a document into a MongoDB collection?
A5:
db.myCollection.insertOne({ name: "John", age: 30 });
<!-- <-------------------------->

Q6: How do you find documents in MongoDB?
A6:
db.myCollection.find({ age: { $gt: 25 } });
<!-- <-------------------------->

Q7: What are MongoDB indexes and why are they important?
A7: Indexes in MongoDB are used to improve the performance of search queries. They allow the database to quickly locate and access the data rather than scanning the entire collection.
<!-- <-------------------------->

Q8: How do you create an index in MongoDB?
A8:
db.myCollection.createIndex({ name: 1 });
<!-- <-------------------------->

Q9: What is the Aggregation Framework in MongoDB?
A9: The Aggregation Framework is used for processing data and returning computed results. It involves using a pipeline of stages, where each stage performs an operation on the input documents and passes the results to the next stage.
<!-- <-------------------------->

Q10: How do you update documents in MongoDB?
A10:
db.myCollection.updateOne({ name: "John" }, { $set: { age: 31 } });
<!-- <-------------------------->

Q11: How do you delete documents in MongoDB?
db.myCollection.deleteOne({ name: "John" });
<!-- <-------------------------->

Q12: What is a replica set in MongoDB?
A12: A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability. It consists of a primary node and multiple secondary nodes.
<!-- <-------------------------->

Q13: What is sharding in MongoDB?
A13: Sharding is a method for distributing data across multiple machines. It helps in scaling out by partitioning the data into smaller chunks and distributing them across shards.
<!-- <-------------------------->

Q14: How do you back up and restore data in MongoDB?
A14: You can back up data using mongodump and restore it using mongorestore.
<!-- <-------------------------->

Q15: What is the purpose of the ObjectId in MongoDB?
A15: The ObjectId is a unique identifier for documents in a MongoDB collection. It is a 12-byte identifier consisting of a timestamp, machine identifier, process ID, and a random counter.
<!-- <-------------------------->

<!-- <====================Mongoose=============> -->
Q1: What is Mongoose?
 Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js It provides a schema-based solution to model your application data and includes built-in type casting, validation, query building, and business logic hooks.
<!-- <-------------------------->

Q2: How do you define a schema in Mongoose?

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
<!-- <-------------------------->

Q3: How do you connect to MongoDB using Mongoose?
A3:
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
Q4: How do you perform CRUD operations with Mongoose?
A4:
// Create
const user = new User({ name: 'John Doe', email: 'john@example.com', password: 'password' });
user.save();

// Read
User.find({}, (err, users) => {
  if (err) throw err;
  console.log(users);
});

// Update
User.findByIdAndUpdate(userId, { name: 'Jane Doe' }, (err, user) => {
  if (err) throw err;
  console.log(user);
});

// Delete
User.findByIdAndRemove(userId, (err) => {
  if (err) throw err;
  console.log('User deleted');
});
<!-- <-------------------------->
Q5: How do you handle validation in Mongoose?
A5:
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 }
});
<!-- <-------------------------->

Q6: What are Mongoose middleware hooks?
A6: Middleware hooks in Mongoose are functions that run at specific stages of a pipeline, such as during document validation or save operations. They can be pre or post hooks.

userSchema.pre('save', function(next) {
  console.log('A user is about to be saved.');
  next();
});
<!-- <-------------------------->
Q7: How do you populate references in Mongoose?
A7:
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

Post.find().populate('author').exec((err, posts) => {
  if (err) throw err;
  console.log(posts);
});
<!-- <-------------------------->
Q8: How do you create a virtual property in Mongoose?
A8:
userSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});
<!-- <-------------------------->
Q9: How do you handle schema methods in Mongoose?
A9:
userSchema.methods.sayHello = function() {
  return `Hello, my name is ${this.name}`;
};
<!-- <-------------------------->
Q10: How do you create and use static methods in Mongoose?
A10:
userSchema.statics.findByEmail = function(email, cb) {
  return this.find({ email: email }, cb);
};
<!-- <-------------------------->
Q11: How do you create indexes in Mongoose?
A11:
userSchema.index({ email: 1 });
<!-- <-------------------------->

Q12: How do you use the lean method in Mongoose?
A12:
User.find().lean().exec((err, users) => {
  if (err) throw err;
  console.log(users);
});
<!-- <-------------------------->
Q13: How do you handle schema types in Mongoose?
A13:
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  createdAt: { type: Date, default: Date.now }
});
<!-- <-------------------------->
Q14: How do you use the updateOne method in Mongoose?
A14:
User.updateOne({ email: 'john@example.com' }, { name: 'John Doe' }, (err, res) => {
  if (err) throw err;
  console.log(res);
});
<!-- <-------------------------->
Q15: How do you handle errors in Mongoose?
A15:
User.findById(userId, (err, user) => {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log(user);
  }
});