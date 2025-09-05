# 🅿️ Parkly - Smart Car Parking Slots

A modern, responsive web application for finding, filtering, and booking car parking slots with real-time availability and clear pricing.

## ✨ Features

### 🔍 **Smart Search & Discovery**
- **Location-based search** - Find parking by city, address, or landmark
- **Time-based booking** - Select specific date and time for your parking needs
- **Flexible duration** - Choose from 1 hour, 2 hours, 4 hours, 8 hours, or full day
- **Real-time filtering** - Filter by type: All, Covered, EV Charging, or Valet
- **Smart sorting** - Sort by best match, price, rating, or distance

### ��️ **Interactive Map**
- Visual map display with interactive parking location pins
- Grid-based map layout for easy navigation
- Location markers showing available parking spots

### 📋 **Booking System**
- **Easy reservation** - Book specific parking slots through a clean modal interface
- **User-friendly forms** - Simple collection of name, email, vehicle details, and license plate
- **Local storage** - Booking confirmations saved locally in your browser
- **Instant confirmation** - Immediate feedback and booking confirmation

### �� **Flexible Pricing**
- **Hourly**: $3/hr - Pay as you go, ideal for quick trips
- **Daily**: $15/day - Best value with free cancellation
- **Monthly**: $120/mo - Reserved spot with 24/7 access

## 🚀 How It Works

### Frontend Architecture
- **HTML5** - Semantic structure with accessibility features
- **Vanilla JavaScript** - No frameworks, pure JS for optimal performance
- **CSS3** - Modern styling with custom properties and responsive design
- **Local Storage** - Client-side data persistence

### Key Components

#### 1. **Search Process**
```
User Input → Form Validation → Data Filtering → Results Display
```

#### 2. **Filtering System**
- Chip-based filters for parking types
- Real-time filtering without page refresh
- Multiple sort options (price, rating, distance)

#### 3. **Booking Workflow**
```
Select Spot → Open Modal → Fill Details → Confirm Booking → Save Locally
```

## ️ Technical Details

### File Structure
```
Car Parking Slots/
├── index.html          # Main HTML structure
├── app.js             # JavaScript functionality
├── styles.css         # CSS styling and theming
└── README.md          # Project documentation
```

### Key Features
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Performance** - Lightweight, fast-loading single-page application
- **Responsive Design** - Works seamlessly across all device sizes
- **Theme Support** - Dark/light mode with user preference persistence
- **No Backend Required** - All data stored locally

### Browser Support
- Modern browsers with ES6+ support
- Local Storage API support
- CSS Grid and Flexbox support

## 🎨 Design Features

### Visual Design
- **Modern UI** - Clean, minimalist interface with smooth animations
- **Dark/Light Theme** - Toggle between themes with persistent preferences
- **Responsive Layout** - Mobile-first design that scales to desktop
- **Visual Effects** - Gradients, shadows, and smooth transitions

### Color Scheme
- **Dark Mode**: Deep blues and purples with high contrast
- **Light Mode**: Clean whites and soft grays
- **Brand Colors**: Vibrant blues and purples for accents

##  Usage

### Getting Started
1. Open `index.html` in your web browser
2. Use the search form to find parking spots
3. Filter and sort results as needed
4. Click "Book" on your preferred spot
5. Fill in the booking form and confirm

### Navigation
- **Find Parking** - Main search functionality
- **Map** - Visual location display
- **Pricing** - View available plans
- **FAQ** - Common questions and answers

##  Customization

### Adding New Parking Spots
Edit the `sampleSpots` array in `app.js`:
```javascript
const sampleSpots = [
    { 
        id: 'A12', 
        name: 'Central Plaza Garage', 
        tags: ['covered'], 
        rating: 4.8, 
        distanceKm: 0.4, 
        price: 2.5 
    },
    // Add more spots...
];
```

### Styling Customization
Modify CSS custom properties in `styles.css`:
```css
:root {
    --brand: #5b8cff;
    --brand-2: #7a5bff;
    --bg: #0b0d10;
    /* Customize colors... */
}
```

## 📊 Sample Data

The application includes sample parking spots with:
- Unique identifiers and descriptive names
- Categorization tags (covered, ev, valet)
- Star ratings and distance information
- Hourly pricing
- Map coordinates for visual display

## 🚀 Future Enhancements

- Real-time data integration
- Payment processing
- Backend connectivity
- Mobile app development
- Advanced filtering options
- User accounts and booking history

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ for modern parking solutions**
