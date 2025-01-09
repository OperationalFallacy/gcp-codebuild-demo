// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema Service
 */
export class Service extends ApiObject {
  /**
   * Returns the apiVersion and kind for "Service"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'serviceusage.cnrm.cloud.google.com/v1beta1',
    kind: 'Service',
  }

  /**
   * Renders a Kubernetes manifest for "Service".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ServiceProps = {}): any {
    return {
      ...Service.GVK,
      ...toJson_ServiceProps(props),
    };
  }

  /**
   * Defines a "Service" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ServiceProps = {}) {
    super(scope, id, {
      ...Service.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...Service.GVK,
      ...toJson_ServiceProps(resolved),
    };
  }
}

/**
 * @schema Service
 */
export interface ServiceProps {
  /**
   * @schema Service#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema Service#spec
   */
  readonly spec?: ServiceSpec;

}

/**
 * Converts an object of type 'ServiceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceProps(obj: ServiceProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ServiceSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceSpec
 */
export interface ServiceSpec {
  /**
   * The project that this resource belongs to.
   *
   * @schema ServiceSpec#projectRef
   */
  readonly projectRef?: ServiceSpecProjectRef;

  /**
   * Immutable. Optional. The service of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema ServiceSpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'ServiceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceSpec(obj: ServiceSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectRef': toJson_ServiceSpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The project that this resource belongs to.
 *
 * @schema ServiceSpecProjectRef
 */
export interface ServiceSpecProjectRef {
  /**
   * Allowed value: The `name` field of a `Project` resource.
   *
   * @schema ServiceSpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ServiceSpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ServiceSpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ServiceSpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceSpecProjectRef(obj: ServiceSpecProjectRef | undefined): Record<string, any> | undefined {
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
 * @schema ServiceIdentity
 */
export class ServiceIdentity extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ServiceIdentity"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'serviceusage.cnrm.cloud.google.com/v1beta1',
    kind: 'ServiceIdentity',
  }

  /**
   * Renders a Kubernetes manifest for "ServiceIdentity".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ServiceIdentityProps): any {
    return {
      ...ServiceIdentity.GVK,
      ...toJson_ServiceIdentityProps(props),
    };
  }

  /**
   * Defines a "ServiceIdentity" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ServiceIdentityProps) {
    super(scope, id, {
      ...ServiceIdentity.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...ServiceIdentity.GVK,
      ...toJson_ServiceIdentityProps(resolved),
    };
  }
}

/**
 * @schema ServiceIdentity
 */
export interface ServiceIdentityProps {
  /**
   * @schema ServiceIdentity#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema ServiceIdentity#spec
   */
  readonly spec: ServiceIdentitySpec;

}

/**
 * Converts an object of type 'ServiceIdentityProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceIdentityProps(obj: ServiceIdentityProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ServiceIdentitySpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceIdentitySpec
 */
export interface ServiceIdentitySpec {
  /**
   * The project that this resource belongs to.
   *
   * @schema ServiceIdentitySpec#projectRef
   */
  readonly projectRef: ServiceIdentitySpecProjectRef;

  /**
   * Immutable. Optional. The service of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema ServiceIdentitySpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'ServiceIdentitySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceIdentitySpec(obj: ServiceIdentitySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectRef': toJson_ServiceIdentitySpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The project that this resource belongs to.
 *
 * @schema ServiceIdentitySpecProjectRef
 */
export interface ServiceIdentitySpecProjectRef {
  /**
   * Allowed value: The `name` field of a `Project` resource.
   *
   * @schema ServiceIdentitySpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ServiceIdentitySpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ServiceIdentitySpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ServiceIdentitySpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceIdentitySpecProjectRef(obj: ServiceIdentitySpecProjectRef | undefined): Record<string, any> | undefined {
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
