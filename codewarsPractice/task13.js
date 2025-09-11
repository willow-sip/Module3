"use strict;" 
//Find all javascript files
function findAllJavascriptFiles(folder, callback) {
  const result = [];
  let pending = 1;

  function done() {
    pending--;
    if (pending === 0) {
      callback(result);
    }
  }

  folder.size((len) => {
    for (let i = 0; i < len; i++) {
      pending++;
      folder.read(i, (entry) => {
        if (typeof entry === "string") {
          if (entry.endsWith(".js")) {
            result.push(entry);
          }
        } else {
          findAllJavascriptFiles(entry, (subResult) => {
            result.push(...subResult);
          });
        }
        done();
      });
    }
    done();
  });
}