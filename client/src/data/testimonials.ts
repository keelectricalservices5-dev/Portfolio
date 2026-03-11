export interface Testimonial {
  id: number;
  text: string;
  name: string;
  type: string;
  location: string;
  service: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "K.E Electrical Services did an incredible job wiring our new home in East Legon. Their team was professional, punctual, and left everything spotless. The wiring has been flawless since installation — we couldn't be happier with the quality of work.",
    name: 'Kwame Asante-Mensah',
    type: 'Homeowner',
    location: 'East Legon, Accra',
    service: 'Domestic Wiring',
    rating: 5,
    initials: 'KA',
  },
  {
    id: 2,
    text: "We hired K.E Electrical for the complete electrical installation of our new school campus. They handled the project with remarkable expertise — from classrooms to the IT lab. Completed on schedule and within budget. Highly recommended for commercial projects.",
    name: 'Abena Osei-Bonsu',
    type: 'School Administrator',
    location: 'Tema, Greater Accra',
    service: 'Commercial Wiring',
    rating: 5,
    initials: 'AO',
  },
  {
    id: 3,
    text: "After a break-in attempt, we decided to upgrade our security. K.E Electrical installed a comprehensive 16-camera CCTV system with night vision and remote monitoring. The clarity is excellent and the installation was clean and professional.",
    name: 'Yaw Boateng',
    type: 'Business Owner',
    location: 'Osu, Accra',
    service: 'CCTV Camera Installation',
    rating: 5,
    initials: 'YB',
  },
  {
    id: 4,
    text: "K.E Electrical installed electric fencing around our compound and it has given us tremendous peace of mind. The system works perfectly and they even integrated it with our existing alarm system. Very thorough and professional team.",
    name: 'Efua Ansah',
    type: 'Homeowner',
    location: 'Trasacco Valley, Accra',
    service: 'Electric Fencing',
    rating: 5,
    initials: 'EA',
  },
  {
    id: 5,
    text: "The automated gate system K.E Electrical installed at our office has transformed our access control. Smooth operation, remote access via phone, and the backup battery means it works even during power outages. Outstanding service from start to finish.",
    name: 'Kofi Darkwa',
    type: 'Facility Manager',
    location: 'Spintex Road, Accra',
    service: 'Gate Automation',
    rating: 5,
    initials: 'KD',
  },
];
