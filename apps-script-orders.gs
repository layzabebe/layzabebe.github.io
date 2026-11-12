// Google Apps Script — يحفظ طلبات Layza bébé فـ Google Sheets
// 1) أنشئ Google Sheet جديد، ثم: Extensions > Apps Script، والصق هاد الكود.
// 2) Deploy > New deployment > Web app: Execute as "Me"، Who has access "Anyone". انسخ الرابط.
// 3) ضع الرابط فـ index.html وكل صفحة منتج داخل CFG.ENDPOINT.
function doPost(e) {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(["التاريخ","المنتج","الكمية","المجموع (د.م)","الاسم","الهاتف","المدينة","العنوان","الحالة"]);
  var d = JSON.parse(e.postData.contents);
  sh.appendRow([new Date(), d.product, d.qty, d.total, d.name, "'" + d.phone, d.city, d.address || "", "جديد"]);
  return ContentService.createTextOutput("ok");
}
