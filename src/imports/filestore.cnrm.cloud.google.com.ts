// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema FilestoreBackup
 */
export class FilestoreBackup extends ApiObject {
  /**
   * Returns the apiVersion and kind for "FilestoreBackup"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'filestore.cnrm.cloud.google.com/v1beta1',
    kind: 'FilestoreBackup',
  }

  /**
   * Renders a Kubernetes manifest for "FilestoreBackup".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: FilestoreBackupProps): any {
    return {
      ...FilestoreBackup.GVK,
      ...toJson_FilestoreBackupProps(props),
    };
  }

  /**
   * Defines a "FilestoreBackup" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: FilestoreBackupProps) {
    super(scope, id, {
      ...FilestoreBackup.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...FilestoreBackup.GVK,
      ...toJson_FilestoreBackupProps(resolved),
    };
  }
}

/**
 * @schema FilestoreBackup
 */
export interface FilestoreBackupProps {
  /**
   * @schema FilestoreBackup#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema FilestoreBackup#spec
   */
  readonly spec: FilestoreBackupSpec;

}

/**
 * Converts an object of type 'FilestoreBackupProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreBackupProps(obj: FilestoreBackupProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_FilestoreBackupSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FilestoreBackupSpec
 */
export interface FilestoreBackupSpec {
  /**
   * A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
   *
   * @schema FilestoreBackupSpec#description
   */
  readonly description?: string;

  /**
   * Immutable. The location for the resource
   *
   * @schema FilestoreBackupSpec#location
   */
  readonly location: string;

  /**
   * Immutable. The Project that this resource belongs to.
   *
   * @schema FilestoreBackupSpec#projectRef
   */
  readonly projectRef: FilestoreBackupSpecProjectRef;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema FilestoreBackupSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Immutable. Name of the file share in the source Cloud Filestore instance that the backup is created from.
   *
   * @schema FilestoreBackupSpec#sourceFileShare
   */
  readonly sourceFileShare: string;

  /**
   * Immutable.
   *
   * @schema FilestoreBackupSpec#sourceInstanceRef
   */
  readonly sourceInstanceRef: FilestoreBackupSpecSourceInstanceRef;

}

/**
 * Converts an object of type 'FilestoreBackupSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreBackupSpec(obj: FilestoreBackupSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'location': obj.location,
    'projectRef': toJson_FilestoreBackupSpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
    'sourceFileShare': obj.sourceFileShare,
    'sourceInstanceRef': toJson_FilestoreBackupSpecSourceInstanceRef(obj.sourceInstanceRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The Project that this resource belongs to.
 *
 * @schema FilestoreBackupSpecProjectRef
 */
export interface FilestoreBackupSpecProjectRef {
  /**
   * The project for the resource
   *
   * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
   *
   * @schema FilestoreBackupSpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema FilestoreBackupSpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema FilestoreBackupSpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'FilestoreBackupSpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreBackupSpecProjectRef(obj: FilestoreBackupSpecProjectRef | undefined): Record<string, any> | undefined {
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
 * @schema FilestoreBackupSpecSourceInstanceRef
 */
export interface FilestoreBackupSpecSourceInstanceRef {
  /**
   * The resource name of the source Cloud Filestore instance, in the format projects/{project_number}/locations/{location_id}/instances/{instance_id}, used to create this backup.
   *
   * Allowed value: The Google Cloud resource name of a `FilestoreInstance` resource (format: `projects/{{project}}/locations/{{location}}/instances/{{name}}`).
   *
   * @schema FilestoreBackupSpecSourceInstanceRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema FilestoreBackupSpecSourceInstanceRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema FilestoreBackupSpecSourceInstanceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'FilestoreBackupSpecSourceInstanceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreBackupSpecSourceInstanceRef(obj: FilestoreBackupSpecSourceInstanceRef | undefined): Record<string, any> | undefined {
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
 * @schema FilestoreInstance
 */
export class FilestoreInstance extends ApiObject {
  /**
   * Returns the apiVersion and kind for "FilestoreInstance"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'filestore.cnrm.cloud.google.com/v1beta1',
    kind: 'FilestoreInstance',
  }

  /**
   * Renders a Kubernetes manifest for "FilestoreInstance".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: FilestoreInstanceProps): any {
    return {
      ...FilestoreInstance.GVK,
      ...toJson_FilestoreInstanceProps(props),
    };
  }

  /**
   * Defines a "FilestoreInstance" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: FilestoreInstanceProps) {
    super(scope, id, {
      ...FilestoreInstance.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...FilestoreInstance.GVK,
      ...toJson_FilestoreInstanceProps(resolved),
    };
  }
}

/**
 * @schema FilestoreInstance
 */
export interface FilestoreInstanceProps {
  /**
   * @schema FilestoreInstance#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema FilestoreInstance#spec
   */
  readonly spec: FilestoreInstanceSpec;

}

/**
 * Converts an object of type 'FilestoreInstanceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceProps(obj: FilestoreInstanceProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_FilestoreInstanceSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FilestoreInstanceSpec
 */
export interface FilestoreInstanceSpec {
  /**
   * The description of the instance (2048 characters or less).
   *
   * @schema FilestoreInstanceSpec#description
   */
  readonly description?: string;

