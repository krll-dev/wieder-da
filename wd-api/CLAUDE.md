# CLAUDE.md

Diese Datei enthält Hinweise für Claude Code (claude.ai/code) zur Arbeit im Backend (`wd-api`).

## Befehle

```bash
./gradlew build          # Kompilieren und paketieren
./gradlew clean test     # Tests ausführen (PostgreSQL erforderlich)
```

Das `local` Spring-Profil aktiviert die Docker-Compose-Integration (startet PostgreSQL automatisch). Im CI wird das `ci`-Profil mit einem externen PostgreSQL-Service verwendet.

## Stack

- Spring Boot 4.0.1, JDK 21, Gradle
- PostgreSQL 17.4 mit Flyway-Migrationen
- Lombok für Boilerplate-Reduktion (Getter, Setter, Builder etc.)

## Konventionen

- **Constructor Injection** — keine Field Injection (`@Autowired` auf Feldern)
- **Eingabevalidierung am Controller-Rand** — Bean Validation Annotations verwenden
- **Immutable DTOs** — Java Records für Request-/Response-Objekte
- **Schichttrennung** — Business-Logik in Services, Persistenz in Repositories; JPA Entities dürfen nicht an API-Grenzen nach außen dringen
- **Explizite Autorisierung** — auf Controller- oder Service-Ebene durchsetzen
