// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema DataflowFlexTemplateJob
 */
export class DataflowFlexTemplateJob extends ApiObject {
  /**
   * Returns the apiVersion and kind for "DataflowFlexTemplateJob"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'dataflow.cnrm.cloud.google.com/v1beta1',
    kind: 'DataflowFlexTemplateJob',
  }

  /**
   * Renders a Kubernetes manifest for "DataflowFlexTemplateJob".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: DataflowFlexTemplateJobProps): any {
    return {
      ...DataflowFlexTemplateJob.GVK,
      ...toJson_DataflowFlexTemplateJobProps(props),
    };
  }

  /**
   * Defines a "DataflowFlexTemplateJob" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: DataflowFlexTemplateJobProps) {
    super(scope, id, {
      ...DataflowFlexTemplateJob.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...DataflowFlexTemplateJob.GVK,
      ...toJson_DataflowFlexTemplateJobProps(resolved),
    };
  }
}

/**
 * @schema DataflowFlexTemplateJob
 */
export interface DataflowFlexTemplateJobProps {
  /**
   * @schema DataflowFlexTemplateJob#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema DataflowFlexTemplateJob#spec
   */
  readonly spec: DataflowFlexTemplateJobSpec;

}

/**
 * Converts an object of type 'DataflowFlexTemplateJobProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowFlexTemplateJobProps(obj: DataflowFlexTemplateJobProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_DataflowFlexTemplateJobSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataflowFlexTemplateJobSpec
 */
export interface DataflowFlexTemplateJobSpec {
  /**
   * List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
   *
   * @schema DataflowFlexTemplateJobSpec#additionalExperiments
   */
  readonly additionalExperiments?: string[];

  /**
   * The algorithm to use for autoscaling.
   *
   * @schema DataflowFlexTemplateJobSpec#autoscalingAlgorithm
   */
  readonly autoscalingAlgorithm?: string;

  /**
   * @schema DataflowFlexTemplateJobSpec#containerSpecGcsPath
   */
  readonly containerSpecGcsPath: string;

  /**
   * Immutable. Indicates if the job should use the streaming engine feature.
   *
   * @schema DataflowFlexTemplateJobSpec#enableStreamingEngine
   */
  readonly enableStreamingEngine?: boolean;

  /**
   * The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
   *
   * @schema DataflowFlexTemplateJobSpec#ipConfiguration
   */
  readonly ipConfiguration?: string;

  /**
   * The name for the Cloud KMS key for the job.
   *
   * @schema DataflowFlexTemplateJobSpec#kmsKeyNameRef
   */
  readonly kmsKeyNameRef?: DataflowFlexTemplateJobSpecKmsKeyNameRef;

  /**
   * The machine type to use for launching the job. The default is n1-standard-1.
   *
   * @schema DataflowFlexTemplateJobSpec#launcherMachineType
   */
  readonly launcherMachineType?: string;

  /**
   * The machine type to use for the job.
   *
   * @schema DataflowFlexTemplateJobSpec#machineType
   */
  readonly machineType?: string;

  /**
   * Immutable. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
   *
   * @schema DataflowFlexTemplateJobSpec#maxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema DataflowFlexTemplateJobSpec#networkRef
   */
  readonly networkRef?: DataflowFlexTemplateJobSpecNetworkRef;

  /**
   * Immutable. The initial number of Google Compute Engine instances for the job.
   *
   * @schema DataflowFlexTemplateJobSpec#numWorkers
   */
  readonly numWorkers?: number;

  /**
   * @schema DataflowFlexTemplateJobSpec#parameters
   */
  readonly parameters?: any;

  /**
   * Immutable. The region in which the created job should run.
   *
   * @schema DataflowFlexTemplateJobSpec#region
   */
  readonly region?: string;

  /**
   * Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.
   *
   * @default the container for the version of the SDK. Note this field is only valid for portable pipelines.
   * @schema DataflowFlexTemplateJobSpec#sdkContainerImage
   */
  readonly sdkContainerImage?: string;

  /**
   * @schema DataflowFlexTemplateJobSpec#serviceAccountEmailRef
   */
  readonly serviceAccountEmailRef?: DataflowFlexTemplateJobSpecServiceAccountEmailRef;

  /**
   * The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
   *
   * @schema DataflowFlexTemplateJobSpec#stagingLocation
   */
  readonly stagingLocation?: string;

  /**
   * @schema DataflowFlexTemplateJobSpec#subnetworkRef
   */
  readonly subnetworkRef?: DataflowFlexTemplateJobSpecSubnetworkRef;

  /**
   * The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
   *
   * @schema DataflowFlexTemplateJobSpec#tempLocation
   */
  readonly tempLocation?: string;

