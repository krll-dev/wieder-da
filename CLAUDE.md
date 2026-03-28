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

## Vollständigen Stack lokal starten

```bash
docker compose -f docker-compose.dev.yml up
```

## Allgemeine Richtlinien

- Kleine, fokussierte Änderungen bevorzugen
- Konfiguration an den Zielversionen ausrichten: Angular 21, Spring Boot 4.0.1, PostgreSQL 17.4, JDK 25
