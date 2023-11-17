import React, { type ComponentProps } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { styles } from "./Dropdown.css";

type Props = {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  ariaLabel: string;
};

export const DropdownItem = (
  props: ComponentProps<typeof DropdownMenu.Item> & {
    icon?: React.ReactNode;
  } & (
      | { onClick: () => void; href?: never }
      | { href: string; onClick?: never }
    )
) => {
  const { icon, ...rest } = props;
  const handleOnClick = () => {
    if (props.onClick) {
      props.onClick();
    }

    if (props.href) {
      window.location.href = props.href;
    }
  };

  return (
    <DropdownMenu.Item {...rest}>
      <button className={styles.menuItem} onClick={handleOnClick}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {props.children}
      </button>
    </DropdownMenu.Item>
  );
};

export const DropdownSeparator = (
  props: ComponentProps<typeof DropdownMenu.Separator>
) => <DropdownMenu.Separator className={styles.separator} {...props} />;

export const Dropdown = ({ trigger, children, ariaLabel }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.triggerButton} aria-label={ariaLabel}>
          {trigger}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.menuContent}
          sideOffset={4}
          collisionPadding={{
            left: 16,
            right: 16,
          }}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
