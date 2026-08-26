import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ProgramSummary {
  id: number;
  code: string;
  name: string;
  status: string;
  customerName: string;
}

export interface ProgramListResponse {
  items: ProgramSummary[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface InventoryBalance {
  id: number;
  warehouseId: number;
  itemReferenceId: number;
  itemType: string;
  onHandQuantity: number;
  reservedQuantity: number;
  allocatedQuantity: number;
  availableQuantity: number;
}

@Injectable({ providedIn: 'root' })
export class FrontendApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;

  getPrograms(): Observable<ProgramListResponse> {
    return this.http.get<ProgramListResponse>(`${this.baseUrl}/programs`);
  }

  getInventory(): Observable<InventoryBalance[]> {
    return this.http.get<InventoryBalance[]>(`${this.baseUrl}/inventory`);
  }
}
