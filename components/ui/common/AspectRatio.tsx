import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  ratio: string;
}

export const AspectRatio: React.FC<Props> = ({ ratio, children }) => {

  const calculateStyle = (rationStr: string) => {
    const values = rationStr.split(':');
    const padding = parseInt(values[1]) / parseInt(values[0]);
    return `${padding * 100}%`
  }

  const styleVal = calculateStyle(ratio);


  return (
    <div className="relative" style={{ paddingBottom: styleVal }}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div >
  );
}
