import { Box, Text, HStack, Link } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
            as='footer'
            bg='gray.100'
            py={6}
            mt={10}
            textAlign='center'
            borderTop='1px solid #e2e8f0'
        >
            <HStack spacing={6} justify='center' mb={3}>
                <Link href='/' fontWeight='bold'>
                    Главная
                </Link>
                <Link href='/vegan'>Веганская кухня</Link>
                <Link href='/juiciest'>Самое сочное</Link>
            </HStack>
            <Text fontSize='sm' color='gray.600'>
                © {new Date().getFullYear()} Мой кулинарный сайт. Все права защищены.
            </Text>
        </Box>
    );
}
