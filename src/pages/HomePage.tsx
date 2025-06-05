import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Paintbrush, HeartHandshake, Database } from 'lucide-react';

export const HomePage = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies.',
    },
    {
      icon: Paintbrush,
      title: 'Design',
      description: 'Beautiful and intuitive user interfaces that engage.',
    },
    {
      icon: HeartHandshake,
      title: 'Support',
      description: '24/7 technical support and maintenance services.',
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Efficient data management and processing solutions.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              We Create Digital
              <span className="text-blue-500"> Experiences</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              M48 is a creative studio specializing in web development, design,
              and digital solutions that drive business growth.
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Start a Project
              </Link>
              <Link
                to="/portfolio"
                className="btn btn-secondary"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive digital solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};