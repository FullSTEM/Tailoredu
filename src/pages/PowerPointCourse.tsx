import React from 'react';
import CourseOverview from '@/components/CourseOverview';

const PowerPointCourse = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        <CourseOverview 
          courseName="PowerPoint Mastery"
          trackFilter="PowerPoint"
        />
      </main>
    </div>
  );
};

export default PowerPointCourse;
