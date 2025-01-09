// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema SecretManagerSecret
 */
export class SecretManagerSecret extends ApiObject {
  /**
   * Returns the apiVersion and kind for "SecretManagerSecret"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'secretmanager.cnrm.cloud.google.com/v1beta1',
    kind: 'SecretManagerSecret',
  }

  /**
   * Renders a Kubernetes manifest for "SecretManagerSecret".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: SecretManagerSecretProps): any {
    return {
      ...SecretManagerSecret.GVK,
      ...toJson_SecretManagerSecretProps(props),
    };
  }

  /**
   * Defines a "SecretManagerSecret" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: SecretManagerSecretProps) {
    super(scope, id, {
      ...SecretManagerSecret.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...SecretManagerSecret.GVK,
      ...toJson_SecretManagerSecretProps(resolved),
    };
  }
}

/**
 * @schema SecretManagerSecret
 */
export interface SecretManagerSecretProps {
  /**
   * @schema SecretManagerSecret#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema SecretManagerSecret#spec
   */
  readonly spec: SecretManagerSecretSpec;

}

/**
 * Converts an object of type 'SecretManagerSecretProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretProps(obj: SecretManagerSecretProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_SecretManagerSecretSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretManagerSecretSpec
 */
export interface SecretManagerSecretSpec {
  /**
   * Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
   * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
   *
   * @schema SecretManagerSecretSpec#expireTime
   */
  readonly expireTime?: string;

  /**
   * Immutable. The replication policy of the secret data attached to the Secret. It cannot be changed
   * after the Secret has been created.
   *
   * @schema SecretManagerSecretSpec#replication
   */
  readonly replication: SecretManagerSecretSpecReplication;

  /**
   * Immutable. Optional. The secretId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema SecretManagerSecretSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * The rotation time and period for a Secret. At 'next_rotation_time', Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. 'topics' must be set to configure rotation.
   *
   * @schema SecretManagerSecretSpec#rotation
   */
  readonly rotation?: SecretManagerSecretSpecRotation;

  /**
   * A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
   *
   * @schema SecretManagerSecretSpec#topics
   */
  readonly topics?: SecretManagerSecretSpecTopics[];

  /**
   * Immutable. The TTL for the Secret.
   * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
   *
   * @schema SecretManagerSecretSpec#ttl
   */
  readonly ttl?: string;

}

/**
 * Converts an object of type 'SecretManagerSecretSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpec(obj: SecretManagerSecretSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expireTime': obj.expireTime,
    'replication': toJson_SecretManagerSecretSpecReplication(obj.replication),
    'resourceID': obj.resourceId,
    'rotation': toJson_SecretManagerSecretSpecRotation(obj.rotation),
    'topics': obj.topics?.map(y => toJson_SecretManagerSecretSpecTopics(y)),
    'ttl': obj.ttl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The replication policy of the secret data attached to the Secret. It cannot be changed
 * after the Secret has been created.
 *
 * @schema SecretManagerSecretSpecReplication
 */
export interface SecretManagerSecretSpecReplication {
  /**
   * Immutable. The Secret will automatically be replicated without any restrictions.
   *
   * @schema SecretManagerSecretSpecReplication#automatic
   */
  readonly automatic?: boolean;

  /**
   * Immutable. The Secret will be replicated to the regions specified by the user.
   *
   * @schema SecretManagerSecretSpecReplication#userManaged
   */
  readonly userManaged?: SecretManagerSecretSpecReplicationUserManaged;

}

/**
 * Converts an object of type 'SecretManagerSecretSpecReplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecReplication(obj: SecretManagerSecretSpecReplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'automatic': obj.automatic,
    'userManaged': toJson_SecretManagerSecretSpecReplicationUserManaged(obj.userManaged),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The rotation time and period for a Secret. At 'next_rotation_time', Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. 'topics' must be set to configure rotation.
 *
 * @schema SecretManagerSecretSpecRotation
 */
export interface SecretManagerSecretSpecRotation {
  /**
   * Timestamp in UTC at which the Secret is scheduled to rotate.
   * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
   *
   * @schema SecretManagerSecretSpecRotation#nextRotationTime
   */
  readonly nextRotationTime?: string;

