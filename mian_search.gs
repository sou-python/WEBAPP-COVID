
/*=======メインの関数=========*/

function readRecords(elements) {
  console.log(elements)
  let requestUrl =  elements.種類 == "感染者数" ? COVID_API1 : COVID_API2
  let columns = elements.種類 == "感染者数" ? ["日付", "都道府県", "人数"] : ["日付", "人数"]
  if(elements.日付) requestUrl += `?date=${elements.日付.replace(/-/g,"")}`;
  if(elements.日付 != "" & elements.都道府県 != "") requestUrl += `&dataName=${elements.都道府県}`;
  if(elements.日付 == "" & elements.都道府県 != "") requestUrl += `?dataName=${elements.都道府県}`;
  console.log(requestUrl)
  let response = UrlFetchApp.fetch(requestUrl);
  let responseText = response.getContentText();
  let json = JSON.parse(responseText);
  let itemList = json["itemList"];
  let lst = itemList.map((line) =>  Object.values(line));
  lst.unshift(columns);
  console.log(lst);
  return JSON.stringify(lst);
}

//テスト用
function readRecords2() {
  return JSON.stringify(TABLE_TEST);
}