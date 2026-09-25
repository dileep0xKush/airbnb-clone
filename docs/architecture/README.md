# System Architecture: Scaling a Production-Scale Vacation Rental Marketplace (Airbnb-style)

This document details the high-level architecture design and scaling strategy for our production-scale vacation-rental application, matching the components outlined in the [architecture diagram](file:///media/lap-010/Data/Developments/airbnb-clone/docs/architecture/architecture_diagram.png).

---

## 1. Client Layer

### Next.js & Frontend Architecture
- **Rendering Strategy**: 
  - **Incremental Static Regeneration (ISR)** for property listing pages (`/listing/[id]`). Listings rarely change minutely; caching them as static pages and revalidating them asynchronously every 15–30 minutes ensures sub-100ms load times and handles spikes in traffic.
  - **Server-Side Rendering (SSR)** for dynamic search results, checkouts, and booking verification.
  - **Static Generation** for landing page assets and standard legal/support pages.
- **Edge Delivery (CDN)**: Global CDN (such as Vercel Edge Network or AWS CloudFront) serves static assets, images, and HTML fragments, minimizing latency for localized requests.
- **Client Optimization**: Code splitting, progressive hydration, and automatic image layout optimization (WebP/AVIF format processing) keep First Load JS budgets lightweight.

---

## 2. API Gateway & Load Balancing

- **Application Load Balancer (AWS ALB)**: Distributes incoming web traffic across nodes. It terminates SSL/TLS certificates and applies Web Application Firewall (WAF) rule sets to block malicious bot crawls and DDoS floods.
- **Kong API Gateway**:
  - Acts as the single entry point for microservices, hiding microservice layouts from clients.
  - Handles API routing, JWT auth token decoding and validation, rate limiting (prevents API scraping), and logging.

---

## 3. Stateless Microservices Layer

Each business capability is isolated as a containerized, stateless microservice deploying on a **Kubernetes Cluster (EKS)**.
- **Identity & Auth Service**: Handles registration, OAuth (Google/GitHub), and session token validation.
- **Listings & Search Service**: Manages property listing data, updates, and indexing.
- **Booking & Reservation Service**: Coordinates reservation bookings, locking dates momentarily during checkout to avoid double bookings.
- **Payments & Transactions Service**: Handles Stripe integrations and maintains accounting ledger histories.
- **Notifications & Messaging Service**: Coordinates transactional emails, push notifications, and hosts chat messaging.

---

## 4. Search & Caching Layer

- **Elasticsearch (Search & Location)**:
  - Supports fuzzy text matching, price filter range buckets, and advanced geo-spatial indexing (e.g. searching listings within a "5-mile radius" of latitude/longitude coordinates).
  - Keeps database servers free from heavy scan queries.
- **Redis Cluster (Caching)**:
  - Cache aside pattern for hot listings, user sessions, and localized availability calendars.
  - Reduces read queries hitting primary databases by up to 90%.

---

## 5. Event-Driven Messaging (Apache Kafka)

- **Apache Kafka** is used as the backbone for asynchronous communication and data streams.
- When a booking is confirmed, the Booking Service publishes a `BookingConfirmed` event to Kafka.
- Subscribed consumers:
  - **Notification Service**: Sends SMS/email receipt.
  - **Search Service**: Recalculates elastic search calendars.
  - **Analytics Service**: Updates metrics databases.

---

## 6. Storage Layer

- **PostgreSQL (Master-Replica)**:
  - Primary database for transactional records (Users, Bookings, Ledger entries) where strict ACID compliance is required.
  - **Write/Master Node**: Handles mutations.
  - **Read/Replica Nodes**: Horizontally scales query reads, synced via streaming replication.
- **MongoDB (Metadata & Reviews)**:
  - Handles flexible schema data like review text and user review histories.
- **AWS S3 (Listing Media Assets)**:
  - Highly available object storage for user-uploaded photos. Uploads are handled via pre-signed URLs from the Client straight to S3, bypassing microservice bandwidth bottlenecks.
