import Link from "next/link";
import { getSession } from "@/lib/demo-session";
import { roleLabels, staffNav } from "@/lib/permissions";

// Общая обёртка кабинетов сотрудников: боковое меню по роли.
// Клиентам и гостям меню не показываем — страница сама покажет «Нет доступа».
export default async function StaffLayout({ children }: { children: React.ReactNode }) {
  const { role } = await getSession();
  const links = staffNav[role];

  if (links.length === 0) {
    return <>{children}</>;
  }

  return (
    <div className="container staff-layout">
      <aside className="sidebar" aria-label="Меню сотрудника">
        <div className="sidebar-title">{roleLabels[role]}</div>
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </aside>
      <section>{children}</section>
    </div>
  );
}
