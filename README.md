# InYoung Supplements

A personalised supplement recommendation platform. Users complete a short skin and lifestyle assessment, and the app recommends a tailored supplement stack from the InYoung product catalogue.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router), React 18, Tailwind CSS, Framer Motion |
| Backend | Express 4, Node.js 20, TypeScript |
| Shared logic | `@inyoung/shared` — Zod schemas, product data, recommendation engine |
| Monorepo | Turborepo + npm workspaces |
| Containers | Docker + Docker Compose |

## Repository Structure

```
.
├── apps/
│   ├── api/        # Express REST API  (port 4000)
│   └── web/        # Next.js frontend  (port 3000)
├── packages/
│   └── shared/     # Types, Zod schemas, product catalogue, recommendation logic
├── docker-compose.yml
└── turbo.json
```

## Getting Started

### Prerequisites

- **Node.js 20+** and **npm 11+**  *(local development)*
- **Docker + Docker Compose** *(containerised run)*

### Local development

```bash
# Install all workspace dependencies
npm install

# Start both apps in watch mode
npm run dev
```

- Web → http://localhost:3000  
- API → http://localhost:4000

### Environment variables

Copy `.env.example` to `.env` and adjust as needed (defaults work out of the box):

```bash
cp .env.example .env
```

| Variable | Default | Description |
|---|---|---|
| `PORT` | `4000` | API listen port |
| `CORS_ORIGIN` | `http://localhost:3000` | Allowed CORS origin |
| `NEXT_PUBLIC_API_URL` | `http://localhost:4000` | API base URL used by the browser |

### Docker (recommended for a production-like run)

```bash
# Build images and start both services
docker compose up --build

# Run in the background
docker compose up --build -d

# Stop
docker compose down
```

The web container waits for the API health-check to pass before starting.

## Scripts

All scripts are run from the **repository root** and orchestrated by Turborepo.

| Command | Description |
|---|---|
| `npm run dev` | Start all apps in development / watch mode |
| `npm run build` | Build all packages and apps in dependency order |
| `npm run test` | Run all test suites |
| `npm run lint` | Type-check all packages |

To target a single workspace:

```bash
npm run dev   --workspace=apps/web
npm run build --workspace=apps/api
npm run test  --workspace=packages/shared
```

## API Reference

Base URL: `http://localhost:4000`

### Health

```
GET /api/health
```

Returns service status and timestamp.

### Products

```
GET  /api/products          # list all products
GET  /api/products/:slug    # get a single product
```

### Assessment

```
GET  /api/assessment/questions   # returns the 11-step question structure
POST /api/assessment/submit      # submit answers, returns recommendations
```

**POST `/api/assessment/submit`** — example request body (abbreviated):

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "age": 35,
  "sex": "female",
  "primaryGoals": ["antiAging", "hydration"],
  "skinType": "combination",
  "energyLevel": "moderate",
  "stressLevel": "high",
  "sleepHours": 6,
  "exerciseFrequency": "sometimes"
}
```

## Packages

### `@inyoung/shared`

Internal package consumed by both apps. Never published to npm.

| Export | Description |
|---|---|
| `products` | Full product catalogue array |
| `getProductBySlug(slug)` | Look up a product by its URL slug |
| `generateRecommendations(answers)` | Core recommendation algorithm |
| `isMenopauseRelevant(sex, age)` | Helper used to conditionally show menopause products |
| `fullAssessmentSchema` | Zod schema for the complete assessment form |
| Types | `AssessmentAnswers`, `Product`, `SkinType`, … |
