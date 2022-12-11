function createAccounts(mailaddress, password, account_name){
  const error = [];
  const sheet = SpreadsheetApp.openById('1u1DNrKdKA9PpFat1e62htaIzqqkT9Bv0KzP13D5sriQ').getSheetByName('ログイン');
  const lastRow = sheet.getRange(1, 1).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow(); //1列目の最終行を取得
  const accounts = sheet.getRange(2,1,lastRow -1,2).getValues();

  for(account of accounts){
    if(account[0] == mailaddress & account[1] == password){
      error.push("すでに登録済みです。");
      break
    }
  }

  if(!error.length){
    sheet.appendRow([mailaddress, password, account_name])
  }
  
  return JSON.stringify(error);
}

/*=======URLを返信=========*/
function get_url(){
  return JSON.stringify(INDEX_URL)
}
