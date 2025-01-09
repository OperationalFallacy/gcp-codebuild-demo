// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema ServiceDirectoryEndpoint
 */
export class ServiceDirectoryEndpoint extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ServiceDirectoryEndpoint"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'servicedirectory.cnrm.cloud.google.com/v1beta1',
    kind: 'ServiceDirectoryEndpoint',
  }

  /**
   * Renders a Kubernetes manifest for "ServiceDirectoryEndpoint".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ServiceDirectoryEndpointProps): any {
    return {
      ...ServiceDirectoryEndpoint.GVK,
      ...toJson_ServiceDirectoryEndpointProps(props),
    };
  }

  /**
   * Defines a "ServiceDirectoryEndpoint" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ServiceDirectoryEndpointProps) {
    super(scope, id, {
      ...ServiceDirectoryEndpoint.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...ServiceDirectoryEndpoint.GVK,
      ...toJson_ServiceDirectoryEndpointProps(resolved),
    };
  }
}

/**
 * @schema ServiceDirectoryEndpoint
 */
export interface ServiceDirectoryEndpointProps {
  /**
   * @schema ServiceDirectoryEndpoint#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema ServiceDirectoryEndpoint#spec
   */
  readonly spec: ServiceDirectoryEndpointSpec;

}

/**
 * Converts an object of type 'ServiceDirectoryEndpointProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryEndpointProps(obj: ServiceDirectoryEndpointProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ServiceDirectoryEndpointSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDirectoryEndpointSpec
 */
export interface ServiceDirectoryEndpointSpec {
  /**
   * @schema ServiceDirectoryEndpointSpec#addressRef
   */
  readonly addressRef?: ServiceDirectoryEndpointSpecAddressRef;

  /**
   * Only the `external` field is supported to configure the reference.
   *
   * Immutable. The Google Compute Engine network (VPC) of the endpoint in the format
   * projects/<project number>/locations/global/networks/*.
   *
   * The project must be specified by project number (project id is rejected). Incorrectly formatted networks are
   * rejected, but no other validation is performed on this field (ex. network or project existence,
   * reachability, or permissions).
   *
   * @schema ServiceDirectoryEndpointSpec#networkRef
   */
  readonly networkRef?: ServiceDirectoryEndpointSpecNetworkRef;

  /**
   * Port that the endpoint is running on, must be in the
   * range of [0, 65535]. If unspecified, the default is 0.
   *
   * @schema ServiceDirectoryEndpointSpec#port
   */
  readonly port?: number;

  /**
   * Immutable. Optional. The endpointId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema ServiceDirectoryEndpointSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * The ServiceDirectoryService that this endpoint belongs to.
   *
   * @schema ServiceDirectoryEndpointSpec#serviceRef
   */
  readonly serviceRef: ServiceDirectoryEndpointSpecServiceRef;

}

/**
 * Converts an object of type 'ServiceDirectoryEndpointSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryEndpointSpec(obj: ServiceDirectoryEndpointSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addressRef': toJson_ServiceDirectoryEndpointSpecAddressRef(obj.addressRef),
    'networkRef': toJson_ServiceDirectoryEndpointSpecNetworkRef(obj.networkRef),
    'port': obj.port,
    'resourceID': obj.resourceId,
    'serviceRef': toJson_ServiceDirectoryEndpointSpecServiceRef(obj.serviceRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDirectoryEndpointSpecAddressRef
 */
export interface ServiceDirectoryEndpointSpecAddressRef {
  /**
   * Allowed value: The `address` field of a `ComputeAddress` resource.
   *
   * @schema ServiceDirectoryEndpointSpecAddressRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ServiceDirectoryEndpointSpecAddressRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ServiceDirectoryEndpointSpecAddressRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ServiceDirectoryEndpointSpecAddressRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryEndpointSpecAddressRef(obj: ServiceDirectoryEndpointSpecAddressRef | undefined): Record<string, any> | undefined {
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
 * Only the `external` field is supported to configure the reference.
 *
 * Immutable. The Google Compute Engine network (VPC) of the endpoint in the format
 * projects/<project number>/locations/global/networks/*.
 *
 * The project must be specified by project number (project id is rejected). Incorrectly formatted networks are
 * rejected, but no other validation is performed on this field (ex. network or project existence,
 * reachability, or permissions).
 *
 * @schema ServiceDirectoryEndpointSpecNetworkRef
 */
export interface ServiceDirectoryEndpointSpecNetworkRef {
  /**
   * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
   *
   * @schema ServiceDirectoryEndpointSpecNetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ServiceDirectoryEndpointSpecNetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ServiceDirectoryEndpointSpecNetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ServiceDirectoryEndpointSpecNetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryEndpointSpecNetworkRef(obj: ServiceDirectoryEndpointSpecNetworkRef | undefined): Record<string, any> | undefined {
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
 * The ServiceDirectoryService that this endpoint belongs to.
 *
 * @schema ServiceDirectoryEndpointSpecServiceRef
 */
export interface ServiceDirectoryEndpointSpecServiceRef {
  /**
   * Allowed value: The `name` field of a `ServiceDirectoryService` resource.
   *
   * @schema ServiceDirectoryEndpointSpecServiceRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ServiceDirectoryEndpointSpecServiceRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ServiceDirectoryEndpointSpecServiceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ServiceDirectoryEndpointSpecServiceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryEndpointSpecServiceRef(obj: ServiceDirectoryEndpointSpecServiceRef | undefined): Record<string, any> | undefined {
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
 * @schema ServiceDirectoryNamespace
 */
export class ServiceDirectoryNamespace extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ServiceDirectoryNamespace"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'servicedirectory.cnrm.cloud.google.com/v1beta1',
    kind: 'ServiceDirectoryNamespace',
  }

