# UniBridge

A bilingual event-sharing platform designed to promote interaction between Korean and international students at Dankook University. UniBridge provides an open notice board for event announcements, an interactive calendar, and an intelligent buddy matching system that connects students with similar interests.

This project demonstrates modern frontend development with React.js, including bilingual support (Korean/English), role-based access control, and integration with a Django backend API. The application features a buddy matching algorithm that analyzes user interests to suggest compatible connections.

This project was created as a capstone project during my final year at Dankook University. This repository only contains the frontend implementation.

## Features

### Core Functionality
- **Dual Notice Boards**: Separate community and notice boards with role-based posting permissions.
- **Interactive Event Calendar**: Color-coded events by department with filtering capabilities.
- **Buddy Matching System**: Algorithm-based matching that connects users with similar interests.
- **Bilingual Interface**: Full support for Korean and English with i18next.
- **Role-Based Access**: User and admin roles with differentiated permissions.

### User Experience
- Comprehensive sign-up flow with interest survey for personalized buddy recommendations.
- Responsive design for seamless mobile and desktop experiences.
- Real-time event filtering by department.
- Modal-based interactions for streamlined user flow.

### Technical Features
- Frontend-only repository with API integration layer.
- Client-side state management with React Context API.
- Modular component architecture with CSS Modules.
- Backend content translation via ChatGPT API (backend implementation).

## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Landing** | `/` | Entry point with sign up/login options |
| **Login** | `/login` | User authentication |
| **Sign Up** | `/signup` | Registration with interest survey |
| **Home** | `/home` | Dashboard with calendar widget and board previews |
| **Calendar** | `/calendar` | Full calendar view with department filtering |
| **Notice** | `/notice` | Official announcements (admin-only posting) |
| **Community** | `/community` | Open discussion board (user posting enabled) |
| **Buddy Matching** | `/buddyMatching` | View recommended and current buddies |
| **Chat** | `/chat` | Direct messaging interface (incomplete) |

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend Framework | React.js |
| Styling | CSS Modules + Material UI |
| Routing | React Router DOM |
| Calendar | FullCalendar |
| Internationalization | i18next + react-i18next |
| HTTP Client | Axios |
| Backend | Python + Django (separate repository) |
| Database | PostgreSQL (separate repository)|
| State Management | React Context API |
| Date Handling | Moment.js |

## Project Structure

```
src/
├── api/                    # API integration layer
│   ├── buddyApi.js         # Buddy matching endpoints
│   ├── communityApi.js     # Community board endpoints
│   ├── loginApi.js         # Authentication endpoints
│   ├── noticeApi.js        # Notice board endpoints
│   ├── postApi.js          # Post creation endpoints
│   └── signupApi.js        # Registration endpoints
├── components/             # Reusable UI components
│   ├── BulletinBoard.jsx
│   ├── BulletinEntry.jsx
│   ├── CreateModal.jsx
│   ├── LanguageToggle.jsx
│   ├── NavigationBar.jsx
│   └── TitleCard.jsx
├── contexts/              # React Context providers
│   ├── AuthContext.js
│   ├── SharedEventsContext.js
│   └── UserGroupsContext.js
├── pages/                 # Page-level components
│   ├── BuddyMatching/
│   ├── Calendar/
│   ├── Chat/
│   ├── Community/
│   ├── Home/
│   ├── Landing/
│   ├── Login/
│   ├── Notice/
│   └── SignUp/
├── locales/               # Translation files
│   ├── en/
│   └── ko/
├── utils/                 # Utility functions (unused)
│   ├── apiClient.js       # Axios configuration (unused)
│   └── tokenManager.js    # JWT token handling (unused)
└── App.js                 # Root component with routing
```

