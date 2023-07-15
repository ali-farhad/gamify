import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImgUrl from "../services/image-url"

interface Props {
    game: Game
}
function GameCard({game}: Props) {
  return (
    <Card >
        <Image src={getCroppedImgUrl(game.background_image)}/>
        <CardBody>
           
            <HStack justifyContent="space-between">
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading textAlign="left" fontSize="2xl">{game.name}</Heading>
        </CardBody>

    </Card>
  )
}

export default GameCard