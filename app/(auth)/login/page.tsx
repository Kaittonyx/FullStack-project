import Link from "next/link";
import { users } from "@/lib/data";
import { roleLabels } from "@/lib/permissions";

// Форма без логики: вход и сессии реализует разработчик №1.
export default function LoginPage() {
  const demoAccounts = ["u-customer", "u-cook", "u-courier", "u-manager", "u-admin"]
    .map((id) => users.find((u) => u.id === id))
    .filter((u) => u !== undefined);

  return (
    <div className="container auth-wrap">
      <div className="stack auth-card">
        <div className="card stack">
          <h1 style={{ fontSize: "1.6rem" }}>Вход</h1>
          <form className="stack">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" className="input" type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="password">Пароль</label>
              <input id="password" className="input" type="password" placeholder="••••••••" />
            </div>
            <button type="button" className="btn btn-primary btn-block">
              Войти
            </button>
          </form>
          <p className="small muted">
            Нет аккаунта? <Link href="/register" style={{ color: "var(--brand)", fontWeight: 700 }}>Зарегистрироваться</Link>
          </p>
        </div>

        <div className="card stack">
          <h3>Тестовые аккаунты</h3>
          <p className="small muted">
            Вход пока не работает. Чтобы посмотреть интерфейс роли, выберите её в переключателе
            «Демо-роль» в шапке.
          </p>
          <div className="stack" style={{ gap: 8 }}>
            {demoAccounts.map((u) => (
              <div key={u.id} className="row-between small">
                <span>{u.email}</span>
                <span className="badge badge-gray">{roleLabels[u.role]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
