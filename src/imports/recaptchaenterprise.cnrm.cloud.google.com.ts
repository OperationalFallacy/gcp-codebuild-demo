// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema RecaptchaEnterpriseKey
 */
export class RecaptchaEnterpriseKey extends ApiObject {
  /**
   * Returns the apiVersion and kind for "RecaptchaEnterpriseKey"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'recaptchaenterprise.cnrm.cloud.google.com/v1beta1',
    kind: 'RecaptchaEnterpriseKey',
  }

  /**
   * Renders a Kubernetes manifest for "RecaptchaEnterpriseKey".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: RecaptchaEnterpriseKeyProps): any {
    return {
      ...RecaptchaEnterpriseKey.GVK,
      ...toJson_RecaptchaEnterpriseKeyProps(props),
    };
  }

  /**
   * Defines a "RecaptchaEnterpriseKey" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: RecaptchaEnterpriseKeyProps) {
    super(scope, id, {
      ...RecaptchaEnterpriseKey.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...RecaptchaEnterpriseKey.GVK,
      ...toJson_RecaptchaEnterpriseKeyProps(resolved),
    };
  }
}

/**
 * @schema RecaptchaEnterpriseKey
 */
export interface RecaptchaEnterpriseKeyProps {
  /**
   * @schema RecaptchaEnterpriseKey#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema RecaptchaEnterpriseKey#spec
   */
  readonly spec: RecaptchaEnterpriseKeySpec;

}

/**
 * Converts an object of type 'RecaptchaEnterpriseKeyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RecaptchaEnterpriseKeyProps(obj: RecaptchaEnterpriseKeyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_RecaptchaEnterpriseKeySpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema RecaptchaEnterpriseKeySpec
 */
export interface RecaptchaEnterpriseKeySpec {
  /**
   * Settings for keys that can be used by Android apps.
   *
   * @schema RecaptchaEnterpriseKeySpec#androidSettings
   */
  readonly androidSettings?: RecaptchaEnterpriseKeySpecAndroidSettings;

  /**
   * Human-readable display name of this key. Modifiable by user.
   *
   * @schema RecaptchaEnterpriseKeySpec#displayName
   */
  readonly displayName: string;

  /**
   * Settings for keys that can be used by iOS apps.
   *
   * @schema RecaptchaEnterpriseKeySpec#iosSettings
   */
  readonly iosSettings?: RecaptchaEnterpriseKeySpecIosSettings;

  /**
   * Immutable. The Project that this resource belongs to.
   *
   * @schema RecaptchaEnterpriseKeySpec#projectRef
   */
  readonly projectRef: RecaptchaEnterpriseKeySpecProjectRef;

  /**
   * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
   *
   * @schema RecaptchaEnterpriseKeySpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Immutable. Options for user acceptance testing.
   *
   * @schema RecaptchaEnterpriseKeySpec#testingOptions
   */
  readonly testingOptions?: RecaptchaEnterpriseKeySpecTestingOptions;

  /**
   * Settings for keys that can be used by websites.
   *
   * @schema RecaptchaEnterpriseKeySpec#webSettings
   */
  readonly webSettings?: RecaptchaEnterpriseKeySpecWebSettings;

}

/**
 * Converts an object of type 'RecaptchaEnterpriseKeySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RecaptchaEnterpriseKeySpec(obj: RecaptchaEnterpriseKeySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'androidSettings': toJson_RecaptchaEnterpriseKeySpecAndroidSettings(obj.androidSettings),
    'displayName': obj.displayName,
    'iosSettings': toJson_RecaptchaEnterpriseKeySpecIosSettings(obj.iosSettings),
    'projectRef': toJson_RecaptchaEnterpriseKeySpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
    'testingOptions': toJson_RecaptchaEnterpriseKeySpecTestingOptions(obj.testingOptions),
    'webSettings': toJson_RecaptchaEnterpriseKeySpecWebSettings(obj.webSettings),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Settings for keys that can be used by Android apps.
 *
 * @schema RecaptchaEnterpriseKeySpecAndroidSettings
 */
export interface RecaptchaEnterpriseKeySpecAndroidSettings {
  /**
   * If set to true, it means allowed_package_names will not be enforced.
   *
   * @schema RecaptchaEnterpriseKeySpecAndroidSettings#allowAllPackageNames
   */
  readonly allowAllPackageNames?: boolean;