  /**
   * File system shares on the instance. For this version, only a single file share is supported.
   *
   * @schema FilestoreInstanceSpec#fileShares
   */
  readonly fileShares?: FilestoreInstanceSpecFileShares[];

  /**
   * Immutable. The location for the resource
   *
   * @schema FilestoreInstanceSpec#location
   */
  readonly location: string;

  /**
   * Immutable. VPC networks to which the instance is connected. For this version, only a single network is supported.
   *
   * @schema FilestoreInstanceSpec#networks
   */
  readonly networks?: FilestoreInstanceSpecNetworks[];

  /**
   * Immutable. The Project that this resource belongs to.
   *
   * @schema FilestoreInstanceSpec#projectRef
   */
  readonly projectRef: FilestoreInstanceSpecProjectRef;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema FilestoreInstanceSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Immutable. The service tier of the instance. Possible values: TIER_UNSPECIFIED, STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ENTERPRISE
   *
   * @schema FilestoreInstanceSpec#tier
   */
  readonly tier?: string;

}

/**
 * Converts an object of type 'FilestoreInstanceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceSpec(obj: FilestoreInstanceSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'fileShares': obj.fileShares?.map(y => toJson_FilestoreInstanceSpecFileShares(y)),
    'location': obj.location,
    'networks': obj.networks?.map(y => toJson_FilestoreInstanceSpecNetworks(y)),
    'projectRef': toJson_FilestoreInstanceSpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
    'tier': obj.tier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FilestoreInstanceSpecFileShares
 */
export interface FilestoreInstanceSpecFileShares {
  /**
   * File share capacity in gigabytes (GB). Cloud Filestore defines 1 GB as 1024^3 bytes.
   *
   * @schema FilestoreInstanceSpecFileShares#capacityGb
   */
  readonly capacityGb?: number;

  /**
   * The name of the file share (must be 16 characters or less).
   *
   * @schema FilestoreInstanceSpecFileShares#name
   */
  readonly name?: string;

  /**
   * Nfs Export Options. There is a limit of 10 export options per file share.
   *
   * @schema FilestoreInstanceSpecFileShares#nfsExportOptions
   */
  readonly nfsExportOptions?: FilestoreInstanceSpecFileSharesNfsExportOptions[];

  /**
   * @schema FilestoreInstanceSpecFileShares#sourceBackupRef
   */
  readonly sourceBackupRef?: FilestoreInstanceSpecFileSharesSourceBackupRef;

}

/**
 * Converts an object of type 'FilestoreInstanceSpecFileShares' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceSpecFileShares(obj: FilestoreInstanceSpecFileShares | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityGb': obj.capacityGb,
    'name': obj.name,
    'nfsExportOptions': obj.nfsExportOptions?.map(y => toJson_FilestoreInstanceSpecFileSharesNfsExportOptions(y)),
    'sourceBackupRef': toJson_FilestoreInstanceSpecFileSharesSourceBackupRef(obj.sourceBackupRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FilestoreInstanceSpecNetworks
 */
export interface FilestoreInstanceSpecNetworks {
  /**
   * Immutable. Output only. IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or IPv6 addresses in the format `{block1}:{block2}:{block3}:{block4}:{block5}:{block6}:{block7}:{block8}`.
   *
   * @schema FilestoreInstanceSpecNetworks#ipAddresses
   */
  readonly ipAddresses?: string[];

  /**
   * Immutable. Internet protocol versions for which the instance has IP addresses assigned. For this version, only MODE_IPV4 is supported.
   *
   * @schema FilestoreInstanceSpecNetworks#modes
   */
  readonly modes?: string[];

  /**
   * Immutable.
   *
   * @schema FilestoreInstanceSpecNetworks#networkRef
   */
  readonly networkRef?: FilestoreInstanceSpecNetworksNetworkRef;

