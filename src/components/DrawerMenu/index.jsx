import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { themeColors } from "@/theme/colors";
import { menu } from "@/data/menu";

export default function DrawerMenu({ btnRef, isOpen, onClose }) {

  const handleClickMenuIcon = () => {
    setTimeout(() => {
      onClose()
    }, 700);
  }


  return (
    <div style={{zIndex: '999999'}}>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            size={2}
            padding="1rem 0.5rem 0 0"
            color={themeColors.primary}
          />
          <DrawerHeader color={themeColors.primary}>Menu</DrawerHeader>
          <Divider borderColor={themeColors.primary} />

          <DrawerBody>
            <List mt="2rem">
              {menu.map((it, index) => (
                <>
                  <Link onClick={handleClickMenuIcon}  href={it.link}>
                    <ListItem
                    p="1rem 0"
                      key={index}
                      display="flex"
                      alignItems="center"
                      fontSize="1.1rem"
                      fontWeight="bold"
                    >
                      <ListIcon
                        mr="2rem"
                        h="2rem"
                        w="2rem"
                        color={themeColors.primary}
                        as={it.icon}
                      />
                      {it.title}
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
