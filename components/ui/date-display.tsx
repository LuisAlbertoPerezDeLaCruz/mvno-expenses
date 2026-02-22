'use client';

import { useEffect, useState } from 'react';

interface DateDisplayProps {
  date: Date | string;
  className?: string;
}

export function DateDisplay({ date, className = '' }: DateDisplayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>--</div>;
  }

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return (
    <div className={className}>
      {dateObj.toLocaleDateString()}
    </div>
  );
}