  /**
   * Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.
   *
   * @schema DataflowFlexTemplateJobSpec#transformNameMapping
   */
  readonly transformNameMapping?: any;

}

/**
 * Converts an object of type 'DataflowFlexTemplateJobSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowFlexTemplateJobSpec(obj: DataflowFlexTemplateJobSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'additionalExperiments': obj.additionalExperiments?.map(y => y),
    'autoscalingAlgorithm': obj.autoscalingAlgorithm,
    'containerSpecGcsPath': obj.containerSpecGcsPath,
    'enableStreamingEngine': obj.enableStreamingEngine,
    'ipConfiguration': obj.ipConfiguration,
    'kmsKeyNameRef': toJson_DataflowFlexTemplateJobSpecKmsKeyNameRef(obj.kmsKeyNameRef),
    'launcherMachineType': obj.launcherMachineType,
    'machineType': obj.machineType,
    'maxWorkers': obj.maxWorkers,
    'networkRef': toJson_DataflowFlexTemplateJobSpecNetworkRef(obj.networkRef),
    'numWorkers': obj.numWorkers,
    'parameters': obj.parameters,
    'region': obj.region,
    'sdkContainerImage': obj.sdkContainerImage,
    'serviceAccountEmailRef': toJson_DataflowFlexTemplateJobSpecServiceAccountEmailRef(obj.serviceAccountEmailRef),
    'stagingLocation': obj.stagingLocation,
    'subnetworkRef': toJson_DataflowFlexTemplateJobSpecSubnetworkRef(obj.subnetworkRef),
    'tempLocation': obj.tempLocation,
    'transformNameMapping': obj.transformNameMapping,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The name for the Cloud KMS key for the job.
 *
 * @schema DataflowFlexTemplateJobSpecKmsKeyNameRef
 */
export interface DataflowFlexTemplateJobSpecKmsKeyNameRef {
  /**
   * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
   *
   * @schema DataflowFlexTemplateJobSpecKmsKeyNameRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowFlexTemplateJobSpecKmsKeyNameRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowFlexTemplateJobSpecKmsKeyNameRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowFlexTemplateJobSpecKmsKeyNameRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowFlexTemplateJobSpecKmsKeyNameRef(obj: DataflowFlexTemplateJobSpecKmsKeyNameRef | undefined): Record<string, any> | undefined {
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
 * @schema DataflowFlexTemplateJobSpecNetworkRef
 */
export interface DataflowFlexTemplateJobSpecNetworkRef {
  /**
   * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
   *
   * @schema DataflowFlexTemplateJobSpecNetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowFlexTemplateJobSpecNetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowFlexTemplateJobSpecNetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowFlexTemplateJobSpecNetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowFlexTemplateJobSpecNetworkRef(obj: DataflowFlexTemplateJobSpecNetworkRef | undefined): Record<string, any> | undefined {
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
 * @schema DataflowFlexTemplateJobSpecServiceAccountEmailRef
 */
export interface DataflowFlexTemplateJobSpecServiceAccountEmailRef {
  /**
   * Allowed value: The `email` field of an `IAMServiceAccount` resource.
   *
   * @schema DataflowFlexTemplateJobSpecServiceAccountEmailRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowFlexTemplateJobSpecServiceAccountEmailRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowFlexTemplateJobSpecServiceAccountEmailRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowFlexTemplateJobSpecServiceAccountEmailRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowFlexTemplateJobSpecServiceAccountEmailRef(obj: DataflowFlexTemplateJobSpecServiceAccountEmailRef | undefined): Record<string, any> | undefined {
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
 * @schema DataflowFlexTemplateJobSpecSubnetworkRef
 */
export interface DataflowFlexTemplateJobSpecSubnetworkRef {
  /**
   * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
   *
   * @schema DataflowFlexTemplateJobSpecSubnetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowFlexTemplateJobSpecSubnetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowFlexTemplateJobSpecSubnetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowFlexTemplateJobSpecSubnetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowFlexTemplateJobSpecSubnetworkRef(obj: DataflowFlexTemplateJobSpecSubnetworkRef | undefined): Record<string, any> | undefined {
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
 * @schema DataflowJob
 */
export class DataflowJob extends ApiObject {
  /**
   * Returns the apiVersion and kind for "DataflowJob"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'dataflow.cnrm.cloud.google.com/v1beta1',
    kind: 'DataflowJob',
  }

  /**
   * Renders a Kubernetes manifest for "DataflowJob".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: DataflowJobProps): any {
    return {
      ...DataflowJob.GVK,
      ...toJson_DataflowJobProps(props),
    };
  }

  /**
   * Defines a "DataflowJob" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: DataflowJobProps) {
    super(scope, id, {
      ...DataflowJob.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...DataflowJob.GVK,
      ...toJson_DataflowJobProps(resolved),
    };
  }
}

/**
 * @schema DataflowJob
 */
export interface DataflowJobProps {
  /**
   * @schema DataflowJob#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema DataflowJob#spec
   */
  readonly spec: DataflowJobSpec;

}

/**
 * Converts an object of type 'DataflowJobProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowJobProps(obj: DataflowJobProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_DataflowJobSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataflowJobSpec
 */
export interface DataflowJobSpec {
  /**
   * List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
   *
   * @schema DataflowJobSpec#additionalExperiments
   */
  readonly additionalExperiments?: string[];

  /**
   * Indicates if the job should use the streaming engine feature.
   *
   * @schema DataflowJobSpec#enableStreamingEngine
   */
  readonly enableStreamingEngine?: boolean;

