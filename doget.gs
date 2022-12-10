function doGet(e) {
  const page = e.parameter['p'];
  if (page == 'login' || page == null) {
    const htmlOutput = HtmlService.createTemplateFromFile("login").evaluate();
    htmlOutput.setTitle('コロナ検索アプリ|ログイン');
    htmlOutput.setFaviconUrl('https://drive.google.com/uc?id=1sIj9fmFLXtQq5ycGojQq4Bq8oZP-0hlU&.png');
    return htmlOutput
  }
}

function doPost(e) {
  const name = e.parameter.name;
  const email = e.parameter.email;
  const page = e.parameter.p;
  let html, htmlOutput;
  let html_name = page == 'index' ? 'index' :
                  page == 'inquiry' ? 'inquiry' : "";
  html = HtmlService.createTemplateFromFile(html_name);
  html.name= name;
  html.email= email;
  htmlOutput = html.evaluate()
  htmlOutput.setTitle('コロナ検索アプリ');
  htmlOutput.setFaviconUrl('https://drive.google.com/uc?id=1sIj9fmFLXtQq5ycGojQq4Bq8oZP-0hlU&.png');
  return htmlOutput
}
