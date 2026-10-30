import Link from "next/link";
import { roleLabels, type Role } from "@/lib/permissions";

export default function AccessDenied({ allowed }: { allowed: Role[] }) {
  return (
    <div className="container section">
      <div className="card lock">
        <div className="emoji">🔒</div>
        <h2>Нет доступа</h2>
        <p className="muted">
          Этот раздел доступен ролям: {allowed.map((r) => roleLabels[r]).join(", ")}.
        </p>
        <p className="muted small">
          Это демонстрация интерфейса: переключите роль в шапке сайта. Реальная проверка прав
          будет выполняться на сервере.
        </p>
        <Link href="/" className="btn btn-primary">
          На главную
        </Link>
      </div>
    </div>
  );
}
