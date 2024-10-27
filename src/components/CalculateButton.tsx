import React from 'react';
import { HeartHandshake } from 'lucide-react';

interface CalculateButtonProps {
  onCalculate: () => void;
  enabled: boolean;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ onCalculate, enabled }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onCalculate}
        disabled={!enabled}
        className={`
          flex items-center gap-2 px-8 py-4 rounded-full text-xl font-bold
          transform transition-all duration-200
          ${enabled 
            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:scale-105 hover:shadow-xl active:scale-95'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        <HeartHandshake size={24} />
        Calculate Match
      </button>
    </div>
  );
};

export default CalculateButton;