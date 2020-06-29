import React, { FC } from 'react';

interface Props {
  name: string,
  value: string,
  onChangeValue: Function
}

const InputComp: FC<Props> = props => {
  const { value } = props;
  return (
    <>
    <input type="text" value={value} onChange={(e) => props.onChangeValue(e.target.value)}/>
    </>
  );
};

export default InputComp;