import { Box, Image, Text, Tag, IconButton, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTrash, FaEdit } from 'react-icons/fa';

const MotionBox = motion.create(Box);

interface RecipeCardProps {
    title: string;
    category: string;
    img: string;
    onDelete?: () => void;
    onEdit?: () => void;
}

export default function RecipeCard({ title, category, img, onDelete, onEdit }: RecipeCardProps) {
    return (
        <MotionBox
            whileHover={{ scale: 1.03 }}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            position='relative'
            bg='white'
            boxShadow='sm'
            _hover={{ boxShadow: 'lg' }}
        >
            <HStack position='absolute' top='8px' right='8px' spacing={1}>
                {onEdit && (
                    <IconButton
                        aria-label='Редактировать рецепт'
                        icon={<FaEdit />}
                        size='sm'
                        colorScheme='blue'
                        onClick={onEdit}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                )}
                {onDelete && (
                    <IconButton
                        aria-label='Удалить рецепт'
                        icon={<FaTrash />}
                        size='sm'
                        colorScheme='red'
                        onClick={onDelete}
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                )}
            </HStack>

            <Box h='180px' bg='gray.100'>
                <Image
                    src={img}
                    alt={title}
                    objectFit='cover'
                    w='100%'
                    h='100%'
                    fallbackSrc='https://via.placeholder.com/300x200?text=No+Image'
                />
            </Box>

            <Box p={4}>
                <Tag colorScheme='green' mb={2}>
                    {category}
                </Tag>
                <Text fontWeight='bold'>{title}</Text>
            </Box>
        </MotionBox>
    );
}
