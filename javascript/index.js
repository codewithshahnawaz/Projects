/*
TODO:
FEATURES: Bold, list, Images, Videos, color, alignment, return them as row html!

*/
const Editor = function (obj) {
  this.obj = obj;
};
Editor.prototype.createWindow = function () {
  // main box
  const el = document.getElementById(this.obj.element);
  el.style.width = this.obj.width + "px";
  el.style.minHeight = this.obj.height + "px";
  el.id = "mainBox";
  // toolbar
  const toolBar = document.createElement("div");
  el.appendChild(toolBar);
  toolBar.id = "toolBar";
  // textare
  const textArea = document.createElement("div");
  el.appendChild(textArea);
  textArea.contentEditable = true;
  textArea.id = "textarea";
  // Adding buttons in toolbar
  const boldBtn = document.createElement("button");
  boldBtn.onclick = function () {
    let text = window.getSelection();
    let content = textArea.innerHTML;
    textArea.innerHTML = content.replace(text, `**${text}**`);
  };
  boldBtn.innerHTML = "<b>B</b>";
  toolBar.appendChild(boldBtn);
  boldBtn.id = "btn";
};
