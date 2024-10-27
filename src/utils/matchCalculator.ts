import { MatchFormData } from '../types';

export const calculateMatch = (male: MatchFormData, female: MatchFormData): number => {
  let totalPoints = 0;
  let maxPoints = 0;

  // Basic compatibility factors
  if (Math.abs(parseInt(male.age) - parseInt(female.age)) <= 5) totalPoints += 10;
  maxPoints += 10;

  // Location compatibility
  if (male.country === female.country) totalPoints += 5;
  maxPoints += 5;

  // Education level
  if (male.education === female.education) totalPoints += 5;
  maxPoints += 5;

  // Religion compatibility
  if (male.religion === female.religion) totalPoints += 10;
  maxPoints += 10;

  // MBTI compatibility
  if (male.mbti === female.mbti) totalPoints += 8;
  maxPoints += 8;

  // Relationship goals
  if (male.relationshipGoals === female.relationshipGoals) totalPoints += 15;
  maxPoints += 15;

  // Lifestyle compatibility
  if (male.smoking === female.smoking) totalPoints += 8;
  maxPoints += 8;

  // Living preference
  if (male.livingPreference === female.livingPreference) totalPoints += 8;
  maxPoints += 8;

  // Love language
  if (male.loveLanguage === female.loveLanguage) totalPoints += 10;
  maxPoints += 10;

  // Calculate percentage
  return Math.round((totalPoints / maxPoints) * 100);
};