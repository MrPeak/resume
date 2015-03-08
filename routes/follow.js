/*
 * GET follow listing.
 */

exports.index = function(req, res){
  res.renderPjax("follow", { title: "Follow Me" });
};