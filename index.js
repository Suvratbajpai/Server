const express = require("express");
const { connectMongoDB } = require("./connection")

const { logReqRes } = require("./middleware");

const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//Connection
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("MongoDB Connected"))

// Middleware - Plugin
   app.use(express.urlencoded({ extended: false }));

   app.use(cookieParser()); // Add cookie-parser middleware

   app.use(logReqRes("log.txt"));


// Routes
app.use("/user",userRouter)

// Example usage in a route
app.get("/set-cookie", (req, res) => {
    // Set a cookie
    res.cookie("myCookie", "cookieValue", { maxAge: 900000, httpOnly: true });
    res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {
    // Get a cookie
    const myCookie = req.cookies.myCookie;
    res.send(`Value of myCookie: ${myCookie}`);
});

app.get("/clear-cookie", (req, res) => {
    // Clear a cookie
    res.clearCookie("myCookie");
    res.send("Cookie has been cleared");
});


app.listen(PORT, () => {
    console.log(`Server Started at PORT : ${PORT}`);
});
