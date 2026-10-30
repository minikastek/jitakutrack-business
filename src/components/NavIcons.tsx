import type { ReactNode } from "react";

function Icon({
  children,
  className = "h-5 w-5 shrink-0",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function IconHouse(props: { className?: string }) {
  return (
    <Icon {...props}>
      <path d="M3 10.5 L12 3 l9 7.5" />
      <path d="M5 9.5 V20 h14 V9.5" />
    </Icon>
  );
}

export function IconBuilding(props: { className?: string }) {
  return (
    <Icon {...props}>
      <path d="M4 20 V6 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v14" />
      <path d="M14 10 h4 a1 1 0 0 1 1 1 v9" />
      <path d="M7 9 h2 M7 13 h2 M7 17 h2 M11 9 h2 M11 13 h2" />
    </Icon>
  );
}

export function IconUser(props: { className?: string }) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5 20 c1.5-3.5 4-5 7-5 s5.5 1.5 7 5" />
    </Icon>
  );
}

export function IconUsers(props: { className?: string }) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="2.75" />
      <path d="M3.5 19.5 c1.2-3 3.2-4.5 5.5-4.5 s4.3 1.5 5.5 4.5" />
      <circle cx="16.5" cy="9" r="2.25" />
      <path d="M14.5 15.2 c1.4-.4 2.9.2 4 1.8" />
    </Icon>
  );
}

export function IconDoc(props: { className?: string }) {
  return (
    <Icon {...props}>
      <path d="M7 3.5 h7 l4 4 V20.5 H7 Z" />
      <path d="M14 3.5 V8 h4" />
      <path d="M10 12 h5 M10 15.5 h5" />
    </Icon>
  );
}

export function IconPayment(props: { className?: string }) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5 v1.2 M12 15.3 v1.2" />
      <path d="M10 14.5 c.4.7 1.1 1.1 2 1.1 1.2 0 2-.7 2-1.6 s-.8-1.5-2-1.8-2-.7-2-1.7 .9-1.6 2-1.6 c.9 0 1.6.4 2 1.1" />
    </Icon>
  );
}

export function IconChart(props: { className?: string }) {
  return (
    <Icon {...props}>
      <path d="M4 19.5 h16" />
      <path d="M7 19.5 V12" />
      <path d="M12 19.5 V8" />
      <path d="M17 19.5 V14" />
    </Icon>
  );
}

export function IconCalc(props: { className?: string }) {
  return (
    <Icon {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8 8 h8 M8 12 h3 M13 12 h3 M8 16 h3 M13 16 h3" />
    </Icon>
  );
}

export function IconCalendar(props: { className?: string }) {
  return (
    <Icon {...props}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3.5 V7 M16 3.5 V7 M4 10 h16" />
    </Icon>
  );
}
