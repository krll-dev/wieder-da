# CLAUDE.md

Diese Datei enthält Hinweise für Claude Code (claude.ai/code) zur Arbeit in diesem Repository.

## Sprache

Innerhalb des Projekts wird **Deutsch** verwendet — sowohl in der UI als auch in Kommentaren, Commit-Nachrichten, Dokumentation und der Kommunikation mit dem Nutzer.

## Projektübersicht

**Wieder Da** ist ein digitales Fundbüro-System für öffentliche Verkehrsunternehmen. Es zentralisiert die Verwaltung von Fundsachen und Verlustmeldungen und bietet intelligentes Matching zwischen gefundenen Gegenständen und Kundenanfragen.

## Architektur

Monorepo mit zwei unabhängig deployenden Services:

- **`wd-ui/`** — Angular 21 SPA (Port 4200 in der Entwicklung)
- **`wd-api/`** — Spring Boot 4.0.1 REST API (Port 8080 in der Entwicklung)
- **PostgreSQL 17.4** — Datenbank (Port 5432 in der Entwicklung, Zugangsdaten: `wd`/`secret`)

Docker Compose orchestriert alle drei Services. Die API nutzt Flyway für Datenbankmigrationen.

## Entwicklungsbefehle

### Vollständigen Stack lokal starten
```bash
docker compose -f docker-compose.dev.yml up
```

### Frontend (wd-ui)
```bash
cd wd-ui
npm start          # Dev-Server auf localhost:4200
npm test           # Tests mit Vitest ausführen
npm run lint       # ESLint
npm run lint:fix   # Lint-Fehler automatisch beheben
npm run build      # Produktions-Build
```

### Backend (wd-api)
```bash
cd wd-api
./gradlew build          # Kompilieren und paketieren
./gradlew clean test     # Tests ausführen (PostgreSQL erforderlich)
```

Das `local` Spring-Profil aktiviert die Docker-Compose-Integration (startet PostgreSQL automatisch). Im CI wird das `ci`-Profil mit einem externen PostgreSQL-Service verwendet.

## Frontend-Konventionen (wd-ui)

- **Nur Standalone Components** — keine NgModules
- **Signal-basierter State** — `signal()` / `computed()` / `effect()` bevorzugen statt Subject-Patterns
- **Lazy-Loading für Routen** — alle Feature-Routen müssen `loadComponent` verwenden
- **OnPush Change Detection** bei allen Components
- **Native Control Flow** — `@if`, `@for`, `@switch` verwenden (nicht `*ngIf`, `*ngFor`)
- **Reactive Forms** — keine Template-driven Forms
- **Kein `@HostBinding` / `@HostListener`** — stattdessen `host: {}` in `@Component`-Metadaten
- **`NgOptimizedImage`** für alle statischen Bilder
- **Barrierefreiheit** — WCAG AA Konformität; Validierung mit AXE-Checks

## Backend-Konventionen (wd-api)

- **Constructor Injection** — keine Field Injection (`@Autowired` auf Feldern)
- **Eingabevalidierung am Controller-Rand** — Bean Validation Annotations verwenden
- **Immutable DTOs** — Java Records für Request-/Response-Objekte
- **Schichttrennung** — Business-Logik in Services, Persistenz in Repositories; JPA Entities dürfen nicht an API-Grenzen nach außen dringen
- **Explizite Autorisierung** — auf Controller- oder Service-Ebene durchsetzen

## Allgemeine Richtlinien

- Kleine, fokussierte Änderungen bevorzugen
- Konfiguration an den Zielversionen ausrichten: Angular 21, Spring Boot 4.0.1, PostgreSQL 17.4, JDK 25
