import {
  Dropdown,
  DropdownItem,
  DropdownSeparator,
} from "@/components/ui/Dropdown";
import { styles } from "./AvatarDropdown.css";
import { Logout, User } from "@/components/icons";

interface Props {
  user: any;
}

const sendLogout = async () => {
  await fetch("/logout", {
    method: "POST",
  });
};

export const AvatarDropdown = ({ user }: Props) => {
  return (
    <Dropdown
      ariaLabel="ユーザーメニューを開く"
      trigger={
        <img
          src={user.githubImageUri}
          alt={user.githubUsername}
          className={styles.avatar}
        />
      }
    >
      <DropdownItem icon={<User />} href="/profile">
        プロフィール
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem
        icon={<Logout />}
        onClick={() => {
          sendLogout();
          window.location.reload();
        }}
      >
        ログアウト
      </DropdownItem>
    </Dropdown>
  );
};
