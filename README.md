# AquaWatch Delhi - Water-Logging Hotspots Mapping System

## 🌊 Project Overview

**AquaWatch Delhi** is a data-driven, GIS-enabled web platform designed to detect, map, and predict water-logging hotspots across Delhi. The system supports proactive response by authorities and enables coordination between citizens and civic agencies during monsoon seasons.

## 🎯 Key Features

### 📊 Dashboard
- Real-time statistics on water-logging hotspots
- Active alerts and critical zones monitoring
- System status overview

### 🗺️ Interactive Hotspot Map
- GIS-enabled mapping of water-logging zones
- Severity-based color coding (Critical, High, Medium, Low)
- Ward and zone-level filtering
- Water level indicators
- Search and navigation

### 📝 Incident Reports
- Citizen and official reporting system
- Status tracking (Pending, Investigating, Resolved)
- Severity classification
- Image upload support

### 📈 Analytics & Predictions (Admin)
- AI-powered predictive analysis
- Rainfall trend visualization
- Response time analysis
- Weather forecast integration

### ⚙️ Admin Panel
- User management
- Zone and ward configuration
- System settings
- Alert system configuration

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Query
- **Icons**: Lucide React

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8080/api
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with navigation
│   └── ui/                 # Reusable UI components
├── pages/
│   ├── Home.tsx           # Dashboard
│   ├── HotspotMap.tsx     # Interactive map
│   ├── Reports.tsx        # Incident reporting
│   ├── Analytics.tsx      # Analytics (Admin)
│   ├── Admin.tsx          # Admin panel
│   └── Auth.tsx           # Authentication
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and API
└── App.tsx               # Main app component
```

## 🎨 Design System

- Modern glassmorphism effects
- Gradient mesh backgrounds
- Smooth animations
- Fully responsive
- Purple/Blue color scheme

## 👥 User Roles

- **User**: View dashboard, map, and submit reports
- **Admin**: Full access including analytics and system management

## 🔧 Next Steps

1. **Backend Integration**: Connect to API endpoints
2. **Map Service**: Integrate Google Maps/Leaflet/Mapbox
3. **Weather API**: Connect to weather data provider
4. **Charts**: Add data visualization with Recharts
5. **Real-time Updates**: Implement WebSocket for live data

## 📄 License

MIT License

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

**Built for the citizens of Delhi** 🇮🇳
