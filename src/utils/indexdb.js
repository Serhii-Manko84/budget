const html5rocks = {};
const DB_VERSION = 1;
const DB_NAME = "budget";

html5rocks.indexedDB = {};
html5rocks.indexedDB.db = null;

html5rocks.indexedDB.onerror = function (e) {
  console.log(e);
};

function open() {
  return new Promise(function (resolve, reject) {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // We can only create Object stores in a versionchange transaction.
    request.onupgradeneeded = function (e) {
      const db = e.target.result;

      // A versionchange transaction is started automatically.
      e.target.transaction.onerror = html5rocks.indexedDB.onerror;

      if (db.objectStoreNames.contains(DB_NAME)) {
        db.deleteObjectStore(DB_NAME);
      }

      db.createObjectStore(DB_NAME, { keyPath: "id" });
    };

    request.onsuccess = function (e) {
      html5rocks.indexedDB.db = e.target.result;
      resolve();
    };

    request.onerror = (e) => {
      reject(Error(e));
    };
  });
}

function addItem(item) {
  return new Promise((resolve, reject) => {
    const db = html5rocks.indexedDB.db;
    const trans = db.transaction([DB_NAME], "readwrite");
    const store = trans.objectStore(DB_NAME);

    const request = store.put(item);

    request.onsuccess = function (e) {
      resolve();
    };

    request.onerror = function (e) {
      reject("Error Adding: ", e);
    };
  });
}

function deleteItem(id) {
  return new Promise((resolve, reject) => {
    const db = html5rocks.indexedDB.db;
    const trans = db.transaction([DB_NAME], "readwrite");
    const store = trans.objectStore(DB_NAME);

    const request = store.delete(id);

    request.onsuccess = function (e) {
      resolve();
    };

    request.onerror = function (e) {
      reject("Error Adding: ", e);
    };
  });
}

function getItems() {
  return new Promise((resolve, reject) => {
    const db = html5rocks.indexedDB.db;
    if (!db) {
      reject(Error("No db"));
    }
    const trans = db.transaction([DB_NAME], "readwrite");
    const store = trans.objectStore(DB_NAME);

    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = function () {
      resolve(getAllRequest.result);
    };
  });
}

function getData(start, total) {
  return new Promise((resolve, reject) => {
    const db = html5rocks.indexedDB.db;
    const t = db.transaction([DB_NAME], "readonly");
    const store = t.objectStore(DB_NAME);
    const transactions = [];
    let hasSkippet = false;

    store.openCursor(null, "prev").onsuccess = function (event) {
      const cursor = event.target.result;
      if (!hasSkippet && start > 0) {
        hasSkippet = true;
        cursor.edvance(start);
        return;
      }
      if (cursor) {
        transactions.push(cursor.value);
        if (transactions.length < total) {
          cursor.continue();
        } else {
          resolve(transactions);
        }
      } else {
        resolve(transactions);
      }
    };
  });
}

const updateItem = (item) => addItem(item);

export { open, addItem, getItems, deleteItem, getData, updateItem };
