import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "settings"
    | "messages"
    | "card"
    | "rewards"
    | "settings"
    | "logout";
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transaction"
            active={activeMenu === "transactions"}
            href="/member/transactions"
          />
          <MenuItem
            title="Messages"
            icon="ic-menu-messages"
            active={activeMenu === "messages"}
            href="/member"
          />
          <MenuItem
            title="Card"
            icon="ic-menu-card"
            active={activeMenu === "card"}
            href="/member"
          />
          <MenuItem
            title="Rewards"
            icon="ic-menu-rewards"
            active={activeMenu === "rewards"}
            href="/member"
          />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            active={activeMenu === "settings"}
            href="/member/edit-profile"
          />
          <MenuItem
            title="Log Out"
            icon="ic-menu-logout"
            active={activeMenu === "logout"}
            href="/sign-in"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
