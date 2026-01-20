type Status = 'pending' | 'success' | 'error' | 'warning';

interface StatusBadgeProps {
  status: Status;
  message?: string;
  count?: number;
}

export default function StatusBadge({ status, message, count }: StatusBadgeProps) {
  const colors = {
    pending: 'bg-yellow-200',
    success: 'bg-green-200',
    error: 'bg-red-200',
    warning: 'bg-orange-200',
  };

  return (
    <div className={`inline-block px-3 py-1 rounded ${colors[status]}`}>
      {status.toUpperCase()}
      {count && <span className="ml-2">({count})</span>}
      {message && <p className="text-sm mt-1">{message}</p>}
    </div>
  );
}
