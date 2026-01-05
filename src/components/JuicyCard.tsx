import { Box, Text, Button, HStack, Tag } from '@chakra-ui/react';
import MotionBox from './MotionBox';

type JuicyCardProps = {
    title: string;
    category: string;
    img: string;
};

export default function JuicyCard({ title, category, img }: JuicyCardProps) {
    return (
        <MotionBox
            borderWidth='1px'
            borderRadius='lg'
            p={3}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <HStack spacing={4}>
                {/* Картинка слева */}
                <Box
                    w='120px'
                    h='100px'
                    backgroundImage={`url(${img})`}
                    backgroundSize='cover'
                    borderRadius='md'
                />

                {/* Контент справа */}
                <Box flex='1'>
                    <Tag colorScheme='green'>{category}</Tag>
                    <Text fontWeight='bold' mt={1}>
                        {title}
                    </Text>
                    <Button size='sm' mt={2} colorScheme='green'>
                        Готовить
                    </Button>
                </Box>
            </HStack>
        </MotionBox>
    );
}
