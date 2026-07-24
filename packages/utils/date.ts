const formatDate = (date: Date, format: string = 'MMM dd, yyyy'): string => {
  const options: Intl.DateTimeFormatOptions = {};

  if (format.includes('yyyy')) options.year = 'numeric';
  if (format.includes('MMMM')) options.month = 'long';
  else if (format.includes('MMM')) options.month = 'short';
  if (format.includes('dd')) options.day = '2-digit';

  return date.toLocaleDateString('en-US', options);
};

const formatTime = (date: Date, format: string = 'HH:mm'): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  if (format === 'HH:mm') return `${hours}:${minutes}`;
  if (format === 'HH:mm:ss') return `${hours}:${minutes}:${seconds}`;

  return `${hours}:${minutes}`;
};

const getDaysDifference = (date1: Date, date2: Date): number => {
  const millisPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((date2.getTime() - date1.getTime()) / millisPerDay);
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isYesterday = (date: Date): boolean => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
};

const getRelativeTime = (date: Date, baseDate: Date = new Date()): string => {
  const seconds = Math.floor((baseDate.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 30) return 'just now';
  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;

  return formatDate(date);
};

export {
  formatDate,
  formatTime,
  getDaysDifference,
  isToday,
  isYesterday,
  getRelativeTime,
};
