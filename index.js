const nodeList = require('./nodes.js');

var visited = {};
var unvisited = {};

for (var key in nodeList.obj) if (nodeList.obj.hasOwnProperty(key)) {
  key = parseInt(key);
  unvisited[key] = nodeList.obj[key];
  unvisited[key].dist = Infinity;
}

//------------------------//

const start = 20;
const end = 12;

getPath(start, end);

//------------------------//

function getPath(s, e) {
  unvisited[s].dist = 0;
  next(s);

  function next(n) {
    if (n == e) return console.log('Reached end!');

    let opts = {};
    let dists = [];
    console.log('N: ' + n);

    unvisited[n].paths.forEach(sibling => {
      if (visited[sibling]) return;
      let dist = unvisited[n].dist + getDist(n, sibling);
      unvisited[sibling].dist = dist;
      opts[dist] = sibling;
      dists.push(parseInt(dist));
    });

    visited[n] = unvisited[n];
    delete unvisited[n];

    if (dists.length != 0) {
      console.log('NEXT (' + Math.min(...dists) + ')');
      return next(opts[Math.min(...dists)]);
    }
    return console.log('Hit dead end!');
  }
  console.log(unvisited)
}

function getDist(n1, n2) {
  return Math.abs(node(n1).x-node(n2).x) + Math.abs(node(n1).y-node(n2).y);
}

function node(id) {
  return nodeList.obj[id] || null;
}

/*

function shortestDist(s, e) {
  var totalDist = 0;
  var pointsUsed = [];
  next(s);

  function next(point) {
    const [closest, dist] = closestPoint(point);
    totalDist+=dist;
    pointsUsed.a
    if (closest == e) return;
  }

  return totalDist;
}

function closestPoint(point) {
  var close = {point: -1, dist: 0}
  pointsArr.forEach(nxtPoint => {
    if (point == nxtPoint.id) return;
    console.log(nxtPoint);

    let dist = getDist(point, nxtPoint.id);
    if (close.point==-1 || dist < close.dist) close.point = nxtPoint.id, close.dist = dist;
  });
  return [close.point, close.dist];
}

function getDist(p1, p2) {
  return Math.abs(points[p1].x-points[p2].x) + Math.abs(points[p1].y-points[p2].y);
}

function getPointAt(x, y) {
  pointsArr.forEach(point => {
    if (point.x==x && point.y==y) return key;
  });
  return null;
}

//------------------------//

//console.log(getDist(1, 11));
//console.log(getPointAt(15, 13));
//console.log(closestPoint(7));

*/
