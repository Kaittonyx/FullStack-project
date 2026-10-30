import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>🍕 LINK Pizza Delivery</h4>
          <p className="small">Учебный командный проект. Горячая пицца с доставкой по Астане.</p>
        </div>
        <div>
          <h4>Меню</h4>
          <p className="small">
            <Link href="/catalog">Каталог</Link>
            <br />
            <Link href="/builder">Конструктор пиццы</Link>
          </p>
        </div>
        <div>
          <h4>Контакты</h4>
          <p className="small">
            +7 (700) 000-00-00
            <br />
            hello@linkpizza.example
            <br />
            Ежедневно с 10:00 до 23:00
          </p>
        </div>
      </div>
    </footer>
  );
}
