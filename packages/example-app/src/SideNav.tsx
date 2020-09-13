import React from "react";
import Drawer from "@kiwicom/orbit-components/lib/Drawer";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Button from "@kiwicom/orbit-components/lib/Button";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Collapse from "@kiwicom/orbit-components/lib/Collapse";
import Separator from "@kiwicom/orbit-components/lib/Separator";

type Props = {
  shown: boolean;
  onClose: () => void;
};

const SideNav = ({ shown, onClose }: Props) => {
  return (
    <Drawer
      dataTest="SideNav"
      shown={shown}
      onClose={onClose}
      actions={
        <Stack direction="row" justify="between" spacing="condensed">
          <Button type="secondary" size="small">
            Manage my bookings
          </Button>
        </Stack>
      }
    >
      <Stack spaceAfter="medium">
        <LinkList>
          <TextLink type="secondary">Sign out</TextLink>
        </LinkList>
      </Stack>
      <Separator />
      <Collapse label="Discover" initialExpanded>
        <LinkList indent>
          <TextLink type="secondary">Refer a Friend</TextLink>
          <TextLink type="secondary">Subscribe to newsletter</TextLink>
          <TextLink type="secondary">Kiwi.com Stories</TextLink>
        </LinkList>
      </Collapse>
      <Collapse label="Guidelines">
        <LinkList indent>
          <TextLink type="secondary">Terms & Conditions</TextLink>
          <TextLink type="secondary">Terms of Use</TextLink>
          <TextLink type="secondary">Privacy Policy</TextLink>
          <TextLink type="secondary">Security</TextLink>
          <TextLink type="secondary">Cookies settings</TextLink>
        </LinkList>
      </Collapse>
      <Collapse label="Company">
        <LinkList indent>
          <TextLink type="secondary">About Kiwi.com</TextLink>
          <TextLink type="secondary">Careers</TextLink>
          <TextLink type="secondary">Care Kiwi.com</TextLink>
          <TextLink type="secondary">Code Kiwi.com</TextLink>
          <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
          <TextLink type="secondary">Press kit</TextLink>
        </LinkList>
      </Collapse>
    </Drawer>
  );
};

export default SideNav;
