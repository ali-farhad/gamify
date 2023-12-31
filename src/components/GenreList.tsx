import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skelteons = Array.from(Array(19).keys());

  if (error) return null;

  return (
    <div>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skelteons.map((genre) => (
            <Skeleton key={genre} height={10} mb="10px" />
          ))}
        {!isLoading &&
          data?.results.map((genre) => (
            <ListItem key={genre.id} py="5px">
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImgUrl(genre.image_background)}
                />
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default GenreList;
