export interface APIKey {
    last_check: number;
    allowance: number;
    rate: number;
    per: number;
    throttle_interval: number;
    throttle_retry_limit: number;
    date_created: string;
    expires: number;
    quota_max: number;
    quota_renews: number;
    quota_remaining: number;
    quota_renewal_rate: number;
    access_rights: {};
    org_id: string;
    oauth_client_id: string;
    oauth_keys?: any;
    certificate: string;
    basic_auth_data: BasicAuthData;
    jwt_data: JwtData;
    hmac_enabled: boolean;
    hmac_string: string;
    is_inactive: boolean;
    apply_policy_id: string;
    apply_policies: string[];
    data_expires: number;
    monitor: Monitor;
    enable_detail_recording: boolean;
    meta_data: MetaData;
    tags: any[];
    alias: string;
    last_updated: string;
    id_extractor_deadline: number;
    session_lifetime: number;
}

export interface Limit {
    rate: number;
    per: number;
    throttle_interval: number;
    throttle_retry_limit: number;
    quota_max: number;
    quota_renews: number;
    quota_remaining: number;
    quota_renewal_rate: number;
}

export interface BasicAuthData {
    password: string;
    hash_type: string;
}

export interface JwtData {
    secret: string;
}

export interface Monitor {
    trigger_limits?: any;
}

export interface MetaData {
}

