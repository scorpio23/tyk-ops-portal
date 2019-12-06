export interface APIModal {
    id: string;
    name: string;
    slug: string;
    listen_port: number;
    protocol: string;
    enable_proxy_protocol: boolean;
    api_id: string;
    org_id: string;
    use_keyless: boolean;
    use_oauth2: boolean;
    use_openid: boolean;
    openid_options: OpenidOptions;
    oauth_meta: OauthMeta;
    auth: Auth;
    use_basic_auth: boolean;
    basic_auth: BasicAuth;
    use_mutual_tls_auth: boolean;
    client_certificates: any[];
    upstream_certificates: UpstreamCertificates;
    pinned_public_keys: PinnedPublicKeys;
    enable_jwt: boolean;
    use_standard_auth: boolean;
    use_go_plugin_auth: boolean;
    enable_coprocess_auth: boolean;
    jwt_signing_method: string;
    jwt_source: string;
    jwt_identity_base_field: string;
    jwt_client_base_field: string;
    jwt_policy_field_name: string;
    jwt_default_policies: any[];
    jwt_issued_at_validation_skew: number;
    jwt_expires_at_validation_skew: number;
    jwt_not_before_validation_skew: number;
    jwt_skip_kid: boolean;
    jwt_scope_to_policy_mapping?: any;
    jwt_scope_claim_name: string;
    notifications: Notifications;
    enable_signature_checking: boolean;
    hmac_allowed_clock_skew: number;
    hmac_allowed_algorithms: any[];
    request_signing: RequestSigning;
    base_identity_provided_by: string;
    definition: Definition;
    version_data: VersionData;
    uptime_tests: UptimeTests;
    proxy: Proxy;
    disable_rate_limit: boolean;
    disable_quota: boolean;
    custom_middleware: CustomMiddleware;
    custom_middleware_bundle: string;
    cache_options: CacheOptions;
    session_lifetime: number;
    active: boolean;
    internal: boolean;
    auth_provider: AuthProvider;
    session_provider: SessionProvider;
    event_handlers: EventHandlers;
    enable_batch_request_support: boolean;
    enable_ip_whitelisting: boolean;
    allowed_ips: any[];
    enable_ip_blacklisting: boolean;
    blacklisted_ips: any[];
    dont_set_quota_on_create: boolean;
    expire_analytics_after: number;
    response_processors: any[];
    CORS: CORS;
    domain: string;
    certificates: any[];
    do_not_track: boolean;
    tags: any[];
    enable_context_vars: boolean;
    config_data: ConfigData;
    tag_headers: any[];
    global_rate_limit: GlobalRateLimit;
    strip_auth_data: boolean;
}

export interface OpenidOptions {
    providers: any[];
    segregate_by_client: boolean;
}

export interface OauthMeta {
    allowed_access_types: any[];
    allowed_authorize_types: any[];
    auth_login_redirect: string;
}

export interface Signature {
    algorithm: string;
    header: string;
    secret: string;
    allowed_clock_skew: number;
    error_code: number;
    error_message: string;
}

export interface Auth {
    use_param: boolean;
    param_name: string;
    use_cookie: boolean;
    cookie_name: string;
    auth_header_name: string;
    use_certificate: boolean;
    validate_signature: boolean;
    signature: Signature;
}

export interface BasicAuth {
    disable_caching: boolean;
    cache_ttl: number;
    extract_from_body: boolean;
    body_user_regexp: string;
    body_password_regexp: string;
}

export interface UpstreamCertificates {
}

export interface PinnedPublicKeys {
}

export interface Notifications {
    shared_secret: string;
    oauth_on_keychange_url: string;
}

export interface RequestSigning {
    is_enabled: boolean;
    secret: string;
    key_id: string;
    algorithm: string;
}

export interface Definition {
    location: string;
    key: string;
    strip_path: boolean;
}

export interface Paths {
    ignored: any[];
    white_list: any[];
    black_list: any[];
}

export interface TrackEndpoint {
    path: string;
    method: string;
}

export interface ExtendedPaths {
    track_endpoints: TrackEndpoint[];
}

export interface GlobalHeaders {
}

export interface Default {
    name: string;
    expires: string;
    paths: Paths;
    use_extended_paths: boolean;
    extended_paths: ExtendedPaths;
    global_headers: GlobalHeaders;
    global_headers_remove: any[];
    global_size_limit: number;
    override_target: string;
}

export interface Versions {
    Default: Default;
}

export interface VersionData {
    not_versioned: boolean;
    default_version: string;
    versions: Versions;
}

export interface ServiceDiscovery {
    use_discovery_service: boolean;
    query_endpoint: string;
    use_nested_query: boolean;
    parent_data_path: string;
    data_path: string;
    port_data_path: string;
    target_path: string;
    use_target_list: boolean;
    cache_timeout: number;
    endpoint_returns_list: boolean;
}

export interface Config {
    expire_utime_after: number;
    service_discovery: ServiceDiscovery;
    recheck_wait: number;
}

export interface UptimeTests {
    check_list: any[];
    config: Config;
}

export interface ServiceDiscovery2 {
    use_discovery_service: boolean;
    query_endpoint: string;
    use_nested_query: boolean;
    parent_data_path: string;
    data_path: string;
    port_data_path: string;
    target_path: string;
    use_target_list: boolean;
    cache_timeout: number;
    endpoint_returns_list: boolean;
}

export interface Transport {
    ssl_insecure_skip_verify: boolean;
    ssl_ciphers: any[];
    ssl_min_version: number;
    proxy_url: string;
}

export interface Proxy {
    preserve_host_header: boolean;
    listen_path: string;
    target_url: string;
    disable_strip_slash: boolean;
    strip_listen_path: boolean;
    enable_load_balancing: boolean;
    target_list: any[];
    check_host_against_uptime_tests: boolean;
    service_discovery: ServiceDiscovery2;
    transport: Transport;
}

export interface AuthCheck {
    name: string;
    path: string;
    require_session: boolean;
    raw_body_only: boolean;
}

export interface ExtractorConfig {
}

export interface IdExtractor {
    extract_from: string;
    extract_with: string;
    extractor_config: ExtractorConfig;
}

export interface CustomMiddleware {
    pre: any[];
    post: any[];
    post_key_auth: any[];
    auth_check: AuthCheck;
    response: any[];
    driver: string;
    id_extractor: IdExtractor;
}

export interface CacheOptions {
    cache_timeout: number;
    enable_cache: boolean;
    cache_all_safe_requests: boolean;
    cache_response_codes: any[];
    enable_upstream_cache_control: boolean;
    cache_control_ttl_header: string;
}

export interface Meta {
}

export interface AuthProvider {
    name: string;
    storage_engine: string;
    meta: Meta;
}

export interface Meta2 {
}

export interface SessionProvider {
    name: string;
    storage_engine: string;
    meta: Meta2;
}

export interface Events {
}

export interface EventHandlers {
    events: Events;
}

export interface CORS {
    enable: boolean;
    allowed_origins: any[];
    allowed_methods: any[];
    allowed_headers: any[];
    exposed_headers: any[];
    allow_credentials: boolean;
    max_age: number;
    options_passthrough: boolean;
    debug: boolean;
}

export interface ConfigData {
}

export interface GlobalRateLimit {
    rate: number;
    per: number;
}


