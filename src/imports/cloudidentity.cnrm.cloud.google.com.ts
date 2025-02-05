// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema CloudIdentityGroup
 */
export class CloudIdentityGroup extends ApiObject {
  /**
   * Returns the apiVersion and kind for "CloudIdentityGroup"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'cloudidentity.cnrm.cloud.google.com/v1beta1',
    kind: 'CloudIdentityGroup',
  }

  /**
   * Renders a Kubernetes manifest for "CloudIdentityGroup".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: CloudIdentityGroupProps): any {
    return {
      ...CloudIdentityGroup.GVK,
      ...toJson_CloudIdentityGroupProps(props),
    };
  }

  /**
   * Defines a "CloudIdentityGroup" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: CloudIdentityGroupProps) {
    super(scope, id, {
      ...CloudIdentityGroup.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...CloudIdentityGroup.GVK,
      ...toJson_CloudIdentityGroupProps(resolved),
    };
  }
}

/**
 * @schema CloudIdentityGroup
 */
export interface CloudIdentityGroupProps {
  /**
   * @schema CloudIdentityGroup#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema CloudIdentityGroup#spec
   */
  readonly spec: CloudIdentityGroupSpec;

}

/**
 * Converts an object of type 'CloudIdentityGroupProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityGroupProps(obj: CloudIdentityGroupProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_CloudIdentityGroupSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudIdentityGroupSpec
 */
export interface CloudIdentityGroupSpec {
  /**
   * An extended description to help users determine the purpose of a Group.
   * Must not be longer than 4,096 characters.
   *
   * @schema CloudIdentityGroupSpec#description
   */
  readonly description?: string;

  /**
   * The display name of the Group.
   *
   * @schema CloudIdentityGroupSpec#displayName
   */
  readonly displayName?: string;

  /**
   * Immutable. EntityKey of the Group.
   *
   * @schema CloudIdentityGroupSpec#groupKey
   */
  readonly groupKey: CloudIdentityGroupSpecGroupKey;

  /**
   * Immutable. The initial configuration options for creating a Group.
   *
   * See the
   * [API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
   * for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"].
   *
   * @schema CloudIdentityGroupSpec#initialGroupConfig
   */
  readonly initialGroupConfig?: string;

  /**
   * One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.
   *
   * Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value.
   *
   * Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added.
   *
   * Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic.
   *
   * Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.
   *
   * @schema CloudIdentityGroupSpec#labels
   */
  readonly labels: { [key: string]: string };

  /**
   * Immutable. The resource name of the entity under which this Group resides in the
   * Cloud Identity resource hierarchy.
   *
   * Must be of the form identitysources/{identity_source_id} for external-identity-mapped
   * groups or customers/{customer_id} for Google Groups.
   *
   * @schema CloudIdentityGroupSpec#parent
   */
  readonly parent: string;

  /**
   * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
   *
   * @schema CloudIdentityGroupSpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'CloudIdentityGroupSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityGroupSpec(obj: CloudIdentityGroupSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'displayName': obj.displayName,
    'groupKey': toJson_CloudIdentityGroupSpecGroupKey(obj.groupKey),
    'initialGroupConfig': obj.initialGroupConfig,
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'parent': obj.parent,
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. EntityKey of the Group.
 *
 * @schema CloudIdentityGroupSpecGroupKey
 */
export interface CloudIdentityGroupSpecGroupKey {
  /**
   * Immutable. The ID of the entity.
   *
   * For Google-managed entities, the id must be the email address of an existing
   * group or user.
   *
   * For external-identity-mapped entities, the id must be a string conforming
   * to the Identity Source's requirements.
   *
   * Must be unique within a namespace.
   *
   * @schema CloudIdentityGroupSpecGroupKey#id
   */
  readonly id: string;

  /**
   * Immutable. The namespace in which the entity exists.
   *
   * If not specified, the EntityKey represents a Google-managed entity
   * such as a Google user or a Google Group.
   *
   * If specified, the EntityKey represents an external-identity-mapped group.
   * The namespace must correspond to an identity source created in Admin Console
   * and must be in the form of 'identitysources/{identity_source_id}'.
   *
   * @schema CloudIdentityGroupSpecGroupKey#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'CloudIdentityGroupSpecGroupKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityGroupSpecGroupKey(obj: CloudIdentityGroupSpecGroupKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 *
 *
 * @schema CloudIdentityMembership
 */
export class CloudIdentityMembership extends ApiObject {
  /**
   * Returns the apiVersion and kind for "CloudIdentityMembership"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'cloudidentity.cnrm.cloud.google.com/v1beta1',
    kind: 'CloudIdentityMembership',
  }

  /**
   * Renders a Kubernetes manifest for "CloudIdentityMembership".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: CloudIdentityMembershipProps): any {
    return {
      ...CloudIdentityMembership.GVK,
      ...toJson_CloudIdentityMembershipProps(props),
    };
  }

  /**
   * Defines a "CloudIdentityMembership" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: CloudIdentityMembershipProps) {
    super(scope, id, {
      ...CloudIdentityMembership.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...CloudIdentityMembership.GVK,
      ...toJson_CloudIdentityMembershipProps(resolved),
    };
  }
}

/**
 * @schema CloudIdentityMembership
 */
export interface CloudIdentityMembershipProps {
  /**
   * @schema CloudIdentityMembership#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema CloudIdentityMembership#spec
   */
  readonly spec: CloudIdentityMembershipSpec;

}

/**
 * Converts an object of type 'CloudIdentityMembershipProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipProps(obj: CloudIdentityMembershipProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_CloudIdentityMembershipSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudIdentityMembershipSpec
 */
export interface CloudIdentityMembershipSpec {
  /**
   * Immutable.
   *
   * @schema CloudIdentityMembershipSpec#groupRef
   */
  readonly groupRef: CloudIdentityMembershipSpecGroupRef;

