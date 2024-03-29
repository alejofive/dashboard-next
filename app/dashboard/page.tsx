import { Suspense } from 'react';
import { fetchCardData } from '../lib/data';
import { Card } from '../ui/dashboard/cards';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { lusitana } from '../ui/fonts';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';

export default async function DashboardPage() {
  const {
    totalPaidInvoices,
    numberOfInvoices,
    totalPendingInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <div>
      <h1
        className={`${lusitana.className} mb-4 text-xl font-bold text-white md:text-2xl`}
      >
        Dashboards
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collect" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </div>
  );
}
