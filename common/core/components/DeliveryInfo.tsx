const ICON_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function ClockIcon() {
  return (
    <svg {...ICON_PROPS} className="h-6 w-6 shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg {...ICON_PROPS} className="h-6 w-6 shrink-0">
      <path d="M12 2v20" />
      <path d="M4 6l16 12" />
      <path d="M20 6L4 18" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg {...ICON_PROPS} className="h-6 w-6 shrink-0">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function FridgeIcon() {
  return (
    <svg {...ICON_PROPS} className="h-5 w-5 text-secondary">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M5 10h14" />
      <path d="M8 6v2" />
      <path d="M8 14v3" />
    </svg>
  );
}

function MicrowaveIcon() {
  return (
    <svg {...ICON_PROPS} className="h-5 w-5 text-secondary">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M6 9h8v6H6z" />
      <circle cx="18" cy="10" r="1" />
      <circle cx="18" cy="14" r="1" />
    </svg>
  );
}

function ProhibitIcon() {
  return (
    <svg
      {...ICON_PROPS}
      className="h-5 w-5 shrink-0 text-secondary"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M4.9 4.9l14.2 14.2" />
    </svg>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <h2 className="font-heading text-4xl md:text-5xl">{title}</h2>
      <span className="block h-1 w-14 rounded-full bg-secondary" />
      <p className="body-text text-muted-foreground">{subtitle}</p>
    </div>
  );
}

const STORAGE_TIPS = [
  "Put your meals in the fridge as soon as they arrive.",
  "Keep them closed with their lid until you eat.",
  "If you're heading out, use a cool bag.",
];

const HEATING_STEPS = [
  "Remove the lid before heating.",
  "Microwave for 2 to 3 minutes.",
  "Make sure the food is hot all the way through. Enjoy!",
];

const DONTS = [
  "Don't leave meals out of the fridge for long.",
  "Don't reheat the same meal more than once.",
  "Don't put the lid in the microwave.",
];

export function DeliveryInfo() {
  return (
    <section id="delivery" className="bg-muted py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4">
        <div className="flex flex-col gap-8">
          <SectionHeading
            title="Delivery times"
            subtitle="We deliver twice a week."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="heading-2">Saturday</h3>
              <p className="mt-1 font-semibold">7 to 9 pm</p>
              <p className="body-text mt-2 text-muted-foreground">
                Brings your meals for Sunday, Monday and Tuesday
              </p>
            </div>
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <h3 className="heading-2">Tuesday</h3>
              <p className="mt-1 font-semibold">7 to 9 pm</p>
              <p className="body-text mt-2 opacity-80">
                Brings the rest of your week&apos;s meals, based on your
                package
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl bg-secondary p-5 text-secondary-foreground">
              <ClockIcon />
              <p className="body-text">
                <span className="font-semibold">Missed your delivery?</span>
                <br />
                We&apos;ll bring it the next day between 11 am and 1 pm
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <SnowflakeIcon />
              <p className="body-text">
                A refrigerated van keeps your food fresh
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <HomeIcon />
              <p className="body-text">Free delivery to your door</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            title="Storage & heating"
            subtitle="To keep your meals fresh and tasty until the last day."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <FridgeIcon />
                <h3 className="heading-2">Storage</h3>
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {STORAGE_TIPS.map((tip) => (
                  <li key={tip} className="body-text flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="flex items-center gap-2">
                <MicrowaveIcon />
                <h3 className="heading-2">Heating</h3>
              </div>
              <ol className="mt-4 flex flex-col gap-4">
                {HEATING_STEPS.map((step, i) => (
                  <li key={step} className="body-text flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                      {i + 1}
                    </span>
                    <span>
                      {step}
                      {i === 1 && (
                        <span className="mt-1 block text-sm opacity-70">
                          Place the box in the middle of the microwave so it
                          heats evenly.
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {DONTS.map((dont) => (
              <div
                key={dont}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <ProhibitIcon />
                <p className="body-text text-sm">{dont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
