const fs = require("fs");
const path = require("path");

const file = fs.readFileSync("src/json/accounts.json", "UTF8");

const accountData = file;

const accounts = JSON.parse(accountData);

const userData = fs.readFileSync("src/json/users.json", "UTF8");

const users = JSON.parse(userData);

const writeJSON = () => {
  let accountsJSON = JSON.stringify(accounts);

  fs.writeFileSync(
    path.join(__dirname, "json/accounts.json"),
    accountsJSON,
    "utf8"
  );
};

module.exports = { accounts: accounts, users: users, writeJSON: writeJSON };
