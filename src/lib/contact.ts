export const WHATSAPP_NUMBER = "543804925026"; // sin + ni espacios (wa.me)
export const WHATSAPP_DISPLAY = "+54 380 492-5026";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola JitakuTrack, quiero más información sobre el producto.",
)}`;

export const DEMO_EMAIL = "nicoalgo.ireland@gmail.com";

/** Abre Google Calendar con evento prearmado e invita al email de demos */
export const DEMO_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?" +
  new URLSearchParams({
    action: "TEMPLATE",
    text: "Demo JitakuTrack",
    details:
      "Reunión de demostración de JitakuTrack.\n\nContacto: nicoalgo.ireland@gmail.com",
    add: DEMO_EMAIL,
    sf: "true",
  }).toString();
