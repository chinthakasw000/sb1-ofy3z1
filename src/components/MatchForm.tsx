import React from 'react';
import { formFields } from '../utils/formFields';
import { MatchFormData } from '../types';

interface MatchFormProps {
  side: 'male' | 'female';
  onSubmit: (data: MatchFormData) => void;
}

const MatchForm: React.FC<MatchFormProps> = ({ side, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as MatchFormData;
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formFields.map((field) => (
        <div key={field.name} className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              name={field.name}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder={`Enter ${field.label.toLowerCase()}`}
            />
          )}
        </div>
      ))}
      
      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-md text-white font-semibold shadow-lg transition-all
          ${side === 'male' 
            ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' 
            : 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500'
          } focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        Save Details
      </button>
    </form>
  );
};

export default MatchForm;