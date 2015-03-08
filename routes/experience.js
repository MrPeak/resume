/*
 * GET experience listing.
 */

exports.index = function(req, res){
  res.renderPjax("experience", { title: "Experience" });
};