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
            youtubeVideoId: 'Ke90Tje7VS0'
          },
          {
            id: 'l2',
            title: 'React Hooks Deep Dive',
            type: 'video',
            duration: '60 min',
            content: 'Master useState, useEffect, and custom hooks for powerful React applications.',
            youtubeVideoId: 'O6P86uwfdR0'
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
            youtubeVideoId: 'TlB_eWDSMt4'
          },
          {
            id: 'l5',
            title: 'Express.js Framework',
            type: 'video',
            duration: '55 min',
            content: 'Building RESTful APIs with Express.js and middleware.',
            youtubeVideoId: 'L72fhGm1tfE'
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
    youtubeVideoId: '_uQrJ0TkZlc',
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
            youtubeVideoId: 'kqtD5dpn9C8'
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
    youtubeVideoId: 'YQHsXMglC9A',
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
            youtubeVideoId: 'hF515-0Tduk'
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
    youtubeVideoId: 'c9Wg6Cb_YlU',
    rating: 4.8,
    studentsEnrolled: 11230,
    certificate: true,
    category: 'Design',
    hasLiveSession: true,
    nextLiveSession: '2024-01-18T16:00:00Z',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing', 'User Testing'],
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
            youtubeVideoId: '_2LLXnUdUIc'
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
    youtubeVideoId: 'U_P23SqJaDc',
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
            youtubeVideoId: 'inWWhr5tnEA'
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
    youtubeVideoId: 'x0uinJvhNxI',
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
            youtubeVideoId: 'Ej_Pcr4uC2Q'
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
    youtubeVideoId: 'M576WGiDBdQ',
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
            youtubeVideoId: 'SSo_EIwHSd4'
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
    youtubeVideoId: '3hLmDS179YE',
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
            youtubeVideoId: 'M988_fsOSWo'
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
    youtubeVideoId: 'aircAruvnKk',
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
            youtubeVideoId: 'ad79nYk2keg'
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
    youtubeVideoId: 'XtQMytORBmM',
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
            youtubeVideoId: 'XtQMytORBmM'
          }
        ]
      }
    ]
  },
  {
    id: '11',
    title: 'DevOps & Automation Mastery',
    description: 'Master DevOps practices, CI/CD pipelines, containerization, and infrastructure automation. Learn Docker, Kubernetes, Jenkins, and more.',
    instructor: 'Carlos Martinez',
    duration: '14 weeks',
    level: 'Advanced',
    price: 389,
    originalPrice: 589,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'Xrgk023l4lI',
    rating: 4.8,
    studentsEnrolled: 6540,
    certificate: true,
    category: 'DevOps',
    hasLiveSession: true,
    nextLiveSession: '2024-01-25T19:30:00Z',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'AWS', 'Terraform', 'Ansible', 'CI/CD'],
    modules: [
      {
        id: 'm14',
        title: 'DevOps Fundamentals',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l18',
            title: 'Introduction to DevOps',
            type: 'video',
            duration: '45 min',
            content: 'Understanding DevOps culture, practices, and tools.',
            youtubeVideoId: 'Xrgk023l4lI'
          }
        ]
      }
    ]
  },
  {
    id: '12',
    title: 'iOS Development with Swift',
    description: 'Build native iOS applications with Swift and SwiftUI. Learn app design, Core Data, networking, and publish to the App Store.',
    instructor: 'Jennifer Lee',
    duration: '16 weeks',
    level: 'Intermediate',
    price: 419,
    originalPrice: 629,
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'comQ1-x2a1Q',
    rating: 4.7,
    studentsEnrolled: 5890,
    certificate: true,
    category: 'Mobile Development',
    hasLiveSession: true,
    nextLiveSession: '2024-01-26T18:00:00Z',
    skills: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'UIKit', 'App Store', 'iOS Design'],
    modules: [
      {
        id: 'm15',
        title: 'Swift Programming',
        duration: '5 weeks',
        lessons: [
          {
            id: 'l19',
            title: 'Swift Basics',
            type: 'video',
            duration: '60 min',
            content: 'Learn Swift programming language fundamentals.',
            youtubeVideoId: 'comQ1-x2a1Q'
          }
        ]
      }
    ]
  },
  {
    id: '13',
    title: 'Android Development with Kotlin',
    description: 'Create powerful Android applications using Kotlin. Learn Android Studio, Material Design, databases, and Google Play publishing.',
    instructor: 'Raj Patel',
    duration: '15 weeks',
    level: 'Intermediate',
    price: 399,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'F9UC9DY-vIU',
    rating: 4.8,
    studentsEnrolled: 8240,
    certificate: true,
    category: 'Mobile Development',
    hasLiveSession: true,
    nextLiveSession: '2024-01-27T17:00:00Z',
    skills: ['Kotlin', 'Android Studio', 'Material Design', 'SQLite', 'Firebase', 'Google Play'],
    modules: [
      {
        id: 'm16',
        title: 'Kotlin Fundamentals',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l20',
            title: 'Getting Started with Kotlin',
            type: 'video',
            duration: '50 min',
            content: 'Introduction to Kotlin programming for Android development.',
            youtubeVideoId: 'F9UC9DY-vIU'
          }
        ]
      }
    ]
  },
  {
    id: '14',
    title: 'Photography & Video Editing Masterclass',
    description: 'Master photography techniques and video editing with Adobe Premiere Pro and After Effects. Create stunning visual content.',
    instructor: 'Sophie Williams',
    duration: '12 weeks',
    level: 'Beginner',
    price: 279,
    originalPrice: 429,
    image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'LxO-6rlihSg',
    rating: 4.6,
    studentsEnrolled: 9870,
    certificate: true,
    category: 'Creative Arts',
    hasLiveSession: true,
    nextLiveSession: '2024-01-28T16:30:00Z',
    skills: ['Photography', 'Adobe Premiere Pro', 'After Effects', 'Color Grading', 'Video Editing', 'Lighting'],
    modules: [
      {
        id: 'm17',
        title: 'Photography Basics',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l21',
            title: 'Camera Settings and Composition',
            type: 'video',
            duration: '45 min',
            content: 'Learn essential camera settings and composition techniques.',
            youtubeVideoId: 'LxO-6rlihSg'
          }
        ]
      }
    ]
  },
  {
    id: '15',
    title: 'Business Analytics & Data Visualization',
    description: 'Transform data into actionable insights using Excel, Tableau, Power BI, and SQL. Perfect for business professionals.',
    instructor: 'Amanda Foster',
    duration: '10 weeks',
    level: 'Beginner',
    price: 329,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'yZvFH7B6gKI',
    rating: 4.7,
    studentsEnrolled: 11450,
    certificate: true,
    category: 'Business Analytics',
    hasLiveSession: true,
    nextLiveSession: '2024-01-29T18:00:00Z',
    skills: ['Excel', 'Tableau', 'Power BI', 'SQL', 'Data Analysis', 'Statistics', 'Visualization'],
    modules: [
      {
        id: 'm18',
        title: 'Data Analysis Fundamentals',
        duration: '3 weeks',
        lessons: [
          {
            id: 'l22',
            title: 'Excel for Data Analysis',
            type: 'video',
            duration: '55 min',
            content: 'Master Excel functions and features for data analysis.',
            youtubeVideoId: 'yZvFH7B6gKI'
          }
        ]
      }
    ]
  },
  {
    id: '16',
    title: 'E-commerce Business Development',
    description: 'Build and scale successful e-commerce businesses. Learn Shopify, Amazon FBA, dropshipping, and digital marketing strategies.',
    instructor: 'Tom Anderson',
    duration: '12 weeks',
    level: 'Beginner',
    price: 349,
    originalPrice: 529,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'VufDd-QL1c0',
    rating: 4.6,
    studentsEnrolled: 12340,
    certificate: true,
    category: 'E-commerce',
    hasLiveSession: true,
    nextLiveSession: '2024-01-30T19:00:00Z',
    skills: ['Shopify', 'Amazon FBA', 'Dropshipping', 'E-commerce Marketing', 'Product Research', 'Customer Service'],
    modules: [
      {
        id: 'm19',
        title: 'E-commerce Fundamentals',
        duration: '3 weeks',
        lessons: [
          {
            id: 'l23',
            title: 'Starting Your E-commerce Business',
            type: 'video',
            duration: '50 min',
            content: 'Learn how to start and structure your e-commerce business.',
            youtubeVideoId: 'VufDd-QL1c0'
          }
        ]
      }
    ]
  },
  {
    id: '17',
    title: 'Content Creation & YouTube Mastery',
    description: 'Build a successful YouTube channel and content creation business. Learn video production, editing, monetization, and audience growth.',
    instructor: 'Jake Miller',
    duration: '10 weeks',
    level: 'Beginner',
    price: 249,
    originalPrice: 379,
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'gho4GeUaKsc',
    rating: 4.5,
    studentsEnrolled: 15670,
    certificate: true,
    category: 'Content Creation',
    hasLiveSession: true,
    nextLiveSession: '2024-01-31T17:30:00Z',
    skills: ['Video Production', 'YouTube SEO', 'Content Strategy', 'Monetization', 'Audience Growth', 'Analytics'],
    modules: [
      {
        id: 'm20',
        title: 'YouTube Channel Setup',
        duration: '2 weeks',
        lessons: [
          {
            id: 'l24',
            title: 'Creating Your YouTube Channel',
            type: 'video',
            duration: '40 min',
            content: 'Step-by-step guide to setting up a professional YouTube channel.',
            youtubeVideoId: 'gho4GeUaKsc'
          }
        ]
      }
    ]
  },
  {
    id: '18',
    title: 'Financial Trading & Investment',
    description: 'Learn stock trading, cryptocurrency investing, technical analysis, and portfolio management. Build wealth through smart investing.',
    instructor: 'Richard Davis',
    duration: '14 weeks',
    level: 'Intermediate',
    price: 449,
    originalPrice: 679,
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'p7HKvqRI_Bo',
    rating: 4.7,
    studentsEnrolled: 8920,
    certificate: true,
    category: 'Finance',
    hasLiveSession: true,
    nextLiveSession: '2024-02-01T20:00:00Z',
    skills: ['Stock Trading', 'Technical Analysis', 'Portfolio Management', 'Risk Management', 'Cryptocurrency', 'Options Trading'],
    modules: [
      {
        id: 'm21',
        title: 'Trading Fundamentals',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l25',
            title: 'Introduction to Stock Trading',
            type: 'video',
            duration: '60 min',
            content: 'Learn the basics of stock market and trading principles.',
            youtubeVideoId: 'p7HKvqRI_Bo'
          }
        ]
      }
    ]
  },
  {
    id: '19',
    title: 'Graphic Design & Branding',
    description: 'Master graphic design principles, Adobe Creative Suite, and brand identity creation. Design logos, websites, and marketing materials.',
    instructor: 'Maria Garcia',
    duration: '12 weeks',
    level: 'Beginner',
    price: 299,
    originalPrice: 449,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'YiLUYf4HDh4',
    rating: 4.6,
    studentsEnrolled: 10230,
    certificate: true,
    category: 'Design',
    hasLiveSession: true,
    nextLiveSession: '2024-02-02T16:00:00Z',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Logo Design', 'Brand Identity', 'Typography', 'Color Theory'],
    modules: [
      {
        id: 'm22',
        title: 'Design Principles',
        duration: '3 weeks',
        lessons: [
          {
            id: 'l26',
            title: 'Fundamentals of Graphic Design',
            type: 'video',
            duration: '50 min',
            content: 'Learn essential design principles and theory.',
            youtubeVideoId: 'YiLUYf4HDh4'
          }
        ]
      }
    ]
  },
  {
    id: '20',
    title: 'Project Management Professional (PMP)',
    description: 'Prepare for PMP certification and master project management methodologies. Learn Agile, Scrum, risk management, and leadership skills.',
    instructor: 'Steven Brown',
    duration: '16 weeks',
    level: 'Advanced',
    price: 499,
    originalPrice: 749,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    youtubeVideoId: 'ZKOL-rZ79gs',
    rating: 4.8,
    studentsEnrolled: 7650,
    certificate: true,
    category: 'Project Management',
    hasLiveSession: true,
    nextLiveSession: '2024-02-03T18:30:00Z',
    skills: ['PMP', 'Agile', 'Scrum', 'Risk Management', 'Leadership', 'Project Planning', 'Team Management'],
    modules: [
      {
        id: 'm23',
        title: 'Project Management Basics',
        duration: '4 weeks',
        lessons: [
          {
            id: 'l27',
            title: 'Introduction to Project Management',
            type: 'video',
            duration: '55 min',
            content: 'Understanding project management principles and methodologies.',
            youtubeVideoId: 'ZKOL-rZ79gs'
          }
        ]
      }
    ]
  }
];