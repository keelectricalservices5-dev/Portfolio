export interface Project {
  id: number;
  title: string;
  service: string;
  description: string;
  image: string;
  tags: string[];
  location: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'East Legon Residential Estate Wiring',
    service: 'Domestic Wiring',
    description: 'Complete electrical wiring installation for a 12-unit residential estate in East Legon, including distribution boards, lighting, and power outlets.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop',
    tags: ['Domestic Wiring', 'Residential'],
    location: 'East Legon, Accra',
  },
  {
    id: 2,
    title: 'Tema International School Rewiring',
    service: 'Commercial Wiring',
    description: 'Full electrical rewiring project for a major international school in Tema, covering classrooms, laboratories, and administrative blocks.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    tags: ['Commercial Wiring', 'Educational'],
    location: 'Tema, Greater Accra',
  },
  {
    id: 3,
    title: 'Osu Oxford Street Commercial Fault Repair',
    service: 'Electrical Fault & Maintenance',
    description: 'Emergency fault diagnosis and repair for a commercial complex on Oxford Street, restoring power to 8 retail units within hours.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
    tags: ['Fault Repair', 'Commercial'],
    location: 'Osu, Accra',
  },
  {
    id: 4,
    title: 'Airport Residential CCTV Network',
    service: 'CCTV Camera Installation',
    description: 'Installation of a 32-camera CCTV surveillance system for a gated residential community near Kotoka International Airport.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop',
    tags: ['CCTV', 'Residential Security'],
    location: 'Airport Residential, Accra',
  },
  {
    id: 5,
    title: 'Trasacco Valley Compound Perimeter Fencing',
    service: 'Electric Fencing',
    description: 'High-security electric perimeter fencing for a luxury compound in Trasacco Valley with integrated alarm and monitoring system.',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&h=600&fit=crop',
    tags: ['Electric Fencing', 'Security'],
    location: 'Trasacco Valley, Accra',
  },
  {
    id: 6,
    title: 'Spintex Road Corporate Office Gate System',
    service: 'Gate Automation System',
    description: 'Automated sliding gate installation with remote access control and intercom system for a corporate office complex on Spintex Road.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    tags: ['Gate Automation', 'Commercial'],
    location: 'Spintex Road, Accra',
  },
  {
    id: 7,
    title: 'Kumasi Industrial Park 3-Phase System',
    service: '3-Phase Changeover Installation',
    description: 'Installation of automatic 3-phase changeover system for an industrial facility, enabling seamless transition between mains and generator power.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=600&fit=crop',
    tags: ['3-Phase', 'Industrial'],
    location: 'Kumasi, Ashanti Region',
  },
  {
    id: 8,
    title: 'Cantonments Apartment Block Phase Protection',
    service: 'Single Phase Failure Installation',
    description: 'Phase failure relay installation across a 24-unit apartment block to protect household appliances from voltage irregularities and phase loss.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop',
    tags: ['Phase Protection', 'Residential'],
    location: 'Cantonments, Accra',
  },
];
