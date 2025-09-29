import React from 'react';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container = ({ children, className = '', ...rest }: ContainerProps) => {
  return (
    <div className={`max-w-[1540px] w-full mx-auto px-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
