<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Playwright TypeScript Automation Framework</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #050816;
      --bg-elevated: #0f172a;
      --accent: #38bdf8;
      --accent-soft: rgba(56, 189, 248, 0.15);
      --text-main: #e5e7eb;
      --text-muted: #9ca3af;
      --border-subtle: #1f2937;
      --radius-lg: 18px;
      --shadow-soft: 0 20px 40px rgba(0, 0, 0, 0.4);
      --font-main: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: var(--font-main);
      background: radial-gradient(circle at top, #1f2933 0, #020617 55%);
      color: var(--text-main);
      min-height: 100vh;
      scroll-behavior: smooth;
    }

    /* Layout */
    .page {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(16px);
      background: linear-gradient(
        to bottom,
        rgba(15, 23, 42, 0.95),
        rgba(15, 23, 42, 0.75),
        transparent
      );
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .nav {
      max-width: 1120px;
      margin: 0 auto;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-weight: 700;
      letter-spacing: 0.04em;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.98rem;
      text-transform: uppercase;
    }

    .logo-pill {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 30%, #38bdf8, #1d4ed8);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 18px rgba(56, 189, 248, 0.7);
      font-size: 0.8rem;
    }

    .nav-links {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .nav-links a {
      text-de
