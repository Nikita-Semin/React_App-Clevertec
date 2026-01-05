import { motion } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

const MotionBox = motion(chakra.div, {
    forwardMotionProps: true,
});

export default MotionBox;
