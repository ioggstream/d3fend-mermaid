import { log } from '../logger.js';
import { D3FEND_DATA } from './d3fendData.js';

/**
 *
 * @param str
 * @param position
 * @param searchValue
 * @param replaceValue
 */
function replaceAfterPosition(str, position, searchValue, replaceValue) {
  let firstPart = str.substring(0, position);
  let secondPart = str.substring(position);
  secondPart = secondPart.replace(searchValue, replaceValue);
  return firstPart + secondPart;
}

/**
 *
 * @param needle
 */
function createTooltip(needle) {
  const icon = D3FEND_DATA['ICON_MAP'][needle] || needle;
  let url = ''; // default value
  if (D3FEND_DATA['D3F_DIGITAL_ARTIFACTS'].includes(needle)) {
    url = `https://next.d3fend.mitre.org/dao/artifact/${needle}/`;
  } else if (D3FEND_DATA['D3F_DEFENSIVE_TECHNIQUES'].includes(needle)) {
    url = `https://next.d3fend.mitre.org/dao/technique/${needle}/`;
  }
  return `<a title='${needle}' href='${url}' target='_blank' rel='noopener noreferrer'>${icon}</a>`;
}

export const renderD3fendIcons = function (text) {
  let matches = text.match(/d3f:\w+/g);
  log.debug('renderD3fendIcons', text, matches);
  let position = 0;
  if (matches) {
    matches.forEach((needle) => {
      let replacement = createTooltip(needle);
      text = replaceAfterPosition(text, position, needle, replacement);
      position += replacement.length - needle.length;
      log.debug('found', needle, text);
    });
  }
  log.debug('new text', text);
  return text;
};
