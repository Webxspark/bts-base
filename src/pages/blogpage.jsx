import React, { useState } from 'react';
import auth1 from '../assets/Auth1.svg'
import bled from '../assets/Red&Black img.svg'
import logo from '../assets/Logo.svg'



const Blog = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-black text-white rounded-lg shadow-lg p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {isExpanded ? (
        <p>{content}</p>
      ) : (
        <p className="overflow-hidden max-h-20">{content}</p>
      )}
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 mt-2 rounded focus:outline-none"
        onClick={handleToggleExpand}
      >
        {isExpanded ? 'Collapse' : 'Read More'}
      </button>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto py-6">
      <img className="mb-8" src={logo} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 flex items-center justify-center">
          <div className="col-span-2 md:col-span-2">
            <Blog
              title="Overcoming the Shadows: Rising Above Human Abuses"
              content="In a world where compassion and empathy should prevail, the existence of human abuses casts a dark shadow on our collective conscience. 
              It is disheartening to witness the pain and suffering inflicted upon fellow human beings. However, amidst these grim realities, it is important to remember that within each of us lies the power to inspire change and create a brighter future.
              We must rise above the darkness, unite in solidarity, and become the beacons of hope for those who have endured unimaginable hardships.
    
              Every act of kindness, no matter how small, has the potential to make a significant impact. 
              By lending a listening ear, offering support, or simply spreading awareness, we can start a ripple effect that reaches far beyond our immediate surroundings. 
              Let us be the voice for the voiceless, standing up against injustice and championing the rights of every individual. Together, we can build a society where love, respect, and equality prevail. 
              It is through collective effort and unwavering determination that we can eradicate human abuses and empower survivors to reclaim their lives.
              
              Remember, no matter how daunting the task may seem, each of us possesses the ability to make a positive difference. 
              Let us ignite the fire of change within ourselves and inspire others to join the fight against human abuses. Together, we can create a world where every person feels safe, valued, and free from the shackles of abuse."
            />
          </div>
          <div className="col-span-2 md:col-span-2 flex items-center justify-center">
            <img
              src={bled}
              alt="Image 1"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-2 md:col-span-2 flex items-center justify-center">
            <img
              src={auth1}
              alt="Image 2"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <Blog
              title="Breaking the Chains: Embracing Empathy to Combat Human Abuses"
              content="In a world marred by human abuses, it is crucial for us to awaken our empathy and take a stand against these injustices.
              We must recognize that the pain and suffering endured by others are not distant tales, but stark realities that demand our attention.
              It is within our power to challenge the status quo and foster a culture of compassion, where every individual is treated with dignity and respect.
              By educating ourselves, engaging in open dialogue, and actively supporting organizations working to combat human abuses, we can break the chains that bind our society. 
              Let us unite, channeling our empathy into meaningful action, and strive to create a world where the rights and well-being of all are fiercely protected. 
              Together, we have the power to bring about lasting change and pave the way for a brighter, more compassionate future."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
