import domesticWiringImg from '@assets/stock_images/domestic_wiring.jpg';
import commercialWiringImg from '@assets/stock_images/commercial_wiring_v2.png';
import electricalMaintenanceImg from '@assets/stock_images/electrical_maintenance.jpg';
import cctvCameraImg from '@assets/stock_images/cctv_camera.jpg';
import electricFencingImg from '@assets/stock_images/electric_fencing.jpg';
import gateAutomationImg from '@assets/stock_images/gate_automation_ghana.png';
import threePhaseImg from '@assets/stock_images/three_phase_v2.png';
import singlePhaseImg from '@assets/stock_images/single_phase_v2.png';

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
  borderColor: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Domestic Wiring',
    description: 'Professional electrical wiring for apartments, estates, bungalows, homes, flats, cottages, kiosks and all residential properties.',
    image: domesticWiringImg,
    gradient: 'from-blue-600 to-blue-400',
    borderColor: '#f9ab00',
  },
  {
    id: 2,
    title: 'Commercial Wiring',
    description: 'Complete electrical wiring solutions for schools, hospitals, churches, shopping malls, banks, hotels, markets and all commercial facilities.',
    image: commercialWiringImg,
    gradient: 'from-blue-700 to-cyan-500',
    borderColor: '#4285f4',
  },
  {
    id: 3,
    title: 'Electrical Fault & Maintenance',
    description: 'Expert diagnosis and repair of electrical faults, plus scheduled maintenance to keep your systems running safely and efficiently.',
    image: electricalMaintenanceImg,
    gradient: 'from-orange-500 to-orange-400',
    borderColor: '#ea4335',
  },
  {
    id: 4,
    title: 'CCTV Camera Installation',
    description: 'Comprehensive CCTV security camera installation for homes, businesses and institutions — full surveillance solutions tailored to your needs.',
    image: cctvCameraImg,
    gradient: 'from-cyan-500 to-cyan-400',
    borderColor: '#4285f4',
  },
  {
    id: 5,
    title: 'Electric Fencing',
    description: 'High-security electric fence installation for residential compounds, commercial premises, and industrial facilities.',
    image: electricFencingImg,
    gradient: 'from-yellow-500 to-orange-500',
    borderColor: '#f9ab00',
  },
  {
    id: 6,
    title: 'Gate Automation System',
    description: 'Motorized gate and access control system installation — sliding gates, swing gates, and barrier systems with remote and smart access.',
    image: gateAutomationImg,
    gradient: 'from-purple-600 to-blue-500',
    borderColor: '#0f9d58',
  },
  {
    id: 7,
    title: '3-Phase Changeover Installation',
    description: 'Professional installation of 3-phase changeover systems for seamless switching between utility power and backup power sources.',
    image: threePhaseImg,
    gradient: 'from-blue-600 to-indigo-600',
    borderColor: '#4285f4',
  },
  {
    id: 8,
    title: 'Phase Failure Installation',
    description: 'Installation of phase failure relays and protection devices to safeguard your appliances and equipment from voltage imbalance and phase loss damage.',
    image: singlePhaseImg,
    gradient: 'from-red-500 to-orange-500',
    borderColor: '#ea4335',
  },
];