  /**
   * Immutable. The Duration between rotation notifications. Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
   * If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.
   *
   * @schema SecretManagerSecretSpecRotation#rotationPeriod
   */
  readonly rotationPeriod?: string;

}

/**
 * Converts an object of type 'SecretManagerSecretSpecRotation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecRotation(obj: SecretManagerSecretSpecRotation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextRotationTime': obj.nextRotationTime,
    'rotationPeriod': obj.rotationPeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretManagerSecretSpecTopics
 */
export interface SecretManagerSecretSpecTopics {
  /**
   * A list of up to 10 Pub/Sub topics to which messages are
   * published when control plane operations are called on the secret
   * or its versions.
   *
   * @schema SecretManagerSecretSpecTopics#topicRef
   */
  readonly topicRef: SecretManagerSecretSpecTopicsTopicRef;

}

/**
 * Converts an object of type 'SecretManagerSecretSpecTopics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecTopics(obj: SecretManagerSecretSpecTopics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topicRef': toJson_SecretManagerSecretSpecTopicsTopicRef(obj.topicRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The Secret will be replicated to the regions specified by the user.
 *
 * @schema SecretManagerSecretSpecReplicationUserManaged
 */
export interface SecretManagerSecretSpecReplicationUserManaged {
  /**
   * Immutable. The list of Replicas for this Secret. Cannot be empty.
   *
   * @schema SecretManagerSecretSpecReplicationUserManaged#replicas
   */
  readonly replicas: SecretManagerSecretSpecReplicationUserManagedReplicas[];

}

/**
 * Converts an object of type 'SecretManagerSecretSpecReplicationUserManaged' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecReplicationUserManaged(obj: SecretManagerSecretSpecReplicationUserManaged | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'replicas': obj.replicas?.map(y => toJson_SecretManagerSecretSpecReplicationUserManagedReplicas(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A list of up to 10 Pub/Sub topics to which messages are
 * published when control plane operations are called on the secret
 * or its versions.
 *
 * @schema SecretManagerSecretSpecTopicsTopicRef
 */
export interface SecretManagerSecretSpecTopicsTopicRef {
  /**
   * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
   *
   * @schema SecretManagerSecretSpecTopicsTopicRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema SecretManagerSecretSpecTopicsTopicRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema SecretManagerSecretSpecTopicsTopicRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'SecretManagerSecretSpecTopicsTopicRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecTopicsTopicRef(obj: SecretManagerSecretSpecTopicsTopicRef | undefined): Record<string, any> | undefined {
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
 * @schema SecretManagerSecretSpecReplicationUserManagedReplicas
 */
export interface SecretManagerSecretSpecReplicationUserManagedReplicas {
  /**
   * Immutable. Customer Managed Encryption for the secret.
   *
   * @schema SecretManagerSecretSpecReplicationUserManagedReplicas#customerManagedEncryption
   */
  readonly customerManagedEncryption?: SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption;

  /**
   * Immutable. The canonical IDs of the location to replicate data. For example: "us-east1".
   *
   * @schema SecretManagerSecretSpecReplicationUserManagedReplicas#location
   */
  readonly location: string;

}

/**
 * Converts an object of type 'SecretManagerSecretSpecReplicationUserManagedReplicas' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecReplicationUserManagedReplicas(obj: SecretManagerSecretSpecReplicationUserManagedReplicas | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customerManagedEncryption': toJson_SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption(obj.customerManagedEncryption),
    'location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Customer Managed Encryption for the secret.
 *
 * @schema SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption
 */
export interface SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption {
  /**
   * Customer Managed Encryption for the secret.
   *
   * @schema SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption#kmsKeyRef
   */
  readonly kmsKeyRef: SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef;

}

/**
 * Converts an object of type 'SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption(obj: SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsKeyRef': toJson_SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef(obj.kmsKeyRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Customer Managed Encryption for the secret.
 *
 * @schema SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef
 */
export interface SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef {
  /**
   * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
   *
   * @schema SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef(obj: SecretManagerSecretSpecReplicationUserManagedReplicasCustomerManagedEncryptionKmsKeyRef | undefined): Record<string, any> | undefined {
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
 * @schema SecretManagerSecretVersion
 */
export class SecretManagerSecretVersion extends ApiObject {
  /**
   * Returns the apiVersion and kind for "SecretManagerSecretVersion"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'secretmanager.cnrm.cloud.google.com/v1beta1',
    kind: 'SecretManagerSecretVersion',
  }

  /**
   * Renders a Kubernetes manifest for "SecretManagerSecretVersion".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: SecretManagerSecretVersionProps): any {
    return {
      ...SecretManagerSecretVersion.GVK,
      ...toJson_SecretManagerSecretVersionProps(props),
    };
  }

  /**
   * Defines a "SecretManagerSecretVersion" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: SecretManagerSecretVersionProps) {
    super(scope, id, {
      ...SecretManagerSecretVersion.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...SecretManagerSecretVersion.GVK,
      ...toJson_SecretManagerSecretVersionProps(resolved),
    };
  }
}

/**
 * @schema SecretManagerSecretVersion
 */
export interface SecretManagerSecretVersionProps {
  /**
   * @schema SecretManagerSecretVersion#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema SecretManagerSecretVersion#spec
   */
  readonly spec: SecretManagerSecretVersionSpec;

}

/**
 * Converts an object of type 'SecretManagerSecretVersionProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretVersionProps(obj: SecretManagerSecretVersionProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_SecretManagerSecretVersionSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SecretManagerSecretVersionSpec
 */
export interface SecretManagerSecretVersionSpec {
  /**
   * The current state of the SecretVersion.
   *
   * @schema SecretManagerSecretVersionSpec#enabled
   */
  readonly enabled?: boolean;

