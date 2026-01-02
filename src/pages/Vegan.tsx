import { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, Text, Button, HStack, Stack, useToast } from '@chakra-ui/react';
import RecipeCard from '../components/RecipeCard';
import AddRecipeButton from '../components/AddRecipeButton';

import img1 from '../assets/recipes/img1.jpeg';
import img2 from '../assets/recipes/img2.jpeg';
import img3 from '../assets/recipes/img3.jpeg';
import img4 from '../assets/recipes/img4.jpeg';

const defaultRecipes = [
    { title: 'Солянка с грибами', category: 'Первые блюда', img: img1 },
    { title: 'Капустные котлеты', category: 'Веганские блюда', img: img2 },
    { title: 'Оладьи на кефире', category: 'Десерты', img: img3 },
    { title: "Салат 'Здоровье'", category: 'Салаты', img: img4 },
];

const categories = ['Все', 'Первые блюда', 'Вторые блюда', 'Десерты', 'Салаты', 'Веганские блюда'];

export default function Vegan() {
    const [recipes, setRecipes] = useState(defaultRecipes);
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [editRecipe, setEditRecipe] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const toast = useToast();

    //  1. Загрузка рецептов только один раз при старте
    useEffect(() => {
        try {
            const saved = localStorage.getItem('vegan_recipes');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    setRecipes(parsed);
                    console.log('✅ Рецепты загружены из LocalStorage:', parsed);
                }
            }
        } catch (err) {
            console.error('❌ Ошибка чтения localStorage:', err);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    //  2. Сохраняем ТОЛЬКО после первой загрузки
    useEffect(() => {
        if (!isLoaded) return; // предотвращаем перезапись дефолтных
        try {
            localStorage.setItem('vegan_recipes', JSON.stringify(recipes));
            console.log(' Рецепты сохранены в LocalStorage:', recipes);
        } catch (err) {
            console.error(' Ошибка записи в localStorage:', err);
        }
    }, [recipes, isLoaded]);

    const filteredRecipes =
        selectedCategory === 'Все'
            ? recipes
            : recipes.filter((r) => r.category === selectedCategory);

    const handleAddRecipe = (newRecipe: any) => {
        const recipeToAdd = {
            title: newRecipe.title,
            category: newRecipe.category,
            img: newRecipe.image || 'https://via.placeholder.com/300x200?text=Recipe',
        };

        setRecipes((prev) => {
            const updated = [...prev, recipeToAdd];
            localStorage.setItem('vegan_recipes', JSON.stringify(updated));
            console.log('✅ Новый рецепт добавлен:', updated);
            return updated;
        });

        toast({
            title: 'Рецепт добавлен!',
            description: `${newRecipe.title} успешно сохранён 🌿`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    const handleDeleteRecipe = (title: string) => {
        setRecipes((prev) => {
            const updated = prev.filter((r) => r.title !== title);
            localStorage.setItem('vegan_recipes', JSON.stringify(updated));
            return updated;
        });

        toast({
            title: 'Рецепт удалён',
            description: `«${title}» был успешно удалён.`,
            status: 'info',
            duration: 2500,
            isClosable: true,
        });
    };

    const handleUpdateRecipe = (updated: any) => {
        setRecipes((prev) => {
            const newList = prev.map((r) => (r.title === updated.title ? updated : r));
            localStorage.setItem('vegan_recipes', JSON.stringify(newList));
            return newList;
        });
        toast({
            title: 'Рецепт обновлён!',
            description: `«${updated.title}» успешно изменён.`,
            status: 'success',
            duration: 2500,
            isClosable: true,
        });
        setEditRecipe(null);
    };

    return (
        <Box p={{ base: 4, md: 8 }}>
            <Stack spacing={6}>
                <Box>
                    <Heading fontSize={{ base: '2xl', md: '4xl' }}>Веганская кухня</Heading>
                    <Text mt={3}>
                        Интересны не только убеждённым вегетарианцам, но и тем, кто хочет питаться
                        легче и разнообразнее 🌱
                    </Text>
                </Box>

                <HStack spacing={3} flexWrap='wrap'>
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            size='sm'
                            colorScheme={selectedCategory === cat ? 'green' : 'gray'}
                            variant={selectedCategory === cat ? 'solid' : 'outline'}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {filteredRecipes.map((r, idx) => (
                        <RecipeCard
                            key={idx}
                            title={r.title}
                            category={r.category}
                            img={r.img}
                            onDelete={() => handleDeleteRecipe(r.title)}
                            onEdit={() => setEditRecipe(r)}
                        />
                    ))}
                </SimpleGrid>

                <AddRecipeButton
                    onAddRecipe={handleAddRecipe}
                    onUpdateRecipe={handleUpdateRecipe}
                    editRecipe={editRecipe}
                />
            </Stack>
        </Box>
    );
}
