import { Center, Link } from "@chakra-ui/react"

function Footer() {
  return (
    <Center my="3" h="20px"  p="3">
        Made with 💓 by <Link isExternal px="2" color="tomato" href="https://github.com/ali-farhad">alifarhad</Link>
    </Center>
  )
}

export default Footer