import Link from "next/link";

// Форма без логики: регистрацию реализует разработчик №1.
export default function RegisterPage() {
  return (
    <div className="container auth-wrap">
      <div className="card stack auth-card">
        <h1 style={{ fontSize: "1.6rem" }}>Регистрация</h1>
        <form className="stack">
          <div className="field">
            <label htmlFor="name">Имя</label>
            <input id="name" className="input" placeholder="Как к вам обращаться" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" className="input" type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="phone">Телефон</label>
            <input id="phone" className="input" type="tel" placeholder="+7 700 000 00 00" />
          </div>
          <div className="field">
            <label htmlFor="password">Пароль</label>
            <input id="password" className="input" type="password" placeholder="Не короче 8 символов" />
          </div>
          <button type="button" className="btn btn-primary btn-block">
            Создать аккаунт
          </button>
        </form>
        <p className="small muted">
          Уже есть аккаунт? <Link href="/login" style={{ color: "var(--brand)", fontWeight: 700 }}>Войти</Link>
        </p>
      </div>
    </div>
  );
}