  /**
   * The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
   *
   * @schema DataflowJobSpec#ipConfiguration
   */
  readonly ipConfiguration?: string;

  /**
   * The name for the Cloud KMS key for the job.
   *
   * @schema DataflowJobSpec#kmsKeyRef
   */
  readonly kmsKeyRef?: DataflowJobSpecKmsKeyRef;

  /**
   * The machine type to use for the job.
   *
   * @schema DataflowJobSpec#machineType
   */
  readonly machineType?: string;

  /**
   * Immutable. The number of workers permitted to work on the job. More workers may improve processing speed at additional cost.
   *
   * @schema DataflowJobSpec#maxWorkers
   */
  readonly maxWorkers?: number;

  /**
   * @schema DataflowJobSpec#networkRef
   */
  readonly networkRef?: DataflowJobSpecNetworkRef;

  /**
   * Key/Value pairs to be passed to the Dataflow job (as used in the template).
   *
   * @schema DataflowJobSpec#parameters
   */
  readonly parameters?: any;

  /**
   * Immutable. The region in which the created job should run.
   *
   * @schema DataflowJobSpec#region
   */
  readonly region?: string;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema DataflowJobSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * @schema DataflowJobSpec#serviceAccountRef
   */
  readonly serviceAccountRef?: DataflowJobSpecServiceAccountRef;

  /**
   * @schema DataflowJobSpec#subnetworkRef
   */
  readonly subnetworkRef?: DataflowJobSpecSubnetworkRef;

  /**
   * A writeable location on Google Cloud Storage for the Dataflow job to dump its temporary data.
   *
   * @schema DataflowJobSpec#tempGcsLocation
   */
  readonly tempGcsLocation: string;

  /**
   * The Google Cloud Storage path to the Dataflow job template.
   *
   * @schema DataflowJobSpec#templateGcsPath
   */
  readonly templateGcsPath: string;

  /**
   * Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.
   *
   * @schema DataflowJobSpec#transformNameMapping
   */
  readonly transformNameMapping?: any;

  /**
   * Immutable. The zone in which the created job should run. If it is not provided, the provider zone is used.
   *
   * @schema DataflowJobSpec#zone
   */
  readonly zone?: string;

}

/**
 * Converts an object of type 'DataflowJobSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowJobSpec(obj: DataflowJobSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'additionalExperiments': obj.additionalExperiments?.map(y => y),
    'enableStreamingEngine': obj.enableStreamingEngine,
    'ipConfiguration': obj.ipConfiguration,
    'kmsKeyRef': toJson_DataflowJobSpecKmsKeyRef(obj.kmsKeyRef),
    'machineType': obj.machineType,
    'maxWorkers': obj.maxWorkers,
    'networkRef': toJson_DataflowJobSpecNetworkRef(obj.networkRef),
    'parameters': obj.parameters,
    'region': obj.region,
    'resourceID': obj.resourceId,
    'serviceAccountRef': toJson_DataflowJobSpecServiceAccountRef(obj.serviceAccountRef),
    'subnetworkRef': toJson_DataflowJobSpecSubnetworkRef(obj.subnetworkRef),
    'tempGcsLocation': obj.tempGcsLocation,
    'templateGcsPath': obj.templateGcsPath,
    'transformNameMapping': obj.transformNameMapping,
    'zone': obj.zone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The name for the Cloud KMS key for the job.
 *
 * @schema DataflowJobSpecKmsKeyRef
 */
export interface DataflowJobSpecKmsKeyRef {
  /**
   * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
   *
   * @schema DataflowJobSpecKmsKeyRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowJobSpecKmsKeyRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowJobSpecKmsKeyRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowJobSpecKmsKeyRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowJobSpecKmsKeyRef(obj: DataflowJobSpecKmsKeyRef | undefined): Record<string, any> | undefined {
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
 * @schema DataflowJobSpecNetworkRef
 */
export interface DataflowJobSpecNetworkRef {
  /**
   * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
   *
   * @schema DataflowJobSpecNetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowJobSpecNetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowJobSpecNetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowJobSpecNetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowJobSpecNetworkRef(obj: DataflowJobSpecNetworkRef | undefined): Record<string, any> | undefined {
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
 * @schema DataflowJobSpecServiceAccountRef
 */
export interface DataflowJobSpecServiceAccountRef {
  /**
   * Allowed value: The `email` field of an `IAMServiceAccount` resource.
   *
   * @schema DataflowJobSpecServiceAccountRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowJobSpecServiceAccountRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowJobSpecServiceAccountRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowJobSpecServiceAccountRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowJobSpecServiceAccountRef(obj: DataflowJobSpecServiceAccountRef | undefined): Record<string, any> | undefined {
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
 * @schema DataflowJobSpecSubnetworkRef
 */
export interface DataflowJobSpecSubnetworkRef {
  /**
   * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
   *
   * @schema DataflowJobSpecSubnetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataflowJobSpecSubnetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataflowJobSpecSubnetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataflowJobSpecSubnetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataflowJobSpecSubnetworkRef(obj: DataflowJobSpecSubnetworkRef | undefined): Record<string, any> | undefined {
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
