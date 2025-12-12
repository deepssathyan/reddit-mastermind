export const exportCalendar = (calendar, weekNumber) => {
  if (!calendar || calendar.length === 0) {
    alert('No calendar to export');
    return;
  }
  
  const csvRows = [
    ['Week', 'Day', 'Time', 'Subreddit', 'Persona', 'Post Title', 'Post Body', 'Target Query', 'Comment 1', 'Comment 2', 'Comment 3', 'Comment 4'].join(',')
  ];
  
  calendar.forEach(item => {
    const escapeCSV = (str) => `"${String(str).replace(/"/g, '""').replace(/\n/g, ' ')}"`;
    
    const row = [
      weekNumber,
      item.dayName,
      item.timeOfDay,
      item.subreddit,
      item.poster,
      escapeCSV(item.postContent.title),
      escapeCSV(item.postContent.body),
      escapeCSV(item.query)
    ];
    
    for (let i = 0; i < 4; i++) {
      if (item.commentStrategy[i]) {
        row.push(escapeCSV(`${item.commentStrategy[i].persona} (+${item.commentStrategy[i].delayHours.toFixed(1)}h): ${item.commentStrategy[i].content}`));
      } else {
        row.push('');
      }
    }
    
    csvRows.push(row.join(','));
  });
  
  const csv = csvRows.join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `reddit-calendar-week-${weekNumber}.csv`;
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};