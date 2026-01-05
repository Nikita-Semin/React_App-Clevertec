import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  Button,
  HStack,
  Tag,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import RecipeCard from "./RecipeCard";
import BlogCard from "./BlogCard";

// 🔹 Импорты картинок
import img1 from "../assets/recipes/img1.jpeg";
import img2 from "../assets/recipes/img2.jpeg";
import img3 from "../assets/recipes/img3.jpeg";
import img4 from "../assets/recipes/img4.jpeg";
import img5 from "../assets/juicy/Image 5.jpg";
import img6 from "../assets/juicy/Image 6.jpg";
import img7 from "../assets/juicy/Image 7.jpg";
import img8 from "../assets/juicy/Image 8.jpg";

import ava1 from "../assets/avatar/ava1.jpg";
import ava2 from "../assets/avatar/ava2.jpg";
import ava3 from "../assets/avatar/ava3.jpg";

// 🔹 Данные
const recipes = [
  { title: "Солянка с грибами", category: "Первые блюда", img: img1 },
  { title: "Капустные котлеты", category: "Веганские блюда", img: img2 },
  { title: "Оладьи на кефире", category: "Десерты", img: img3 },
  { title: 'Салат "Здоровье"', category: "Салаты", img: img4 },
];

const juicy = [
  { title: "Кнели со спагетти", category: "Вторые блюда", img: img5 },
  { title: "Пряная ветчина", category: "Вторые блюда", img: img6 },
  { title: "Лапша с курицей", category: "Вторые блюда", img: img7 },
  { title: "Том-ям с кимчи", category: "Национальные", img: img8 },
];

const blogs = [
  { name: "Екатерина", text: "Как раз после праздников…", img: ava1 },
  { name: "Алекс", text: "Как раз после праздников…", img: ava2 },
  { name: "Елена", text: "Как раз после праздников…", img: ava3 },
];

export default function MainContent() {
  return (
    <Box p={6}>
      {/* Заголовок и поиск */}
      <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
        Приятного аппетита!
      </Heading>
      <InputGroup maxW="md" mb={8}>
        <Input placeholder="Найдите свой рецепт…" data-test-id="search" />
        <InputRightElement>
          <SearchIcon color="gray.400" />
        </InputRightElement>
      </InputGroup>

      {/* Новые рецепты */}
      <Heading fontSize="xl" mb={4}>
        Новые рецепты
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {recipes.map((r, idx) => (
          <RecipeCard
            key={idx}
            title={r.title}
            category={r.category}
            img={r.img}
          />
        ))}
      </SimpleGrid>

      {/* Самое сочное */}
      <Heading fontSize="xl" my={6}>
        Самое сочное
      </Heading>
      <Stack spacing={4}>
        {juicy.map((j, idx) => (
          <Box
            key={idx}
            borderWidth="1px"
            borderRadius="lg"
            p={3}
            _hover={{ boxShadow: "md" }}
          >
            <HStack spacing={4}>
              <Box
                w="120px"
                h="100px"
                backgroundImage={`url(${j.img})`}
                backgroundSize="cover"
                borderRadius="md"
              />
              <Box flex="1">
                <Tag colorScheme="green">{j.category}</Tag>
                <Text fontWeight="bold" mt={1}>
                  {j.title}
                </Text>
                <Button size="sm" mt={2} colorScheme="green">
                  Готовить
                </Button>
              </Box>
            </HStack>
          </Box>
        ))}
      </Stack>

      {/* Кулинарные блоги */}
      <Heading fontSize="xl" my={6} bg="green.100" p={2} borderRadius="md">
        Кулинарные блоги
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {blogs.map((b, idx) => (
          <BlogCard key={idx} name={b.name} text={b.text} img={b.img} />
        ))}
      </SimpleGrid>

      {/* Веганская кухня */}
      <Heading fontSize="xl" my={6}>
        Веганская кухня
      </Heading>
      <Text mb={4}>
        Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
        попробовать вегетарианскую диету и готовить вкусные блюда.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {recipes.map((r, idx) => (
          <GridItem key={idx} borderWidth="1px" borderRadius="lg" p={4}>
            <Text fontWeight="bold">{r.title}</Text>
            <Text fontSize="sm" color="gray.600">
              {r.category}
            </Text>
            <Button mt={3} size="sm" colorScheme="green">
              Подробнее
            </Button>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
