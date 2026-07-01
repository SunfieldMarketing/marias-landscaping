type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, string | { d: string; filled?: boolean }> = {
  // Services
  tree:      "M12 2 7 9h3l-4 6h4l-3 5h10l-3-5h4l-4-6h3L12 2Zm0 18v2",
  leaf:      "M5 13c0-5 4-9 9-9h5v5c0 5-4 9-9 9H5v-5Zm0 5 8-8",
  grass:     "M4 20V10m4 10V6m4 14v-8m4 8V4m4 16v-9",
  broom:     "m4 20 6-6m0 0 8-8 2 2-8 8m-2-2 2 2M8 14l6 6",
  sod:       "M3 20h18M4 20V9l3-3 3 3v11M11 20V6l3-3 3 3v14",
  drop:      "M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z",
  brick:     "M3 8h8v5H3zM13 8h8v5h-8zM3 15h8v5H3zM13 15h8v5h-8z",
  stump:     "M5 20h14M7 20V10a5 5 0 0 1 10 0v10M9 10h6",
  palm:      "M12 22V13m0 0c-3-4-7-4-9-2 2-3 6-4 9-1m0 3c1-5 5-7 9-6-1 3-4 6-9 6m0-3c1-3 0-6-2-8 3 0 5 3 5 6",
  mulch:     "M4 20h16M6 20l1-8 5-4 5 4 1 8M9 12l3-2 3 2",
  // UI
  home:      "m3 11 9-7 9 7M5 10v10h14V10",
  chat:      "M4 4h16v11H8l-4 4V4Z",
  shield:    "M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z",
  clipboard: "M9 3h6v3H9V3ZM6 6h12v15H6V6Zm3 5h6m-6 4h6",
  clock:     "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 3",
  check:     "m4 12 5 5 11-11",
  phone:     "M4 4c0 9 7 16 16 16l2-4-6-2-2 2c-2-1-4-3-5-5l2-2-2-6-4-1Z",
  sms:       "M4 4h16v12H8l-4 4V4Z",
  pin:       "M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  mail:      "M3 5h18v14H3V5Zm0 0 9 7 9-7",
  star:      "m12 2 3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1L12 2Z",
  arrow:     "M5 12h14m-6-6 6 6-6 6",
  quote:     "M7 7h5v6c0 3-2 5-5 5v-2c1.5 0 2.5-1 3-2H7V7Zm9 0h5v6c0 3-2 5-5 5v-2c1.5 0 2.5-1 3-2h-3V7Z",
  // New icons
  facebook:  "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  google:    "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
  language:  "M5 8l6 6m-6 0 6-6m7-2v13m0-13 3 3m-3-3-3 3M3 4h10M3 8h5",
  award:     "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6m-3-3h6",
  video:     "M15 10l4.553-2.369A1 1 0 0 1 21 8.538v6.924a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z",
  eye:       "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  menu:      "M4 7h16M4 12h16M4 17h16",
  close:     "M6 6l12 12M18 6L6 18",
  plus:      "M12 5v14m-7-7h14",
  minus:     "M5 12h14",
  sparkle:   "M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7Z",
  map:       "M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13V7m0 13 6-3M9 7l6-3m0 17V4m0 17 5.553-2.276A1 1 0 0 0 21 17.618V6.382a1 1 0 0 0-1.447-.894L15 7",
  users:     "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  grid:      "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  lightbulb: "M9 18h6m-5 4h4M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6H8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7Z",
  ruler:     "M3 9l4-4 14 14-4 4L3 9Zm8 4 2 2m-5-5 2 2m5 1 2 2",
  truck:     "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
};

export default function Icon({ name, className = "w-6 h-6" }: IconProps) {
  const pathData = paths[name];
  const d = typeof pathData === "string" ? pathData : pathData?.d ?? paths.check as string;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
