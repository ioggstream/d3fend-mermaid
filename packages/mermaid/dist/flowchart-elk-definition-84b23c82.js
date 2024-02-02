import { d as _, p as $ } from "./flowDb-25cbdc4b.js";
import { l as y, j as F, U as E, r as W, o as R, q as L, n as x, f as V } from "./mermaid-a4233606.js";
import { i as G, a as z, l as q, b as K, g as Q, c as J } from "./edges-5bfa72ef.js";
import { E as Z } from "./elk.bundled-46cb8ded.js";
import { l as X } from "./line-c351ac40.js";
import "./createText-00cc47e8.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
const j = (e, d, t) => {
  const { parentById: f } = t, s = /* @__PURE__ */ new Set();
  let i = e;
  for (; i; ) {
    if (s.add(i), i === d)
      return i;
    i = f[i];
  }
  for (i = d; i; ) {
    if (s.has(i))
      return i;
    i = f[i];
  }
  return "root";
}, N = {
  D3F_DEFENSIVE_TECHNIQUES: [
    "d3f:AccessModeling",
    "d3f:AccountLocking",
    "d3f:ActiveCertificateAnalysis",
    "d3f:ActiveLogicalLinkMapping",
    "d3f:ActivePhysicalLinkMapping",
    "d3f:AdministrativeNetworkActivityAnalysis",
    "d3f:ApplicationConfigurationHardening",
    "d3f:ApplicationHardening",
    "d3f:AssetInventory",
    "d3f:AssetVulnerabilityEnumeration",
    "d3f:AuthenticationCacheInvalidation",
    "d3f:AuthenticationEventThresholding",
    "d3f:AuthorizationEventThresholding",
    "d3f:BiometricAuthentication",
    "d3f:BootloaderAuthentication",
    "d3f:BroadcastDomainIsolation",
    "d3f:ByteSequenceEmulation",
    "d3f:Certificate-basedAuthentication",
    "d3f:CertificateAnalysis",
    "d3f:CertificatePinning",
    "d3f:Client-serverPayloadProfiling",
    "d3f:ConfigurationInventory",
    "d3f:ConnectedHoneynet",
    "d3f:ConnectionAttemptAnalysis",
    "d3f:CredentialCompromiseScopeAnalysis",
    "d3f:CredentialEviction",
    "d3f:CredentialHardening",
    "d3f:CredentialRevoking",
    "d3f:CredentialTransmissionScoping",
    "d3f:DNSAllowlisting",
    "d3f:DNSDenylisting",
    "d3f:DNSTrafficAnalysis",
    "d3f:DataExchangeMapping",
    "d3f:DataInventory",
    "d3f:DatabaseQueryStringAnalysis",
    "d3f:DeadCodeElimination",
    "d3f:DecoyEnvironment",
    "d3f:DecoyFile",
    "d3f:DecoyNetworkResource",
    "d3f:DecoyObject",
    "d3f:DecoyPersona",
    "d3f:DecoyPublicRelease",
    "d3f:DecoySessionToken",
    "d3f:DecoyUserCredential",
    "d3f:DefensiveTechnique",
    "d3f:DiskEncryption",
    "d3f:DomainAccountMonitoring",
    "d3f:DomainNameReputationAnalysis",
    "d3f:DomainTrustPolicy",
    "d3f:DriverLoadIntegrityChecking",
    "d3f:DynamicAnalysis",
    "d3f:EmailRemoval",
    "d3f:EmulatedFileAnalysis",
    "d3f:EncryptedTunnels",
    "d3f:EndpointHealthBeacon",
    "d3f:ExceptionHandlerPointerValidation",
    "d3f:ExecutableAllowlisting",
    "d3f:ExecutableDenylisting",
    "d3f:ExecutionIsolation",
    "d3f:FileAccessPatternAnalysis",
    "d3f:FileAnalysis",
    "d3f:FileCarving",
    "d3f:FileContentRules",
    "d3f:FileCreationAnalysis",
    "d3f:FileEncryption",
    "d3f:FileEviction",
    "d3f:FileHashReputationAnalysis",
    "d3f:FileHashing",
    "d3f:FileRemoval",
    "d3f:FirmwareBehaviorAnalysis",
    "d3f:FirmwareEmbeddedMonitoringCode",
    "d3f:FirmwareVerification",
    "d3f:ForwardResolutionDomainDenylisting",
    "d3f:ForwardResolutionIPDenylisting",
    "d3f:Hardware-basedProcessIsolation",
    "d3f:HardwareComponentInventory",
    "d3f:HierarchicalDomainDenylisting",
    "d3f:HomoglyphDenylisting",
    "d3f:HomoglyphDetection",
    "d3f:IOPortRestriction",
    "d3f:IPCTrafficAnalysis",
    "d3f:IPReputationAnalysis",
    "d3f:IdentifierActivityAnalysis",
    "d3f:IdentifierAnalysis",
    "d3f:IdentifierReputationAnalysis",
    "d3f:InboundSessionVolumeAnalysis",
    "d3f:InboundTrafficFiltering",
    "d3f:IndirectBranchCallAnalysis",
    "d3f:InputDeviceAnalysis",
    "d3f:IntegratedHoneynet",
    "d3f:JobFunctionAccessPatternAnalysis",
    "d3f:Kernel-basedProcessIsolation",
    "d3f:LocalAccountMonitoring",
    "d3f:LocalFilePermissions",
    "d3f:LogicalLinkMapping",
    "d3f:MandatoryAccessControl",
    "d3f:MemoryBoundaryTracking",
    "d3f:MessageAnalysis",
    "d3f:MessageAuthentication",
    "d3f:MessageEncryption",
    "d3f:MessageHardening",
    "d3f:Multi-factorAuthentication",
    "d3f:NetworkIsolation",
    "d3f:NetworkMapping",
    "d3f:NetworkNodeInventory",
    "d3f:NetworkTrafficAnalysis",
    "d3f:NetworkTrafficCommunityDeviation",
    "d3f:NetworkTrafficFiltering",
    "d3f:NetworkTrafficPolicyMapping",
    "d3f:NetworkVulnerabilityAssessment",
    "d3f:One-timePassword",
    "d3f:OperatingSystemMonitoring",
    "d3f:OperationalActivityMapping",
    "d3f:OperationalDependencyMapping",
    "d3f:OperationalRiskAssessment",
    "d3f:OrganizationMapping",
    "d3f:OutboundTrafficFiltering",
    "d3f:PassiveCertificateAnalysis",
    "d3f:PassiveLogicalLinkMapping",
    "d3f:PassivePhysicalLinkMapping",
    "d3f:PerHostDownload-UploadRatioAnalysis",
    "d3f:PeripheralFirmwareVerification",
    "d3f:PhysicalLinkMapping",
    "d3f:PlatformHardening",
    "d3f:PlatformMonitoring",
    "d3f:PointerAuthentication",
    "d3f:ProcessAnalysis",
    "d3f:ProcessCodeSegmentVerification",
    "d3f:ProcessEviction",
    "d3f:ProcessLineageAnalysis",
    "d3f:ProcessSegmentExecutionPrevention",
    "d3f:ProcessSelf-ModificationDetection",
    "d3f:ProcessSpawnAnalysis",
    "d3f:ProcessSuspension",
    "d3f:ProcessTermination",
    "d3f:ProtocolMetadataAnomalyDetection",
    "d3f:RFShielding",
    "d3f:RPCTrafficAnalysis",
    "d3f:RelayPatternAnalysis",
    "d3f:RemoteTerminalSessionDetection",
    "d3f:ResourceAccessPatternAnalysis",
    "d3f:ReverseResolutionDomainDenylisting",
    "d3f:ReverseResolutionIPDenylisting",
    "d3f:ScheduledJobAnalysis",
    "d3f:ScriptExecutionAnalysis",
    "d3f:SegmentAddressOffsetRandomization",
    "d3f:SenderMTAReputationAnalysis",
    "d3f:SenderReputationAnalysis",
    "d3f:ServiceBinaryVerification",
    "d3f:ServiceDependencyMapping",
    "d3f:SessionDurationAnalysis",
    "d3f:ShadowStackComparisons",
    "d3f:SoftwareInventory",
    "d3f:SoftwareUpdate",
    "d3f:StackFrameCanaryValidation",
    "d3f:StandaloneHoneynet",
    "d3f:StrongPasswordPolicy",
    "d3f:SystemCallAnalysis",
    "d3f:SystemCallFiltering",
    "d3f:SystemConfigurationPermissions",
    "d3f:SystemDaemonMonitoring",
    "d3f:SystemDependencyMapping",
    "d3f:SystemFileAnalysis",
    "d3f:SystemFirmwareVerification",
    "d3f:SystemInitConfigAnalysis",
    "d3f:SystemMapping",
    "d3f:SystemVulnerabilityAssessment",
    "d3f:TPMBootIntegrity",
    "d3f:TransferAgentAuthentication",
    "d3f:URLAnalysis",
    "d3f:URLReputationAnalysis",
    "d3f:UserAccountPermissions",
    "d3f:UserBehaviorAnalysis",
    "d3f:UserDataTransferAnalysis",
    "d3f:UserGeolocationLogonPatternAnalysis",
    "d3f:UserSessionInitConfigAnalysis",
    "d3f:WebSessionActivityAnalysis"
  ],
  D3F_DIGITAL_ARTIFACTS: [
    "d3f:AccessControlConfiguration",
    "d3f:AccessControlList",
    "d3f:AccessToken",
    "d3f:ActivityDependency",
    "d3f:AddressSpace",
    "d3f:AdministrativeNetworkTraffic",
    "d3f:Alias",
    "d3f:AllocateMemory",
    "d3f:Application",
    "d3f:ApplicationConfiguration",
    "d3f:ApplicationConfigurationDatabase",
    "d3f:ApplicationConfigurationDatabaseRecord",
    "d3f:ApplicationConfigurationFile",
    "d3f:ApplicationInstaller",
    "d3f:ApplicationInventorySensor",
    "d3f:ApplicationLayerFirewall",
    "d3f:ApplicationLayerLink",
    "d3f:ApplicationProcess",
    "d3f:ApplicationProcessConfiguration",
    "d3f:ApplicationRule",
    "d3f:ApplicationShim",
    "d3f:ArchiveFile",
    "d3f:ArtifactServer",
    "d3f:AsymmetricKey",
    "d3f:AudioInputDevice",
    "d3f:AuthenticateUser",
    "d3f:Authentication",
    "d3f:AuthenticationFunction",
    "d3f:AuthenticationLog",
    "d3f:AuthenticationServer",
    "d3f:AuthenticationService",
    "d3f:Authorization",
    "d3f:AuthorizationLog",
    "d3f:AuthorizationService",
    "d3f:BarcodeScannerInputDevice",
    "d3f:BinaryLargeObject",
    "d3f:BinarySegment",
    "d3f:Blob",
    "d3f:BlockDevice",
    "d3f:BootLoader",
    "d3f:BootRecord",
    "d3f:BootSector",
    "d3f:Browser",
    "d3f:BrowserExtension",
    "d3f:BuildTool",
    "d3f:BusinessCommunicationPlatformClient",
    "d3f:CACertificateFile",
    "d3f:CacheMemory",
    "d3f:CallStack",
    "d3f:CentralProcessingUnit",
    "d3f:Certificate",
    "d3f:CertificateFile",
    "d3f:CertificateTrustStore",
    "d3f:ChatroomClient",
    "d3f:ChildProcess",
    "d3f:ClientApplication",
    "d3f:ClientComputer",
    "d3f:Clipboard",
    "d3f:CloudConfiguration",
    "d3f:CloudInstanceMetadata",
    "d3f:CloudServiceAuthentication",
    "d3f:CloudServiceAuthorization",
    "d3f:CloudServiceSensor",
    "d3f:CloudStorage",
    "d3f:CloudUserAccount",
    "d3f:CodeAnalyzer",
    "d3f:CodeRepository",
    "d3f:CollaborativeSoftware",
    "d3f:CollectorAgent",
    "d3f:Command",
    "d3f:CommandHistoryLog",
    "d3f:CommandHistoryLogFile",
    "d3f:CommandLineInterface",
    "d3f:Compiler",
    "d3f:CompilerConfigurationFile",
    "d3f:ComputingServer",
    "d3f:ConfigurationDatabase",
    "d3f:ConfigurationDatabaseRecord",
    "d3f:ConfigurationFile",
    "d3f:ConfigurationManagementDatabase",
    "d3f:ConfigurationResource",
    "d3f:ConnectSocket",
    "d3f:ConsoleOutputFunction",
    "d3f:ContainerBuildTool",
    "d3f:ContainerImage",
    "d3f:ContainerOrchestrationSoftware",
    "d3f:ContainerProcess",
    "d3f:ContainerRuntime",
    "d3f:CopyMemoryFunction",
    "d3f:CopyToken",
    "d3f:CreateFile",
    "d3f:CreateProcess",
    "d3f:CreateSocket",
    "d3f:CreateThread",
    "d3f:Credential",
    "d3f:CredentialManagementSystem",
    "d3f:CryptographicKey",
    "d3f:CustomArchiveFile",
    "d3f:DNSLookup",
    "d3f:DNSNetworkTraffic",
    "d3f:DNSRecord",
    "d3f:DNSServer",
    "d3f:DataArtifactServer",
    "d3f:DataDependency",
    "d3f:DataLinkLink",
    "d3f:Database",
    "d3f:DatabaseFile",
    "d3f:DatabaseQuery",
    "d3f:DatabaseServer",
    "d3f:DecoyArtifact",
    "d3f:DefaultUserAccount",
    "d3f:Dependency",
    "d3f:DeserializationFunction",
    "d3f:DesktopComputer",
    "d3f:DeveloperApplication",
    "d3f:DialUpModem",
    "d3f:DigitalArtifact",
    "d3f:DigitalSystem",
    "d3f:Directory",
    "d3f:DirectoryService",
    "d3f:DisplayAdapter",
    "d3f:DisplayDeviceDriver",
    "d3f:DisplayServer",
    "d3f:DocumentFile",
    "d3f:DomainName",
    "d3f:DomainRegistration",
    "d3f:DomainUserAccount",
    "d3f:DynamicAnalysisTool",
    "d3f:Email",
    "d3f:EmailAttachment",
    "d3f:EmailRule",
    "d3f:EmbeddedComputer",
    "d3f:Enclave",
    "d3f:EncryptedCredential",
    "d3f:EncryptedPassword",
    "d3f:EndpointSensor",
    "d3f:EvalFunction",
    "d3f:EventLog",
    "d3f:ExceptionHandler",
    "d3f:ExecutableBinary",
    "d3f:ExecutableFile",
    "d3f:ExecutableScript",
    "d3f:ExternalContentInclusionFunction",
    "d3f:FastSymbolicLink",
    "d3f:File",
    "d3f:FileHash",
    "d3f:FilePathOpenFunction",
    "d3f:FileSection",
    "d3f:FileServer",
    "d3f:FileShareService",
    "d3f:FileSystem",
    "d3f:FileSystemLink",
    "d3f:FileSystemMetadata",
    "d3f:FileSystemSensor",
    "d3f:FileTransferNetworkTraffic",
    "d3f:FingerPrintScannerInputDevice",
    "d3f:Firewall",
    "d3f:Firmware",
    "d3f:FirmwareSensor",
    "d3f:First-stageBootLoader",
    "d3f:FlashMemory",
    "d3f:ForwardProxyServer",
    "d3f:FreeMemory",
    "d3f:GetOpenSockets",
    "d3f:GetOpenWindows",
    "d3f:GetRunningProcesses",
    "d3f:GetScreenCapture",
    "d3f:GetSystemConfigValue",
    "d3f:GetSystemNetworkConfigValue",
    "d3f:GetSystemTime",
    "d3f:GlobalUserAccount",
    "d3f:GraphicalUserInterface",
    "d3f:GraphicsCardFirmware",
    "d3f:GraphicsProcessingUnit",
    "d3f:GroupPolicy",
    "d3f:HTMLFile",
    "d3f:HardDiskFirmware",
    "d3f:HardLink",
    "d3f:HardwareDevice",
    "d3f:HardwareDriver",
    "d3f:HeapSegment",
    "d3f:Host",
    "d3f:Host-basedFirewall",
    "d3f:HostConfigurationSensor",
    "d3f:Hostname",
    "d3f:HumanInputDeviceFirmware",
    "d3f:IPAddress",
    "d3f:IPCNetworkTraffic",
    "d3f:IPPhone",
    "d3f:Identifier",
    "d3f:ImageCodeSegment",
    "d3f:ImageDataSegment",
    "d3f:ImageScannerInputDevice",
    "d3f:ImageSegment",
    "d3f:ImpersonateUser",
    "d3f:ImportLibraryFunction",
    "d3f:In-memoryPasswordStore",
    "d3f:InboundInternetDNSResponseTraffic",
    "d3f:InboundInternetMailTraffic",
    "d3f:InboundInternetNetworkTraffic",
    "d3f:InboundNetworkTraffic",
    "d3f:InitScript",
    "d3f:InputDevice",
    "d3f:InputFunction",
    "d3f:InstantMessagingClient",
    "d3f:IntegrationTestExecutionTool",
    "d3f:InternetDNSLookup",
    "d3f:InternetFileTransferTraffic",
    "d3f:InternetNetwork",
    "d3f:InternetNetworkTraffic",
    "d3f:InterprocessCommunication",
    "d3f:IntranetAdministrativeNetworkTraffic",
    "d3f:IntranetDNSLookup",
    "d3f:IntranetFileTransferTraffic",
    "d3f:IntranetIPCNetworkTraffic",
    "d3f:IntranetMulticastNetworkTraffic",
    "d3f:IntranetNetwork",
    "d3f:IntranetNetworkTraffic",
    "d3f:IntranetRPCNetworkTraffic",
    "d3f:IntranetWebNetworkTraffic",
    "d3f:IntrusionDetectionSystem",
    "d3f:IntrusionPreventionSystem",
    "d3f:JavaArchive",
    "d3f:JavaScriptBlob",
    "d3f:KerberosTicket",
    "d3f:KerberosTicketGrantingServiceTicket",
    "d3f:KerberosTicketGrantingTicket",
    "d3f:Kernel",
    "d3f:KernelAPISensor",
    "d3f:KernelModule",
    "d3f:KernelProcessTable",
    "d3f:KeyboardInputDevice",
    "d3f:KioskComputer",
    "d3f:LaptopComputer",
    "d3f:LegacySystem",
    "d3f:Link",
    "d3f:LocalAreaNetwork",
    "d3f:LocalAreaNetworkTraffic",
    "d3f:LocalAuthenticationService",
    "d3f:LocalAuthorizationService",
    "d3f:LocalResource",
    "d3f:LocalResourceAccess",
    "d3f:LocalUserAccount",
    "d3f:Log",
    "d3f:LogFile",
    "d3f:LogMessageFunction",
    "d3f:LogicalLink",
    "d3f:LoginSession",
    "d3f:LogonUser",
    "d3f:MacOSKeychain",
    "d3f:MailNetworkTraffic",
    "d3f:MailServer",
    "d3f:MailService",
    "d3f:MathematicalFunction",
    "d3f:MediaServer",
    "d3f:MemoryAddress",
    "d3f:MemoryAddressSpace",
    "d3f:MemoryAllocationFunction",
    "d3f:MemoryBlock",
    "d3f:MemoryExtent",
    "d3f:MemoryFreeFunction",
    "d3f:MemoryManagementUnit",
    "d3f:MemoryManagementUnitComponent",
    "d3f:MemoryPool",
    "d3f:MemoryProtectionUnit",
    "d3f:MemoryWord",
    "d3f:MessageTransferAgent",
    "d3f:Metadata",
    "d3f:Microcode",
    "d3f:MobilePhone",
    "d3f:Modem",
    "d3f:MouseInputDevice",
    "d3f:MoveFile",
    "d3f:MultimediaDocumentFile",
    "d3f:NTFSHardLink",
    "d3f:NTFSJunctionPoint",
    "d3f:NTFSLink",
    "d3f:NTFSSymbolicLink",
    "d3f:Network",
    "d3f:NetworkCardFirmware",
    "d3f:NetworkDirectoryResource",
    "d3f:NetworkFileResource",
    "d3f:NetworkFileShareResource",
    "d3f:NetworkFlow",
    "d3f:NetworkFlowSensor",
    "d3f:NetworkInitScriptFileResource",
    "d3f:NetworkLink",
    "d3f:NetworkNode",
    "d3f:NetworkPackets",
    "d3f:NetworkPrinter",
    "d3f:NetworkProtocolAnalyzer",
    "d3f:NetworkResource",
    "d3f:NetworkResourceAccess",
    "d3f:NetworkSensor",
    "d3f:NetworkService",
    "d3f:NetworkSession",
    "d3f:NetworkTraffic",
    "d3f:NetworkTrafficAnalysisSoftware",
    "d3f:ObjectFile",
    "d3f:OfficeApplication",
    "d3f:OfficeApplicationFile",
    "d3f:OpenFile",
    "d3f:OperatingSystem",
    "d3f:OperatingSystemConfiguration",
    "d3f:OperatingSystemConfigurationComponent",
    "d3f:OperatingSystemConfigurationFile",
    "d3f:OperatingSystemExecutableFile",
    "d3f:OperatingSystemFile",
    "d3f:OperatingSystemLogFile",
    "d3f:OperatingSystemPackagingTool",
    "d3f:OperatingSystemProcess",
    "d3f:OperatingSystemSharedLibraryFile",
    "d3f:OperationsCenterComputer",
    "d3f:OpticalModem",
    "d3f:OrchestrationController",
    "d3f:OrchestrationServer",
    "d3f:OrchestrationWorker",
    "d3f:OutboundInternetDNSLookupTraffic",
    "d3f:OutboundInternetEncryptedRemoteTerminalTraffic",
    "d3f:OutboundInternetEncryptedTraffic",
    "d3f:OutboundInternetEncryptedWebTraffic",
    "d3f:OutboundInternetFileTransferTraffic",
    "d3f:OutboundInternetMailTraffic",
    "d3f:OutboundInternetNetworkTraffic",
    "d3f:OutboundInternetRPCTraffic",
    "d3f:OutboundInternetWebTraffic",
    "d3f:OutboundNetworkTraffic",
    "d3f:OutputDevice",
    "d3f:POSIXSymbolicLink",
    "d3f:PacketLog",
    "d3f:Page",
    "d3f:PageFrame",
    "d3f:PageTable",
    "d3f:ParentProcess",
    "d3f:Partition",
    "d3f:PartitionTable",
    "d3f:Password",
    "d3f:PasswordDatabase",
    "d3f:PasswordFile",
    "d3f:PasswordManager",
    "d3f:PasswordStore",
    "d3f:PeripheralFirmware",
    "d3f:PeripheralHubFirmware",
    "d3f:PersonalComputer",
    "d3f:PhysicalAddress",
    "d3f:PhysicalLink",
    "d3f:PhysicalLocation",
    "d3f:Pipe",
    "d3f:Platform",
    "d3f:Pointer",
    "d3f:PointerDereferencingFunction",
    "d3f:PowerShellProfileScript",
    "d3f:PrimaryStorage",
    "d3f:PrintServer",
    "d3f:PrivateKey",
    "d3f:PrivilegedUserAccount",
    "d3f:Process",
    "d3f:ProcessCodeSegment",
    "d3f:ProcessDataSegment",
    "d3f:ProcessEnvironmentVariable",
    "d3f:ProcessImage",
    "d3f:ProcessSegment",
    "d3f:ProcessStartFunction",
    "d3f:ProcessTree",
    "d3f:Processor",
    "d3f:ProcessorComponent",
    "d3f:ProcessorRegister",
    "d3f:PropertyListFile",
    "d3f:ProxyServer",
    "d3f:PublicKey",
    "d3f:PythonPackage",
    "d3f:PythonScriptFile",
    "d3f:RAM",
    "d3f:RDPSession",
    "d3f:RFNode",
    "d3f:RFReceiver",
    "d3f:RFTransceiver",
    "d3f:RFTransmitter",
    "d3f:ROM",
    "d3f:RPCNetworkTraffic",
    "d3f:RadioModem",
    "d3f:RawMemoryAccessFunction",
    "d3f:ReadFile",
    "d3f:Record",
    "d3f:RemoteAuthenticationService",
    "d3f:RemoteAuthorizationService",
    "d3f:RemoteCommand",
    "d3f:RemoteDatabaseQuery",
    "d3f:RemoteProcedureCall",
    "d3f:RemoteResource",
    "d3f:RemoteSession",
    "d3f:RemoteTerminalSession",
    "d3f:RemovableMediaDevice",
    "d3f:Resource",
    "d3f:ResourceAccess",
    "d3f:ResourceFork",
    "d3f:ReverseProxyServer",
    "d3f:Router",
    "d3f:SSHSession",
    "d3f:SavedInstructionPointer",
    "d3f:ScriptApplicationProcess",
    "d3f:Second-stageBootLoader",
    "d3f:SecondaryStorage",
    "d3f:SecurityToken",
    "d3f:Sensor",
    "d3f:SerializationFunction",
    "d3f:Server",
    "d3f:ServiceApplication",
    "d3f:ServiceApplicationProcess",
    "d3f:ServiceDependency",
    "d3f:Session",
    "d3f:SessionCookie",
    "d3f:SetSystemConfigValue",
    "d3f:ShadowStack",
    "d3f:SharedComputer",
    "d3f:SharedLibraryFile",
    "d3f:SharedResourceAccessFunction",
    "d3f:Shim",
    "d3f:ShimDatabase",
    "d3f:ShortcutFile",
    "d3f:SlowSymbolicLink",
    "d3f:Software",
    "d3f:SoftwareArtifactServer",
    "d3f:SoftwareDeploymentTool",
    "d3f:SoftwareLibrary",
    "d3f:SoftwareLibraryFile",
    "d3f:SoftwarePackage",
    "d3f:SoftwarePackagingTool",
    "d3f:SoftwarePatch",
    "d3f:SourceCodeAnalyzerTool",
    "d3f:StackComponent",
    "d3f:StackFrame",
    "d3f:StackFrameCanary",
    "d3f:StackSegment",
    "d3f:StartupDirectory",
    "d3f:StaticAnalysisTool",
    "d3f:Storage",
    "d3f:StoredProcedure",
    "d3f:StringFormatFunction",
    "d3f:Subroutine",
    "d3f:SuspendProcess",
    "d3f:Switch",
    "d3f:SymbolicLink",
    "d3f:SymmetricKey",
    "d3f:SystemCall",
    "d3f:SystemConfigSystemCall",
    "d3f:SystemConfigurationDatabase",
    "d3f:SystemConfigurationDatabaseRecord",
    "d3f:SystemConfigurationInitDatabaseRecord",
    "d3f:SystemConfigurationInitResource",
    "d3f:SystemDependency",
    "d3f:SystemFirewallConfiguration",
    "d3f:SystemFirmware",
    "d3f:SystemInitConfiguration",
    "d3f:SystemInitProcess",
    "d3f:SystemInitScript",
    "d3f:SystemPasswordDatabase",
    "d3f:SystemServiceSoftware",
    "d3f:SystemSoftware",
    "d3f:SystemStartupDirectory",
    "d3f:SystemTimeApplication",
    "d3f:SystemUtilizationRecord",
    "d3f:TabletComputer",
    "d3f:TaskSchedule",
    "d3f:TaskSchedulerProcess",
    "d3f:TaskSchedulerSoftware",
    "d3f:TerminateProcess",
    "d3f:TertiaryStorage",
    "d3f:TestExecutionTool",
    "d3f:ThinClientComputer",
    "d3f:Thread",
    "d3f:ThreadStartFunction",
    "d3f:TicketGrantingTicket",
    "d3f:TraceProcess",
    "d3f:TranslationLookasideBuffer",
    "d3f:TransportLink",
    "d3f:TrustStore",
    "d3f:URL",
    "d3f:UnitTestExecutionTool",
    "d3f:UnixHardLink",
    "d3f:UnixLink",
    "d3f:User",
    "d3f:UserAccount",
    "d3f:UserAction",
    "d3f:UserApplication",
    "d3f:UserBehavior",
    "d3f:UserInitConfigurationFile",
    "d3f:UserInitScript",
    "d3f:UserInputFunction",
    "d3f:UserInterface",
    "d3f:UserLogonInitResource",
    "d3f:UserProcess",
    "d3f:UserStartupDirectory",
    "d3f:UserStartupScriptFile",
    "d3f:UserToUserMessage",
    "d3f:UtilitySoftware",
    "d3f:VPNServer",
    "d3f:VersionControlTool",
    "d3f:VideoInputDevice",
    "d3f:VirtualAddress",
    "d3f:VirtualMemorySpace",
    "d3f:VirtualizationSoftware",
    "d3f:Volume",
    "d3f:VolumeBootRecord",
    "d3f:WebApplicationFirewall",
    "d3f:WebApplicationServer",
    "d3f:WebAuthentication",
    "d3f:WebFileResource",
    "d3f:WebNetworkTraffic",
    "d3f:WebResourceAccess",
    "d3f:WebScriptFile",
    "d3f:WebServer",
    "d3f:WebServerApplication",
    "d3f:WideAreaNetwork",
    "d3f:WindowsRegistry",
    "d3f:WindowsRegistryKey",
    "d3f:WindowsShortcutFile",
    "d3f:WirelessAccessPoint",
    "d3f:WirelessRouter",
    "d3f:WriteFile",
    "d3f:ZeroClientComputer"
  ],
  D3F_OFFENSIVE_TECHNIQUES: [
    "d3f:CollectionTechnique",
    "d3f:CommandAndControlTechnique",
    "d3f:CredentialAccessTechnique",
    "d3f:DefenseEvasionTechnique",
    "d3f:DiscoveryTechnique",
    "d3f:ExecutionTechnique",
    "d3f:ExfiltrationTechnique",
    "d3f:ImpactTechnique",
    "d3f:InitialAccessTechnique",
    "d3f:LateralMovementTechnique",
    "d3f:OffensiveTechnique",
    "d3f:PersistenceTechnique",
    "d3f:PrivilegeEscalationTechnique",
    "d3f:ReconnaissanceTechnique",
    "d3f:ResourceDevelopmentTechnique",
    "d3f:T1001",
    "d3f:T1001.001",
    "d3f:T1001.002",
    "d3f:T1001.003",
    "d3f:T1002",
    "d3f:T1003",
    "d3f:T1003.001",
    "d3f:T1003.002",
    "d3f:T1003.003",
    "d3f:T1003.004",
    "d3f:T1003.005",
    "d3f:T1003.006",
    "d3f:T1003.007",
    "d3f:T1003.008",
    "d3f:T1004",
    "d3f:T1005",
    "d3f:T1006",
    "d3f:T1007",
    "d3f:T1008",
    "d3f:T1009",
    "d3f:T1010",
    "d3f:T1011",
    "d3f:T1011.001",
    "d3f:T1012",
    "d3f:T1013",
    "d3f:T1014",
    "d3f:T1015",
    "d3f:T1016",
    "d3f:T1016.001",
    "d3f:T1017",
    "d3f:T1018",
    "d3f:T1019",
    "d3f:T1020",
    "d3f:T1020.001",
    "d3f:T1021",
    "d3f:T1021.001",
    "d3f:T1021.002",
    "d3f:T1021.003",
    "d3f:T1021.004",
    "d3f:T1021.005",
    "d3f:T1021.006",
    "d3f:T1022",
    "d3f:T1023",
    "d3f:T1024",
    "d3f:T1025",
    "d3f:T1027",
    "d3f:T1027.001",
    "d3f:T1027.002",
    "d3f:T1027.003",
    "d3f:T1027.004",
    "d3f:T1027.005",
    "d3f:T1027.006",
    "d3f:T1028",
    "d3f:T1029",
    "d3f:T1030",
    "d3f:T1031",
    "d3f:T1032",
    "d3f:T1033",
    "d3f:T1035",
    "d3f:T1036",
    "d3f:T1036.001",
    "d3f:T1036.002",
    "d3f:T1036.003",
    "d3f:T1036.004",
    "d3f:T1036.005",
    "d3f:T1036.006",
    "d3f:T1036.007",
    "d3f:T1037",
    "d3f:T1037.001",
    "d3f:T1037.002",
    "d3f:T1037.003",
    "d3f:T1037.004",
    "d3f:T1037.005",
    "d3f:T1038",
    "d3f:T1039",
    "d3f:T1040",
    "d3f:T1041",
    "d3f:T1042",
    "d3f:T1044",
    "d3f:T1045",
    "d3f:T1046",
    "d3f:T1047",
    "d3f:T1048",
    "d3f:T1048.001",
    "d3f:T1048.002",
    "d3f:T1048.003",
    "d3f:T1049",
    "d3f:T1050",
    "d3f:T1052",
    "d3f:T1052.001",
    "d3f:T1053",
    "d3f:T1053.001",
    "d3f:T1053.002",
    "d3f:T1053.003",
    "d3f:T1053.004",
    "d3f:T1053.005",
    "d3f:T1053.006",
    "d3f:T1053.007",
    "d3f:T1054",
    "d3f:T1055",
    "d3f:T1055.001",
    "d3f:T1055.002",
    "d3f:T1055.003",
    "d3f:T1055.004",
    "d3f:T1055.005",
    "d3f:T1055.008",
    "d3f:T1055.009",
    "d3f:T1055.011",
    "d3f:T1055.012",
    "d3f:T1055.013",
    "d3f:T1055.014",
    "d3f:T1055.015",
    "d3f:T1056",
    "d3f:T1056.001",
    "d3f:T1056.002",
    "d3f:T1056.003",
    "d3f:T1056.004",
    "d3f:T1057",
    "d3f:T1058",
    "d3f:T1059",
    "d3f:T1059.001",
    "d3f:T1059.002",
    "d3f:T1059.003",
    "d3f:T1059.004",
    "d3f:T1059.005",
    "d3f:T1059.006",
    "d3f:T1059.007",
    "d3f:T1059.008",
    "d3f:T1060",
    "d3f:T1063",
    "d3f:T1065",
    "d3f:T1066",
    "d3f:T1067",
    "d3f:T1068",
    "d3f:T1069",
    "d3f:T1069.001",
    "d3f:T1069.002",
    "d3f:T1069.003",
    "d3f:T1070",
    "d3f:T1070.001",
    "d3f:T1070.002",
    "d3f:T1070.003",
    "d3f:T1070.004",
    "d3f:T1070.005",
    "d3f:T1070.006",
    "d3f:T1071",
    "d3f:T1071.001",
    "d3f:T1071.002",
    "d3f:T1071.003",
    "d3f:T1071.004",
    "d3f:T1072",
    "d3f:T1073",
    "d3f:T1074",
    "d3f:T1074.001",
    "d3f:T1074.002",
    "d3f:T1075",
    "d3f:T1076",
    "d3f:T1077",
    "d3f:T1078",
    "d3f:T1078.001",
    "d3f:T1078.002",
    "d3f:T1078.003",
    "d3f:T1078.004",
    "d3f:T1079",
    "d3f:T1080",
    "d3f:T1081",
    "d3f:T1082",
    "d3f:T1083",
    "d3f:T1084",
    "d3f:T1085",
    "d3f:T1086",
    "d3f:T1087",
    "d3f:T1087.001",
    "d3f:T1087.002",
    "d3f:T1087.003",
    "d3f:T1087.004",
    "d3f:T1088",
    "d3f:T1089",
    "d3f:T1090",
    "d3f:T1090.001",
    "d3f:T1090.002",
    "d3f:T1090.003",
    "d3f:T1090.004",
    "d3f:T1091",
    "d3f:T1092",
    "d3f:T1093",
    "d3f:T1094",
    "d3f:T1095",
    "d3f:T1096",
    "d3f:T1097",
    "d3f:T1098",
    "d3f:T1098.001",
    "d3f:T1098.002",
    "d3f:T1098.003",
    "d3f:T1098.004",
    "d3f:T1098.005",
    "d3f:T1099",
    "d3f:T1100",
    "d3f:T1101",
    "d3f:T1102",
    "d3f:T1102.001",
    "d3f:T1102.002",
    "d3f:T1102.003",
    "d3f:T1103",
    "d3f:T1104",
    "d3f:T1105",
    "d3f:T1106",
    "d3f:T1107",
    "d3f:T1109",
    "d3f:T1110",
    "d3f:T1110.001",
    "d3f:T1110.002",
    "d3f:T1110.003",
    "d3f:T1110.004",
    "d3f:T1111",
    "d3f:T1112",
    "d3f:T1113",
    "d3f:T1114",
    "d3f:T1114.001",
    "d3f:T1114.002",
    "d3f:T1114.003",
    "d3f:T1115",
    "d3f:T1116",
    "d3f:T1117",
    "d3f:T1118",
    "d3f:T1119",
    "d3f:T1120",
    "d3f:T1121",
    "d3f:T1122",
    "d3f:T1123",
    "d3f:T1124",
    "d3f:T1125",
    "d3f:T1126",
    "d3f:T1127",
    "d3f:T1127.001",
    "d3f:T1128",
    "d3f:T1129",
    "d3f:T1130",
    "d3f:T1131",
    "d3f:T1132",
    "d3f:T1132.001",
    "d3f:T1132.002",
    "d3f:T1133",
    "d3f:T1134",
    "d3f:T1134.001",
    "d3f:T1134.002",
    "d3f:T1134.003",
    "d3f:T1134.004",
    "d3f:T1134.005",
    "d3f:T1135",
    "d3f:T1136",
    "d3f:T1136.001",
    "d3f:T1136.002",
    "d3f:T1136.003",
    "d3f:T1137",
    "d3f:T1137.001",
    "d3f:T1137.002",
    "d3f:T1137.003",
    "d3f:T1137.004",
    "d3f:T1137.005",
    "d3f:T1137.006",
    "d3f:T1138",
    "d3f:T1139",
    "d3f:T1140",
    "d3f:T1141",
    "d3f:T1142",
    "d3f:T1143",
    "d3f:T1144",
    "d3f:T1145",
    "d3f:T1146",
    "d3f:T1147",
    "d3f:T1148",
    "d3f:T1150",
    "d3f:T1151",
    "d3f:T1152",
    "d3f:T1154",
    "d3f:T1155",
    "d3f:T1156",
    "d3f:T1157",
    "d3f:T1158",
    "d3f:T1159",
    "d3f:T1160",
    "d3f:T1161",
    "d3f:T1162",
    "d3f:T1163",
    "d3f:T1164",
    "d3f:T1165",
    "d3f:T1166",
    "d3f:T1167",
    "d3f:T1168",
    "d3f:T1169",
    "d3f:T1170",
    "d3f:T1171",
    "d3f:T1172",
    "d3f:T1173",
    "d3f:T1174",
    "d3f:T1176",
    "d3f:T1177",
    "d3f:T1178",
    "d3f:T1179",
    "d3f:T1180",
    "d3f:T1181",
    "d3f:T1182",
    "d3f:T1183",
    "d3f:T1184",
    "d3f:T1185",
    "d3f:T1186",
    "d3f:T1187",
    "d3f:T1188",
    "d3f:T1189",
    "d3f:T1190",
    "d3f:T1191",
    "d3f:T1192",
    "d3f:T1193",
    "d3f:T1194",
    "d3f:T1195",
    "d3f:T1195.001",
    "d3f:T1195.002",
    "d3f:T1195.003",
    "d3f:T1196",
    "d3f:T1197",
    "d3f:T1198",
    "d3f:T1199",
    "d3f:T1200",
    "d3f:T1201",
    "d3f:T1202",
    "d3f:T1203",
    "d3f:T1204",
    "d3f:T1204.001",
    "d3f:T1204.002",
    "d3f:T1204.003",
    "d3f:T1205",
    "d3f:T1205.001",
    "d3f:T1206",
    "d3f:T1207",
    "d3f:T1208",
    "d3f:T1209",
    "d3f:T1210",
    "d3f:T1211",
    "d3f:T1212",
    "d3f:T1213",
    "d3f:T1213.001",
    "d3f:T1213.002",
    "d3f:T1213.003",
    "d3f:T1214",
    "d3f:T1215",
    "d3f:T1216",
    "d3f:T1216.001",
    "d3f:T1217",
    "d3f:T1218",
    "d3f:T1218.001",
    "d3f:T1218.002",
    "d3f:T1218.003",
    "d3f:T1218.004",
    "d3f:T1218.005",
    "d3f:T1218.007",
    "d3f:T1218.008",
    "d3f:T1218.009",
    "d3f:T1218.010",
    "d3f:T1218.011",
    "d3f:T1218.012",
    "d3f:T1218.013",
    "d3f:T1218.014",
    "d3f:T1219",
    "d3f:T1220",
    "d3f:T1221",
    "d3f:T1222",
    "d3f:T1222.001",
    "d3f:T1222.002",
    "d3f:T1223",
    "d3f:T1480",
    "d3f:T1480.001",
    "d3f:T1482",
    "d3f:T1483",
    "d3f:T1484",
    "d3f:T1484.001",
    "d3f:T1484.002",
    "d3f:T1485",
    "d3f:T1486",
    "d3f:T1487",
    "d3f:T1488",
    "d3f:T1489",
    "d3f:T1490",
    "d3f:T1491",
    "d3f:T1491.001",
    "d3f:T1491.002",
    "d3f:T1492",
    "d3f:T1493",
    "d3f:T1494",
    "d3f:T1495",
    "d3f:T1496",
    "d3f:T1497",
    "d3f:T1497.001",
    "d3f:T1497.002",
    "d3f:T1497.003",
    "d3f:T1498",
    "d3f:T1498.001",
    "d3f:T1498.002",
    "d3f:T1499",
    "d3f:T1499.001",
    "d3f:T1499.002",
    "d3f:T1499.003",
    "d3f:T1499.004",
    "d3f:T1500",
    "d3f:T1501",
    "d3f:T1502",
    "d3f:T1503",
    "d3f:T1504",
    "d3f:T1505",
    "d3f:T1505.001",
    "d3f:T1505.002",
    "d3f:T1505.003",
    "d3f:T1505.004",
    "d3f:T1505.005",
    "d3f:T1506",
    "d3f:T1514",
    "d3f:T1518",
    "d3f:T1518.001",
    "d3f:T1519",
    "d3f:T1522",
    "d3f:T1525",
    "d3f:T1526",
    "d3f:T1527",
    "d3f:T1528",
    "d3f:T1529",
    "d3f:T1530",
    "d3f:T1531",
    "d3f:T1534",
    "d3f:T1535",
    "d3f:T1536",
    "d3f:T1537",
    "d3f:T1538",
    "d3f:T1539",
    "d3f:T1542",
    "d3f:T1542.001",
    "d3f:T1542.002",
    "d3f:T1542.003",
    "d3f:T1542.004",
    "d3f:T1542.005",
    "d3f:T1543",
    "d3f:T1543.001",
    "d3f:T1543.002",
    "d3f:T1543.003",
    "d3f:T1543.004",
    "d3f:T1546",
    "d3f:T1546.001",
    "d3f:T1546.002",
    "d3f:T1546.003",
    "d3f:T1546.004",
    "d3f:T1546.005",
    "d3f:T1546.006",
    "d3f:T1546.007",
    "d3f:T1546.008",
    "d3f:T1546.009",
    "d3f:T1546.010",
    "d3f:T1546.011",
    "d3f:T1546.012",
    "d3f:T1546.013",
    "d3f:T1546.014",
    "d3f:T1546.015",
    "d3f:T1547",
    "d3f:T1547.001",
    "d3f:T1547.002",
    "d3f:T1547.003",
    "d3f:T1547.004",
    "d3f:T1547.005",
    "d3f:T1547.006",
    "d3f:T1547.007",
    "d3f:T1547.008",
    "d3f:T1547.009",
    "d3f:T1547.010",
    "d3f:T1547.011",
    "d3f:T1547.012",
    "d3f:T1547.013",
    "d3f:T1547.014",
    "d3f:T1547.015",
    "d3f:T1548",
    "d3f:T1548.001",
    "d3f:T1548.002",
    "d3f:T1548.003",
    "d3f:T1548.004",
    "d3f:T1550",
    "d3f:T1550.001",
    "d3f:T1550.002",
    "d3f:T1550.003",
    "d3f:T1550.004",
    "d3f:T1552",
    "d3f:T1552.001",
    "d3f:T1552.002",
    "d3f:T1552.003",
    "d3f:T1552.004",
    "d3f:T1552.005",
    "d3f:T1552.006",
    "d3f:T1552.007",
    "d3f:T1553",
    "d3f:T1553.001",
    "d3f:T1553.002",
    "d3f:T1553.003",
    "d3f:T1553.004",
    "d3f:T1553.005",
    "d3f:T1553.006",
    "d3f:T1554",
    "d3f:T1555",
    "d3f:T1555.001",
    "d3f:T1555.002",
    "d3f:T1555.003",
    "d3f:T1555.004",
    "d3f:T1555.005",
    "d3f:T1556",
    "d3f:T1556.001",
    "d3f:T1556.002",
    "d3f:T1556.003",
    "d3f:T1556.004",
    "d3f:T1556.005",
    "d3f:T1557",
    "d3f:T1557.001",
    "d3f:T1557.002",
    "d3f:T1557.003",
    "d3f:T1558",
    "d3f:T1558.001",
    "d3f:T1558.002",
    "d3f:T1558.003",
    "d3f:T1558.004",
    "d3f:T1559",
    "d3f:T1559.001",
    "d3f:T1559.002",
    "d3f:T1559.003",
    "d3f:T1560",
    "d3f:T1560.001",
    "d3f:T1560.002",
    "d3f:T1560.003",
    "d3f:T1561",
    "d3f:T1561.001",
    "d3f:T1561.002",
    "d3f:T1562",
    "d3f:T1562.001",
    "d3f:T1562.002",
    "d3f:T1562.003",
    "d3f:T1562.004",
    "d3f:T1562.006",
    "d3f:T1562.007",
    "d3f:T1562.008",
    "d3f:T1562.009",
    "d3f:T1562.010",
    "d3f:T1563",
    "d3f:T1563.001",
    "d3f:T1563.002",
    "d3f:T1564",
    "d3f:T1564.001",
    "d3f:T1564.002",
    "d3f:T1564.003",
    "d3f:T1564.004",
    "d3f:T1564.005",
    "d3f:T1564.006",
    "d3f:T1564.007",
    "d3f:T1564.008",
    "d3f:T1564.009",
    "d3f:T1564.010",
    "d3f:T1565",
    "d3f:T1565.001",
    "d3f:T1565.002",
    "d3f:T1565.003",
    "d3f:T1566",
    "d3f:T1566.001",
    "d3f:T1566.002",
    "d3f:T1566.003",
    "d3f:T1567",
    "d3f:T1567.001",
    "d3f:T1567.002",
    "d3f:T1568",
    "d3f:T1568.001",
    "d3f:T1568.002",
    "d3f:T1568.003",
    "d3f:T1569",
    "d3f:T1569.001",
    "d3f:T1569.002",
    "d3f:T1570",
    "d3f:T1571",
    "d3f:T1572",
    "d3f:T1573",
    "d3f:T1573.001",
    "d3f:T1573.002",
    "d3f:T1574",
    "d3f:T1574.001",
    "d3f:T1574.002",
    "d3f:T1574.004",
    "d3f:T1574.005",
    "d3f:T1574.006",
    "d3f:T1574.007",
    "d3f:T1574.008",
    "d3f:T1574.009",
    "d3f:T1574.010",
    "d3f:T1574.011",
    "d3f:T1574.012",
    "d3f:T1574.013",
    "d3f:T1578",
    "d3f:T1578.001",
    "d3f:T1578.002",
    "d3f:T1578.003",
    "d3f:T1578.004",
    "d3f:T1580",
    "d3f:T1583",
    "d3f:T1583.001",
    "d3f:T1583.002",
    "d3f:T1583.003",
    "d3f:T1583.004",
    "d3f:T1583.005",
    "d3f:T1583.006",
    "d3f:T1584",
    "d3f:T1584.001",
    "d3f:T1584.002",
    "d3f:T1584.003",
    "d3f:T1584.004",
    "d3f:T1584.005",
    "d3f:T1584.006",
    "d3f:T1585",
    "d3f:T1585.001",
    "d3f:T1585.002",
    "d3f:T1586",
    "d3f:T1586.001",
    "d3f:T1586.002",
    "d3f:T1587",
    "d3f:T1587.001",
    "d3f:T1587.002",
    "d3f:T1587.003",
    "d3f:T1587.004",
    "d3f:T1588",
    "d3f:T1588.001",
    "d3f:T1588.002",
    "d3f:T1588.003",
    "d3f:T1588.004",
    "d3f:T1588.005",
    "d3f:T1588.006",
    "d3f:T1589",
    "d3f:T1589.001",
    "d3f:T1589.002",
    "d3f:T1589.003",
    "d3f:T1590",
    "d3f:T1590.001",
    "d3f:T1590.002",
    "d3f:T1590.003",
    "d3f:T1590.004",
    "d3f:T1590.005",
    "d3f:T1590.006",
    "d3f:T1591",
    "d3f:T1591.001",
    "d3f:T1591.002",
    "d3f:T1591.003",
    "d3f:T1591.004",
    "d3f:T1592",
    "d3f:T1592.001",
    "d3f:T1592.002",
    "d3f:T1592.003",
    "d3f:T1592.004",
    "d3f:T1593",
    "d3f:T1593.001",
    "d3f:T1593.002",
    "d3f:T1594",
    "d3f:T1595",
    "d3f:T1595.001",
    "d3f:T1595.002",
    "d3f:T1595.003",
    "d3f:T1596",
    "d3f:T1596.001",
    "d3f:T1596.002",
    "d3f:T1596.003",
    "d3f:T1596.004",
    "d3f:T1596.005",
    "d3f:T1597",
    "d3f:T1597.001",
    "d3f:T1597.002",
    "d3f:T1598",
    "d3f:T1598.001",
    "d3f:T1598.002",
    "d3f:T1598.003",
    "d3f:T1599",
    "d3f:T1599.001",
    "d3f:T1600",
    "d3f:T1600.001",
    "d3f:T1600.002",
    "d3f:T1601",
    "d3f:T1601.001",
    "d3f:T1601.002",
    "d3f:T1602",
    "d3f:T1602.001",
    "d3f:T1602.002",
    "d3f:T1606",
    "d3f:T1606.001",
    "d3f:T1606.002",
    "d3f:T1608",
    "d3f:T1608.001",
    "d3f:T1608.002",
    "d3f:T1608.003",
    "d3f:T1608.004",
    "d3f:T1608.005",
    "d3f:T1609",
    "d3f:T1610",
    "d3f:T1611",
    "d3f:T1612",
    "d3f:T1613",
    "d3f:T1614",
    "d3f:T1614.001",
    "d3f:T1615",
    "d3f:T1619",
    "d3f:T1620",
    "d3f:T1621",
    "d3f:T1622",
    "d3f:T1647"
  ],
  D3F_PROPERTIES: [
    "d3f:abuses",
    "d3f:accessed-by",
    "d3f:accesses",
    "d3f:addressed-by",
    "d3f:addresses",
    "d3f:adds",
    "d3f:analyzes",
    "d3f:assessed-by",
    "d3f:assesses",
    "d3f:associated-with",
    "d3f:attached-to",
    "d3f:attack-may-be-countered-by",
    "d3f:authenticates",
    "d3f:author",
    "d3f:authorizes",
    "d3f:blocks",
    "d3f:broader",
    "d3f:broader-transitive",
    "d3f:cited-by",
    "d3f:cites",
    "d3f:claimed-by",
    "d3f:claims",
    "d3f:configures",
    "d3f:connects",
    "d3f:contained-by",
    "d3f:contains",
    "d3f:contributor",
    "d3f:copies",
    "d3f:copy-of",
    "d3f:counters",
    "d3f:created-by",
    "d3f:creates",
    "d3f:creator",
    "d3f:d3fend-catalog-object-property",
    "d3f:d3fend-general-object-property",
    "d3f:d3fend-kb-object-property",
    "d3f:d3fend-object-property",
    "d3f:d3fend-process-object-property",
    "d3f:d3fend-tactical-verb-property",
    "d3f:d3fend-use-case-object-property",
    "d3f:deceives",
    "d3f:deceives-with",
    "d3f:deletes",
    "d3f:dependent",
    "d3f:dependsOn",
    "d3f:detects",
    "d3f:disables",
    "d3f:drives",
    "d3f:employed-by",
    "d3f:employs",
    "d3f:enabled-by",
    "d3f:enables",
    "d3f:encrypts",
    "d3f:end",
    "d3f:enumerates",
    "d3f:evaluated-by",
    "d3f:evaluates",
    "d3f:evaluator",
    "d3f:evicts",
    "d3f:exactly",
    "d3f:executes",
    "d3f:expected-latency",
    "d3f:extends",
    "d3f:features",
    "d3f:filters",
    "d3f:forges",
    "d3f:fork",
    "d3f:hardens",
    "d3f:has-account",
    "d3f:has-audience",
    "d3f:has-contribution",
    "d3f:has-contributor",
    "d3f:has-dependent",
    "d3f:has-evidence",
    "d3f:has-feature",
    "d3f:has-goal",
    "d3f:has-implementation",
    "d3f:has-location",
    "d3f:has-member",
    "d3f:has-prerequisite",
    "d3f:has-procedure",
    "d3f:has-recipient",
    "d3f:has-sender",
    "d3f:has-weakness",
    "d3f:hides",
    "d3f:identified-by",
    "d3f:identifies",
    "d3f:impairs",
    "d3f:implemented-by",
    "d3f:implements",
    "d3f:injects",
    "d3f:installs",
    "d3f:instructed-by",
    "d3f:instructs",
    "d3f:interprets",
    "d3f:inventoried-by",
    "d3f:inventories",
    "d3f:invoked-by",
    "d3f:invokes",
    "d3f:isolates",
    "d3f:kb-reference",
    "d3f:kb-reference-of",
    "d3f:latency",
    "d3f:license",
    "d3f:limits",
    "d3f:loaded-by",
    "d3f:loads",
    "d3f:manages",
    "d3f:mapped-by",
    "d3f:maps",
    "d3f:may-access",
    "d3f:may-add",
    "d3f:may-be-accessed-by",
    "d3f:may-be-associated-with",
    "d3f:may-be-contained-by",
    "d3f:may-be-created-by",
    "d3f:may-be-deceived-by",
    "d3f:may-be-detected-by",
    "d3f:may-be-evicted-by",
    "d3f:may-be-hardened-against-by",
    "d3f:may-be-invoked-by",
    "d3f:may-be-isolated-by",
    "d3f:may-be-modified-by",
    "d3f:may-be-tactically-associated-with",
    "d3f:may-be-weakness-of",
    "d3f:may-contain",
    "d3f:may-counter",
    "d3f:may-counter-attack",
    "d3f:may-create",
    "d3f:may-deceive",
    "d3f:may-detect",
    "d3f:may-disable",
    "d3f:may-evaluate",
    "d3f:may-evict",
    "d3f:may-execute",
    "d3f:may-harden",
    "d3f:may-have-weakness",
    "d3f:may-interpret",
    "d3f:may-invoke",
    "d3f:may-isolate",
    "d3f:may-map",
    "d3f:may-modify",
    "d3f:may-produce",
    "d3f:may-query",
    "d3f:may-run",
    "d3f:may-transfer",
    "d3f:member-of",
    "d3f:modified-by",
    "d3f:modifies",
    "d3f:modifies-part",
    "d3f:monitors",
    "d3f:narrower",
    "d3f:narrower-transitive",
    "d3f:neutralizes",
    "d3f:next",
    "d3f:obfuscates",
    "d3f:originates-from",
    "d3f:owns",
    "d3f:process-ancestor",
    "d3f:process-image-path",
    "d3f:process-parent",
    "d3f:process-property",
    "d3f:process-user",
    "d3f:produced-by",
    "d3f:producer",
    "d3f:produces",
    "d3f:provider",
    "d3f:provides",
    "d3f:publisher",
    "d3f:publishes",
    "d3f:queries",
    "d3f:reads",
    "d3f:recorded-in",
    "d3f:records",
    "d3f:related",
    "d3f:restricts",
    "d3f:runs",
    "d3f:seller",
    "d3f:sells",
    "d3f:semantic-relation",
    "d3f:spoofs",
    "d3f:start",
    "d3f:strengthens",
    "d3f:submitter",
    "d3f:summarizes",
    "d3f:suspends",
    "d3f:terminates",
    "d3f:unmounts",
    "d3f:updates",
    "d3f:use-limits",
    "d3f:used-by",
    "d3f:uses",
    "d3f:validates",
    "d3f:validator",
    "d3f:verifies",
    "d3f:weakness-of",
    "d3f:writes"
  ]
}, Y = {
  "d3f:EncryptionAlgorithm": "\\ud83d\\udd10",
  "d3f:ApplicationLayerFirewall": "\\ud83d\\udee1",
  "d3f:AsymmetricKey": "fa:fa-key",
  "d3f:Authentication": "fa:fa-user-lock",
  "d3f:AuthorizationService": "fab:fa-openid",
  "d3f:Browser": "fab:fa-firefox",
  "d3f:Certificate": "fa:fa-certificate",
  "d3f:CertificateAuthority": "fa:fa-certificate fa:fa-lock",
  "d3f:CertificateRevocationList": "fa:fa-certificate fa:fa-ban",
  "d3f:Configuration": "fa:fa-file",
  "d3f:ContainerImage": "fab:fa-docker",
  "d3f:ContainerOrchestrationSoftware": "fab:fa-docker",
  "d3f:ContainerProcess": "fa:fa-cube",
  "d3f:ContainerRuntime": "fab:fa-docker",
  "d3f:Database": "fa:fa-database",
  "d3f:DatabaseQuery": "fa:fa-database fa:fa-magnifying-glass",
  "d3f:DesktopComputer": "fa:fa-desktop",
  "d3f:DNSServer": "fa:fa-atlas",
  "d3f:DocumentFile": "fab:fa-readme",
  "d3f:Email": "fa:fa-envelope",
  "d3f:EncryptedTunnels": "fab:fa-expeditedssl",
  "d3f:ExecutableScript": "fa:fa-file-code",
  "d3f:FileSystem": "fa:fa-folder",
  "d3f:Firewall": "\\ud83d\\udee1",
  "d3f:FlashMemory": "fa:fa-sd-card",
  "d3f:InternetNetworkTraffic": "fa:fa-cloud fa:fa-globe",
  "d3f:LaptopComputer": "fa:fa-laptop",
  "d3f:Log": "fa:fa-scroll",
  "d3f:LogFile": "fa:fa-scroll",
  "d3f:Mailbox": "\\ud83d\\udcec",
  "d3f:MailNetworkTraffic": "fa:fa-envelope",
  "d3f:MailServer": "\\ud83d\\udcec",
  "d3f:MailService": "\\ud83d\\udcec",
  "d3f:MemoryManagementUnit": "fa:fa-memory",
  "d3f:MemoryPool": "fa:fa-memory",
  "d3f:MessageAuthentication": "fa:fa-envelope fa:fa-file-signature",
  "d3f:MessageTransferAgent": "\\ud83d\\udcec",
  "d3f:MobilePhone": "fa:fa-mobile",
  "d3f:Multi-factorAuthentication": "fa:fa-fingerprint",
  "d3f:Network": "fa:fa-network-wired",
  "d3f:NetworkLink": "fa:fa-ethernet fa:fa-link",
  "d3f:NetworkTrafficPolicyMapping": "fa:fa-network-wired \\ud83d\\udd00",
  "d3f:OperatingSystem": "fab:fa-linux",
  "d3f:Partition": "fa:fa-hdd",
  "d3f:PasswordDatabase": "fa:fa-key fa:fa-database",
  "d3f:PhysicalLocation": "fa:fa-building",
  "d3f:PrivateKey": "fa:fa-key",
  "d3f:PrivilegedUserAccount": "fa:fa-user-plus",
  "d3f:Process": "⚙️",
  "d3f:PublicKey": "fa:fa-key",
  "d3f:RDPSession": "fa:fa-desktop fa:fa-lock",
  "d3f:ReverseProxyServer": "fab:fa-uncharted",
  "d3f:Router": "fab:fa-uncharted",
  "d3f:Server": "fa:fa-server",
  "d3f:Session": "fa:fa-cookie",
  "d3f:SessionCookie": "fa:fa-cookie",
  "d3f:SoftwarePackage": "fa:fa-box fa:fa-box-archive",
  "d3f:SSHSession": "fa:fa-terminal fa:fa-lock",
  "d3f:SymmetricKey": "fa:fa-key",
  "d3f:TabletComputer": "fa:fa-mobile",
  "d3f:TaskSchedule": "fa:fa-clock",
  "d3f:User": "fa:fa-user",
  "d3f:UserAccount": "fa:fa-user",
  "d3f:VirtualizationSoftware": "fa:fa-server fa:fa-cube",
  "d3f:VirtualMemorySpace": "fa:fa-memory",
  "d3f:Volume": "fa:fa-hockey-puck",
  "d3f:VPNServer": "fa:fa-lock \\u21cb",
  "d3f:WebApplicationFirewall": "\\ud83d\\udee1",
  "d3f:WebResourceAccess": "{..}",
  "d3f:WebServerApplication": "{fab:fa-whmcs}",
  "d3f:SoftwareArtifactServer": "fa:fa-boxes",
  "d3f:WirelessAccessPoint": "fa:fa-tower-cell",
  "d3f:WirelessRouter": "fa:fa-wifi"
};
function ee(e, d, t, f) {
  let s = e.substring(0, d), i = e.substring(d);
  return i = i.replace(t, f), s + i;
}
function de(e) {
  const d = Y[e] || e;
  let t = "";
  return N.D3F_DIGITAL_ARTIFACTS.includes(e) ? t = `https://next.d3fend.mitre.org/dao/artifact/${e}/` : N.D3F_DEFENSIVE_TECHNIQUES.includes(e) && (t = `https://next.d3fend.mitre.org/dao/technique/${e}/`), `<a title='${e}' href='${t}' target='_blank' rel='noopener noreferrer'>${d}</a>`;
}
const fe = function(e) {
  let d = e.match(/d3f:\w+/g);
  y.debug("renderD3fendIcons", e, d);
  let t = 0;
  return d && d.forEach((f) => {
    let s = de(f);
    e = ee(
      e,
      t,
      f,
      s
    ), t += s.length - f.length, y.debug("found", f, e);
  }), y.debug("new text", e), e;
}, M = new Z();
let S = {};
const te = {};
let v = {};
const ae = async function(e, d, t, f, s, i, l) {
  const p = t.select(`[id="${d}"]`).insert("g").attr("class", "nodes"), n = Object.keys(e);
  return await Promise.all(
    n.map(async function(T) {
      const o = e[T];
      let m = "default";
      o.classes.length > 0 && (m = o.classes.join(" ")), m = m + " flowchart-label";
      const D = R(o.styles);
      let a = o.text !== void 0 ? o.text : o.id;
      a = fe(a);
      const u = { width: 0, height: 0 }, b = [
        {
          id: o.id + "-west",
          layoutOptions: {
            "port.side": "WEST"
          }
        },
        {
          id: o.id + "-east",
          layoutOptions: {
            "port.side": "EAST"
          }
        },
        {
          id: o.id + "-south",
          layoutOptions: {
            "port.side": "SOUTH"
          }
        },
        {
          id: o.id + "-north",
          layoutOptions: {
            "port.side": "NORTH"
          }
        }
      ];
      let g = 0, c = "", w = {};
      switch (o.type) {
        case "round":
          g = 5, c = "rect";
          break;
        case "square":
          c = "rect";
          break;
        case "diamond":
          c = "question", w = {
            portConstraints: "FIXED_SIDE"
          };
          break;
        case "hexagon":
          c = "hexagon";
          break;
        case "odd":
          c = "rect_left_inv_arrow";
          break;
        case "lean_right":
          c = "lean_right";
          break;
        case "lean_left":
          c = "lean_left";
          break;
        case "trapezoid":
          c = "trapezoid";
          break;
        case "inv_trapezoid":
          c = "inv_trapezoid";
          break;
        case "odd_right":
          c = "rect_left_inv_arrow";
          break;
        case "circle":
          c = "circle";
          break;
        case "ellipse":
          c = "ellipse";
          break;
        case "stadium":
          c = "stadium";
          break;
        case "subroutine":
          c = "subroutine";
          break;
        case "cylinder":
          c = "cylinder";
          break;
        case "group":
          c = "rect";
          break;
        case "doublecircle":
          c = "doublecircle";
          break;
        default:
          c = "rect";
      }
      const P = {
        labelStyle: D.labelStyle,
        shape: c,
        labelText: a,
        labelType: o.labelType,
        rx: g,
        ry: g,
        class: m,
        style: D.style,
        id: o.id,
        link: o.link,
        linkTarget: o.linkTarget,
        tooltip: s.db.getTooltip(o.id) || "",
        domId: s.db.lookUpDomId(o.id),
        haveCallback: o.haveCallback,
        width: o.type === "group" ? 500 : void 0,
        dir: o.dir,
        type: o.type,
        props: o.props,
        padding: E().d3fend.padding
      };
      let A, C;
      if (P.type !== "group")
        C = await z(p, P, o.dir), A = C.node().getBBox();
      else {
        f.createElementNS("http://www.w3.org/2000/svg", "text");
        const { shapeSvg: k, bbox: h } = await q(p, P, void 0, !0);
        u.width = h.width, u.wrappingWidth = E().d3fend.wrappingWidth, u.height = h.height, u.labelNode = k.node(), P.labelData = u;
      }
      const I = {
        id: o.id,
        ports: o.type === "diamond" ? b : [],
        // labelStyle: styles.labelStyle,
        // shape: _shape,
        layoutOptions: w,
        labelText: a,
        labelData: u,
        // labels: [{ text: vertexText }],
        // rx: radius,
        // ry: radius,
        // class: classStr,
        // style: styles.style,
        // link: vertex.link,
        // linkTarget: vertex.linkTarget,
        // tooltip: diagObj.db.getTooltip(vertex.id) || '',
        domId: s.db.lookUpDomId(o.id),
        // haveCallback: vertex.haveCallback,
        width: A == null ? void 0 : A.width,
        height: A == null ? void 0 : A.height,
        // dir: vertex.dir,
        type: o.type,
        // props: vertex.props,
        // padding: getConfig().d3fend.padding,
        // boundingBox,
        el: C,
        parent: i.parentById[o.id]
      };
      v[P.id] = I;
    })
  ), l;
}, O = (e, d, t) => {
  const f = {
    TB: {
      in: {
        north: "north"
      },
      out: {
        south: "west",
        west: "east",
        east: "south"
      }
    },
    LR: {
      in: {
        west: "west"
      },
      out: {
        east: "south",
        south: "north",
        north: "east"
      }
    },
    RL: {
      in: {
        east: "east"
      },
      out: {
        west: "north",
        north: "south",
        south: "west"
      }
    },
    BT: {
      in: {
        south: "south"
      },
      out: {
        north: "east",
        east: "west",
        west: "north"
      }
    }
  };
  return f.TD = f.TB, y.info("abc88", t, d, e), f[t][d][e];
}, B = (e, d, t) => {
  if (y.info("getNextPort abc88", { node: e, edgeDirection: d, graphDirection: t }), !S[e])
    switch (t) {
      case "TB":
      case "TD":
        S[e] = {
          inPosition: "north",
          outPosition: "south"
        };
        break;
      case "BT":
        S[e] = {
          inPosition: "south",
          outPosition: "north"
        };
        break;
      case "RL":
        S[e] = {
          inPosition: "east",
          outPosition: "west"
        };
        break;
      case "LR":
        S[e] = {
          inPosition: "west",
          outPosition: "east"
        };
        break;
    }
  const f = d === "in" ? S[e].inPosition : S[e].outPosition;
  return d === "in" ? S[e].inPosition = O(
    S[e].inPosition,
    d,
    t
  ) : S[e].outPosition = O(
    S[e].outPosition,
    d,
    t
  ), f;
}, ie = (e, d) => {
  let t = e.start, f = e.end;
  const s = t, i = f, l = v[t], r = v[f];
  return !l || !r ? { source: t, target: f } : (l.type === "diamond" && (t = `${t}-${B(t, "out", d)}`), r.type === "diamond" && (f = `${f}-${B(f, "in", d)}`), { source: t, target: f, sourceId: s, targetId: i });
}, re = function(e, d, t, f) {
  y.info("abc78 edges = ", e);
  const s = f.insert("g").attr("class", "edgeLabels");
  let i = {}, l = d.db.getDirection(), r, p;
  if (e.defaultStyle !== void 0) {
    const n = R(e.defaultStyle);
    r = n.style, p = n.labelStyle;
  }
  return e.forEach(function(n) {
    const T = "L-" + n.start + "-" + n.end;
    i[T] === void 0 ? (i[T] = 0, y.info("abc78 new entry", T, i[T])) : (i[T]++, y.info("abc78 new entry", T, i[T]));
    let o = T + "-" + i[T];
    y.info("abc78 new link id to be used is", T, o, i[T]);
    const m = "LS-" + n.start, D = "LE-" + n.end, a = { style: "", labelStyle: "" };
    switch (a.minlen = n.length || 1, n.type === "arrow_open" ? a.arrowhead = "none" : a.arrowhead = "normal", a.arrowTypeStart = "arrow_open", a.arrowTypeEnd = "arrow_open", n.type) {
      case "double_arrow_cross":
        a.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        a.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        a.arrowTypeStart = "arrow_point";
      case "arrow_point":
        a.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        a.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        a.arrowTypeEnd = "arrow_circle";
        break;
    }
    let u = "", b = "";
    switch (n.stroke) {
      case "normal":
        u = "fill:none;", r !== void 0 && (u = r), p !== void 0 && (b = p), a.thickness = "normal", a.pattern = "solid";
        break;
      case "dotted":
        a.thickness = "normal", a.pattern = "dotted", a.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        a.thickness = "thick", a.pattern = "solid", a.style = "stroke-width: 3.5px;fill:none;";
        break;
    }
    if (n.style !== void 0) {
      const C = R(n.style);
      u = C.style, b = C.labelStyle;
    }
    a.style = a.style += u, a.labelStyle = a.labelStyle += b, n.interpolate !== void 0 ? a.curve = L(n.interpolate, x) : e.defaultInterpolate !== void 0 ? a.curve = L(e.defaultInterpolate, x) : a.curve = L(te.curve, x), n.text === void 0 ? n.style !== void 0 && (a.arrowheadStyle = "fill: #333") : (a.arrowheadStyle = "fill: #333", a.labelpos = "c"), a.labelType = n.labelType, a.label = n.text.replace(V.lineBreakRegex, `
`), n.style === void 0 && (a.style = a.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), a.labelStyle = a.labelStyle.replace("color:", "fill:"), a.id = o, a.classes = "flowchart-link " + m + " " + D;
    const g = K(s, a), { source: c, target: w, sourceId: P, targetId: A } = ie(n, l);
    y.debug("abc78 source and target", c, w), t.edges.push({
      id: "e" + n.start + n.end,
      sources: [c],
      targets: [w],
      sourceId: P,
      targetId: A,
      labelEl: g,
      labels: [
        {
          width: a.width,
          height: a.height,
          orgWidth: a.width,
          orgHeight: a.height,
          text: a.label,
          layoutOptions: {
            "edgeLabels.inline": "true",
            "edgeLabels.placement": "CENTER"
          }
        }
      ],
      edgeData: a
    });
  }), t;
}, oe = function(e, d, t, f, s) {
  let i = "";
  f && (i = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, i = i.replace(/\(/g, "\\("), i = i.replace(/\)/g, "\\)")), J(e, d, i, s, t);
}, ne = function(e, d) {
  return y.info("Extracting classes"), d.db.getClasses();
}, se = function(e) {
  const d = { parentById: {}, childrenById: {} }, t = e.getSubGraphs();
  return y.info("Subgraphs - ", t), t.forEach(function(f) {
    f.nodes.forEach(function(s) {
      d.parentById[s] = f.id, d.childrenById[f.id] === void 0 && (d.childrenById[f.id] = []), d.childrenById[f.id].push(s);
    });
  }), t.forEach(function(f) {
    f.id, d.parentById[f.id] !== void 0 && d.parentById[f.id];
  }), d;
}, ce = function(e, d, t) {
  const f = j(e, d, t);
  if (f === void 0 || f === "root")
    return { x: 0, y: 0 };
  const s = v[f].offset;
  return { x: s.posX, y: s.posY };
}, le = function(e, d, t, f, s, i) {
  const l = ce(d.sourceId, d.targetId, s), r = d.sections[0].startPoint, p = d.sections[0].endPoint, T = (d.sections[0].bendPoints ? d.sections[0].bendPoints : []).map((w) => [w.x + l.x, w.y + l.y]), o = [
    [r.x + l.x, r.y + l.y],
    ...T,
    [p.x + l.x, p.y + l.y]
  ], { x: m, y: D } = Q(d.edgeData), a = X().x(m).y(D).curve(x), u = e.insert("path").attr("d", a(o)).attr("class", "path " + t.classes).attr("fill", "none"), b = e.insert("g").attr("class", "edgeLabel"), g = F(b.node().appendChild(d.labelEl)), c = g.node().firstChild.getBoundingClientRect();
  g.attr("width", c.width), g.attr("height", c.height), b.attr(
    "transform",
    `translate(${d.labels[0].x + l.x}, ${d.labels[0].y + l.y})`
  ), oe(u, t, f.type, f.arrowMarkerAbsolute, i);
}, U = (e, d) => {
  e.forEach((t) => {
    t.children || (t.children = []);
    const f = d.childrenById[t.id];
    f && f.forEach((s) => {
      t.children.push(v[s]);
    }), U(t.children, d);
  });
}, Te = async function(e, d, t, f) {
  var I;
  f.db.clear(), v = {}, S = {}, f.db.setGen("gen-2"), f.parser.parse(e);
  const s = F("body").append("div").attr("style", "height:400px").attr("id", "cy");
  let i = {
    id: "root",
    layoutOptions: {
      "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      "org.eclipse.elk.padding": "[top=100, left=100, bottom=110, right=110]",
      "elk.layered.spacing.edgeNodeBetweenLayers": "30",
      // 'elk.layered.mergeEdges': 'true',
      "elk.direction": "DOWN"
      // 'elk.ports.sameLayerEdges': true,
      // 'nodePlacement.strategy': 'SIMPLE',
    },
    children: [],
    edges: []
  };
  switch (y.info("Drawing flowchart using v3 renderer", M), f.db.getDirection()) {
    case "BT":
      i.layoutOptions["elk.direction"] = "UP";
      break;
    case "TB":
      i.layoutOptions["elk.direction"] = "DOWN";
      break;
    case "LR":
      i.layoutOptions["elk.direction"] = "RIGHT";
      break;
    case "RL":
      i.layoutOptions["elk.direction"] = "LEFT";
      break;
  }
  const { securityLevel: r, flowchart: p } = E();
  let n;
  r === "sandbox" && (n = F("#i" + d));
  const T = r === "sandbox" ? F(n.nodes()[0].contentDocument.body) : F("body"), o = r === "sandbox" ? n.nodes()[0].contentDocument : document, m = T.select(`[id="${d}"]`);
  G(m, ["point", "circle", "cross"], f.type, d);
  const a = f.db.getVertices();
  let u;
  const b = f.db.getSubGraphs();
  y.info("Subgraphs - ", b);
  for (let k = b.length - 1; k >= 0; k--)
    u = b[k], f.db.addVertex(
      u.id,
      { text: u.title, type: u.labelType },
      "group",
      void 0,
      u.classes,
      u.dir
    );
  const g = m.insert("g").attr("class", "subgraphs"), c = se(f.db);
  i = await ae(a, d, T, o, f, c, i);
  const w = m.insert("g").attr("class", "edges edgePath"), P = f.db.getEdges();
  i = re(P, f, i, m), Object.keys(v).forEach((k) => {
    const h = v[k];
    h.parent || i.children.push(h), c.childrenById[k] !== void 0 && (h.labels = [
      {
        text: h.labelText,
        layoutOptions: {
          "nodeLabels.placement": "[H_CENTER, V_TOP, INSIDE]"
        },
        width: h.labelData.width,
        height: h.labelData.height
        // width: 100,
        // height: 100,
      }
    ], delete h.x, delete h.y, delete h.width, delete h.height);
  }), U(i.children, c), y.info("after layout", JSON.stringify(i, null, 2));
  const C = await M.layout(i);
  H(0, 0, C.children, m, g, f, 0), y.info("after layout", C), (I = C.edges) == null || I.map((k) => {
    le(w, k, k.edgeData, f, c, d);
  }), W({}, m, p.diagramPadding, p.useMaxWidth), s.remove();
}, H = (e, d, t, f, s, i, l) => {
  t.forEach(function(r) {
    if (r)
      if (v[r.id].offset = {
        posX: r.x + e,
        posY: r.y + d,
        x: e,
        y: d,
        depth: l,
        width: r.width,
        height: r.height
      }, r.type === "group") {
        const p = s.insert("g").attr("class", "subgraph");
        p.insert("rect").attr("class", "subgraph subgraph-lvl-" + l % 5 + " node").attr("x", r.x + e).attr("y", r.y + d).attr("width", r.width).attr("height", r.height);
        const n = p.insert("g").attr("class", "label"), T = E().d3fend.htmlLabels ? r.labelData.width / 2 : 0;
        n.attr(
          "transform",
          `translate(${r.labels[0].x + e + r.x + T}, ${r.labels[0].y + d + r.y + 3})`
        ), n.node().appendChild(r.labelData.labelNode), y.info("Id (UGH)= ", r.type, r.labels);
      } else
        y.info("Id (UGH)= ", r.id), r.el.attr(
          "transform",
          `translate(${r.x + e + r.width / 2}, ${r.y + d + r.height / 2})`
        );
  }), t.forEach(function(r) {
    r && r.type === "group" && H(e + r.x, d + r.y, r.children, f, s, i, l + 1);
  });
}, ue = {
  getClasses: ne,
  draw: Te
}, ye = (e) => {
  let d = "";
  for (let t = 0; t < 5; t++)
    d += `
      .subgraph-lvl-${t} {
        fill: ${e[`surface${t}`]};
        stroke: ${e[`surfacePeer${t}`]};
      }
    `;
  return d;
}, pe = (e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.85;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${ye(e)}
`, me = pe, Pe = {
  db: _,
  renderer: ue,
  parser: $,
  styles: me
};
export {
  Pe as diagram
};
