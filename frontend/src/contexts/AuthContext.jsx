import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null);

  useEffect(() => {
    // Check for saved user data on mount
    const savedUser  = localStorage.getItem('currentUser ');
    if (savedUser ) {
      setUser (JSON.parse(savedUser ));
    }
  }, []);

  const login = async (email, password, name) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if user exists in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      let existingUser  = users.find((u) => u.email === email);

      if (!existingUser  && name) {
        // Register new user
        existingUser  = {
          id: Date.now().toString(),
          name,
          email,
          enrolledCourses: [],
          completedCourses: [],
          certificates: [],
        };
        users.push(existingUser );
        localStorage.setItem('users', JSON.stringify(users));
      }

      if (existingUser ) {
        setUser (existingUser );
        localStorage.setItem('currentUser ', JSON.stringify(existingUser ));
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser (null);
    localStorage.removeItem('currentUser ');
  };

  const enrollInCourse = (courseId) => {
    if (user && !user.enrolledCourses.includes(courseId)) {
      const updatedUser  = {
        ...user,
        enrolledCourses: [...user.enrolledCourses, courseId],
      };
      setUser (updatedUser );
      localStorage.setItem('currentUser ', JSON.stringify(updatedUser ));

      // Update users array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser ;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  };

  const completeCourse = (courseId) => {
    if (user && !user.completedCourses.includes(courseId)) {
      const updatedUser  = {
        ...user,
        completedCourses: [...user.completedCourses, courseId],
        certificates: [...user.certificates, courseId],
      };
      setUser (updatedUser );
      localStorage.setItem('currentUser ', JSON.stringify(updatedUser ));

      // Update users array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser ;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  };

  const value = {
    user,
    login,
    logout,
    enrollInCourse,
    completeCourse,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
