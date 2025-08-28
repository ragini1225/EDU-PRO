import React from 'react';
import { Users, Award, BookOpen, Target, CheckCircle, Star, ArrowRight } from 'lucide-react';

export const AboutPage = ({ setCurrentPage }) => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of real-world experience.'
    },
    {
      icon: Award,
      title: 'Industry Certificates',
      description: 'Earn recognized certificates that boost your career prospects.'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Join a vibrant community of learners and grow together.'
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Tailored learning paths that adapt to your pace and goals.'
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Students Worldwide' },
    { value: '500+', label: 'Expert Instructors' },
    { value: '1,000+', label: 'Courses Available' },
    { value: '95%', label: 'Success Rate' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      content: 'EduPro transformed my career. The practical approach and expert instruction helped me land my dream job in tech.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Digital Marketer',
      content: 'The digital marketing course was comprehensive and up-to-date. I immediately applied what I learned to grow my business.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      content: 'Amazing platform with high-quality content. The UI/UX course gave me all the skills I needed to transition into design.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-50' },
    // Hero Section
    React.createElement(
      'section',
      { className: 'relative bg-gradient-to-br from-blue-900 via-purple-800 to-blue-800 text-white overflow-hidden' },
      React.createElement('div', { className: 'absolute inset-0 bg-black opacity-40' }),
      React.createElement('div', { className: 'absolute inset-0' },
        React.createElement('img', {
          src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600',
          alt: 'Students collaborating',
          className: 'w-full h-full object-cover opacity-20'
        })
      ),
      React.createElement(
        'div',
        { className: 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32' },
        React.createElement('div', { className: 'text-center' },
          React.createElement('h1', { className: 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up' },
            'Empowering Futures Through',
            React.createElement('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500' }, ' Education')
          ),
          React.createElement('p', { className: 'text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200' },
            'We believe in making quality education accessible to everyone, everywhere. Join millions of learners worldwide in transforming their careers and lives.'
          ),
          React.createElement(
            'button',
            {
              onClick: () => setCurrentPage('courses'),
              className: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-400'
            },
            'Start Learning Today'
          )
        )
      )
    ),

    // Stats Section
    React.createElement(
      'section',
      { className: 'py-16 bg-white' },
      React.createElement(
        'div',
        { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        React.createElement(
          'div',
          { className: 'grid grid-cols-2 lg:grid-cols-4 gap-8' },
          stats.map((stat, index) =>
            React.createElement(
              'div',
              {
                key: stat.label,
                className: 'text-center animate-fade-in-up',
                style: { animationDelay: `${index * 150}ms` }
              },
              React.createElement('div', { className: 'text-4xl lg:text-5xl font-bold text-blue-600 mb-2' }, stat.value),
              React.createElement('div', { className: 'text-gray-600 text-lg' }, stat.label)
            )
          )
        )
      )
    ),

    // Features Section
    React.createElement(
      'section',
      { className: 'py-20 bg-gray-50' },
      React.createElement(
        'div',
        { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        React.createElement('div', { className: 'text-center mb-16' },
          React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold text-gray-900 mb-4' }, 'Why Choose EduPro?'),
          React.createElement('p', { className: 'text-xl text-gray-600 max-w-2xl mx-auto' },
            "We're committed to providing the best learning experience with cutting-edge technology and expert instruction."
          )
        ),

        React.createElement(
          'div',
          { className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' },
          features.map((feature, index) =>
            React.createElement(
              'div',
              {
                key: feature.title,
                className: 'bg-white rounded-xl p-8 shadow-lg text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up',
                style: { animationDelay: `${index * 200}ms` }
              },
              React.createElement(
                'div',
                { className: 'w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300' },
                React.createElement(feature.icon, { className: 'h-8 w-8 text-white' })
              ),
              React.createElement('h3', { className: 'text-xl font-semibold text-gray-900 mb-4' }, feature.title),
              React.createElement('p', { className: 'text-gray-600' }, feature.description)
            )
          )
        )
      )
    ),

    // Mission Section
    React.createElement(
      'section',
      { className: 'py-20 bg-white' },
      React.createElement(
        'div',
        { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        React.createElement(
          'div',
          { className: 'grid lg:grid-cols-2 gap-12 items-center' },
          React.createElement(
            'div',
            { className: 'animate-fade-in-left' },
            React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold text-gray-900 mb-6' }, 'Our Mission'),
            React.createElement('p', { className: 'text-lg text-gray-600 mb-6' },
              "At EduPro, we're on a mission to democratize education and make high-quality learning accessible to everyone, regardless of their background or location."
            ),
            React.createElement('div', { className: 'space-y-4' },
              [
                'Provide world-class education from industry experts',
                'Foster a global community of lifelong learners',
                'Bridge the gap between education and employment',
                'Continuously innovate learning methodologies'
              ].map((point, index) =>
                React.createElement(
                  'div',
                  { key: index, className: 'flex items-start' },
                  React.createElement(CheckCircle, { className: 'h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0' }),
                  React.createElement('p', { className: 'text-gray-700' }, point)
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'animate-fade-in-right' },
            React.createElement('img', {
              src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
              alt: 'Team collaboration',
              className: 'rounded-xl shadow-2xl'
            })
          )
        )
      )
    ),

    // Testimonials
    React.createElement(
      'section',
      { className: 'py-20 bg-gray-50' },
      React.createElement(
        'div',
        { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        React.createElement('div', { className: 'text-center mb-16' },
          React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold text-gray-900 mb-4' }, 'What Our Students Say'),
          React.createElement('p', { className: 'text-xl text-gray-600' },
            "Join thousands of successful graduates who've transformed their careers"
          )
        ),

        React.createElement(
          'div',
          { className: 'grid md:grid-cols-3 gap-8' },
          testimonials.map((testimonial, index) =>
            React.createElement(
              'div',
              {
                key: testimonial.name,
                className: 'bg-white rounded-xl p-8 shadow-lg animate-fade-in-up hover:shadow-xl transition-shadow duration-300',
                style: { animationDelay: `${index * 200}ms` }
              },
              React.createElement('div', { className: 'flex items-center mb-4' },
                [...Array(testimonial.rating)].map((_, i) =>
                  React.createElement(Star, { key: i, className: 'h-5 w-5 text-yellow-400 fill-current' })
                )
              ),
              React.createElement('p', { className: 'text-gray-600 mb-6 italic' }, `"${testimonial.content}"`),
              React.createElement('div', { className: 'flex items-center' },
                React.createElement('div', { className: 'w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4' },
                  testimonial.avatar
                ),
                React.createElement('div', null,
                  React.createElement('p', { className: 'font-semibold text-gray-900' }, testimonial.name),
                  React.createElement('p', { className: 'text-gray-600 text-sm' }, testimonial.role)
                )
              )
            )
          )
        )
      )
    ),

    // CTA Section
    React.createElement(
      'section',
      { className: 'py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8' },
        React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-4' }, 'Ready to Transform Your Future?'),
        React.createElement('p', { className: 'text-xl mb-8 opacity-90' },
          "Join our community of learners and start building the skills you need for tomorrow's opportunities."
        ),
        React.createElement(
          'div',
          { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
          React.createElement(
            'button',
            {
              onClick: () => setCurrentPage('courses'),
              className: 'bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center justify-center'
            },
            'Explore Courses',
            React.createElement(ArrowRight, { className: 'ml-2 h-5 w-5' })
          ),
          React.createElement(
            'button',
            {
              onClick: () => setCurrentPage('login'),
              className: 'border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300'
            },
            'Join Free Today'
          )
        )
      )
    ),

    React.createElement('style', { jsx: true }, `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fade-in-left {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes fade-in-right {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
        opacity: 0;
      }
      .animate-fade-in-left {
        animation: fade-in-left 0.8s ease-out forwards;
        opacity: 0;
      }
      .animate-fade-in-right {
        animation: fade-in-right 0.8s ease-out forwards;
        opacity: 0;
      }
      .animation-delay-200 {
        animation-delay: 200ms;
      }
      .animation-delay-400 {
        animation-delay: 400ms;
      }
    `)
  );
};