  /**
   * Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
   *
   * @schema CloudIdentityMembershipSpec#memberKey
   */
  readonly memberKey?: CloudIdentityMembershipSpecMemberKey;

  /**
   * Immutable. Required. Immutable. The `EntityKey` of the member.
   *
   * @schema CloudIdentityMembershipSpec#preferredMemberKey
   */
  readonly preferredMemberKey: CloudIdentityMembershipSpecPreferredMemberKey;

  /**
   * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
   *
   * @schema CloudIdentityMembershipSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
   *
   * @schema CloudIdentityMembershipSpec#roles
   */
  readonly roles: CloudIdentityMembershipSpecRoles[];

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpec(obj: CloudIdentityMembershipSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupRef': toJson_CloudIdentityMembershipSpecGroupRef(obj.groupRef),
    'memberKey': toJson_CloudIdentityMembershipSpecMemberKey(obj.memberKey),
    'preferredMemberKey': toJson_CloudIdentityMembershipSpecPreferredMemberKey(obj.preferredMemberKey),
    'resourceID': obj.resourceId,
    'roles': obj.roles?.map(y => toJson_CloudIdentityMembershipSpecRoles(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable.
 *
 * @schema CloudIdentityMembershipSpecGroupRef
 */
export interface CloudIdentityMembershipSpecGroupRef {
  /**
   * The group for the resource
   *
   * Allowed value: The Google Cloud resource name of a `CloudIdentityGroup` resource (format: `groups/{{name}}`).
   *
   * @schema CloudIdentityMembershipSpecGroupRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema CloudIdentityMembershipSpecGroupRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema CloudIdentityMembershipSpecGroupRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpecGroupRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpecGroupRef(obj: CloudIdentityMembershipSpecGroupRef | undefined): Record<string, any> | undefined {
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
 * Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
 *
 * @schema CloudIdentityMembershipSpecMemberKey
 */
export interface CloudIdentityMembershipSpecMemberKey {
  /**
   * The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
   *
   * @schema CloudIdentityMembershipSpecMemberKey#id
   */
  readonly id?: string;

  /**
   * The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
   *
   * @schema CloudIdentityMembershipSpecMemberKey#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpecMemberKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpecMemberKey(obj: CloudIdentityMembershipSpecMemberKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Required. Immutable. The `EntityKey` of the member.
 *
 * @schema CloudIdentityMembershipSpecPreferredMemberKey
 */
export interface CloudIdentityMembershipSpecPreferredMemberKey {
  /**
   * Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of a group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
   *
   * @schema CloudIdentityMembershipSpecPreferredMemberKey#id
   */
  readonly id: string;

  /**
   * Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
   *
   * @schema CloudIdentityMembershipSpecPreferredMemberKey#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpecPreferredMemberKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpecPreferredMemberKey(obj: CloudIdentityMembershipSpecPreferredMemberKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudIdentityMembershipSpecRoles
 */
export interface CloudIdentityMembershipSpecRoles {
  /**
   * The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.
   *
   * @schema CloudIdentityMembershipSpecRoles#expiryDetail
   */
  readonly expiryDetail?: CloudIdentityMembershipSpecRolesExpiryDetail;

  /**
   * @schema CloudIdentityMembershipSpecRoles#name
   */
  readonly name: string;

  /**
   * Evaluations of restrictions applied to parent group on this membership.
   *
   * @schema CloudIdentityMembershipSpecRoles#restrictionEvaluations
   */
  readonly restrictionEvaluations?: CloudIdentityMembershipSpecRolesRestrictionEvaluations;

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpecRoles' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpecRoles(obj: CloudIdentityMembershipSpecRoles | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expiryDetail': toJson_CloudIdentityMembershipSpecRolesExpiryDetail(obj.expiryDetail),
    'name': obj.name,
    'restrictionEvaluations': toJson_CloudIdentityMembershipSpecRolesRestrictionEvaluations(obj.restrictionEvaluations),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.
 *
 * @schema CloudIdentityMembershipSpecRolesExpiryDetail
 */
export interface CloudIdentityMembershipSpecRolesExpiryDetail {
  /**
   * The time at which the `MembershipRole` will expire.
   *
   * @schema CloudIdentityMembershipSpecRolesExpiryDetail#expireTime
   */
  readonly expireTime?: Date;

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpecRolesExpiryDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpecRolesExpiryDetail(obj: CloudIdentityMembershipSpecRolesExpiryDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expireTime': obj.expireTime?.toISOString(),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Evaluations of restrictions applied to parent group on this membership.
 *
 * @schema CloudIdentityMembershipSpecRolesRestrictionEvaluations
 */
export interface CloudIdentityMembershipSpecRolesRestrictionEvaluations {
  /**
   * Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation.
   *
   * @schema CloudIdentityMembershipSpecRolesRestrictionEvaluations#memberRestrictionEvaluation
   */
  readonly memberRestrictionEvaluation?: CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation;

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpecRolesRestrictionEvaluations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpecRolesRestrictionEvaluations(obj: CloudIdentityMembershipSpecRolesRestrictionEvaluations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'memberRestrictionEvaluation': toJson_CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation(obj.memberRestrictionEvaluation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation.
 *
 * @schema CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation
 */
export interface CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation {
  /**
   * Output only. The current state of the restriction Possible values: ENCRYPTION_STATE_UNSPECIFIED, UNSUPPORTED_BY_DEVICE, ENCRYPTED, NOT_ENCRYPTED
   *
   * @schema CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation#state
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation(obj: CloudIdentityMembershipSpecRolesRestrictionEvaluationsMemberRestrictionEvaluation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

