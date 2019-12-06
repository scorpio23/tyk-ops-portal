import { APIInfoDTO } from './api.info.modal';

export class APIUIModal {
    api_id: string;
    name: string;
    active: boolean;
    policies: Array<APIInfoDTO>;
}