var indexedDB = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
if (indexedDB) {
  window.alert("IndexedDBが使えまます");
} else {
  window.alert("IndexedDBが使えません");
}
