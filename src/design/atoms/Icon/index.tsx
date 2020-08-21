import React from "react";

type IconProps = {
  name: 'es' | 'en' | 'down-arrow';
  size?: number
};

const Icon: React.FC<IconProps> = ({ name, size }) => {
  return <img style={{ width: size, height: size }} src={`/icons/${name}.svg`} title={`${name} icon`} alt={`${name} icon`}/>;
}

Icon.defaultProps = {
  size: 40
};

export default Icon;
