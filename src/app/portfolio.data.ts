export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  year: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  color: string;
  subtitle?: string;
}

export interface Recommendation {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface Solution {
  label: string;
  icon: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    bio: string;
    detailedBio: string;
    email: string;
    location: string;
    phone: string;
    socials: { platform: string; url: string; icon: string }[];
    stats: { label: string; value: string }[];
  };
  solutions: Solution[];
  clients: Client[];
  projects: Project[];
  resume: {
    experience: Experience[];
    education: Education[];
    skills: { category: string; items: SkillItem[] }[];
    aiTools: SkillItem[];
    strengths: string[];
    recommendations: Recommendation[];
  };
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'nikhil Rageer',
    role: 'MEAN Stack Developer',
    bio: 'MEAN Stack Developer with 3 years of experience building scalable enterprise ERP applications.',
    detailedBio: 'Results-driven Full Stack Developer and Project Enthusiast with 3+ years of experience in designing scalable enterprise applications using Angular, Node.js, Express, and MongoDB. Expertise in RESTful API development, system design, with a strong focus on performance optimization, scalability, and high availability systems. Proven track record of delivering single-page applications (SPA) and complex ERP systems.',
    email: 'nikhilrageer666@gmail.com',
    location: 'Hyderabad, India',
    phone: '+91 7207200148',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'link' },
      { platform: 'GitHub', url: 'https://github.com', icon: 'code' },
      { platform: 'Website', url: '#', icon: 'public' },
    ],
    stats: [
      { label: 'YEARS OF EXPERIENCE', value: '3+' },
      { label: 'PROJECTS COMPLETED', value: '15+' },
      { label: 'HAPPY CLIENTS', value: '10+' }
    ]
  },
  solutions: [
    { label: 'Web Dev', icon: 'desktop_windows' },
    { label: 'UI/UX Design', icon: 'dashboard_customize' },
    { label: 'Web App', icon: 'web_asset' },
    { label: 'Product Design', icon: 'edit_note' },
    { label: 'SEO', icon: 'manage_search' },
    { label: 'Branding', icon: 'palette' },
    { label: 'Analytics', icon: 'insights' },
    { label: 'e-Commerce', icon: 'shopping_cart' },
  ],
  clients: [
    { name: 'Bizlogika', logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
    { name: 'Dynamic Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft.svg' },
    { name: 'Ashman', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-2.svg' },
    { name: 'Rex', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  ],
  projects: [
    {
      id: 'bizlogika',
      title: 'Bizlogika ERP',
      description: 'Core ERP modules including Sales, Purchase, Finance, and Inventory management.',
      category: 'Enterprise Solution',
      image: 'https://picsum.photos/seed/bizlogika/1200/800',
      tags: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      id: 'supplier-portal',
      title: 'Supplier Portal',
      description: 'Integrated portal for managing Purchase Orders, Invoices, and Payments with real-time sync.',
      category: 'Web Portal',
      image: 'https://picsum.photos/seed/supplier/1200/800',
      tags: ['AngularJS', 'Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      id: 'hrms-payroll',
      title: 'HRMS & Payroll',
      description: 'Employee Self-Service (ESS) for leave requests, loan applications, and payroll processing.',
      category: 'Business Application',
      image: 'https://picsum.photos/seed/hrms/1200/800',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    }
  ],
  resume: {
    experience: [
      {
        company: 'A2K IT Solutions',
        role: 'MEAN Stack Developer',
        period: 'Oct 2023 - Present',
        description: [
          'Developed and maintained Bizlogika ERP modules: Sales, Purchase, Finance, Inventory, and HRMS.',
          'Built scalable REST APIs using Node.js and Express.js for complex business transactions.',
          'Implemented secure authentication using JWT and Role-Based Access Control (RBAC).',
          'Optimized MongoDB queries using aggregation pipelines for performance improvement.',
          'Automated manual business workflows, improving efficiency by 40%.'
        ]
      },
      {
        company: 'A2K IT Solutions',
        role: 'MEAN Stack Developer Intern',
        period: 'Apr 2023 - Sep 2023',
        description: [
          'Assisted in development of ERP modules including HRMS and reporting features.',
          'Supported backend API development, debugging, and feature implementation.',
          'Worked with Angular components and gained hands-on experience in MEAN stack development.'
        ]
      }
    ],
    education: [
      {
        institution: 'Kamala Institute of Technology & Science (JNTUH)',
        degree: 'B. Tech – Computer Science and Engineering',
        period: 'JNTU',
        year: '2022'
      },
      {
        institution: 'Sri Gayatri Junior College',
        degree: 'Intermediate (MPC)',
        period: 'TSBIE',
        year: '2018'
      },
      {
        institution: 'Zilla Parishad High School',
        degree: 'SSC',
        period: 'SSC Board',
        year: '2016'
      }
    ],
    skills: [
      {
        category: 'Tech & Dev Stacks',
        items: [
          { name: 'Angular', icon: 'html', color: 'icon-box-red', subtitle: 'Frontend' },
          { name: 'Node.js', icon: 'code', color: 'icon-box-green', subtitle: 'Backend' },
          { name: 'MongoDB', icon: 'storage', color: 'icon-box-green', subtitle: 'Database' },
          { name: 'SQL', icon: 'dns', color: 'icon-box-cyan', subtitle: 'Database' },
          { name: 'Git', icon: 'history', color: 'icon-box-orange', subtitle: 'Version Control' },
          { name: 'Redis', icon: 'speed', color: 'icon-box-red', subtitle: 'Caching' },
          { name: 'Microservices', icon: 'hub', color: 'icon-box-purple', subtitle: 'Architecture' },
          { name: 'HTML', icon: 'code', color: 'icon-box-orange', subtitle: 'Frontend' },
          { name: 'CSS', icon: 'style', color: 'icon-box-blue', subtitle: 'Frontend' },
          { name: 'Bootstrap', icon: 'grid_view', color: 'icon-box-purple', subtitle: 'Frontend' },
          { name: 'TypeScript', icon: 'terminal', color: 'icon-box-orange', subtitle: 'Language' },
          { name: 'JavaScript', icon: 'javascript', color: 'icon-box-green', subtitle: 'Language' },
          { name: 'Express', icon: 'api', color: 'icon-box-blue', subtitle: 'Backend' }
        ]
      }
    ],
    aiTools: [
      { name: 'ChatGPT', icon: 'chat', color: 'icon-box-green', subtitle: 'GPT-4o' },
      { name: 'Gemini', icon: 'auto_awesome', color: 'icon-box-blue', subtitle: 'Gemini 2.0' },
      { name: 'Cursor', icon: 'grid_view', color: 'icon-box-purple', subtitle: 'Composer' },
      { name: 'Claude', icon: 'psychology', color: 'icon-box-orange', subtitle: 'Claude Sonnet' },
      { name: 'Grok', icon: 'blur_on', color: 'icon-box-zinc', subtitle: 'Grok 3' },
      { name: 'Copilot', icon: 'alternate_email', color: 'icon-box-blue', subtitle: 'GPT-4o' },
      { name: 'Perplexity', icon: 'search', color: 'icon-box-blue', subtitle: 'AI Search' }
    ],
    strengths: [
      'Full Stack Development (MEAN)',
      'Enterprise Architecture & System Design',
      'Microservices & API Development',
      'Database Optimization & Tuning',
      'Cross-Platform Mobile Development',
      'Leadership & Project Management'
    ],
    recommendations: [
      {
        name: 'Mahmoud Hassan',
        role: 'Service Manager',
        company: 'Sicuro Security Systems',
        text: 'Nikhil\'s expertise in Angular and Node.js is truly top-notch. He delivered high-quality features in record time.',
        avatar: 'https://i.pravatar.cc/150?u=mahmoud'
      },
      {
        name: 'Naveen Bandari',
        role: 'Engineering Lead',
        company: 'A2K IT Solutions',
        text: 'Nikhil brings clarity and structure to complex projects. His technical skills are matched by his project management abilities.',
        avatar: 'https://i.pravatar.cc/150?u=naveen'
      }
    ]
  }
};

