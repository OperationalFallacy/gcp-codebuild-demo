// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema NetworkConnectivityHub
 */
export class NetworkConnectivityHub extends ApiObject {
  /**
   * Returns the apiVersion and kind for "NetworkConnectivityHub"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'networkconnectivity.cnrm.cloud.google.com/v1beta1',
    kind: 'NetworkConnectivityHub',
  }

  /**
   * Renders a Kubernetes manifest for "NetworkConnectivityHub".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: NetworkConnectivityHubProps): any {
    return {
      ...NetworkConnectivityHub.GVK,
      ...toJson_NetworkConnectivityHubProps(props),
    };
  }

  /**
   * Defines a "NetworkConnectivityHub" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: NetworkConnectivityHubProps) {
    super(scope, id, {
      ...NetworkConnectivityHub.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...NetworkConnectivityHub.GVK,
      ...toJson_NetworkConnectivityHubProps(resolved),
    };
  }
}

/**
 * @schema NetworkConnectivityHub
 */
export interface NetworkConnectivityHubProps {
  /**
   * @schema NetworkConnectivityHub#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema NetworkConnectivityHub#spec
   */
  readonly spec: NetworkConnectivityHubSpec;

}

/**
 * Converts an object of type 'NetworkConnectivityHubProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivityHubProps(obj: NetworkConnectivityHubProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_NetworkConnectivityHubSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkConnectivityHubSpec
 */
export interface NetworkConnectivityHubSpec {
  /**
   * An optional description of the hub.
   *
   * @schema NetworkConnectivityHubSpec#description
   */
  readonly description?: string;

