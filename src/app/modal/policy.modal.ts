export interface APIPolicy {
    auth_type: string;
    _id: string;
    id: string;
    org_id: string;
    rate: number;
    per: number;
    throttle_interval: number;
    throttle_retry_limit: number;
    quota_max: number;
    quota_renewal_rate: number;
    access_rights: {};
    hmac_enabled: boolean;
    active: boolean;
    name: string;
    is_inactive: boolean;
    date_created: Date;
    tags: any[];
    key_expires_in: number;
    partitions: Partitions;
    last_updated: string;
}

export interface APIPolicyList{
    Data: Array<APIPolicy>
}

export interface Partitions {
    quota: boolean;
    rate_limit: boolean;
    acl: boolean;
    per_api: boolean;
}

