import { Box, Heading, Stack } from '@chakra-ui/react';
import JuicyCard from '../components/JuicyCard';

import img5 from '../assets/juicy/Image 5.jpg';
import img6 from '../assets/juicy/Image 6.jpg';
import img7 from '../assets/juicy/Image 7.jpg';
import img8 from '../assets/juicy/Image 8.jpg';

const juicy = [
    { title: 'Кнели со спагетти', category: 'Вторые блюда', img: img5 },
    { title: 'Пряная ветчина', category: 'Вторые блюда', img: img6 },
    { title: 'Лапша с курицей', category: 'Вторые блюда', img: img7 },
    { title: 'Том-ям с кимчи', category: 'Национальные', img: img8 },
];

export default function Juiciest() {
    return (
        <Box p={4}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} my={4}>
                Самое сочное
            </Heading>
            <Stack spacing={4}>
                {juicy.map((j, idx) => (
                    <JuicyCard key={idx} title={j.title} category={j.category} img={j.img} />
                ))}
            </Stack>
        </Box>
    );
}