  /**
   * Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
   *
   * @schema RecaptchaEnterpriseKeySpecAndroidSettings#allowedPackageNames
   */
  readonly allowedPackageNames?: string[];

}

/**
 * Converts an object of type 'RecaptchaEnterpriseKeySpecAndroidSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RecaptchaEnterpriseKeySpecAndroidSettings(obj: RecaptchaEnterpriseKeySpecAndroidSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowAllPackageNames': obj.allowAllPackageNames,
    'allowedPackageNames': obj.allowedPackageNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Settings for keys that can be used by iOS apps.
 *
 * @schema RecaptchaEnterpriseKeySpecIosSettings
 */
export interface RecaptchaEnterpriseKeySpecIosSettings {
  /**
   * If set to true, it means allowed_bundle_ids will not be enforced.
   *
   * @schema RecaptchaEnterpriseKeySpecIosSettings#allowAllBundleIds
   */
  readonly allowAllBundleIds?: boolean;

  /**
   * iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
   *
   * @schema RecaptchaEnterpriseKeySpecIosSettings#allowedBundleIds
   */
  readonly allowedBundleIds?: string[];

}

/**
 * Converts an object of type 'RecaptchaEnterpriseKeySpecIosSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RecaptchaEnterpriseKeySpecIosSettings(obj: RecaptchaEnterpriseKeySpecIosSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowAllBundleIds': obj.allowAllBundleIds,
    'allowedBundleIds': obj.allowedBundleIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The Project that this resource belongs to.
 *
 * @schema RecaptchaEnterpriseKeySpecProjectRef
 */
export interface RecaptchaEnterpriseKeySpecProjectRef {
  /**
   * The project for the resource
   *
   * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
   *
   * @schema RecaptchaEnterpriseKeySpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema RecaptchaEnterpriseKeySpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema RecaptchaEnterpriseKeySpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'RecaptchaEnterpriseKeySpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RecaptchaEnterpriseKeySpecProjectRef(obj: RecaptchaEnterpriseKeySpecProjectRef | undefined): Record<string, any> | undefined {
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
 * Immutable. Options for user acceptance testing.
 *
 * @schema RecaptchaEnterpriseKeySpecTestingOptions
 */
export interface RecaptchaEnterpriseKeySpecTestingOptions {
  /**
   * Immutable. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE
   *
   * @schema RecaptchaEnterpriseKeySpecTestingOptions#testingChallenge
   */
  readonly testingChallenge?: string;

  /**
   * Immutable. All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
   *
   * @schema RecaptchaEnterpriseKeySpecTestingOptions#testingScore
   */
  readonly testingScore?: number;

}

/**
 * Converts an object of type 'RecaptchaEnterpriseKeySpecTestingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RecaptchaEnterpriseKeySpecTestingOptions(obj: RecaptchaEnterpriseKeySpecTestingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'testingChallenge': obj.testingChallenge,
    'testingScore': obj.testingScore,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Settings for keys that can be used by websites.
 *
 * @schema RecaptchaEnterpriseKeySpecWebSettings
 */
export interface RecaptchaEnterpriseKeySpecWebSettings {
  /**
   * If set to true, it means allowed_domains will not be enforced.
   *
   * @schema RecaptchaEnterpriseKeySpecWebSettings#allowAllDomains
   */
  readonly allowAllDomains?: boolean;

  /**
   * If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
   *
   * @schema RecaptchaEnterpriseKeySpecWebSettings#allowAmpTraffic
   */
  readonly allowAmpTraffic?: boolean;

  /**
   * Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
   *
   * @schema RecaptchaEnterpriseKeySpecWebSettings#allowedDomains
   */
  readonly allowedDomains?: string[];

  /**
   * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
   *
   * @schema RecaptchaEnterpriseKeySpecWebSettings#challengeSecurityPreference
   */
  readonly challengeSecurityPreference?: string;

  /**
   * Immutable. Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE
   *
   * @schema RecaptchaEnterpriseKeySpecWebSettings#integrationType
   */
  readonly integrationType: string;

}

/**
 * Converts an object of type 'RecaptchaEnterpriseKeySpecWebSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_RecaptchaEnterpriseKeySpecWebSettings(obj: RecaptchaEnterpriseKeySpecWebSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowAllDomains': obj.allowAllDomains,
    'allowAmpTraffic': obj.allowAmpTraffic,
    'allowedDomains': obj.allowedDomains?.map(y => y),
    'challengeSecurityPreference': obj.challengeSecurityPreference,
    'integrationType': obj.integrationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
