# Pointbreak Weather App

A small frontend application for your next surfing session in Germany. Search your location by city and see the weather forecast tailored to surfing for the next seven days. 

<img width="1511" height="823" alt="Screenshot 2025-08-31 at 15 48 57" src="https://github.com/user-attachments/assets/0db719b7-8316-4319-bb56-0f318755abb8" />
<img width="1511" height="823" alt="Screenshot 2025-08-31 at 15 49 40" src="https://github.com/user-attachments/assets/b6307b4e-e0a3-499c-8831-d1e402469217" />

## Features

- **Location Search**: Search for cities in Germany with autocomplete.
- **7-Day Weather Forecast**: Tailored weather information including temperature, wind, and precipitation.
- **Responsive Design**: Optimized for both desktop and mobile devices


## Possible Improvements: 
- **Tests**: Unit and E2E tests were skipped due to time constraints 
- **Accessibility**: Extend Search Input Aria and keyboard navigation following the [W3C compobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/)
- **Api request handling**: Use a libary, like [TanStack Query](https://tanstack.com/query/latest) for easier request lifecycle handling  
- **Design Optimisations**: Improve branding to better match surfing audience. Enhace readability of white text against the background colour. Add Animations and Transitions. 
- **Search Params**: The URL should contain your search parameter  and populate the input accordingly.  
- **UX**: Replace todays and tomorrows data with "Heute" and "Morgen" for better orientation. Translate wind direction into cardinal directions. Include realtime or hourly forecasts for more precise planning. 

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Icons**: Lucide React
- **API**: Open-Meteo (Geocoding & Weather)
- **Fonts**: Google Fonts (Merriweather)

## Getting Started

### Prerequisites

- Node.js (version 21.1 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marlenegoed/pointbreak
cd pointbreak
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

This application uses the [Open-Meteo API](https://open-meteo.com/) for:

- **Geocoding API**: Location search and coordinates
- **Weather API**: 7-day weather forecasts

No API key required - the service is free and open source.

