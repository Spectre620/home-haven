1. Table: profiles

Stores user information for both Agents and Seekers.

    id: uuid (Primary Key) — Unique identifier for the user.

    full_name: text — The user's display name.

    role: text — Role-based access: 'agent' or 'seeker'.

    created_at: timestamp — Record creation time.

2. Table: properties

The core listings in the marketplace.

    id: uuid (Primary Key) — Unique property ID.

    agent_id: uuid (Foreign Key) — References profiles.id (Who posted it?).

    title: text — E.g., "Modern 3-Bedroom Apartment".

    description: text — Detailed property pitch.

    price: numeric — Monthly rent or sale price.

    location: text — City/Neighborhood.

    category: text — E.g., "Apartment", "Villa", "Office".

    is_verified: boolean — Admin verification status for fraud prevention.

3. Table: property_images

Handles multiple photos per listing (1:N Relationship).

    id: uuid (Primary Key).

    property_id: uuid (Foreign Key) — References properties.id.

    image_url: text — Link to the hosted image file.