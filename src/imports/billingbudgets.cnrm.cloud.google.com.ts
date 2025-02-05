// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema BillingBudgetsBudget
 */
export class BillingBudgetsBudget extends ApiObject {
  /**
   * Returns the apiVersion and kind for "BillingBudgetsBudget"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'billingbudgets.cnrm.cloud.google.com/v1beta1',
    kind: 'BillingBudgetsBudget',
  }

  /**
   * Renders a Kubernetes manifest for "BillingBudgetsBudget".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: BillingBudgetsBudgetProps): any {
    return {
      ...BillingBudgetsBudget.GVK,
      ...toJson_BillingBudgetsBudgetProps(props),
    };
  }

  /**
   * Defines a "BillingBudgetsBudget" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: BillingBudgetsBudgetProps) {
    super(scope, id, {
      ...BillingBudgetsBudget.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...BillingBudgetsBudget.GVK,
      ...toJson_BillingBudgetsBudgetProps(resolved),
    };
  }
}

/**
 * @schema BillingBudgetsBudget
 */
export interface BillingBudgetsBudgetProps {
  /**
   * @schema BillingBudgetsBudget#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema BillingBudgetsBudget#spec
   */
  readonly spec: BillingBudgetsBudgetSpec;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetProps(obj: BillingBudgetsBudgetProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_BillingBudgetsBudgetSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BillingBudgetsBudgetSpec
 */
export interface BillingBudgetsBudgetSpec {
  /**
   * Optional. Rules to apply to notifications sent based on budget spend and thresholds.
   *
   * @schema BillingBudgetsBudgetSpec#allUpdatesRule
   */
  readonly allUpdatesRule?: BillingBudgetsBudgetSpecAllUpdatesRule;

  /**
   * Required. Budgeted amount.
   *
   * @schema BillingBudgetsBudgetSpec#amount
   */
  readonly amount: BillingBudgetsBudgetSpecAmount;

  /**
   * Immutable.
   *
   * @schema BillingBudgetsBudgetSpec#billingAccountRef
   */
  readonly billingAccountRef: BillingBudgetsBudgetSpecBillingAccountRef;

  /**
   * Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters.
   *
   * @schema BillingBudgetsBudgetSpec#budgetFilter
   */
  readonly budgetFilter?: BillingBudgetsBudgetSpecBudgetFilter;

  /**
   * User data for display name in UI. The name must be less than or equal to 60 characters.
   *
   * @schema BillingBudgetsBudgetSpec#displayName
   */
  readonly displayName?: string;

  /**
   * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
   *
   * @schema BillingBudgetsBudgetSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget.
   *
   * @schema BillingBudgetsBudgetSpec#thresholdRules
   */
  readonly thresholdRules?: BillingBudgetsBudgetSpecThresholdRules[];

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpec(obj: BillingBudgetsBudgetSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allUpdatesRule': toJson_BillingBudgetsBudgetSpecAllUpdatesRule(obj.allUpdatesRule),
    'amount': toJson_BillingBudgetsBudgetSpecAmount(obj.amount),
    'billingAccountRef': toJson_BillingBudgetsBudgetSpecBillingAccountRef(obj.billingAccountRef),
    'budgetFilter': toJson_BillingBudgetsBudgetSpecBudgetFilter(obj.budgetFilter),
    'displayName': obj.displayName,
    'resourceID': obj.resourceId,
    'thresholdRules': obj.thresholdRules?.map(y => toJson_BillingBudgetsBudgetSpecThresholdRules(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Optional. Rules to apply to notifications sent based on budget spend and thresholds.
 *
 * @schema BillingBudgetsBudgetSpecAllUpdatesRule
 */
export interface BillingBudgetsBudgetSpecAllUpdatesRule {
  /**
   * Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account.
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRule#disableDefaultIamRecipients
   */
  readonly disableDefaultIamRecipients?: boolean;

  /**
   * @schema BillingBudgetsBudgetSpecAllUpdatesRule#monitoringNotificationChannels
   */
  readonly monitoringNotificationChannels?: BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels[];

  /**
   * @schema BillingBudgetsBudgetSpecAllUpdatesRule#pubsubTopicRef
   */
  readonly pubsubTopicRef?: BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef;

  /**
   * Optional. Required when NotificationsRule.pubsub_topic is set. The schema version of the notification sent to NotificationsRule.pubsub_topic. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format.
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRule#schemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecAllUpdatesRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecAllUpdatesRule(obj: BillingBudgetsBudgetSpecAllUpdatesRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'disableDefaultIamRecipients': obj.disableDefaultIamRecipients,
    'monitoringNotificationChannels': obj.monitoringNotificationChannels?.map(y => toJson_BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels(y)),
    'pubsubTopicRef': toJson_BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef(obj.pubsubTopicRef),
    'schemaVersion': obj.schemaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Required. Budgeted amount.
 *
 * @schema BillingBudgetsBudgetSpecAmount
 */
export interface BillingBudgetsBudgetSpecAmount {
  /**
   * Use the last period's actual spend as the budget for the present period. LastPeriodAmount can only be set when the budget's time period is a .
   *
   * @schema BillingBudgetsBudgetSpecAmount#lastPeriodAmount
   */
  readonly lastPeriodAmount?: any;

  /**
   * A specified amount to use as the budget. `currency_code` is optional. If specified when creating a budget, it must match the currency of the billing account. If specified when updating a budget, it must match the currency_code of the existing budget. The `currency_code` is provided on output.
   *
   * @schema BillingBudgetsBudgetSpecAmount#specifiedAmount
   */
  readonly specifiedAmount?: BillingBudgetsBudgetSpecAmountSpecifiedAmount;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecAmount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecAmount(obj: BillingBudgetsBudgetSpecAmount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lastPeriodAmount': obj.lastPeriodAmount,
    'specifiedAmount': toJson_BillingBudgetsBudgetSpecAmountSpecifiedAmount(obj.specifiedAmount),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable.
 *
 * @schema BillingBudgetsBudgetSpecBillingAccountRef
 */
export interface BillingBudgetsBudgetSpecBillingAccountRef {
  /**
   * The billing account of the resource
   *
   * Allowed value: The Google Cloud resource name of a Google Cloud Billing Account (format: `billingAccounts/{{name}}`).
   *
   * @schema BillingBudgetsBudgetSpecBillingAccountRef#external
   */
  readonly external?: string;

  /**
   * [WARNING] BillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BillingBudgetsBudgetSpecBillingAccountRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BillingBudgetsBudgetSpecBillingAccountRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBillingAccountRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBillingAccountRef(obj: BillingBudgetsBudgetSpecBillingAccountRef | undefined): Record<string, any> | undefined {
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
 * Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters.
 *
 * @schema BillingBudgetsBudgetSpecBudgetFilter
 */
export interface BillingBudgetsBudgetSpecBudgetFilter {
  /**
   * Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget will track usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it will track usage from July 1 to September 30 when the current calendar month is July, August, September, so on. Possible values: CALENDAR_PERIOD_UNSPECIFIED, MONTH, QUARTER, YEAR
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilter#calendarPeriod
   */
  readonly calendarPeriod?: string;

  /**
   * Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values. If Filter.credit_types_treatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilter#creditTypes
   */
  readonly creditTypes?: string[];

  /**
   * Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilter#creditTypesTreatment
   */
  readonly creditTypesTreatment?: string;

  /**
   * Optional. Specifies to track usage from any start date (required) to any end date (optional). This time period is static, it does not recur.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilter#customPeriod
   */
  readonly customPeriod?: BillingBudgetsBudgetSpecBudgetFilterCustomPeriod;

  /**
   * Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilter#labels
   */
  readonly labels?: { [key: string]: BillingBudgetsBudgetSpecBudgetFilterLabels };

  /**
   * @schema BillingBudgetsBudgetSpecBudgetFilter#projects
   */
  readonly projects?: BillingBudgetsBudgetSpecBudgetFilterProjects[];

  /**
   * Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilter#services
   */
  readonly services?: string[];

  /**
   * @schema BillingBudgetsBudgetSpecBudgetFilter#subaccounts
   */
  readonly subaccounts?: BillingBudgetsBudgetSpecBudgetFilterSubaccounts[];

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBudgetFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBudgetFilter(obj: BillingBudgetsBudgetSpecBudgetFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'calendarPeriod': obj.calendarPeriod,
    'creditTypes': obj.creditTypes?.map(y => y),
    'creditTypesTreatment': obj.creditTypesTreatment,
    'customPeriod': toJson_BillingBudgetsBudgetSpecBudgetFilterCustomPeriod(obj.customPeriod),
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_BillingBudgetsBudgetSpecBudgetFilterLabels(i[1]) }), {})),
    'projects': obj.projects?.map(y => toJson_BillingBudgetsBudgetSpecBudgetFilterProjects(y)),
    'services': obj.services?.map(y => y),
    'subaccounts': obj.subaccounts?.map(y => toJson_BillingBudgetsBudgetSpecBudgetFilterSubaccounts(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BillingBudgetsBudgetSpecThresholdRules
 */
export interface BillingBudgetsBudgetSpecThresholdRules {
  /**
   * Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. Possible values: BASIS_UNSPECIFIED, CURRENT_SPEND, FORECASTED_SPEND
   *
   * @schema BillingBudgetsBudgetSpecThresholdRules#spendBasis
   */
  readonly spendBasis?: string;

  /**
   * Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
   *
   * @schema BillingBudgetsBudgetSpecThresholdRules#thresholdPercent
   */
  readonly thresholdPercent: number;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecThresholdRules' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecThresholdRules(obj: BillingBudgetsBudgetSpecThresholdRules | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'spendBasis': obj.spendBasis,
    'thresholdPercent': obj.thresholdPercent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels
 */
export interface BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels {
  /**
   * Allowed value: The Google Cloud resource name of a `MonitoringNotificationChannel` resource (format: `projects/{{project}}/notificationChannels/{{name}}`).
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels(obj: BillingBudgetsBudgetSpecAllUpdatesRuleMonitoringNotificationChannels | undefined): Record<string, any> | undefined {
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
 * @schema BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef
 */
export interface BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef {
  /**
   * Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details. Caller is expected to have `pubsub.topics.setIamPolicy` permission on the topic when it's set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task for more details on Pub/Sub roles and permissions.
   *
   * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef(obj: BillingBudgetsBudgetSpecAllUpdatesRulePubsubTopicRef | undefined): Record<string, any> | undefined {
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
 * A specified amount to use as the budget. `currency_code` is optional. If specified when creating a budget, it must match the currency of the billing account. If specified when updating a budget, it must match the currency_code of the existing budget. The `currency_code` is provided on output.
 *
 * @schema BillingBudgetsBudgetSpecAmountSpecifiedAmount
 */
export interface BillingBudgetsBudgetSpecAmountSpecifiedAmount {
  /**
   * Immutable. The three-letter currency code defined in ISO 4217.
   *
   * @schema BillingBudgetsBudgetSpecAmountSpecifiedAmount#currencyCode
   */
  readonly currencyCode?: string;

  /**
   * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
   *
   * @schema BillingBudgetsBudgetSpecAmountSpecifiedAmount#nanos
   */
  readonly nanos?: number;

  /**
   * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
   *
   * @schema BillingBudgetsBudgetSpecAmountSpecifiedAmount#units
   */
  readonly units?: number;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecAmountSpecifiedAmount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecAmountSpecifiedAmount(obj: BillingBudgetsBudgetSpecAmountSpecifiedAmount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'currencyCode': obj.currencyCode,
    'nanos': obj.nanos,
    'units': obj.units,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Optional. Specifies to track usage from any start date (required) to any end date (optional). This time period is static, it does not recur.
 *
 * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriod
 */
export interface BillingBudgetsBudgetSpecBudgetFilterCustomPeriod {
  /**
   * Immutable. Optional. The end date of the time period. Budgets with elapsed end date won't be processed. If unset, specifies to track all usage incurred since the start_date.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriod#endDate
   */
  readonly endDate?: BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate;

  /**
   * Immutable. Required. The start date must be after January 1, 2017.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriod#startDate
   */
  readonly startDate: BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBudgetFilterCustomPeriod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBudgetFilterCustomPeriod(obj: BillingBudgetsBudgetSpecBudgetFilterCustomPeriod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'endDate': toJson_BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate(obj.endDate),
    'startDate': toJson_BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate(obj.startDate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BillingBudgetsBudgetSpecBudgetFilterLabels
 */
export interface BillingBudgetsBudgetSpecBudgetFilterLabels {
  /**
   * Immutable. The values of the label
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterLabels#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBudgetFilterLabels' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBudgetFilterLabels(obj: BillingBudgetsBudgetSpecBudgetFilterLabels | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BillingBudgetsBudgetSpecBudgetFilterProjects
 */
export interface BillingBudgetsBudgetSpecBudgetFilterProjects {
  /**
   * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterProjects#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterProjects#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterProjects#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBudgetFilterProjects' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBudgetFilterProjects(obj: BillingBudgetsBudgetSpecBudgetFilterProjects | undefined): Record<string, any> | undefined {
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
 * @schema BillingBudgetsBudgetSpecBudgetFilterSubaccounts
 */
export interface BillingBudgetsBudgetSpecBudgetFilterSubaccounts {
  /**
   * @schema BillingBudgetsBudgetSpecBudgetFilterSubaccounts#external
   */
  readonly external?: string;

  /**
   * [WARNING] CloudBillingBillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterSubaccounts#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterSubaccounts#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBudgetFilterSubaccounts' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBudgetFilterSubaccounts(obj: BillingBudgetsBudgetSpecBudgetFilterSubaccounts | undefined): Record<string, any> | undefined {
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
 * Immutable. Optional. The end date of the time period. Budgets with elapsed end date won't be processed. If unset, specifies to track all usage incurred since the start_date.
 *
 * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate
 */
export interface BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate {
  /**
   * Immutable. Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate#day
   */
  readonly day?: number;

  /**
   * Immutable. Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate#month
   */
  readonly month?: number;

  /**
   * Immutable. Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate#year
   */
  readonly year?: number;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate(obj: BillingBudgetsBudgetSpecBudgetFilterCustomPeriodEndDate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'day': obj.day,
    'month': obj.month,
    'year': obj.year,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Required. The start date must be after January 1, 2017.
 *
 * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate
 */
export interface BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate {
  /**
   * Immutable. Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate#day
   */
  readonly day?: number;

  /**
   * Immutable. Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate#month
   */
  readonly month?: number;

  /**
   * Immutable. Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
   *
   * @schema BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate#year
   */
  readonly year?: number;

}

/**
 * Converts an object of type 'BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate(obj: BillingBudgetsBudgetSpecBudgetFilterCustomPeriodStartDate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'day': obj.day,
    'month': obj.month,
    'year': obj.year,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

