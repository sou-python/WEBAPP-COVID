
/*=======パスワード認証=========*/
function get_sheet_account(){
  const sheet = SpreadsheetApp.openById('1u1DNrKdKA9PpFat1e62htaIzqqkT9Bv0KzP13D5sriQ').getSheetByName('ログイン');
  const lastRow = sheet.getRange(1, 1).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow(); //1列目の最終行を取得
  const accounts = sheet.getRange(2,1,lastRow -1,3).getValues();
  return JSON.stringify(accounts)
}

/*=======URLを返信=========*/
function get_url(){
  return JSON.stringify(INDEX_URL)
}

function get_url_signup(){
  return JSON.stringify([INDEX_URL, SIGN_UP_URL])
}

function sendMessage(name, email, message){
  const ss = SpreadsheetApp.openById('1u1DNrKdKA9PpFat1e62htaIzqqkT9Bv0KzP13D5sriQ').getSheetByName('質問集')
  const time = new Date()
  ss.appendRow([time, name, email, message]);
}





