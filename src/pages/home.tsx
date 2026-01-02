import { Grid, GridItem } from '@chakra-ui/react';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import MainContent from '../components/MainContent';

export default function Home() {
    return (
        <Grid templateColumns={{ base: '1fr', md: '250px 1fr 200px' }} minH='100vh' bg='gray.50'>
            {/* Левая панель */}
            <GridItem
                display={{ base: 'none', md: 'block' }}
                borderRight='1px solid #e2e8f0'
                bg='white'
            >
                <SidebarLeft />
            </GridItem>

            {/* Основной контент */}
            <GridItem p={{ base: 2, md: 6 }}>
                <MainContent />
            </GridItem>

            {/* Правая панель */}
            <GridItem
                display={{ base: 'none', md: 'block' }}
                borderLeft='1px solid #e2e8f0'
                bg='white'
            >
                <SidebarRight />
            </GridItem>
        </Grid>
    );
}
