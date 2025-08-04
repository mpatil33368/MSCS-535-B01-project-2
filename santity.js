const xss = require('xss');

app.post('/submit-comment', (req, res) => {
  const cleanComment = xss(req.body.comment); // sanitize input
  saveCommentToDatabase(cleanComment);
  res.redirect('/');
});