  /**
   * Immutable. A /29 CIDR block in one of the [internal IP address ranges](https://www.arin.net/reference/research/statistics/address_filters/) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29 or 192.168.0.0/29. The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Cloud Filestore instances in the selected VPC network.
   *
   * @schema FilestoreInstanceSpecNetworks#reservedIPRange
   */
  readonly reservedIpRange?: string;

}

/**
 * Converts an object of type 'FilestoreInstanceSpecNetworks' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceSpecNetworks(obj: FilestoreInstanceSpecNetworks | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ipAddresses': obj.ipAddresses?.map(y => y),
    'modes': obj.modes?.map(y => y),
    'networkRef': toJson_FilestoreInstanceSpecNetworksNetworkRef(obj.networkRef),
    'reservedIPRange': obj.reservedIpRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The Project that this resource belongs to.
 *
 * @schema FilestoreInstanceSpecProjectRef
 */
export interface FilestoreInstanceSpecProjectRef {
  /**
   * The project for the resource
   *
   * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
   *
   * @schema FilestoreInstanceSpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema FilestoreInstanceSpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema FilestoreInstanceSpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'FilestoreInstanceSpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceSpecProjectRef(obj: FilestoreInstanceSpecProjectRef | undefined): Record<string, any> | undefined {
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
 * @schema FilestoreInstanceSpecFileSharesNfsExportOptions
 */
export interface FilestoreInstanceSpecFileSharesNfsExportOptions {
  /**
   * Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. Possible values: ACCESS_MODE_UNSPECIFIED, READ_ONLY, READ_WRITE
   *
   * @schema FilestoreInstanceSpecFileSharesNfsExportOptions#accessMode
   */
  readonly accessMode?: string;

  /**
   * An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
   *
   * @schema FilestoreInstanceSpecFileSharesNfsExportOptions#anonGid
   */
  readonly anonGid?: number;

  /**
   * An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
   *
   * @schema FilestoreInstanceSpecFileSharesNfsExportOptions#anonUid
   */
  readonly anonUid?: number;

  /**
   * List of either an IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or CIDR ranges in the format `{octet1}.{octet2}.{octet3}.{octet4}/{mask size}` which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
   *
   * @schema FilestoreInstanceSpecFileSharesNfsExportOptions#ipRanges
   */
  readonly ipRanges?: string[];

  /**
   * Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH. Possible values: SQUASH_MODE_UNSPECIFIED, NO_ROOT_SQUASH, ROOT_SQUASH
   *
   * @schema FilestoreInstanceSpecFileSharesNfsExportOptions#squashMode
   */
  readonly squashMode?: string;

}

/**
 * Converts an object of type 'FilestoreInstanceSpecFileSharesNfsExportOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceSpecFileSharesNfsExportOptions(obj: FilestoreInstanceSpecFileSharesNfsExportOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessMode': obj.accessMode,
    'anonGid': obj.anonGid,
    'anonUid': obj.anonUid,
    'ipRanges': obj.ipRanges?.map(y => y),
    'squashMode': obj.squashMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema FilestoreInstanceSpecFileSharesSourceBackupRef
 */
export interface FilestoreInstanceSpecFileSharesSourceBackupRef {
  /**
   * The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`, that this file share has been restored from.
   *
   * Allowed value: The Google Cloud resource name of a `FilestoreBackup` resource (format: `projects/{{project}}/locations/{{location}}/backups/{{name}}`).
   *
   * @schema FilestoreInstanceSpecFileSharesSourceBackupRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema FilestoreInstanceSpecFileSharesSourceBackupRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema FilestoreInstanceSpecFileSharesSourceBackupRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'FilestoreInstanceSpecFileSharesSourceBackupRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceSpecFileSharesSourceBackupRef(obj: FilestoreInstanceSpecFileSharesSourceBackupRef | undefined): Record<string, any> | undefined {
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
 * @schema FilestoreInstanceSpecNetworksNetworkRef
 */
export interface FilestoreInstanceSpecNetworksNetworkRef {
  /**
   * The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected.
   *
   * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
   *
   * @schema FilestoreInstanceSpecNetworksNetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema FilestoreInstanceSpecNetworksNetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema FilestoreInstanceSpecNetworksNetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'FilestoreInstanceSpecNetworksNetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_FilestoreInstanceSpecNetworksNetworkRef(obj: FilestoreInstanceSpecNetworksNetworkRef | undefined): Record<string, any> | undefined {
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
