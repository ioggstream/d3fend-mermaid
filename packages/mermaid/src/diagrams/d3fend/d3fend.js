import { log } from '../../logger.js';
import { D3FEND_DATA } from './d3fendData.js';


const ICON_MAP = {
  'd3f:EncryptionAlgorithm': '\\ud83d\\udd10',
  'd3f:ApplicationLayerFirewall': '\\ud83d\\udee1',
  'd3f:AsymmetricKey': 'fa:fa-key',
  'd3f:Authentication': 'fa:fa-user-lock',
  'd3f:AuthorizationService': 'fab:fa-openid',
  'd3f:Browser': 'fab:fa-firefox',
  'd3f:Certificate': 'fa:fa-certificate',
  'd3f:CertificateAuthority': 'fa:fa-certificate fa:fa-lock',
  'd3f:CertificateRevocationList': 'fa:fa-certificate fa:fa-ban',
  'd3f:Configuration': 'fa:fa-file',
  'd3f:ContainerImage': 'fab:fa-docker',
  'd3f:ContainerOrchestrationSoftware': 'fab:fa-docker',
  'd3f:ContainerProcess': 'fa:fa-cube',
  'd3f:ContainerRuntime': 'fab:fa-docker',
  'd3f:Database': 'fa:fa-database',
  'd3f:DatabaseQuery': 'fa:fa-database fa:fa-magnifying-glass',
  'd3f:DesktopComputer': 'fa:fa-desktop',
  'd3f:DNSServer': 'fa:fa-atlas',
  'd3f:DocumentFile': 'fab:fa-readme',
  'd3f:Email': 'fa:fa-envelope',
  'd3f:EncryptedTunnels': 'fab:fa-expeditedssl',
  'd3f:ExecutableScript': 'fa:fa-file-code',
  'd3f:FileSystem': 'fa:fa-folder',
  'd3f:Firewall': '\\ud83d\\udee1',
  'd3f:FlashMemory': 'fa:fa-sd-card',
  'd3f:InternetNetworkTraffic': 'fa:fa-cloud fa:fa-globe',
  'd3f:LaptopComputer': 'fa:fa-laptop',
  'd3f:Log': 'fa:fa-scroll',
  'd3f:LogFile': 'fa:fa-scroll',
  'd3f:Mailbox': '\\ud83d\\udcec',
  'd3f:MailNetworkTraffic': 'fa:fa-envelope',
  'd3f:MailServer': '\\ud83d\\udcec',
  'd3f:MailService': '\\ud83d\\udcec',
  'd3f:MemoryManagementUnit': 'fa:fa-memory',
  'd3f:MemoryPool': 'fa:fa-memory',
  'd3f:MessageAuthentication': 'fa:fa-envelope fa:fa-file-signature',
  'd3f:MessageTransferAgent': '\\ud83d\\udcec',
  'd3f:MobilePhone': 'fa:fa-mobile',
  'd3f:Multi-factorAuthentication': 'fa:fa-fingerprint',
  'd3f:Network': 'fa:fa-network-wired',
  'd3f:NetworkLink': 'fa:fa-ethernet fa:fa-link',
  'd3f:NetworkTrafficPolicyMapping': 'fa:fa-network-wired \\ud83d\\udd00',
  'd3f:OperatingSystem': 'fab:fa-linux',
  'd3f:Partition': 'fa:fa-hdd',
  'd3f:PasswordDatabase': 'fa:fa-key fa:fa-database',
  'd3f:PhysicalLocation': 'fa:fa-building',
  'd3f:PrivateKey': 'fa:fa-key',
  'd3f:PrivilegedUserAccount': 'fa:fa-user-plus',
  'd3f:Process': '\u2699\ufe0f',
  'd3f:PublicKey': 'fa:fa-key',
  'd3f:RDPSession': 'fa:fa-desktop fa:fa-lock',
  'd3f:ReverseProxyServer': 'fab:fa-uncharted',
  'd3f:Router': 'fab:fa-uncharted',
  'd3f:Server': 'fa:fa-server',
  'd3f:Session': 'fa:fa-cookie',
  'd3f:SessionCookie': 'fa:fa-cookie',
  'd3f:SoftwarePackage': 'fa:fa-box fa:fa-box-archive',
  'd3f:SSHSession': 'fa:fa-terminal fa:fa-lock',
  'd3f:SymmetricKey': 'fa:fa-key',
  'd3f:TabletComputer': 'fa:fa-mobile',
  'd3f:TaskSchedule': 'fa:fa-clock',
  'd3f:User': 'fa:fa-user',
  'd3f:UserAccount': 'fa:fa-user',
  'd3f:VirtualizationSoftware': 'fa:fa-server fa:fa-cube',
  'd3f:VirtualMemorySpace': 'fa:fa-memory',
  'd3f:Volume': 'fa:fa-hockey-puck',
  'd3f:VPNServer': 'fa:fa-lock \\u21cb',
  'd3f:WebApplicationFirewall': '\\ud83d\\udee1',
  'd3f:WebResourceAccess': '{..}',
  'd3f:WebServerApplication': '{fab:fa-whmcs}',
  'd3f:SoftwareArtifactServer': 'fa:fa-boxes',
  'd3f:WirelessAccessPoint': 'fa:fa-tower-cell',
  'd3f:WirelessRouter': 'fa:fa-wifi',
};


function replaceAfterPosition(str, position, searchValue, replaceValue) {
    let firstPart = str.substring(0, position);
    let secondPart = str.substring(position);
    secondPart = secondPart.replace(searchValue, replaceValue);
    return firstPart + secondPart;
}

function createTooltip(needle) {
  const icon = ICON_MAP[needle] || needle;
  let url = ''; // default value
  if (D3FEND_DATA["D3F_DIGITAL_ARTIFACTS"].includes(needle)) {
    url = `https://next.d3fend.mitre.org/dao/artifact/${needle}/`;
  }
  else if (D3FEND_DATA["D3F_DEFENSIVE_TECHNIQUES"].includes(needle)) {
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
      text = replaceAfterPosition(text, position,
        needle, replacement);
      position += replacement.length - needle.length;
      log.debug('found', needle, text);
    });
  }
  log.debug('new text', text);
  return text;
};
