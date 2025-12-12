import { generatePost, generateCommentStrategy } from './contentGenerator';
import { calculateTiming } from './personaUtils';
import { assessPostQuality } from './qualityAssessment';

export const createWeeklyCalendar = ({ 
  companyInfo, 
  personas, 
  subreddits, 
  queries, 
  postsPerWeek, 
  weekNumber 
}) => {
  const calendar = [];
  const usedCombinations = new Set();
  const subredditPostCounts = {};
  
  // Initializing tracking
  subreddits.forEach(sr => subredditPostCounts[sr] = 0);
  
  // Calculating distribution limits
  const maxPostsPerSubreddit = Math.ceil(postsPerWeek / subreddits.length) + 1;
  
  for (let i = 0; i < postsPerWeek; i++) {
    // Selecting subreddit (avoid overposting)
    const availableSubreddits = subreddits.filter(
      sr => subredditPostCounts[sr] < maxPostsPerSubreddit
    );
    
    if (availableSubreddits.length === 0) break;
    
    const subreddit = availableSubreddits[Math.floor(Math.random() * availableSubreddits.length)];
    
    // Selecting query (avoid repetition)
    let query = queries[i % queries.length];
    let attempts = 0;
    while (usedCombinations.has(`${subreddit}-${query}`) && attempts < queries.length) {
      query = queries[(i + attempts) % queries.length];
      attempts++;
    }
    
    // Selecting primary poster
    const poster = personas[i % personas.length];
    
    const post = generatePost({ companyInfo, persona: poster, subreddit, query, weekNumber });
    const commentStrategy = generateCommentStrategy({ post, personas, poster, weekNumber });
    const timing = calculateTiming(poster, i, postsPerWeek, weekNumber);
    
    calendar.push({
      id: `post_${weekNumber}_${i}`,
      dayOfWeek: timing.dayOfWeek,
      dayName: timing.dayName,
      timeOfDay: timing.timeOfDay,
      subreddit,
      query,
      poster: poster.name,
      postContent: post,
      commentStrategy,
      qualityIndicators: assessPostQuality(post, commentStrategy)
    });
    
    usedCombinations.add(`${subreddit}-${query}`);
    subredditPostCounts[subreddit]++;
  }
  
  // Sort by day and time
  calendar.sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    return a.timeOfDay.localeCompare(b.timeOfDay);
  });
  
  return calendar;
};