export interface SafetyProtocol {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const safetyProtocols: SafetyProtocol[] = [
  {
    id: 1,
    title: 'Ghana Electrical Code Compliance',
    description: 'All installations meet Ghana\'s national electrical standards and regulations.',
    icon: 'clipboard-check',
  },
  {
    id: 2,
    title: 'Proper PPE Usage',
    description: 'Full personal protective equipment on every job for the safety of our team and your property.',
    icon: 'hard-hat',
  },
  {
    id: 3,
    title: 'Site Safety Inspection',
    description: 'Pre and post-work safety checks on every project to ensure the highest standards.',
    icon: 'search',
  },
  {
    id: 4,
    title: 'Lockout/Tagout Procedures',
    description: 'Strict de-energization protocols before all maintenance work to prevent accidents.',
    icon: 'lock',
  },
  {
    id: 5,
    title: 'Continuous Training',
    description: 'Regular technical and safety certification updates for all team members.',
    icon: 'graduation-cap',
  },
];
