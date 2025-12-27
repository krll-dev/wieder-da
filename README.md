# Wieder Da — Digitales Fundbüro

[![API CI](https://github.com/<OWNER>/wieder-da/actions/workflows/api-ci.yml/badge.svg)](https://github.com/<OWNER>/wieder-da/actions/workflows/api-ci.yml)
[![UI CI](https://github.com/<OWNER>/wieder-da/actions/workflows/ui-ci.yml/badge.svg)](https://github.com/<OWNER>/wieder-da/actions/workflows/ui-ci.yml)
[![API Docker](https://github.com/<OWNER>/wieder-da/actions/workflows/api-docker.yml/badge.svg)](https://github.com/<OWNER>/wieder-da/actions/workflows/api-docker.yml)
[![UI Docker](https://github.com/<OWNER>/wieder-da/actions/workflows/ui-docker.yml/badge.svg)](https://github.com/<OWNER>/wieder-da/actions/workflows/ui-docker.yml)
[![CodeQL](https://github.com/<OWNER>/wieder-da/actions/workflows/codeql.yml/badge.svg)](https://github.com/<OWNER>/wieder-da/actions/workflows/codeql.yml)
[![Dependency Review](https://github.com/<OWNER>/wieder-da/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/<OWNER>/wieder-da/actions/workflows/dependency-review.yml)

> **Hinweis zu den Badges:** Ersetze `<OWNER>` durch den GitHub-User oder die Organisation, unter der dieses Repository liegt, damit die Badges den Pipeline‑Status korrekt anzeigen.

## Überblick
**Digitales Fundbüro (Kundenservice)** — eine Web‑App zur zentralen Erfassung von Fundsachen und Verlustmeldungen. Ziel ist es, den Abgleich zwischen gefundenen und vermissten Gegenständen zu automatisieren und die Rückgabe zu beschleunigen.

## Problem / Status quo
Die Verwaltung von Fundsachen erfolgt bei vielen Verkehrsunternehmen noch mit Excel‑Listen oder handschriftlichen Aufzeichnungen. Das Auffinden und Zuordnen verlorener Gegenstände ist mühsam und fehleranfällig – oft muss man sich durch lange Tabellen kämpfen. Die Daten sind dezentral und ein Abgleich zwischen gefundenen und vermissten Objekten passiert meist manuell.

## Lösung durch Web‑App
Ein digitales Fundbüro erfasst zentral alle abgegebenen Gegenstände sowie Verlustmeldungen. Die Anwendung erlaubt dem Kundenservice, Funde kategorisiert einzutragen (Datum, Ort, Beschreibung, Foto) und Suchanfragen von Fahrgästen zu hinterlegen. Durch intelligente Filter oder automatische Abgleiche können Matches (z. B. übereinstimmende Beschreibung) vorgeschlagen werden, was die Rückgabe erleichtert.

## Wichtige Features
- Eingabemaske für neue Fundsachen und Verlustmeldungen
- Such‑ und Filterfunktion (nach Datum, Fundort, Kategorie)
- Matching‑Modul für potenzielle Übereinstimmungen
- Status‑Verfolgung (z. B. aufbewahrt, zurückgegeben, zur Versteigerung vorbereitet)
- Benachrichtigungen bei möglichen Treffern
- Rechteverwaltung für autorisierte Mitarbeitende
- Optionale Schnittstellen‑Integration (z. B. „Have it Back“)

## Monetarisierung / Pilot
Als Pilotprojekt könnte die Web‑App bei einem Verkehrsunternehmen wie der BOGESTRA im Kundenservice getestet werden, um interne Prozesse zu optimieren und Kundenzufriedenheit zu steigern. Monetarisierung erfolgt primär B2B: Nach erfolgreichem Pilotbetrieb kann die Lösung anderen Verkehrsbetrieben als Lizenz oder individuell angepasste Auftragssoftware angeboten werden. Da Verkehrsbetriebe gesetzlich ein Fundbüro führen müssen, besteht ein klarer Bedarf – Kosteneinsparungen und effizientere Abläufe (weniger manuelle Suche, schnellerer Abgleich) sind überzeugende Verkaufsargumente.

## Technologie‑Stack
- **Frontend:** Angular 21
- **Backend:** Spring Boot 4.0.1 (Gradle)
- **Datenbank:** PostgreSQL 17.4
- **JDK:** 25
- **Dev‑Tools:** IntelliJ 2025.3.1
- **CI/CD:** GitHub Actions
- **Container:** Docker, Docker‑Compose

## Projektstruktur
- `wd-ui/` — Angular UI
- `wd-api/` — Spring Boot API
- `docker-compose.dev.yml` — lokale Entwicklungs‑Umgebung
- `docker-compose.prod.yml` — Produktions‑Setup (Platzhalter/Entwurf)

## Lokale Entwicklung (Kurzüberblick)
> Diese Sektion ist bewusst knapp gehalten und wird bei Bedarf detailliert erweitert.

1. Voraussetzungen: Docker & Docker‑Compose, JDK 25, Node.js (für Angular), PostgreSQL (optional lokal).
2. Für eine vollständige lokale Umgebung kann `docker-compose.dev.yml` genutzt werden.

## CI/CD
Die Pipelines werden über GitHub Actions betrieben. Relevante Workflows:
- API CI (`.github/workflows/api-ci.yml`)
- UI CI (`.github/workflows/ui-ci.yml`)
- Docker Builds (`api-docker.yml`, `ui-docker.yml`)
- CodeQL (`codeql.yml`)
- Dependency Review (`dependency-review.yml`)

## Lizenz- und Bildrechte (Wichtig)
Dieses Projekt weist ausdrücklich auf potenzielle Lizenzrisiken hin. Bitte keine Assets (Bilder, Icons, Fonts) ohne klare Lizenz einbinden. Unklare oder unbekannte Lizenzen müssen vorab geklärt werden.

## Roadmap (Auszug)
- MVP für Erfassung & Suche
- Matching‑Modul mit konfigurierbaren Regeln
- Benachrichtigungs‑Service
- Rollen‑ & Rechte‑Management
- Optionale Integrationen (z. B. „Have it Back“)

## Kontakt
Für Fragen oder Kooperationen: bitte ein Issue eröffnen oder einen Pull Request einreichen.
