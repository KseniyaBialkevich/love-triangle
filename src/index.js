/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  preferences = preferences || [];
  // your implementation
  return calcLoveTriangles(preferences);
};

var calcLoveTriangles = function(preferences) {
  var p = preferences;
  var triangles = [];

  for (var i=0; i<preferences.length; i++) {
    var fl = p[i];
    var sl = p[p[i] - 1];
    var tl = p[p[p[i] - 1] - 1];
    var thirdLove = tl - 1;
    if (thirdLove == i) triangles.push([fl, sl, tl].sort());
  }

  var res = new Map();
  for (var i=0; i<triangles.length; i++) {
    var triangle = triangles[i].join("");
    var count = res.get(triangle);

    if (count) {
      res.set(triangle,++count);
    }
    else {
      res.set(triangle,1);
    }
  }

  var cnt = 0;
  for(t of res) {
    if (t[1] > 1) cnt++;
  }

  return cnt;
}
// calcLoveTriangles([2, 3, 1]);
// calcLoveTriangles([2, 3, 1, 5, 6, 4]);


