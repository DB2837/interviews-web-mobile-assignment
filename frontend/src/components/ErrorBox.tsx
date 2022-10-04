import React from 'react';

type TProps = {
  message: string;
};

const ErrorBox = ({ message }: TProps) => {
  return (
    <>
      <div>
        <h3>{message}</h3>
      </div>
    </>
  );
};

export default ErrorBox;