  /**
   * Renders a Kubernetes manifest for "ServiceDirectoryNamespace".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ServiceDirectoryNamespaceProps): any {
    return {
      ...ServiceDirectoryNamespace.GVK,
      ...toJson_ServiceDirectoryNamespaceProps(props),
    };
  }

  /**
   * Defines a "ServiceDirectoryNamespace" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ServiceDirectoryNamespaceProps) {
    super(scope, id, {
      ...ServiceDirectoryNamespace.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...ServiceDirectoryNamespace.GVK,
      ...toJson_ServiceDirectoryNamespaceProps(resolved),
    };
  }
}

/**
 * @schema ServiceDirectoryNamespace
 */
export interface ServiceDirectoryNamespaceProps {
  /**
   * @schema ServiceDirectoryNamespace#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema ServiceDirectoryNamespace#spec
   */
  readonly spec: ServiceDirectoryNamespaceSpec;

}

/**
 * Converts an object of type 'ServiceDirectoryNamespaceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryNamespaceProps(obj: ServiceDirectoryNamespaceProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ServiceDirectoryNamespaceSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDirectoryNamespaceSpec
 */
export interface ServiceDirectoryNamespaceSpec {
  /**
   * The location for the Namespace.
   * A full list of valid locations can be found by running
   * 'gcloud beta service-directory locations list'.
   *
   * @schema ServiceDirectoryNamespaceSpec#location
   */
  readonly location: string;

  /**
   * The project that this resource belongs to.
   *
   * @schema ServiceDirectoryNamespaceSpec#projectRef
   */
  readonly projectRef: ServiceDirectoryNamespaceSpecProjectRef;

  /**
   * Immutable. Optional. The namespaceId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema ServiceDirectoryNamespaceSpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'ServiceDirectoryNamespaceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryNamespaceSpec(obj: ServiceDirectoryNamespaceSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
    'projectRef': toJson_ServiceDirectoryNamespaceSpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The project that this resource belongs to.
 *
 * @schema ServiceDirectoryNamespaceSpecProjectRef
 */
export interface ServiceDirectoryNamespaceSpecProjectRef {
  /**
   * Allowed value: The `name` field of a `Project` resource.
   *
   * @schema ServiceDirectoryNamespaceSpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ServiceDirectoryNamespaceSpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ServiceDirectoryNamespaceSpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ServiceDirectoryNamespaceSpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryNamespaceSpecProjectRef(obj: ServiceDirectoryNamespaceSpecProjectRef | undefined): Record<string, any> | undefined {
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
 * @schema ServiceDirectoryService
 */
export class ServiceDirectoryService extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ServiceDirectoryService"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'servicedirectory.cnrm.cloud.google.com/v1beta1',
    kind: 'ServiceDirectoryService',
  }

  /**
   * Renders a Kubernetes manifest for "ServiceDirectoryService".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ServiceDirectoryServiceProps): any {
    return {
      ...ServiceDirectoryService.GVK,
      ...toJson_ServiceDirectoryServiceProps(props),
    };
  }

  /**
   * Defines a "ServiceDirectoryService" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ServiceDirectoryServiceProps) {
    super(scope, id, {
      ...ServiceDirectoryService.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...ServiceDirectoryService.GVK,
      ...toJson_ServiceDirectoryServiceProps(resolved),
    };
  }
}

/**
 * @schema ServiceDirectoryService
 */
export interface ServiceDirectoryServiceProps {
  /**
   * @schema ServiceDirectoryService#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema ServiceDirectoryService#spec
   */
  readonly spec: ServiceDirectoryServiceSpec;

}

/**
 * Converts an object of type 'ServiceDirectoryServiceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryServiceProps(obj: ServiceDirectoryServiceProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ServiceDirectoryServiceSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceDirectoryServiceSpec
 */
export interface ServiceDirectoryServiceSpec {
  /**
   * The ServiceDirectoryNamespace that this service belongs to.
   *
   * @schema ServiceDirectoryServiceSpec#namespaceRef
   */
  readonly namespaceRef: ServiceDirectoryServiceSpecNamespaceRef;

  /**
   * Immutable. Optional. The serviceId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema ServiceDirectoryServiceSpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'ServiceDirectoryServiceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryServiceSpec(obj: ServiceDirectoryServiceSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespaceRef': toJson_ServiceDirectoryServiceSpecNamespaceRef(obj.namespaceRef),
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The ServiceDirectoryNamespace that this service belongs to.
 *
 * @schema ServiceDirectoryServiceSpecNamespaceRef
 */
export interface ServiceDirectoryServiceSpecNamespaceRef {
  /**
   * Allowed value: The `name` field of a `ServiceDirectoryNamespace` resource.
   *
   * @schema ServiceDirectoryServiceSpecNamespaceRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ServiceDirectoryServiceSpecNamespaceRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ServiceDirectoryServiceSpecNamespaceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ServiceDirectoryServiceSpecNamespaceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceDirectoryServiceSpecNamespaceRef(obj: ServiceDirectoryServiceSpecNamespaceRef | undefined): Record<string, any> | undefined {
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
