import React from "react";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";

type Props = {
  onMenuOpen: () => void;
};

const NavBar = ({ onMenuOpen }: Props) => {
  return (
    <NavigationBar onMenuOpen={onMenuOpen} dataTest="NavBar">
      <Stack flex align="center" justify="between" spacing="none">
        <LinkList direction="row">
          <TextLink type="secondary">Travel</TextLink>
          <TextLink type="secondary">Cars</TextLink>
          <TextLink type="secondary">Rooms</TextLink>
          <TextLink type="secondary">Kiwi.com Stories</TextLink>
        </LinkList>
        <Stack direction="row" spacing="XXSmall" justify="end" shrink>
          <ButtonLink type="secondary">Starred</ButtonLink>
          <ButtonLink type="secondary">Help</ButtonLink>
          <ButtonLink type="secondary">Account</ButtonLink>
        </Stack>
      </Stack>
    </NavigationBar>
  );
};

export default NavBar;
