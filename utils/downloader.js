const request = require("request");

export default (req, res) => {
  const filePath = req.query.filename;     

  const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

  res.setHeader("content-disposition", "attachment; filename=" + fileName);

  request
    .get(process.env.REMOTE_URL + filePath)
    .on("error", function(err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 not found</h1>");
      res.end();
      return;
    })
    .pipe(res);
};