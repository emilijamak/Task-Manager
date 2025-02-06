export class ClientProject {
        clientProjectId: number;
        projectName: string;
        startDate: Date | string;
        expectedEndDate: Date | string;
        leadByEmpId: number | null;
        completedDate: Date | string;
        contactPerson: string;
        contactPersonContactNo: string;
        totalEmpWorking: number | null;
        projectCost: number;
        projectDetails: string;
        contactPersonEmailId: string;
        clientId: number | null;
      
        constructor() {
          this.clientProjectId = 0;
          this.projectName = '';
          this.startDate = '';
          this.expectedEndDate = '';
          this.leadByEmpId = null;
          this.completedDate = '';
          this.contactPerson = '';
          this.contactPersonContactNo = '';
          this.totalEmpWorking = null;
          this.projectCost = 0;
          this.projectDetails = '';
          this.contactPersonEmailId = '';
          this.clientId = null;
        }
      }
      