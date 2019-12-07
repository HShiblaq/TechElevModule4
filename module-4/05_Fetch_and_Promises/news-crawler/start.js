var windowObjectReference;
var strWindowFeatures = "width=1200, height=25,menubar=no,location=no,resizable=no,scrollbars=no,status=no";

openRequestedPopup();

function openRequestedPopup() {
  windowObjectReference = window.open("http://127.0.0.1:5503/index.html", "News",
  strWindowFeatures);
}