## Getting Started
**⚠️ Important**: This repository only contains the frontend. The application requires a running Django backend server to function properly. Without the backend, the app will start but won't be able to load posts, user data, events, or perform authentication.

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn package manager
- Backend server running (Django backend from separate repository)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/userVallen/UniBridge.git
   cd UniBridge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure API endpoint (if needed):
   - Update the base URL in `src/utils/apiClient.js` to point to your backend server

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## How It Works

### Architecture Overview
- **Client-Side Rendering**: React SPA architecture with client-side routing.
- **API Layer**: Dedicated API modules handle all backend communication via Axios.
- **State Management**: React Context API manages global state (authentication, events, user groups).
- **Component Isolation**: CSS Modules ensure scoped styling without conflicts.
- **Internationalization**: i18next provides seamless language switching with JSON-based translations.

### Key Workflows

#### User Registration & Interest Matching
1. User completes sign-up form with basic information and email verification.
2. Interest survey captures user preferences across multiple categories.
3. Frontend sends survey data to backend for interest score calculation.
4. Backend buddy matching algorithm uses scores to suggest compatible connections.

#### Event Calendar
1. Frontend fetches events from backend API with department metadata.
2. FullCalendar renders events with color-coding by department.
3. FilterBox component allows users to toggle department visibility.
4. Calendar synchronizes with backend when users create/edit events.

#### Bulletin Boards
1. **Notice Board**: Admin-only posting, public viewing.
2. **Community Board**: Open posting for all authenticated users.
3. BulletinEntry components handle individual post rendering.
4. CreateModal provides unified interface for post creation/editing.

#### Language Toggle
1. LanguageToggle component triggers i18next language change.
2. All static UI text updates immediately via translation keys.
3. Dynamic content (posts, announcements) can be translated via backend ChatGPT API integration.

## API Integration

The frontend communicates with the Django backend through dedicated API modules:

```javascript
// Example: Fetching community posts
import { getCommunityPosts } from './api/communityApi';

const posts = await getCommunityPosts();
```

### API Endpoints
- `buddyApi.js` - Buddy recommendations and connections
    - `/buddy/`
    - `/buddy/recommend/`
    - `/buddy/request/`
    - `/buddy/sent/`
- `communityApi.js` - Community board CRUD operations
    - `/posts/community/`
- `noticeApi.js` - Notice board read operations
    - `/posts/notice/`
- `postApi.js` - General post management
    - `/posts/notice/create/`
    - `/posts/community/create/`
- `loginApi.js` - User authentication
    - `/auth/login/`
- `signupApi.js` - User registration
    - `/auth/email-verify/`
    - `/auth/email-verify/confirm/`
    - `/signup/userinfo/`
    - `/signup/buddyinfo/`

**Note**: Backend-related details regarding the endpoints are implemented in a separate Django repository.

## Known Limitations

This project has several incomplete features that were not finalized before submission:

### Security & Authentication
- JWT token implementation was started but left unfinished.
- Token management utilities in `src/utils/` are commented out.
- Current authentication lacks proper token refresh mechanisms.

### Session Management
- No session or cookie management implemented.
- User sessions are not persisted across browser refreshes.
- Session state relies on React Context without persistence.

### Data Persistence
- Frontend does not implement local data caching.
- Data persistence handled primarily on backend (PostgreSQL).
- No offline support or service workers.

### Feature Completion
- **Chat System**: UI implemented but backend integration incomplete.
- **Buddy Matching**: Algorithm exists on backend but frontend integration partial.
- **Content Translation**: ChatGPT API translation available on backend but not fully integrated in frontend UI.

## License

This project was created as an academic capstone project at Dankook University. Please contact the repository owner for licensing information.

## Acknowledgements

- Developed as a capstone project for Global Software Convergence program at Dankook University.
- Backend developed by team members (separate repository).
- Special thanks to course instructors and team members who contributed to the backend implementation.

---

**Note**: As mentioned previously, this repository only contains the **frontend** implementation. The backend (Python + Django) is maintained in a separate repository and is required for full functionality.
