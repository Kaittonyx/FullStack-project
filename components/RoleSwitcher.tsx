"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { roleHome, roleLabels, roles, isRole, type Role } from "@/lib/permissions";

// ДЕМО-переключатель роли для показа интерфейсов.
// Удалить, когда будет настоящая авторизация.
export default function RoleSwitcher({ current }: { current: Role }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const role = event.target.value;
    if (!isRole(role)) return;
    document.cookie = `demo_role=${role}; path=/; max-age=86400; samesite=lax`;
    startTransition(() => {
      router.push(roleHome[role]);
      router.refresh();
    });
  }

  return (
    <label className="role-switcher" title="Демо: выберите роль, чтобы увидеть её интерфейс">
      Демо-роль
      <select value={current} onChange={handleChange} disabled={pending}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {roleLabels[r]}
          </option>
        ))}
      </select>
    </label>
  );
}
