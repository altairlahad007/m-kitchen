"use client";

import { useState } from "react";
import { Button } from "@ui";

type Plan = "weekly" | "monthly";

const DAYS = [3, 4, 5, 6, 7];
const MEALS = [1, 2, 3, 4];

const PRICES: Record<Plan, number[][]> = {
  weekly: [
    [10, 13.5, 17, 20.5, 24],
    [17, 22.5, 28, 33.5, 39],
    [20, 28.5, 37, 45.5, 54],
    [23, 34.5, 46, 57.5, 69],
  ],
  monthly: [
    [41, 50.5, 60, 69.5, 79],
    [67, 87.5, 108, 128.5, 149],
    [94, 121.5, 149, 176.5, 204],
    [99, 139, 179, 219, 259],
  ],
};

function PriceTable({ prices }: { prices: number[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-2 py-2.5 font-medium text-muted-foreground sm:px-4 sm:py-3">
              Meals a day
            </th>
            {DAYS.map((d) => (
              <th
                key={d}
                className="px-2 py-2.5 font-medium text-muted-foreground sm:px-4 sm:py-3"
              >
                <span className="sm:hidden">{d}d</span>
                <span className="hidden sm:inline">{d} days</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {prices.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-0"
            >
              <td className="px-2 py-2.5 font-medium sm:px-4 sm:py-3">
                {i + 1} meal{i > 0 ? "s" : ""}
              </td>
              {row.map((price, j) => (
                <td key={j} className="px-2 py-2.5 sm:px-4 sm:py-3">
                  {price}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Packages() {
  const [plan, setPlan] = useState<Plan>("weekly");
  const [meals, setMeals] = useState(2);
  const [days, setDays] = useState(5);
  const [open, setOpen] = useState(false);

  const price = PRICES[plan][meals - 1][days - 3];
  const whatsappUrl = `https://wa.me/96876908175?text=${encodeURIComponent(
    `Hello, I'd like to order a package from M Kitchen — ${
      plan === "weekly" ? "Weekly" : "Monthly"
    } package, ${meals} meal${meals > 1 ? "s" : ""}/day, ${days} days/week. Total: ${price} OMR`
  )}`;

  const optionButton = (selected: boolean) =>
    `rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
      selected
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border text-foreground hover:bg-muted"
    }`;

  return (
    <section
      id="packages"
      className="min-h-svh bg-background py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">
            Choose Your Healthy Meal Plan
          </h1>
          <p className="subtitle max-w-2xl">
            Build your weekly or monthly meal package in three easy steps and
            instantly see your custom pricing.
          </p>
        </div>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Step 1
              </p>
              <h2 className="heading-3">Select your meal duration</h2>
              <div className="flex gap-3">
                <button
                  onClick={() => setPlan("weekly")}
                  className={optionButton(plan === "weekly")}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setPlan("monthly")}
                  className={optionButton(plan === "monthly")}
                >
                  Monthly
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Step 2
              </p>
              <h2 className="heading-3">How Many Meals Do You Need Daily?</h2>
              <div className="flex flex-wrap gap-3">
                {MEALS.map((m) => (
                  <div key={m} className="relative">
                    {m === 2 && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground">
                        Most popular
                      </span>
                    )}
                    <button
                      onClick={() => setMeals(m)}
                      className={`${optionButton(meals === m)} min-w-12`}
                    >
                      {m}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Step 3
              </p>
              <h2 className="heading-3">How many days a week?</h2>
              <div className="flex flex-wrap gap-3">
                {DAYS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDays(d)}
                    className={`${optionButton(days === d)} min-w-12`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-5 shadow-lg sm:p-8">
            <div className="flex flex-col gap-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Package</span>
                <span className="font-semibold uppercase">
                  {plan}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Meals a day</span>
                <span className="font-semibold">
                  {meals} meal{meals > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Days a week</span>
                <span className="font-semibold">{days} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-semibold uppercase text-primary">
                  Free
                </span>
              </div>
              <div className="my-2 border-t border-dashed border-border" />
              <div className="flex items-baseline justify-between">
                <span className="text-base font-semibold">Total</span>
                <span className="font-heading text-3xl text-primary">
                  {price} OMR
                </span>
              </div>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-4 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Enquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-2 font-medium transition-colors hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            See all prices (OMR)
          </button>
          <div
            className={`grid transition-all duration-500 ${
              open
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="heading-3 mb-3">Weekly package</h3>
                  <PriceTable prices={PRICES.weekly} />
                </div>
                <div>
                  <h3 className="heading-3 mb-3">Monthly package</h3>
                  <PriceTable prices={PRICES.monthly} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
