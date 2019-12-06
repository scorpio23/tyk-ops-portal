import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIModal } from 'src/app/modal/api.modal';
import { TykAPIService } from 'src/app/services/tyk-api.service';
import { Subject } from 'rxjs';
import { APIInfoDTO, APIKeyDTO } from 'src/app/modal/api.info.modal';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { APIUIModal } from 'src/app/modal/api.ui.modal';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent implements OnInit, OnDestroy {

  apiList: Array<APIModal> = []
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: Array<APIUIModal> = []
  loading: boolean = true;

  constructor(private tykService: TykAPIService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true
    };
    this.getDataForDashboard()
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dtTrigger.next();
      this.loading = false
    }, 1000);
  }

  getDataForDashboard() {
    let apiList$ = this.tykService.getAPIList();
    let policies$ = this.tykService.getPolicies();
    let keyIdList$ = this.tykService.getKeyIdList();

    forkJoin([apiList$, policies$, keyIdList$]).subscribe(results => {
      console.log(results[0])
      console.log(results[1])
      console.log(results[2])

      results[0].forEach(api => {
        let apiUIModal: APIUIModal = new APIUIModal();
        apiUIModal.name = api.name
        apiUIModal.api_id = api.api_id
        apiUIModal.active = api.active

        let apiInfoArr: Array<APIInfoDTO> = []

        results[1].Data.forEach(policy => {
          if (policy.access_rights[api.api_id]) {
            let info: APIInfoDTO = new APIInfoDTO();
            info.policyId = policy._id
            info.policyName = policy.name

            let associatedKeyList: Array<APIKeyDTO> = []
            results[2].keys.forEach(key => {
              let keyObj$ = this.tykService.getKey(key)

              keyObj$.subscribe(
                  keyObj => {
                    if (keyObj.apply_policies.includes(policy._id)) {
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
              if (!apiInfoArr.includes(info)) {
                apiInfoArr.push(info)
              }

          }
        });
        apiUIModal.policies = apiInfoArr
        
        this.data.push(apiUIModal)
      });
      console.log(this.data)
    });
  }
}
