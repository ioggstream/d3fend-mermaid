import { log } from "../../logger.js"

export const renderD3fendIcons = function (text) {
  const iconMap = {
    "d3f:SoftwarePackage": "[fa:fa-box fa:fa-box-archive]",
    "d3f:WebServerApplication": "{fab:fa-whmcs}",
  }
  let matches = text.match(/d3f:\w+/g);
  log.warn('renderD3fendIcons', text, matches);
  if (matches) {
    matches.forEach(needle => {
      text = text.replace(needle, `<a title='${needle}' target='_blank' rel='noopener noreferrer'>${iconMap[needle]}</a>`);
      log.warn('found', needle, text);
    });
  }
  log.warn('new text', text);
  return text;
}