  /**
   * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
   *
   * @schema SecretManagerSecretVersionSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Immutable. The secret data. Must be no larger than 64KiB.
   *
   * @schema SecretManagerSecretVersionSpec#secretData
   */
  readonly secretData: SecretManagerSecretVersionSpecSecretData;

  /**
   * Secret Manager secret resource
   *
   * @schema SecretManagerSecretVersionSpec#secretRef
   */
  readonly secretRef: SecretManagerSecretVersionSpecSecretRef;

}

/**
 * Converts an object of type 'SecretManagerSecretVersionSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretVersionSpec(obj: SecretManagerSecretVersionSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
    'resourceID': obj.resourceId,
    'secretData': toJson_SecretManagerSecretVersionSpecSecretData(obj.secretData),
    'secretRef': toJson_SecretManagerSecretVersionSpecSecretRef(obj.secretRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The secret data. Must be no larger than 64KiB.
 *
 * @schema SecretManagerSecretVersionSpecSecretData
 */
export interface SecretManagerSecretVersionSpecSecretData {
  /**
   * Value of the field. Cannot be used if 'valueFrom' is specified.
   *
   * @schema SecretManagerSecretVersionSpecSecretData#value
   */
  readonly value?: string;

  /**
   * Source for the field's value. Cannot be used if 'value' is specified.
   *
   * @schema SecretManagerSecretVersionSpecSecretData#valueFrom
   */
  readonly valueFrom?: SecretManagerSecretVersionSpecSecretDataValueFrom;

}

/**
 * Converts an object of type 'SecretManagerSecretVersionSpecSecretData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretVersionSpecSecretData(obj: SecretManagerSecretVersionSpecSecretData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'valueFrom': toJson_SecretManagerSecretVersionSpecSecretDataValueFrom(obj.valueFrom),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Secret Manager secret resource
 *
 * @schema SecretManagerSecretVersionSpecSecretRef
 */
export interface SecretManagerSecretVersionSpecSecretRef {
  /**
   * Allowed value: The `name` field of a `SecretManagerSecret` resource.
   *
   * @schema SecretManagerSecretVersionSpecSecretRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema SecretManagerSecretVersionSpecSecretRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema SecretManagerSecretVersionSpecSecretRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'SecretManagerSecretVersionSpecSecretRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretVersionSpecSecretRef(obj: SecretManagerSecretVersionSpecSecretRef | undefined): Record<string, any> | undefined {
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
 * Source for the field's value. Cannot be used if 'value' is specified.
 *
 * @schema SecretManagerSecretVersionSpecSecretDataValueFrom
 */
export interface SecretManagerSecretVersionSpecSecretDataValueFrom {
  /**
   * Reference to a value with the given key in the given Secret in the resource's namespace.
   *
   * @schema SecretManagerSecretVersionSpecSecretDataValueFrom#secretKeyRef
   */
  readonly secretKeyRef?: SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef;

}

/**
 * Converts an object of type 'SecretManagerSecretVersionSpecSecretDataValueFrom' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretVersionSpecSecretDataValueFrom(obj: SecretManagerSecretVersionSpecSecretDataValueFrom | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'secretKeyRef': toJson_SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef(obj.secretKeyRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Reference to a value with the given key in the given Secret in the resource's namespace.
 *
 * @schema SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef
 */
export interface SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef {
  /**
   * Key that identifies the value to be extracted.
   *
   * @schema SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef#key
   */
  readonly key: string;

  /**
   * Name of the Secret to extract a value from.
   *
   * @schema SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef(obj: SecretManagerSecretVersionSpecSecretDataValueFromSecretKeyRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
