export class APIInfoDTO {
    policyName: string = '';
    policyId: string = '';
    keyList: Array<APIKeyDTO> = []
}

export class APIKeyDTO {
    key: string = '';
    isKeyActive: boolean = true;
    keyCreatedBy: string = '';
    keyCreatedAt: string = '';
}