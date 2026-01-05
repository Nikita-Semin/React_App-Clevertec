import { useState } from 'react';
import { Box, Flex, HStack, IconButton, Stack, Button, Show, Hide } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <Box
            as='header'
            data-test-id='header'
            w='full'
            px={4}
            py={2}
            boxShadow='sm'
            position='sticky'
            top={0}
            bg='white'
            zIndex={10}
        >
            <Flex h={16} alignItems='center' justifyContent='space-between'>
                {/* Логотип */}
                <Link to='/'>
                    <Box fontWeight='bold' fontSize='lg'>
                        MyLogo
                    </Box>
                </Link>

                {/* Десктоп навигация */}
                <Hide below='md'>
                    <HStack as='nav' spacing={4}>
                        <Button variant='ghost' as={Link} to='/vegan' data-test-id='vegan-cuisine'>
                            Веганская кухня
                        </Button>
                        <Button
                            variant='solid'
                            colorScheme='teal'
                            as={Link}
                            to='/juiciest'
                            data-test-id='juiciest-link'
                        >
                            Самое сочное
                        </Button>
                    </HStack>
                </Hide>

                {/* Мобильное меню */}
                <Show below='md'>
                    <IconButton
                        size='md'
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label='Toggle Menu'
                        onClick={toggleMenu}
                    />
                </Show>
            </Flex>

            {/* Меню на мобильной версии */}
            {isOpen && (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as='nav' spacing={4}>
                        <Button
                            variant='ghost'
                            as={Link}
                            to='/vegan'
                            data-test-id='vegan-cuisine'
                            onClick={closeMenu}
                        >
                            Веганская кухня
                        </Button>
                        <Button
                            variant='solid'
                            colorScheme='teal'
                            as={Link}
                            to='/juiciest'
                            data-test-id='juiciest-link-mobile'
                            onClick={closeMenu}
                        >
                            Вся подборка
                        </Button>
                    </Stack>
                </Box>
            )}
        </Box>
    );
};
