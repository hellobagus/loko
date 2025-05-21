import { ServiceType } from '../types';

export const services: ServiceType[] = [
  {
    id: 'design',
    name: 'LOKO DESAIN',
    icon: 'palette',
    description: 'Professional graphic and 3D design services to bring your ideas to life with creativity and precision.',
    color: 'design',
    features: [
      '2D Graphic Design',
      '3D Modeling and Rendering',
      'Brand Identity Design',
      'Packaging Design',
      'Print Design',
      'UI/UX Design'
    ],
    forms: [
      {
        id: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Your email address',
        required: true
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Your phone number'
      },
      {
        id: 'designType',
        label: 'Design Type',
        type: 'select',
        options: ['2D Design', '3D Design', 'Brand Identity', 'Packaging', 'Print Design', 'UI/UX Design', 'Other'],
        required: true
      },
      {
        id: 'description',
        label: 'Project Description',
        type: 'textarea',
        placeholder: 'Describe your project requirements in detail',
        required: true
      },
      {
        id: 'budget',
        label: 'Budget Range',
        type: 'select',
        options: ['Less than $500', '$500-$1,000', '$1,000-$2,500', '$2,500-$5,000', '$5,000+'],
      },
      {
        id: 'deadline',
        label: 'Project Deadline',
        type: 'date',
      }
    ]
  },
  {
    id: 'jepret',
    name: 'LOKO JEPRET',
    icon: 'camera',
    description: 'Capture your special moments with our professional photography services for events, products, and more.',
    color: 'jepret',
    features: [
      'Event Photography',
      'Product Photography',
      'Corporate Portraits',
      'Architectural Photography',
      'Food Photography',
      'Lifestyle Photography'
    ],
    forms: [
      {
        id: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Your email address',
        required: true
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Your phone number'
      },
      {
        id: 'photoType',
        label: 'Photography Type',
        type: 'select',
        options: ['Event', 'Product', 'Corporate Portrait', 'Architecture', 'Food', 'Lifestyle', 'Other'],
        required: true
      },
      {
        id: 'shootDate',
        label: 'Preferred Shoot Date',
        type: 'date',
      },
      {
        id: 'location',
        label: 'Shoot Location',
        type: 'text',
        placeholder: 'Where will the photography take place?'
      },
      {
        id: 'description',
        label: 'Project Details',
        type: 'textarea',
        placeholder: 'Describe your photography needs in detail',
        required: true
      },
      {
        id: 'budget',
        label: 'Budget Range',
        type: 'select',
        options: ['Less than $500', '$500-$1,000', '$1,000-$2,500', '$2,500+'],
      }
    ]
  },
  {
    id: 'webApp',
    name: 'LOKO WEB & APP',
    icon: 'globe',
    description: 'Custom website and application development services to establish your digital presence and streamline operations.',
    color: 'web',
    features: [
      'Website Development',
      'Mobile App Development',
      'Web Applications',
      'E-commerce Solutions',
      'CMS Integration',
      'API Development'
    ],
    forms: [
      {
        id: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Your email address',
        required: true
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Your phone number'
      },
      {
        id: 'projectType',
        label: 'Project Type',
        type: 'select',
        options: ['Website', 'Mobile App', 'Web Application', 'E-commerce', 'CMS', 'API', 'Other'],
        required: true
      },
      {
        id: 'description',
        label: 'Project Requirements',
        type: 'textarea',
        placeholder: 'Describe your project requirements in detail',
        required: true
      },
      {
        id: 'features',
        label: 'Key Features',
        type: 'textarea',
        placeholder: 'List the main features you would like to include'
      },
      {
        id: 'timeline',
        label: 'Expected Timeline',
        type: 'select',
        options: ['1-2 months', '3-4 months', '5-6 months', '6+ months']
      },
      {
        id: 'budget',
        label: 'Budget Range',
        type: 'select',
        options: ['$1,000-$5,000', '$5,000-$10,000', '$10,000-$25,000', '$25,000+']
      }
    ]
  },
  {
    id: 'marketing',
    name: 'LOKO DIGITAL MARKETING',
    icon: 'line-chart',
    description: 'Strategic digital marketing services to increase your brand visibility and drive customer engagement.',
    color: 'marketing',
    features: [
      'Social Media Marketing',
      'SEO Optimization',
      'Content Marketing',
      'Email Marketing',
      'PPC Advertising',
      'Analytics & Reporting'
    ],
    forms: [
      {
        id: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Your email address',
        required: true
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Your phone number'
      },
      {
        id: 'company',
        label: 'Company Name',
        type: 'text',
        placeholder: 'Your company name',
        required: true
      },
      {
        id: 'website',
        label: 'Website',
        type: 'url',
        placeholder: 'Your website URL'
      },
      {
        id: 'marketingType',
        label: 'Marketing Services',
        type: 'select',
        options: ['Social Media Marketing', 'SEO Optimization', 'Content Marketing', 'Email Marketing', 'PPC Advertising', 'Comprehensive Digital Marketing', 'Other'],
        required: true
      },
      {
        id: 'goals',
        label: 'Marketing Goals',
        type: 'textarea',
        placeholder: 'Describe your marketing goals',
        required: true
      },
      {
        id: 'targetAudience',
        label: 'Target Audience',
        type: 'textarea',
        placeholder: 'Describe your target audience'
      },
      {
        id: 'budget',
        label: 'Monthly Budget',
        type: 'select',
        options: ['$500-$1,000', '$1,000-$3,000', '$3,000-$5,000', '$5,000+']
      }
    ]
  },
  {
    id: 'konstruksi',
    name: 'LOKO KONSTRUKSI',
    icon: 'building',
    description: 'Professional construction services for both residential and commercial projects with attention to detail and quality.',
    color: 'konstruksi',
    features: [
      'Residential Construction',
      'Commercial Construction',
      'Renovation Services',
      'Interior Construction',
      'Project Management',
      'Architectural Services'
    ],
    forms: [
      {
        id: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Your email address',
        required: true
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Your phone number',
        required: true
      },
      {
        id: 'projectType',
        label: 'Project Type',
        type: 'select',
        options: ['Residential Construction', 'Commercial Construction', 'Renovation', 'Interior Construction', 'Other'],
        required: true
      },
      {
        id: 'location',
        label: 'Project Location',
        type: 'text',
        placeholder: 'Where is your project located?',
        required: true
      },
      {
        id: 'description',
        label: 'Project Description',
        type: 'textarea',
        placeholder: 'Describe your construction project in detail',
        required: true
      },
      {
        id: 'size',
        label: 'Project Size (sq ft/sq m)',
        type: 'text',
        placeholder: 'Approximate size of your project'
      },
      {
        id: 'timeline',
        label: 'Expected Timeline',
        type: 'select',
        options: ['1-3 months', '3-6 months', '6-12 months', '12+ months']
      },
      {
        id: 'budget',
        label: 'Budget Range',
        type: 'select',
        options: ['$10,000-$50,000', '$50,000-$100,000', '$100,000-$500,000', '$500,000+'],
      }
    ]
  },
  {
    id: 'event',
    name: 'LOKO EVENT & GATHERING',
    icon: 'party-popper',
    description: 'Comprehensive event planning and management services for corporate gatherings, celebrations, and special occasions.',
    color: 'event',
    features: [
      'Corporate Events',
      'Private Celebrations',
      'Conference Planning',
      'Team Building Activities',
      'Product Launches',
      'Award Ceremonies'
    ],
    forms: [
      {
        id: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your full name',
        required: true
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Your email address',
        required: true
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Your phone number',
        required: true
      },
      {
        id: 'company',
        label: 'Company/Organization',
        type: 'text',
        placeholder: 'Your company or organization name'
      },
      {
        id: 'eventType',
        label: 'Event Type',
        type: 'select',
        options: ['Corporate Event', 'Private Celebration', 'Conference', 'Team Building', 'Product Launch', 'Award Ceremony', 'Other'],
        required: true
      },
      {
        id: 'date',
        label: 'Event Date',
        type: 'date',
        required: true
      },
      {
        id: 'location',
        label: 'Event Location',
        type: 'text',
        placeholder: 'Where will the event take place?'
      },
      {
        id: 'guestCount',
        label: 'Estimated Guest Count',
        type: 'text',
        placeholder: 'How many people will attend?'
      },
      {
        id: 'description',
        label: 'Event Details',
        type: 'textarea',
        placeholder: 'Describe your event requirements in detail',
        required: true
      },
      {
        id: 'budget',
        label: 'Budget Range',
        type: 'select',
        options: ['$1,000-$5,000', '$5,000-$10,000', '$10,000-$25,000', '$25,000+'],
      }
    ]
  }
];