import React from 'react';

export const Button = ({ label }: { label: string }) => (
  <button className="btn" onClick={() => alert(label)}>
    {label}
  </button>
); 