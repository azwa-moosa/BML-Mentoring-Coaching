# IT Handoff — Functional Reference Prototype

This prototype is intended to act as a **functional UI/UX and business-flow reference**, not as the production technical architecture.

## Retain

IT may retain/recreate the following behaviours:

### Roles
- Staff
- Mentor
- HR

### Availability lifecycle
```text
OPEN → PENDING → BOOKED
```

### Booking lifecycle
```text
REQUESTED → ACCEPTED
REQUESTED → DECLINED
ACCEPTED → COMPLETED
REQUESTED / ACCEPTED → CANCELLED
```

### Staff journey
```text
Select Mentoring / Coaching
→ Category
→ Expertise
→ Mentor
→ Open Slot
→ Topic
→ Request
```

### Mentor journey
```text
Publish monthly availability
→ Receive request
→ Accept + select meeting location
OR
→ Decline
```

### HR journey
HR is programme administrator / oversight and is not the normal booking approver.

HR manages:
- Mentors
- Availability
- Bookings
- Categories
- Expertise
- Programme analytics

## Replace for production

Current prototype:

```text
UI
→ assets/app.js
→ browser localStorage
```

Recommended production structure:

```text
UI
→ application/API service
→ approved backend
→ database
```

Also replace:
- role-selector landing page with organisational SSO
- demo identity with authenticated identity
- localStorage with server persistence
- browser-only booking lock with transactional database locking
- browser confirmations with approved application components
- dummy data with authorised organisation data

## Important production controls
The production build should implement:
- SSO
- server-side RBAC
- API authentication/authorization
- booking concurrency protection
- validation
- audit logging
- approved data retention
- production error handling
- accessibility review
- security review

The purpose of this repository is to show IT **what the system should feel like and how the core lifecycle should work**.


## Full mentor / coach directory

The prototype includes the supplied UID, Name, Job Title, Division and Type values.

Demo routing assumption:
- ICF = Coaching
- Mentor = Mentoring
- ICF/Mentor = both

The prototype expertise tags are illustrative mappings derived from the supplied job title/division only to demonstrate filtering. They are not intended to replace the formally approved mentor expertise master data.
