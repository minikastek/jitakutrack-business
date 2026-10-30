import { BRAND } from "@/brand";
import BrandMark from "@/components/BrandMark";
import Logo from "@/components/Logo";
import {
  IconBuilding,
  IconCalc,
  IconCalendar,
  IconChart,
  IconDoc,
  IconHouse,
  IconPayment,
  IconUser,
  IconUsers,
} from "@/components/NavIcons";
import { DEMO_CALENDAR_URL, DEMO_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const COST_COMPARISON = [
  {
    aspect: "Información",
    without: "Planillas sueltas, versiones distintas",
    withSystem: "Un solo lugar actualizado",
  },
  {
    aspect: "Pagos y cobros",
    without: "Seguimiento manual, olvidos y reclamos",
    withSystem: "Historial y confirmaciones claros",
  },
  {
    aspect: "Liquidaciones",
    without: "Cálculos a mano, riesgo de error",
    withSystem: "Proceso ordenado a propietarios",
  },
  {
    aspect: "Vencimientos",
    without: "Dependés de recordar o revisar Excel",
    withSystem: "Calendario y alertas del día",
  },
  {
    aspect: "Equipo",
    without: "Cada uno con su archivo",
    withSystem: "Roles y acceso compartido",
  },
  {
    aspect: "Inquilinos",
    without: "WhatsApp y carpetas sueltas",
    withSystem: "Portal con cuenta y pagos",
  },
];

const PLANS = [
  {
    name: "Página web solo para usuarios",
    badge: "Portal",
    text: "Sitio para publicar inmuebles (alquilar / comprar) y portal para que inquilinos consulten su cuenta y pagos.",
    includes: ["Alquilar y comprar", "Ingreso de inquilinos", "Mis pagos y perfil"],
  },
  {
    name: "Solo para gestión",
    badge: "Backoffice",
    text: "Panel interno para el equipo: inmuebles, contratos, pagos, liquidaciones, calculadoras y calendario.",
    includes: ["Gestión completa", "Liquidaciones", "Auditoría y roles"],
  },
  {
    name: "Ambas",
    badge: "Completo",
    text: "Backoffice + portal: operás por dentro y tus clientes e inquilinos usan la web por fuera.",
    includes: ["Todo el backoffice", "Todo el portal", "Misma marca y datos"],
    featured: true,
  },
];

/** Misma organización que el sidebar del backoffice */
const BACKOFFICE_MODULES = [
  {
    icon: IconHouse,
    title: "Inmuebles",
    text: "Alta y listado de propiedades con su documentación.",
    items: ["Nuevo inmueble", "Ver inmuebles"],
  },
  {
    icon: IconBuilding,
    title: "Edificios",
    text: "Complejos y unidades agrupadas por edificio.",
    items: ["Nuevo edificio", "Ver edificios"],
  },
  {
    icon: IconUser,
    title: "Propietarios",
    text: "Dueños, datos de contacto y propiedades vinculadas.",
    items: ["Agenda de propietarios"],
  },
  {
    icon: IconUsers,
    title: "Inquilinos",
    text: "Inquilinos activos, documentos y relación con contratos.",
    items: ["Agenda de inquilinos"],
  },
  {
    icon: IconDoc,
    title: "Contratos",
    text: "Creación y seguimiento de contratos de alquiler.",
    items: ["Nuevo contrato", "Ver contratos"],
  },
  {
    icon: IconPayment,
    title: "Pagos",
    text: "Cobros, confirmaciones e historial por contrato.",
    items: ["Nuevo pago", "Confirmaciones", "Historial de pagos"],
  },
  {
    icon: IconCalc,
    title: "Liquidación",
    text: "Liquidaciones a propietarios y por edificio.",
    items: ["Propietarios", "Nueva liquidación", "Historial de edificios"],
  },
  {
    icon: IconChart,
    title: "Estadísticas",
    text: "Conteos y montos para ver el estado del negocio.",
    items: ["Resumen operativo"],
  },
  {
    icon: IconCalc,
    title: "Calculadoras",
    text: "Aumentos con índices (IPC, ICL y más).",
    items: ["Simular actualizaciones"],
  },
  {
    icon: IconCalendar,
    title: "Calendario",
    text: "Vencimientos y agenda día a día.",
    items: ["Vista mensual", "Detalle por día"],
  },
  {
    icon: IconDoc,
    title: "Auditoría",
    text: "Trazabilidad de acciones del equipo (admin).",
    items: ["Registro de eventos"],
  },
  {
    icon: IconUser,
    title: "Seguridad",
    text: "Accesos, roles y controles del sistema (admin).",
    items: ["Gestión de seguridad"],
  },
];

const PORTAL_LINKS = [
  { label: "Alquilar", text: "Explorar inmuebles en alquiler." },
  { label: "Comprar", text: "Explorar inmuebles en venta." },
  { label: "Mis pagos", text: "Consultar cuenta y pagos del inquilino." },
  { label: "Mi perfil", text: "Datos personales y acceso al portal." },
];

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <BrandMark logoSize={30} />
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
            <a
              href="#para-que-sirve"
              className="hidden rounded-md px-3 py-2 text-ink-muted transition hover:text-ink sm:inline"
            >
              Para qué sirve
            </a>
            <a
              href="#coste"
              className="rounded-md px-3 py-2 text-ink-muted transition hover:text-ink"
            >
              Coste
            </a>
            <a
              href="#modulos"
              className="rounded-md px-3 py-2 text-ink-muted transition hover:text-ink"
            >
              Backoffice
            </a>
            <a
              href="#precios"
              className="rounded-md px-3 py-2 text-ink-muted transition hover:text-ink"
            >
              Precios
            </a>
            <a
              href={DEMO_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center rounded-lg bg-brand px-3 py-2 text-white transition hover:bg-featured"
            >
              Agendar demo
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-white transition hover:bg-[#1ebe57]"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 85% 15%, ${BRAND.colors.sage}55 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 10% 80%, ${BRAND.colors.sand}90 0%, transparent 50%),
              linear-gradient(160deg, ${BRAND.colors.surface} 0%, #e9efe6 45%, ${BRAND.colors.sand} 100%)
            `,
          }}
        />
        <div
          className="pointer-events-none absolute -right-16 top-24 -z-10 opacity-[0.12] animate-soft-rise sm:right-8 sm:top-20"
          aria-hidden
        >
          <Logo size={420} color={BRAND.colors.primary} />
        </div>

        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
          <p
            className="font-display animate-fade-up text-4xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            {BRAND.name}
          </p>
          <p className="font-display animate-fade-up delay-1 mt-4 text-xl font-medium text-nav sm:text-2xl">
            {BRAND.slogan}
          </p>
          <p className="animate-fade-up delay-2 mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Plataforma para administrar inmobiliarias: inmuebles, contratos, cobros,
            liquidaciones y un portal para inquilinos. {BRAND.tagline}
          </p>
          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-3">
            <a
              href={DEMO_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-featured"
            >
              Agendar demo
            </a>
            <a
              href="#modulos"
              className="inline-flex items-center justify-center rounded-xl border border-line bg-panel/70 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-sand hover:bg-sand/40"
            >
              Ver módulos
            </a>
          </div>
        </div>
      </section>

      <section id="para-que-sirve" className="border-t border-line/80 bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            ¿Para qué sirve?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            JitakuTrack centraliza la operación diaria de una inmobiliaria. El equipo trabaja en el{" "}
            <strong className="font-semibold text-nav">{BRAND.productBackoffice}</strong> y los
            inquilinos entran al{" "}
            <strong className="font-semibold text-nav">{BRAND.productPortal}</strong> para alquilar,
            comprar o consultar su cuenta — sin mezclar roles ni planillas.
          </p>
        </div>
      </section>

      <section id="coste" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wider text-featured">
            Comparativa
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            El coste de no usar un sistema
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Seguir sin un sistema centralizado sale caro en tiempo, errores y oportunidades
            perdidas. Miralo lado a lado.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_1px_2px_rgba(44,44,44,0.04),0_6px_16px_rgba(85,107,90,0.07)]">
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)] border-b border-line text-left text-xs font-semibold uppercase tracking-wide sm:text-sm">
              <div className="bg-brand-soft/40 px-3 py-3 text-nav sm:px-5 sm:py-4">Área</div>
              <div className="border-l border-[#e8c4bc] bg-[#f8e8e4] px-3 py-3 text-[#9b3d32] sm:px-5 sm:py-4">
                Sin sistema
              </div>
              <div className="border-l border-[#c5d6c2] bg-[#e4efe3] px-3 py-3 text-[#3f6b48] sm:px-5 sm:py-4">
                Con JitakuTrack
              </div>
            </div>
            <ul>
              {COST_COMPARISON.map((row, i) => (
                <li
                  key={row.aspect}
                  className={`grid grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)] text-sm ${
                    i < COST_COMPARISON.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <div className="px-3 py-3 font-semibold text-ink sm:px-5 sm:py-4">
                    {row.aspect}
                  </div>
                  <div className="border-l border-[#f0d5cf] bg-[#fbf1ee] px-3 py-3 text-[#7a3a34] sm:px-5 sm:py-4">
                    {row.without}
                  </div>
                  <div className="border-l border-[#d2e3d0] bg-[#f0f7ef] px-3 py-3 text-[#2f5a3a] sm:px-5 sm:py-4">
                    {row.withSystem}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DEMO_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-featured"
            >
              Agendar demo
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition hover:border-sand"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="modulos" className="bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-nav">
                {BRAND.productBackoffice}
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Cómo se organiza el panel
              </h2>
              <p className="mt-3 max-w-xl text-ink-muted">
                La misma estructura del menú interno: cada bloque del negocio tiene su sección.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
            <aside
              className="hidden overflow-hidden rounded-2xl border border-white/10 lg:block"
              style={{ backgroundColor: BRAND.colors.primary }}
              aria-hidden
            >
              <div className="border-b border-white/10 px-4 py-5">
                <BrandMark logoSize={28} tone="onDark" />
              </div>
              <ul className="space-y-0.5 px-3 py-4 text-sm text-white/80">
                {BACKOFFICE_MODULES.map((m) => (
                  <li
                    key={m.title}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-white/10"
                  >
                    <m.icon className="h-[18px] w-[18px]" />
                    <span>{m.title}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {BACKOFFICE_MODULES.map((item) => (
                <li key={item.title} className="border-t border-line pt-5">
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex rounded-lg p-2 text-nav"
                      style={{ backgroundColor: `${BRAND.colors.sage}33` }}
                    >
                      <item.icon />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                      <ul className="mt-3 space-y-1 border-l border-line pl-3 text-xs text-ink-muted">
                        {item.items.map((sub) => (
                          <li key={sub}>{sub}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="portal" className="border-t border-line bg-nav text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wider text-sage">
            {BRAND.productPortal}
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Cómo se organiza el portal
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
            Pensado para el público e inquilinos: navegar inmuebles, ingresar y gestionar la
            cuenta sin acceder al backoffice.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
              <span className="font-display text-sm font-semibold tracking-tight">JitakuTrack</span>
              <div className="flex flex-wrap gap-1 text-sm">
                <span className="rounded-md bg-white/15 px-3 py-1.5 font-medium">Alquilar</span>
                <span className="rounded-md px-3 py-1.5 text-white/70">Comprar</span>
                <span className="rounded-md px-3 py-1.5 text-white/70">Mis pagos</span>
                <span className="ml-1 rounded-lg bg-sage px-3 py-1.5 text-sm font-semibold text-ink">
                  Ingresar
                </span>
              </div>
            </div>
            <ul className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {PORTAL_LINKS.map((link) => (
                <li key={link.label}>
                  <p className="font-display font-semibold text-sand">{link.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{link.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="precios" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wider text-nav">Planes</p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Precios
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            Sin precios publicados: elegí el alcance y cotizamos por WhatsApp según tu inmobiliaria.
          </p>

          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <li
                key={plan.name}
                className={`flex flex-col border border-line bg-surface p-6 ${
                  plan.featured ? "ring-2 ring-brand" : ""
                }`}
                style={{ borderRadius: "1rem" }}
              >
                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                    plan.featured
                      ? "bg-brand text-white"
                      : "bg-brand-soft text-nav"
                  }`}
                >
                  {plan.badge}
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold text-ink">{plan.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{plan.text}</p>
                <p className="mt-4 font-display text-2xl font-semibold text-nav">Consultar</p>
                <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-ink-muted">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-sage">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-brand text-white hover:bg-featured"
                      : "border border-line bg-panel text-ink hover:border-sand"
                  }`}
                >
                  Pedir cotización
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-line bg-nav text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3 sm:px-8">
          <div>
            <BrandMark logoSize={32} tone="onDark" showSlogan />
            <p className="mt-3 max-w-xs text-sm text-white/70">{BRAND.tagline}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">Explorar</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href="#coste" className="hover:text-white">
                  El coste de no usar un sistema
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-white">
                  Módulos del backoffice
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-white">
                  Precios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">Contacto</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={DEMO_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Agendar demo
                </a>
              </li>
              <li>
                <a href={`mailto:${DEMO_EMAIL}`} className="hover:text-white">
                  {DEMO_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
