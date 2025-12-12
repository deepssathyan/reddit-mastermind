export const assessPostQuality = (post, commentStrategy) => {
  const title = post.title.toLowerCase();
  const body = post.body.toLowerCase();
  
  const hasQuestion = post.title.includes('?');
  const hasPersonalLanguage = /\b(i|my|we|our|i've|we've)\b/i.test(post.title + ' ' + post.body);
  const hasCasualLanguage = /\b(honestly|tbh|actually|basically|pretty much)\b/i.test(post.title + ' ' + post.body);
  
  const marketingWords = ['amazing', 'revolutionary', 'game-changing', 'incredible', 'best ever'];
  const hasMarketing = marketingWords.some(word => title.includes(word) || body.includes(word));
  
  let titleNaturalness = 'acceptable';
  if (hasMarketing) {
    titleNaturalness = 'needs_work';
  } else if ((hasQuestion && hasPersonalLanguage) || hasCasualLanguage) {
    titleNaturalness = 'natural';
  }
  
  const uniqueComments = new Set(commentStrategy.map(c => c.content)).size;
  const commentDiversity = uniqueComments === commentStrategy.length ? 'diverse' : 'limited';
  
  const delays = commentStrategy.map(c => c.delayHours);
  const avgDelay = delays.length > 0 ? delays.reduce((a, b) => a + b, 0) / delays.length : 0;
  const timingSpread = avgDelay >= 3 ? 'good' : avgDelay >= 2 ? 'acceptable' : 'rushed';
  
  return {
    titleNaturalness,
    bodyDepth: post.body.split(' ').length > 15 ? 'good' : 'basic',
    commentDiversity,
    timingSpread
  };
};

export const assessQuality = (calendar) => {
  if (!calendar || calendar.length === 0) return null;
  
  let naturalPosts = 0;
  let diverseComments = 0;
  let goodTiming = 0;
  
  calendar.forEach(item => {
    if (item.qualityIndicators.titleNaturalness === 'natural') naturalPosts++;
    if (item.qualityIndicators.commentDiversity === 'diverse') diverseComments++;
    if (item.qualityIndicators.timingSpread === 'good' || item.qualityIndicators.timingSpread === 'acceptable') goodTiming++;
  });
  
  const total = calendar.length;
  const naturalnessPct = (naturalPosts / total * 100).toFixed(0);
  const diversityPct = (diverseComments / total * 100).toFixed(0);
  const timingPct = (goodTiming / total * 100).toFixed(0);
  
  const score = Math.round(
    (parseInt(naturalnessPct) * 0.4 + parseInt(diversityPct) * 0.3 + parseInt(timingPct) * 0.3) / 10
  );
  
  return {
    score,
    naturalness: naturalnessPct + '%',
    diversity: diversityPct + '%',
    timing: timingPct + '%'
  };
};