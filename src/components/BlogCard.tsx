import { Text, HStack, Avatar } from '@chakra-ui/react';
import MotionBox from './MotionBox';

type BlogCardProps = {
    name: string;
    text: string;
    img: string;
};

export default function BlogCard({ name, text, img }: BlogCardProps) {
    return (
        <MotionBox
            bg='green.50'
            p={4}
            borderRadius='md'
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
        >
            <HStack>
                <Avatar src={img} />
                <Text fontWeight='medium'>{name}</Text>
            </HStack>
            <Text mt={3} fontSize='sm' noOfLines={3}>
                {text}
            </Text>
        </MotionBox>
    );
}
