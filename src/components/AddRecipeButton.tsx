import {
    Box,
    Tooltip,
    IconButton,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    useToast,
} from '@chakra-ui/react';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MotionBox = motion.create(Box);

interface RecipeForm {
    title: string;
    category: string;
    ingredients: string;
    image: string;
}

interface AddRecipeButtonProps {
    onAddRecipe: (recipe: RecipeForm) => void;
    onUpdateRecipe?: (recipe: RecipeForm) => void;
    editRecipe?: RecipeForm | null;
}

export default function AddRecipeButton({
    onAddRecipe,
    onUpdateRecipe,
    editRecipe = null,
}: AddRecipeButtonProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const [form, setForm] = useState<RecipeForm>({
        title: '',
        category: '',
        ingredients: '',
        image: '',
    });

    const isEditMode = !!editRecipe;

    useEffect(() => {
        if (editRecipe) {
            setForm(editRecipe);
            onOpen();
        }
    }, [editRecipe]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!form.title || !form.category) {
            toast({
                title: 'Заполните обязательные поля',
                status: 'warning',
                duration: 2500,
                isClosable: true,
            });
            return;
        }

        if (isEditMode && onUpdateRecipe) {
            onUpdateRecipe(form);
            toast({
                title: 'Рецепт обновлён!',
                description: `«${form.title}» успешно изменён ✏️`,
                status: 'info',
                duration: 3000,
                isClosable: true,
            });
        } else {
            onAddRecipe(form);
            toast({
                title: 'Рецепт добавлен!',
                description: `${form.title} успешно сохранён 🌿`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }

        setForm({ title: '', category: '', ingredients: '', image: '' });
        onClose();
    };

    return (
        <>
            {!isEditMode && (
                <Tooltip label='Записать рецепт' placement='top' hasArrow>
                    <MotionBox
                        position='fixed'
                        bottom={{ base: '70px', md: '40px' }}
                        right={{ base: '20px', md: '40px' }}
                        zIndex={999}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <IconButton
                            aria-label='Добавить рецепт'
                            icon={<FaPlus />}
                            size='lg'
                            isRound
                            colorScheme='blackAlpha'
                            bg='black'
                            color='white'
                            boxShadow='0 0 25px rgba(0,255,0,0.3)'
                            _hover={{
                                transform: 'scale(1.1)',
                                boxShadow: '0 0 40px rgba(0,255,0,0.5)',
                                bg: 'black',
                            }}
                            _active={{ transform: 'scale(0.95)' }}
                            onClick={onOpen}
                        />
                    </MotionBox>
                </Tooltip>
            )}

            <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: 'lg' }} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {isEditMode ? 'Редактировать рецепт ✏️' : 'Добавить рецепт 🍲'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl mb={4} isRequired>
                            <FormLabel>Название рецепта</FormLabel>
                            <Input
                                name='title'
                                placeholder='Название'
                                value={form.title}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl mb={4} isRequired>
                            <FormLabel>Категория</FormLabel>
                            <Select
                                name='category'
                                value={form.category}
                                onChange={handleChange}
                                placeholder='Выберите категорию'
                            >
                                <option>Первые блюда</option>
                                <option>Вторые блюда</option>
                                <option>Десерты</option>
                                <option>Салаты</option>
                                <option>Веганские блюда</option>
                            </Select>
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel>Ингредиенты</FormLabel>
                            <Textarea
                                name='ingredients'
                                placeholder='Введите ингредиенты...'
                                value={form.ingredients}
                                onChange={handleChange}
                                rows={4}
                            />
                        </FormControl>

                        <FormControl mb={2}>
                            <FormLabel>Ссылка на изображение</FormLabel>
                            <Input
                                name='image'
                                placeholder='https://...'
                                value={form.image}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={handleSubmit}>
                            {isEditMode ? 'Сохранить изменения' : 'Добавить'}
                        </Button>
                        <Button variant='ghost' onClick={onClose}>
                            Отмена
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
