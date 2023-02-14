import { FC, memo, PropsWithChildren, useState } from 'react';
import { motion } from 'framer-motion';

// -> FAQ component

type Props = { title: string };

const Toggle: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setIsShow(!isShow)}>
      <motion.h4 layout>{title}</motion.h4>
      {isShow ? children : null}
      <div className="faq-line" />
    </motion.div>
  );
};

export default memo(Toggle);
