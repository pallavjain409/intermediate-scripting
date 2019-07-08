const cashStatus = {
  insufficientFunds: "INSUFFICIENT_FUNDS",
  closed: "CLOSED",
  open: "OPEN"
}

function checkCashRegister(price, cash, cid) {
  var change = {
    status: "",
    change: []
  };

  const cashInDraw = getTotalCashInDraw(cid);
  const changeToReturn = cash - price;
  change.status = getStatus(changeToReturn, cashInDraw);
  if (change.status === cashStatus.insufficientFunds) {
    return change;
  }
  if (change.status === cashStatus.closed) {
    change.change = cid
  } else {
    let changeArrayForOpenStatus = getChangeForOpenStatus(cid, changeToReturn);
    if (changeArrayForOpenStatus.length > 0) {
      change.change = changeArrayForOpenStatus;
    } else {
      change.status = cashStatus.insufficientFunds;
    }
  }
  return change;
}

function getChangeForOpenStatus(cid, changeToReturn) {
  let currencyArray = [];
  const currencyRate = [{
      name: 'ONE HUNDRED',
      val: 100.00
    },
    {
      name: 'TWENTY',
      val: 20.00
    },
    {
      name: 'TEN',
      val: 10.00
    },
    {
      name: 'FIVE',
      val: 5.00
    },
    {
      name: 'ONE',
      val: 1.00
    },
    {
      name: 'QUARTER',
      val: 0.25
    },
    {
      name: 'DIME',
      val: 0.10
    },
    {
      name: 'NICKEL',
      val: 0.05
    },
    {
      name: 'PENNY',
      val: 0.01
    }
  ];
  cid = sortCashInDrawer(cid, currencyRate);
  let change = [];
  let value = 0;
  let count = 0;
  while (count < cid.length) {
    if (currencyRate[count].val <= changeToReturn && cid[count][1] != 0) {
      if (changeToReturn >= cid[count][1]) {
        changeToReturn -= cid[count][1];
        value = cid[count][1];
      } else {
        value = Math.trunc(changeToReturn / currencyRate[count].val) * currencyRate[count].val;
        changeToReturn = (changeToReturn % currencyRate[count].val).toFixed(2);
      }
    }
    if (value > 0) {
      currencyArray.push([currencyRate[count].name, value]);
    }
    count++;
    value = 0;
  }
  if (changeToReturn == 0) {
    return currencyArray;
  } else {
    return [];
  }

}

function getTotalCashInDraw(cid) {
  return cid.map(arr => arr[1]).reduce((a, b) => a + b, 0).toFixed(2);
}

function getStatus(changeToReturn, cashInDraw) {
  if (changeToReturn > cashInDraw) {
    return cashStatus.insufficientFunds;
  } else if (changeToReturn == cashInDraw) {
    return cashStatus.closed;
  } else {
    return cashStatus.open;
  }
}

function sortCashInDrawer(cid, currencyRate) {
  var sortedArray = [];
  let count = 0;
  while (count < currencyRate.length) {
    cid.forEach(arr => {
      if (arr[0] == currencyRate[count].name) {
        sortedArray.push(arr);
      }
    })
    count++;
  }
  return sortedArray;
}

module.exports = checkCashRegister;
