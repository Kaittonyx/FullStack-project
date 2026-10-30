import { cookies } from "next/headers";
import { users } from "./data";
import { isRole, type Role } from "./permissions";
import type { User } from "./types";

// ДЕМО: роль берётся из cookie "demo_role", которую выставляет переключатель в шапке.
// Это заглушка для показа интерфейсов разных ролей. Настоящая авторизация
// (сессии, пароли, проверка на сервере) — задача разработчика №1.
export async function getSession(): Promise<{ role: Role; user: User | null }> {
  const store = await cookies();
  const raw = store.get("demo_role")?.value;
  const role: Role = isRole(raw) ? raw : "guest";
  const user = role === "guest" ? null : (users.find((u) => u.role === role) ?? null);
  return { role, user };
}
