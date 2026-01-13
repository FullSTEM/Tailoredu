import React from 'react';
import CourseOverview from '@/components/CourseOverview';

const WordCourse = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        <CourseOverview 
          courseName="Microsoft Word Training"
          trackFilter="Microsoft Word"
        />
      </main>
    </div>
  );
};

export default WordCourse;
