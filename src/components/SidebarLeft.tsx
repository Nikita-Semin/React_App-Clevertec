import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
} from '@chakra-ui/react';

const categories = [
    'Салаты',
    'Закуски',
    'Первые блюда',
    'Вторые блюда',
    'Десерты, выпечка',
    'Блюда на гриле',
    'Веганская кухня',
    'Детские блюда',
    'Лечебное питание',
    'Национальные',
    'Соусы',
    'Напитки',
    'Заготовки',
];

export default function SidebarLeft() {
    return (
        <Box as='aside' w='250px' p={4} bg='white' borderRight='1px solid #e2e8f0'>
            <Accordion allowToggle>
                {categories.map((cat, idx) => (
                    <AccordionItem key={idx} border='none'>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'green.50' }}>
                                <Text flex='1' textAlign='left'>
                                    {cat}
                                </Text>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>Подкатегории…</AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
}
