function doPost(e) {
  const htmlOutput = HtmlService.createTemplateFromFile("sign_up").evaluate();
  htmlOutput.setTitle('新規登録');
  htmlOutput.setFaviconUrl('https://drive.google.com/uc?id=1sIj9fmFLXtQq5ycGojQq4Bq8oZP-0hlU&.png');
  return htmlOutput
}