  /**
   * Immutable. The Project that this resource belongs to.
   *
   * @schema NetworkConnectivityHubSpec#projectRef
   */
  readonly projectRef: NetworkConnectivityHubSpecProjectRef;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema NetworkConnectivityHubSpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'NetworkConnectivityHubSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivityHubSpec(obj: NetworkConnectivityHubSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'projectRef': toJson_NetworkConnectivityHubSpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The Project that this resource belongs to.
 *
 * @schema NetworkConnectivityHubSpecProjectRef
 */
export interface NetworkConnectivityHubSpecProjectRef {
  /**
   * The project for the resource
   *
   * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
   *
   * @schema NetworkConnectivityHubSpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema NetworkConnectivityHubSpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema NetworkConnectivityHubSpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'NetworkConnectivityHubSpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivityHubSpecProjectRef(obj: NetworkConnectivityHubSpecProjectRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 *
 *
 * @schema NetworkConnectivitySpoke
 */
export class NetworkConnectivitySpoke extends ApiObject {
  /**
   * Returns the apiVersion and kind for "NetworkConnectivitySpoke"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'networkconnectivity.cnrm.cloud.google.com/v1beta1',
    kind: 'NetworkConnectivitySpoke',
  }

  /**
   * Renders a Kubernetes manifest for "NetworkConnectivitySpoke".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: NetworkConnectivitySpokeProps): any {
    return {
      ...NetworkConnectivitySpoke.GVK,
      ...toJson_NetworkConnectivitySpokeProps(props),
    };
  }

  /**
   * Defines a "NetworkConnectivitySpoke" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: NetworkConnectivitySpokeProps) {
    super(scope, id, {
      ...NetworkConnectivitySpoke.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...NetworkConnectivitySpoke.GVK,
      ...toJson_NetworkConnectivitySpokeProps(resolved),
    };
  }
}

/**
 * @schema NetworkConnectivitySpoke
 */
export interface NetworkConnectivitySpokeProps {
  /**
   * @schema NetworkConnectivitySpoke#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema NetworkConnectivitySpoke#spec
   */
  readonly spec: NetworkConnectivitySpokeSpec;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeProps(obj: NetworkConnectivitySpokeProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_NetworkConnectivitySpokeSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkConnectivitySpokeSpec
 */
export interface NetworkConnectivitySpokeSpec {
  /**
   * An optional description of the spoke.
   *
   * @schema NetworkConnectivitySpokeSpec#description
   */
  readonly description?: string;

  /**
   * Immutable.
   *
   * @schema NetworkConnectivitySpokeSpec#hubRef
   */
  readonly hubRef: NetworkConnectivitySpokeSpecHubRef;

  /**
   * Immutable. A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
   *
   * @schema NetworkConnectivitySpokeSpec#linkedInterconnectAttachments
   */
  readonly linkedInterconnectAttachments?: NetworkConnectivitySpokeSpecLinkedInterconnectAttachments;

  /**
   * Immutable. The URIs of linked Router appliance resources
   *
   * @schema NetworkConnectivitySpokeSpec#linkedRouterApplianceInstances
   */
  readonly linkedRouterApplianceInstances?: NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances;

  /**
   * Immutable. The URIs of linked VPN tunnel resources
   *
   * @schema NetworkConnectivitySpokeSpec#linkedVpnTunnels
   */
  readonly linkedVpnTunnels?: NetworkConnectivitySpokeSpecLinkedVpnTunnels;

  /**
   * Immutable. The location for the resource
   *
   * @schema NetworkConnectivitySpokeSpec#location
   */
  readonly location: string;

  /**
   * Immutable. The Project that this resource belongs to.
   *
   * @schema NetworkConnectivitySpokeSpec#projectRef
   */
  readonly projectRef: NetworkConnectivitySpokeSpecProjectRef;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema NetworkConnectivitySpokeSpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpec(obj: NetworkConnectivitySpokeSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'hubRef': toJson_NetworkConnectivitySpokeSpecHubRef(obj.hubRef),
    'linkedInterconnectAttachments': toJson_NetworkConnectivitySpokeSpecLinkedInterconnectAttachments(obj.linkedInterconnectAttachments),
    'linkedRouterApplianceInstances': toJson_NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances(obj.linkedRouterApplianceInstances),
    'linkedVpnTunnels': toJson_NetworkConnectivitySpokeSpecLinkedVpnTunnels(obj.linkedVpnTunnels),
    'location': obj.location,
    'projectRef': toJson_NetworkConnectivitySpokeSpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable.
 *
 * @schema NetworkConnectivitySpokeSpecHubRef
 */
export interface NetworkConnectivitySpokeSpecHubRef {
  /**
   * Immutable. The URI of the hub that this spoke is attached to.
   *
   * Allowed value: The Google Cloud resource name of a `NetworkConnectivityHub` resource (format: `projects/{{project}}/locations/global/hubs/{{name}}`).
   *
   * @schema NetworkConnectivitySpokeSpecHubRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema NetworkConnectivitySpokeSpecHubRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema NetworkConnectivitySpokeSpecHubRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecHubRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecHubRef(obj: NetworkConnectivitySpokeSpecHubRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
 *
 * @schema NetworkConnectivitySpokeSpecLinkedInterconnectAttachments
 */
export interface NetworkConnectivitySpokeSpecLinkedInterconnectAttachments {
  /**
   * Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedInterconnectAttachments#siteToSiteDataTransfer
   */
  readonly siteToSiteDataTransfer: boolean;

  /**
   * Immutable.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedInterconnectAttachments#uris
   */
  readonly uris: NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris[];

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecLinkedInterconnectAttachments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecLinkedInterconnectAttachments(obj: NetworkConnectivitySpokeSpecLinkedInterconnectAttachments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'siteToSiteDataTransfer': obj.siteToSiteDataTransfer,
    'uris': obj.uris?.map(y => toJson_NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The URIs of linked Router appliance resources
 *
 * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances
 */
export interface NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances {
  /**
   * Immutable. The list of router appliance instances
   *
   * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances#instances
   */
  readonly instances: NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances[];

  /**
   * Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances#siteToSiteDataTransfer
   */
  readonly siteToSiteDataTransfer: boolean;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances(obj: NetworkConnectivitySpokeSpecLinkedRouterApplianceInstances | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instances': obj.instances?.map(y => toJson_NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances(y)),
    'siteToSiteDataTransfer': obj.siteToSiteDataTransfer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The URIs of linked VPN tunnel resources
 *
 * @schema NetworkConnectivitySpokeSpecLinkedVpnTunnels
 */
export interface NetworkConnectivitySpokeSpecLinkedVpnTunnels {
  /**
   * Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedVpnTunnels#siteToSiteDataTransfer
   */
  readonly siteToSiteDataTransfer: boolean;

  /**
   * Immutable.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedVpnTunnels#uris
   */
  readonly uris: NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris[];

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecLinkedVpnTunnels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecLinkedVpnTunnels(obj: NetworkConnectivitySpokeSpecLinkedVpnTunnels | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'siteToSiteDataTransfer': obj.siteToSiteDataTransfer,
    'uris': obj.uris?.map(y => toJson_NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The Project that this resource belongs to.
 *
 * @schema NetworkConnectivitySpokeSpecProjectRef
 */
export interface NetworkConnectivitySpokeSpecProjectRef {
  /**
   * The project for the resource
   *
   * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
   *
   * @schema NetworkConnectivitySpokeSpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema NetworkConnectivitySpokeSpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema NetworkConnectivitySpokeSpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecProjectRef(obj: NetworkConnectivitySpokeSpecProjectRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris
 */
export interface NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris {
  /**
   * Allowed value: The `selfLink` field of a `ComputeInterconnectAttachment` resource.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris(obj: NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUris | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances
 */
export interface NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances {
  /**
   * Immutable. The IP address on the VM to use for peering.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * Immutable.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances#virtualMachineRef
   */
  readonly virtualMachineRef?: NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances(obj: NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstances | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ipAddress': obj.ipAddress,
    'virtualMachineRef': toJson_NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef(obj.virtualMachineRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris
 */
export interface NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris {
  /**
   * Allowed value: The `selfLink` field of a `ComputeVPNTunnel` resource.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris(obj: NetworkConnectivitySpokeSpecLinkedVpnTunnelsUris | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable.
 *
 * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef
 */
export interface NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef {
  /**
   * The URI of the virtual machine resource
   *
   * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
   *
   * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef(obj: NetworkConnectivitySpokeSpecLinkedRouterApplianceInstancesInstancesVirtualMachineRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
