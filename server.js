const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// my import of routes
const indexRoutes = require("./routes/professional");
// const nameRoutes = require("./routes/name");`

app.use("/professional", indexRoutes);
app.use("/images/${file}", (req, res) => {
    res.sendFile(req.params.file)
})
// app.use("/name", nameRoutes.router);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});