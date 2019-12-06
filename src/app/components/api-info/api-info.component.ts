import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TykAPIService } from 'src/app/services/tyk-api.service';
import { APIInfoDTO, APIKeyDTO } from 'src/app/modal/api.info.modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-api-info',
  templateUrl: './api-info.component.html',
  styleUrls: ['./api-info.component.css']
})
export class ApiInfoComponent implements OnInit, OnDestroy, AfterViewInit {

  private apiId: string = ''
  apiName: string = ''
  apiInfoList: Array<APIInfoDTO> = []
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isLoading: boolean = true

  constructor(private route: ActivatedRoute,
    private location: Location,
    private tykService: TykAPIService) { }

  ngOnInit() {
    this.apiId = this.route.snapshot.paramMap.get('apiId');

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true
    };

    this.tykService.getPolicies().subscribe(policies => {
      if (policies.Data) {
        policies.Data.forEach(policy => {
          if (policy.access_rights[this.apiId]) {
            this.apiName = policy.access_rights[this.apiId].api_name
            // console.log("Policy ", policy)
            let info: APIInfoDTO = new APIInfoDTO();
            info.policyId = policy._id
            info.policyName = policy.name
            this.tykService.getKeyIdList().subscribe(
              keyList => {
                if (keyList.keys) {
                  let associatedKeyList : Array<APIKeyDTO> = []
                  keyList.keys.forEach(key => {
                    this.tykService.getKey(key).subscribe(
                      keyObj => {
                        if (keyObj.apply_policies.includes(policy._id)) {
                          // console.log("Key Found: ", key,  keyObj, policy.name)
                          let keyInfo: APIKeyDTO = new APIKeyDTO() 
                          keyInfo.key = key
                          keyInfo.isKeyActive = !keyObj.is_inactive
                          keyInfo.keyCreatedBy = keyObj.alias
                          keyInfo.keyCreatedAt = keyObj.date_created
                          associatedKeyList.push(keyInfo)
                        }
                      }
                    );
                  });
                  info.keyList = associatedKeyList
                  if(!this.apiInfoList.includes(info)){
                    this.apiInfoList.push(info)
                  }
                }
              }
            );

          }
        });
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false
      this.dtTrigger.next();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
