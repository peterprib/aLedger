function ledger () {
  this.journal = new Journal();
}
module.exports = ledger;

function journal () {
}
module.exports = journal;

function account () {
}
module.exports = account;

DebitBalanceAccount.prototype = new Account();
CreditBalanceAccount.prototype = new Account();
AssetAccount.prototype = new DebitBalanceAccount();
liabilityAccount.prototype = new CrebitBalanceAccount();
equityAccount.prototype = new CrebitBalanceAccount();
revenueAccount.prototype = new CrebitBalanceAccount();
expenseAccount.prototype = new DebitBalanceAccount();
gainAccount.prototype = new CrebitBalanceAccount();
lossAccount.prototype = new DebitBalanceAccount();

function ChartOfAccounts {
	this.newAssetAccount("Cash","Marketable Securities""Accounts Receivable","Prepaid Expenses""Inventory","Fixed Assets","Accumulated Depreciation (contra account)","Other Assets");
	this.newLiabilityAccount("Accounts Payable","Accrued Liabilities","Taxes Payable","Wages Payable","Notes Payable");
	this.newStockholderEquityAccount("Common Stock","Retained Earnings");
	this.newRevenueAccount("Revenue","Sales returns and allowances (contra account)");
	this.newExpenseAccount("Cost of Goods Sold","Advertising Expense","Bank Fees","Depreciation Expense","Payroll Tax Expense","Rent Expense","Supplies Expense","Utilities Expense","Wages Expense","Other Expenses");
}

function transactionType (id,dispersion) {  //dispersion: {credits:[],debits:[]}
}

function transaction (type,amount,description) {
}
module.exports = transaction;
