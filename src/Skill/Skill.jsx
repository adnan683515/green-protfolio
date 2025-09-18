import React from 'react';
import GlassIcons from './GlassIcons';

const Skill = () => {
    return (
        <div>

            <div className="flex justify-center items-center mb-8">
                <h1 className="text-green-400 text-4xl sm:text-5xl font-bold relative">
                    My Skills
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-400 rounded-full mt-2 shadow-lg shadow-green-400/50"></span>
                </h1>
            </div>
            <GlassIcons></GlassIcons>
        </div>
    );
};

export default Skill;