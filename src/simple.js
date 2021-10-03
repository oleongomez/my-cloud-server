var path = require("path");
var lowdb = require("lowdb");

const FileSync = require("lowdb/adapters/FileSync");
var fileURLToPath = require("url");
var sign = require("crypto");

// Use JSON file for storage

const init_db = () => {
  const file = path.join(__dirname, "db.json");
  const adapter = new FileSync(file);
  return new lowdb(adapter);
}

const set_default_data = () => {
  console.log("set default data");
  console.log(`current user data: ${init_db().get("users").value()}`);
  init_db()
    .set("users", init_db().get("users").value() || [] )
    .write();
}

const read_all = () => {
  return [...init_db().get("users").value() ];
};

async function write(item) {
  console.log(`writing item ${{...item}}`);
  let new_users = [...init_db().get("users").value(), item]
  console.log(`new users: ${{...new_users}}`)
  await init_db()
    .set("users", new_users)
    .write();
  return true;
}

async function erase(item_id) {
  if (!exists(item_id)) return false;
  await init_db().get("users").remove({ name: item_id }).write();
  return true;
}

async function exists(item_id) {
  if (item_id === undefined) return false;
  let searched = init_db()
    .get("users")
    .value()
    .filter((data) => data.name === item_id);
  if (searched.length >= 1) return true;
  return false;
}

function search(item_id) {
  if (item_id === undefined) return false;
  if (exists(item_id)) {
    console.log(`${item_id} exists!!!`);
    let result = init_db()
      .get("users")
      .value()
      .filter((data) => {
        console.log(`data: ${data}`);
        if (data.name === item_id) {
          console.log("found");
          return data;
        }
      });
    console.log(`${JSON.stringify(result[0])} is a good result`);
    return result[0];
  } else {
    return {};
  }
}

async function modify(item) {
  console.log(`modify with this: ${item}`);
  if (exists(item.name)) await erase(item.name);
  await write(item);
}

console.log("Loading simple storage")
set_default_data()

exports.modify = modify;
exports.search = search;
exports.exists = exists;
exports.erase = erase;
exports.write = write;
exports.read_all = read_all;
exports.init_db = init_db;
