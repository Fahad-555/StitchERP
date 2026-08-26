import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

interface KpiItem {
  label: string;
  value: string;
  subtext: string;
  tone: string;
  icon: string;
}

interface ProgramRow {
  name: string;
  customer: string;
  skus: string;
  orderQty: string;
  status: string;
}

interface BreakdownItem {
  label: string;
  value: string;
  amount: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', active: true },
    { label: 'Programs', icon: 'ti-files' },
    { label: 'BOM Workspace', icon: 'ti-layout-columns' },
    { label: 'Accessories', icon: 'ti-needle' },
    { label: 'Create BOM', icon: 'ti-list-details' },
    { label: 'Purchase Orders', icon: 'ti-file-invoice' },
    { label: 'Reports', icon: 'ti-report-analytics' }
  ];

  kpis: KpiItem[] = [
    { label: 'Active Programs', value: '3', subtext: '3 in production', tone: 'teal', icon: 'ti-files' },
    { label: 'Pending BOM Approvals', value: '1', subtext: 'Awaiting manager review', tone: 'amber', icon: 'ti-list-check' },
    { label: 'Pending PO Approvals', value: '1', subtext: 'Awaiting manager review', tone: 'red', icon: 'ti-file-invoice' },
    { label: 'Total PO Value', value: 'PKR 3.2M', subtext: 'Across all active POs', tone: 'green', icon: 'ti-currency-rupee' }
  ];

  programRows: ProgramRow[] = [
    { name: 'ABBASCO Abbas Home 200TC Sateen', customer: 'Abbas & Co', skus: '12', orderQty: '24,800', status: 'Active' },
    { name: 'BOUCHARA T144 Percale', customer: 'Bouchara', skus: '8', orderQty: '18,360', status: 'In Review' },
    { name: 'IKEA Home 400TC Twill', customer: 'IKEA', skus: '15', orderQty: '32,100', status: 'Active' }
  ];

  approvals = [
    { name: 'ABBASCO Abbas Home 200TC Sateen', article: 'Bed Sheet Set', version: 'v1', by: 'user1', status: 'Submitted' },
    { name: 'PO-2026-000001', program: 'BOUCHARA T144 Percale', type: 'Accessories', value: 'PKR 312,500', status: 'Submitted' }
  ];

  breakdown: BreakdownItem[] = [
    { label: 'Zipper', value: '28%', amount: '1,480 pcs' },
    { label: 'Label', value: '23%', amount: '1,210 pcs' },
    { label: 'Poly Bag', value: '17%', amount: '860 pcs' },
    { label: 'Carton', value: '14%', amount: '690 pcs' },
    { label: 'Button', value: '10%', amount: '420 pcs' }
  ];
}
