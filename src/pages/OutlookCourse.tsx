import React from 'react';
import CourseOverview from '@/components/CourseOverview';

const OutlookCourse = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        <CourseOverview 
          courseName="Outlook Essentials"
          trackFilter="Outlook"
        />
      </main>
    </div>
  );
};

export default OutlookCourse;
