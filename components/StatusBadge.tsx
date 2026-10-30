import { statusMeta } from "@/lib/labels";
import type { OrderStatus } from "@/lib/types";

export default function StatusBadge({ status }: { status: OrderStatus }) {
  const { label, tone } = statusMeta[status];
  return <span className={`badge badge-${tone}`}>{label}</span>;
}
