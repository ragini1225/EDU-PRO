export const courses = [
  {
    id: '1',
    title: 'Full Stack Web Development Masterclass',
    description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world projects and get job-ready skills with hands-on coding experience.',
    instructor: 'John Smith',
    duration: '12 weeks',
    level: 'Intermediate',
    price: 299,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsEnrolled: 15420,
    certificate: true,
    category: 'Web Development',
    hasLiveSession: true,
    nextLiveSession: '2024-01-15T18:00:00Z',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'CSS', 'HTML5', 'REST APIs'],
    modules: [
      {
        id: 'm1',
        title: 'Frontend Development with React',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to React',
            type: 'video',
            duration: '45 min',
            content: 'Learn the fundamentals of React including components, props, and state management.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          },
          {
            id: 'l2',
            title: 'React Hooks Deep Dive',
            type: 'video',
            duration: '60 min',
            content: 'Master useState, useEffect, and custom hooks for powerful React applications.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          },
          {
            id: 'l3',
            title: 'Live Q&A Session - React Fundamentals',
            type: 'live',
            duration: '90 min',
            content: 'Interactive live session covering React fundamentals with Q&A.'
          }
        ]
      },
      {
        id: 'm2',
        title: 'Backend Development with Node.js',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l4',
            title: 'Node.js Fundamentals',
            type: 'video',
            duration: '50 min',
            content: 'Understanding Node.js runtime, modules, and the event loop.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          },
          {
            id: 'l5',
            title: 'Express.js Framework',
            type: 'video',
            duration: '55 min',
            content: 'Building RESTful APIs with Express.js and middleware.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Data Science with Python & AI',
    description: 'Complete data science journey from basics to advanced machine learning. Learn Python, pandas, scikit-learn, and build AI models.',
    instructor: 'Dr. Sarah Johnson',
    duration: '16 weeks',
    level: 'Beginner',
    price: 399,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.9,
    studentsEnrolled: 12840,
    certificate: true,
    category: 'Data Science',
    hasLiveSession: true,
    nextLiveSession: '2024-01-16T19:00:00Z',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter', 'TensorFlow', 'Machine Learning'],
    modules: [
      {
        id: 'm4',
        title: 'Python Fundamentals',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l8',
            title: 'Python Basics',
            type: 'video',
            duration: '60 min',
            content: 'Variables, data types, control structures, and functions in Python.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Digital Marketing & Social Media Mastery',
    description: 'Complete digital marketing course covering SEO, social media, PPC, content marketing, and analytics. Become a certified digital marketer.',
    instructor: 'Mike Rodriguez',
    duration: '10 weeks',
    level: 'Intermediate',
    price: 249,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.7,
    studentsEnrolled: 8960,
    certificate: true,
    category: 'Digital Marketing',
    hasLiveSession: true,
    nextLiveSession: '2024-01-17T17:00:00Z',
    skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Content Marketing', 'Analytics', 'Social Media', 'Email Marketing'],
    modules: [
      {
        id: 'm6',
        title: 'SEO Fundamentals',
        duration: '3 weeks',
        lessons: [
          {
            id: 'l10',
            title: 'Keyword Research',
            type: 'video',
            duration: '45 min',
            content: 'How to find and analyze profitable keywords for your business.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'UI/UX Design Bootcamp',
    description: 'Learn user interface and user experience design from scratch. Master Figma, design thinking, prototyping, and create stunning designs.',
    instructor: 'Emma Chen',
    duration: '14 weeks',
    level: 'Beginner',
    price: 349,
    originalPrice: 549,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsEnrolled: 11230,
    certificate: true,
    category: 'Design',
    hasLiveSession: true,
    nextLiveSession: '2024-01-18T16:00:00Z',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User  Research', 'Design Systems', 'Wireframing', 'User  Testing'],
    modules: [
      {
        id: 'm7',
        title: 'Design Fundamentals',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l11',
            title: 'Color Theory',
            type: 'video',
            duration: '40 min',
            content: 'Understanding color psychology and creating effective color palettes.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Essential cybersecurity skills for modern professionals. Learn ethical hacking, network security, penetration testing, and risk management.',
    instructor: 'David Wilson',
    duration: '18 weeks',
    level: 'Advanced',
    price: 449,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.9,
    studentsEnrolled: 7580,
    certificate: true,
    category: 'Cybersecurity',
    hasLiveSession: true,
    nextLiveSession: '2024-01-19T20:00:00Z',
    skills: ['Ethical Hacking', 'Network Security', 'Risk Assessment', 'Penetration Testing', 'Cryptography', 'Incident Response'],
    modules: [
      {
        id: 'm8',
        title: 'Security Fundamentals',
        duration: '5 weeks',
        lessons: [
          {
            id: 'l12',
            title: 'Introduction to Cybersecurity',
            type: 'video',
            duration: '55 min',
            content: 'Overview of cybersecurity landscape and common threats.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    description: 'Build beautiful cross-platform mobile apps with Flutter and Dart. Deploy to both iOS and Android from one codebase.',
    instructor: 'Alex Kumar',
    duration: '15 weeks',
    level: 'Intermediate',
    price: 379,
    originalPrice: 579,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.7,
    studentsEnrolled: 9420,
    certificate: true,
    category: 'Mobile Development',
    hasLiveSession: true,
    nextLiveSession: '2024-01-20T18:30:00Z',
    skills: ['Flutter', 'Dart', 'Firebase', 'State Management', 'API Integration', 'Mobile UI/UX'],
    modules: [
      {
        id: 'm9',
        title: 'Flutter Basics',
        duration: '5 weeks',
        lessons: [
          {
            id: 'l13',
            title: 'Dart Programming',
            type: 'video',
            duration: '50 min',
            content: 'Master Dart language fundamentals for Flutter development.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'Blockchain & Cryptocurrency Development',
    description: 'Learn blockchain technology, smart contracts, DeFi, and cryptocurrency development. Build decentralized applications from scratch.',
    instructor: 'Robert Chen',
    duration: '20 weeks',
    level: 'Advanced',
    price: 599,
    originalPrice: 899,
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.9,
    studentsEnrolled: 5240,
    certificate: true,
    category: 'Blockchain',
    hasLiveSession: true,
    nextLiveSession: '2024-01-21T19:00:00Z',
    skills: ['Solidity', 'Web3', 'Smart Contracts', 'DeFi', 'NFTs', 'Ethereum', 'Bitcoin'],
    modules: [
      {
        id: 'm10',
        title: 'Blockchain Fundamentals',
        duration: '6 weeks',
        lessons: [
          {
            id: 'l14',
            title: 'Introduction to Blockchain',
            type: 'video',
            duration: '65 min',
            content: 'Understanding blockchain technology and its applications.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Cloud Computing with AWS & Azure',
    description: 'Master cloud computing with hands-on experience in AWS and Azure. Learn DevOps, containerization, and cloud architecture.',
    instructor: 'Lisa Thompson',
    duration: '16 weeks',
    level: 'Intermediate',
    price: 429,
    originalPrice: 649,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsEnrolled: 8750,
    certificate: true,
    category: 'Cloud Computing',
    hasLiveSession: true,
    nextLiveSession: '2024-01-22T17:30:00Z',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps', 'CI/CD', 'Terraform'],
    modules: [
      {
        id: 'm11',
        title: 'Cloud Fundamentals',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l15',
            title: 'Introduction to Cloud Computing',
            type: 'video',
            duration: '50 min',
            content: 'Understanding cloud computing concepts and service models.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  },
  {
    id: '9',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Comprehensive AI/ML course covering neural networks, deep learning, computer vision, and natural language processing.',
    instructor: 'Dr. James Park',
    duration: '22 weeks',
    level: 'Advanced',
    price: 699,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.9,
    studentsEnrolled: 6890,
    certificate: true,
    category: 'Artificial Intelligence',
    hasLiveSession: true,
    nextLiveSession: '2024-01-23T20:00:00Z',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP'],
    modules: [
      {
        id: 'm12',
        title: 'AI Fundamentals',
        duration: '6 weeks',
        lessons: [
          {
            id: 'l16',
            title: 'Introduction to AI',
            type: 'video',
            duration: '70 min',
            content: 'Understanding artificial intelligence and its applications.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  }, 
  
  {
    id: '10',
    title: 'Game Development with Unity',
    description: 'Create amazing games with Unity engine. Learn C# programming, game physics, 2D/3D game development, and publish to multiple platforms.',
    instructor: 'Mark Johnson',
    duration: '18 weeks',
    level: 'Intermediate',
    price: 459,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'dQw4w9WgXcQ',
    rating: 4.8,
    studentsEnrolled: 7320,
    certificate: true,
    category: 'Game Development',
    hasLiveSession: true,
    nextLiveSession: '2024-01-24T18:00:00Z',
    skills: ['Unity', 'C#', 'Game Physics', '2D/3D Graphics', 'Animation', 'Game Design'],
    modules: [
      {
        id: 'm13',
        title: 'Unity Basics',
        duration: '5 weeks',
        lessons: [
          {
            id: 'l17',
            title: 'Getting Started with Unity',
            type: 'video',
            duration: '55 min',
            content: 'Introduction to Unity interface and basic game development concepts.',
            youtubeVideoId: 'dQw4w9WgXcQ'
          }
        ]
      }
    ]
  }
];
