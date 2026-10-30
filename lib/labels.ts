import type { OrderStatus } from "./types";

export type Tone = "gray" | "blue" | "orange" | "green" | "purple" | "red";

// Названия и цвета статусов заказа (см. раздел 3.6 ТЗ)
export const statusMeta: Record<OrderStatus, { label: string; tone: Tone }> = {
  PENDING: { label: "Ожидает подтверждения", tone: "gray" },
  CONFIRMED: { label: "Подтверждён", tone: "blue" },
  PREPARING: { label: "Готовится", tone: "orange" },
  READY: { label: "Готов к выдаче", tone: "green" },
  ASSIGNED_TO_COURIER: { label: "Назначен курьер", tone: "purple" },
  OUT_FOR_DELIVERY: { label: "В доставке", tone: "purple" },
  DELIVERED: { label: "Доставлен", tone: "green" },
  CANCELLED: { label: "Отменён", tone: "red" },
};

export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")} ₸`;
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Almaty",
  });
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    timeZone: "Asia/Almaty",
  });
}
