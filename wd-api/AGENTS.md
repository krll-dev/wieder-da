# AGENTS.md (wd-api)

Scope: `wd-api/` and all subdirectories.

## Stack & Tooling
- Framework: Spring Boot 4.0.1
- Build: Gradle
- Runtime: JDK 25
- Database: PostgreSQL 17.4

## Backend Conventions
- Prefer immutable DTOs/records where appropriate.
- Use constructor injection; avoid field injection.
- Validate inputs at the edge (controllers) and keep business logic in services.
- Keep persistence concerns in repository layer; avoid leaking JPA entities to API boundaries.

## API & Security
- Be explicit about authorization boundaries and roles.
- Return clear, consistent error responses.
