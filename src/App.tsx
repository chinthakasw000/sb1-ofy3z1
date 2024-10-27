import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import MatchForm from './components/MatchForm';
import CalculateButton from './components/CalculateButton';
import { calculateMatch } from './utils/matchCalculator';
import { MatchFormData } from './types';

function App() {
  const [matchResult, setMatchResult] = useState<number | null>(null);
  const [maleData, setMaleData] = useState<MatchFormData | null>(null);
  const [femaleData, setFemaleData] = useState<MatchFormData | null>(null);

  const handleCalculate = () => {
    if (maleData && femaleData) {
      const percentage = calculateMatch(maleData, femaleData);
      setMatchResult(percentage);
      window.alert(`Match Percentage: ${percentage}%\n\nBased on your inputs, you have a ${percentage}% compatibility rate! ${percentage > 75 ? '❤️ Great match!' : percentage > 50 ? '✨ Good potential!' : '🤔 Keep looking!'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <header className="text-center py-8 bg-white/80 backdrop-blur-sm shadow-sm">
        <h1 className="text-4xl font-bold text-purple-800 flex items-center justify-center gap-2">
          <Heart className="text-pink-500" />
          Love Match Calculator
          <Heart className="text-pink-500" />
        </h1>
        <p className="text-gray-600 mt-2">Find your compatibility score!</p>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Male */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-blue-500" />
              <h2 className="text-2xl font-semibold text-blue-800">His Details</h2>
            </div>
            <MatchForm side="male" onSubmit={setMaleData} />
          </div>

          {/* Right side - Female */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-pink-500" />
              <h2 className="text-2xl font-semibold text-pink-800">Her Details</h2>
            </div>
            <MatchForm side="female" onSubmit={setFemaleData} />
          </div>
        </div>

        <CalculateButton 
          onCalculate={handleCalculate}
          enabled={!!(maleData && femaleData)}
        />

        {matchResult !== null && (
          <div className="mt-8 text-center">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Match Result</h3>
              <div className="text-4xl font-bold text-pink-600">{matchResult}%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;