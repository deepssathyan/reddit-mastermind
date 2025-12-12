export const parsePersonas = (personasText) => {
  const lines = personasText.split('\n').filter(l => l.trim());
  const personas = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      const parts = line.split('-').map(p => p.trim());
      const name = parts[0];
      const traits = parts.slice(1).join(' - ');
      
      personas.push({
        id: `persona_${i}`,
        name: name,
        traits: traits || 'casual, helpful',
        activityPattern: {
          preferredDays: [(i * 2) % 7, (i * 2 + 2) % 7, (i * 2 + 4) % 7],
          preferredHours: [9 + i, 14 + i, 20 - i]
        }
      });
    }
  }
  
  return personas;
};

export const validateInputs = (personas, subreddits, queries, companyInfo, postsPerWeek) => {
  if (!companyInfo.trim()) {
    return { valid: false, error: 'Company info is required' };
  }
  if (personas.length < 2) {
    return { valid: false, error: 'Need at least 2 personas' };
  }
  if (subreddits.length === 0) {
    return { valid: false, error: 'Need at least 1 subreddit' };
  }
  if (queries.length === 0) {
    return { valid: false, error: 'Need at least 1 query target' };
  }
  if (postsPerWeek < 1 || postsPerWeek > 20) {
    return { valid: false, error: 'Posts per week must be between 1-20' };
  }
  
  return { valid: true };
};

export const calculateTiming = (persona, postIndex, totalPosts, weekNumber) => {
  const pattern = persona.activityPattern;
  const dayOfWeek = pattern.preferredDays[postIndex % pattern.preferredDays.length];
  const hourIndex = Math.floor(postIndex / pattern.preferredDays.length) % pattern.preferredHours.length;
  const baseHour = pattern.preferredHours[hourIndex];
  const minute = Math.floor(Math.random() * 60);
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return {
    dayOfWeek,
    dayName: days[dayOfWeek],
    timeOfDay: `${baseHour}:${minute.toString().padStart(2, '0')}`
  };
};