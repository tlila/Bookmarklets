var indexedDB = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
if (indexedDB) {
  window.alert("IndexedDBが使えまます");
} else {
  window.alert("IndexedDBが使えません");
}

var html5rocks = {};
html5rocks.indexedDB = {};
html5rocks.indexedDB.db = null;
html5rocks.indexedDB.open = function() {
  var version = 1;
  var request = indexedDB.open("todos", version);

  request.onsuccess = function(e) {
    html5rocks.indexedDB.db = e.target.result;
    // Do some more stuff in a minute
  };

  request.onerror = html5rocks.indexedDB.onerror;
};
