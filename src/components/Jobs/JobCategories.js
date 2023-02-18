import React from 'react';
import { Link } from 'react-router-dom';

function JobCategories() {
  const categories = [
    { name: 'All', cat : 'all', color: 'blue' },
    { name: 'Fresher', cat : 'fresher', color: 'green' },
    { name: 'Experienced', cat : 'experienced', color: 'yellow' },
    
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Job Categories</h2>
        <div className="flex flex-wrap -mx-2">
          {categories.map((category) => (
            <div key={category.name} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
              <div className={`bg-${category.color}-500 px-4 py-2 rounded-full`}>
      
                <Link to={`/${category.cat}`}>
                  <h3 className="font-bold">{category.name}</h3>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobCategories;
