import StatusBadge from '@/components/props/stauts-demo/StatusBadge';

export default function StatusDemo() {
  return (
    <div className="p-8 space-y-4">
      <StatusBadge status="pending" count={5} />
      <StatusBadge status="success" message="All done!" />
      <StatusBadge status="error" message="Failed to load" count={3} />
      <StatusBadge status="warning" />
    </div>
  );
}
