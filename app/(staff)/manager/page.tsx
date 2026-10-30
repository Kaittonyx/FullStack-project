import AccessDenied from "@/components/AccessDenied";
import StatusBadge from "@/components/StatusBadge";
import { getUser, orders, orderTotal, users } from "@/lib/data";
import { getSession } from "@/lib/demo-session";
import { formatPrice, formatTime } from "@/lib/labels";
import { canAccess, routeRoles } from "@/lib/permissions";

// Макет панели менеджера: все заказы, подтверждение и назначение курьеров.
export default async function ManagerPage() {
  const { role } = await getSession();

  if (!canAccess(role, "/manager")) {
    return <AccessDenied allowed={routeRoles["/manager"]} />;
  }

  const couriers = users.filter((u) => u.role === "courier");
  const today = orders.filter((o) => o.createdAt.startsWith("2026-10-30"));

  return (
    <>
      <div className="page-head">
        <h1>Заказы</h1>
        <p className="muted">Все заказы за сегодня: {today.length}</p>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Заказ</th>
              <th>Время</th>
              <th>Клиент</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Курьер</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {today.map((o) => {
              const customer = getUser(o.customerId);
              const needsCourier = o.status === "READY";
              return (
                <tr key={o.id}>
                  <td>
                    <strong>{o.number}</strong>
                  </td>
                  <td>{formatTime(o.createdAt)}</td>
                  <td>{customer?.name}</td>
                  <td>{formatPrice(orderTotal(o))}</td>
                  <td>
                    <StatusBadge status={o.status} />
                  </td>
                  <td>
                    {o.courierId ? (
                      getUser(o.courierId)?.name
                    ) : needsCourier ? (
                      <select className="select" defaultValue="" aria-label="Назначить курьера">
                        <option value="" disabled>
                          Выбрать…
                        </option>
                        {couriers.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="muted">—</span>
                    )}
                  </td>
                  <td className="right">
                    <div className="row" style={{ justifyContent: "flex-end", flexWrap: "nowrap" }}>
                      {o.status === "PENDING" && (
                        <button type="button" className="btn btn-primary btn-sm">
                          Подтвердить
                        </button>
                      )}
                      {needsCourier && (
                        <button type="button" className="btn btn-primary btn-sm">
                          Назначить
                        </button>
                      )}
                      {!["DELIVERED", "CANCELLED"].includes(o.status) && (
                        <button type="button" className="btn btn-ghost btn-sm">
                          Отменить
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
