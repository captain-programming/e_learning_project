import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItemComponents = ({menu, path}) => {
  return (
    <>
    <NavLink to={`/${menu.path}`}>
      <Flex
        gap={4}
        _hover={{ borderColor: "rgb(107,230,225)" }}
        borderRadius={10}
        p={2}
        alignItems="center"
        border={"1px solid white"}
        borderColor={path===menu.path ? "rgb(107,230,225)" : "white"}
        bg={path===menu.path && "rgb(107,230,225)"}
      >
        {menu.icon({fontSize: "20px"})}
        <Heading
          fontSize="18px"
          cursor={"pointer"}
          fontFamily={"DM Serif"}
        >
          {menu.name}
        </Heading>
      </Flex>
    </NavLink>
    </>
  )
}

export default MenuItemComponents;