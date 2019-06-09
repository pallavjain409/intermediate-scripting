function replaceWithHtmlEntities(str, char, HtmlEntity) {
  return str.replace(char, HtmlEntity);
}

function convertHtml(str) {
  for (let char of str) {
    switch (char) {
      case "&":
        str = replaceWithHtmlEntities(str, char, "&amp;");
        break;
      case "<":
        str = replaceWithHtmlEntities(str, char, "&lt;");
        break;
      case ">":
        str = replaceWithHtmlEntities(str, char, "&gt;");
        break;
      case '"':
        str = replaceWithHtmlEntities(str, char, "&quot;");
        break;
      case "'":
        str = replaceWithHtmlEntities(str, char, "&apos;");
        break;
      case "<>":
        str = replaceWithHtmlEntities(str, char, "&lt;&gt;");
        break;
    }

  }
  return str;
}


module.exports = convertHtml;
