import Navigation from '../Navigation';
import { useState } from 'react';

export default function NavigationExample() {
  const [activeSection, setActiveSection] = useState("home");
  
  return (
    <Navigation 
      activeSection={activeSection} 
      onNavigate={setActiveSection}
    />
  );
}
