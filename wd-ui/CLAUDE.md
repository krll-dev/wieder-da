# CLAUDE.md

Diese Datei enthält Hinweise für Claude Code (claude.ai/code) zur Arbeit im Frontend (`wd-ui`).

## Befehle

```bash
npm start          # Dev-Server auf localhost:4200
npm test           # Tests mit Vitest ausführen
npm run lint       # ESLint
npm run lint:fix   # Lint-Fehler automatisch beheben
npm run build      # Produktions-Build
```

## TypeScript

- `unknown` statt `any` bei unbekannten Typen

## Angular-Konventionen

- **Nur Standalone Components** — keine NgModules
- **`standalone: true` nicht setzen** — ist Default ab Angular v20+
- **OnPush Change Detection** bei allen Components: `changeDetection: ChangeDetectionStrategy.OnPush`
- **`input()` / `output()` Funktionen** statt `@Input()` / `@Output()` Dekoratoren
- **Native Control Flow** — `@if`, `@for`, `@switch` verwenden (nicht `*ngIf`, `*ngFor`)
- **Lazy-Loading für Routen** — alle Feature-Routen müssen `loadComponent` verwenden
- **Kein `@HostBinding` / `@HostListener`** — stattdessen `host: {}` in `@Component`-Metadaten
- **Kein `ngClass`** — stattdessen `class`-Bindings verwenden
- **Kein `ngStyle`** — stattdessen `style`-Bindings verwenden
- **`NgOptimizedImage`** für alle statischen Bilder (funktioniert nicht für inline Base64-Bilder)

## State Management

- **Signal-basierter State** — `signal()` / `computed()` / `effect()` bevorzugen
- `computed()` für abgeleiteten State
- `update()` oder `set()` auf Signals verwenden — kein `mutate()`

## Templates

- Keine Arrow Functions in Templates
- Keine Globals wie `new Date()` in Templates verwenden

## Formulare

- **Reactive Forms** — keine Template-driven Forms

## Services

- `inject()` statt Constructor Injection

## Barrierefreiheit

- Alle AXE-Checks müssen bestanden werden
- WCAG AA Konformität: Fokus-Management, Farbkontrast, ARIA-Attribute
