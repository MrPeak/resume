
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.renderPjax('index', { title: "Mrpeak's resume" });
};