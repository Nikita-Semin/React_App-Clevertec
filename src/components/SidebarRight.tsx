import { Box, VStack, HStack, Text, Icon, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaUsers, FaSmile, FaEdit } from 'react-icons/fa';

export default function SidebarRight() {
    return (
        <Box as='aside' w='200px' p={4} bg='white' borderLeft='1px solid #e2e8f0'>
            <VStack spacing={6} align='start'>
                <HStack>
                    <Icon as={StarIcon} color='green.500' />
                    <Text>185</Text>
                </HStack>
                <HStack>
                    <Icon as={FaUsers} color='green.500' />
                    <Text>589</Text>
                </HStack>
                <HStack>
                    <Icon as={FaSmile} color='green.500' />
                    <Text>587</Text>
                </HStack>

                <Box position='fixed' bottom='30px'>
                    <Button
                        leftIcon={<FaEdit />}
                        colorScheme='green'
                        variant='solid'
                        borderRadius='full'
                    >
                        Записать рецепт
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
}
