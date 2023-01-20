const express = require("express");

const { accounts, writeJSON } = require("../data");

const router = express.Router();

router.get("/transfer", (req, res) => {
  res.render("transfer");
});

router.get("/payment", (req, res) => {
  res.render("payment", { account: accounts.credit });
});

router.post("/payment", (req, res) => {
  accounts.credit.balance -= parseInt(req.body.amount);

  accounts.credit.available += parseInt(req.body.amount);

  accountsJSON = JSON.stringify(accounts);

  writeJSON();

  res.render("payment", {
    message: "Payment Successful",
    account: accounts.credit,
  });
});

router.post("/transfer", (req, res) => {
  const subtractedBalance = accounts[req.body.from].balance - req.body.amount;
  accounts[req.body.from].balance = subtractedBalance;
  const addedBalance =
    accounts[req.body.to].balance + parseInt(req.body.amount);
  accounts[req.body.to].balance = addedBalance;
  writeJSON();
  res.render("transfer", { message: "Transfer Completed" });
});

module.exports = router;
