// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import MyDropdown from "../components/DropDown";
import Loginwith from "../components/Login";
import DropDownLogin from "../components/DropDownLogin";
import Link from "next/link";
import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { useState, useRef } from "react";
function NavBar() {
  const { data: session, status } = useSession();
  const navbarToggleRef = useRef();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const HandleSideMenu = () => {
    isSideMenuOpen && navbarToggleRef.current.click();
  };

  return (
    <Navbar  css={{
      $$navbarBackgroundColor: "transparent",
      $$navbarBlurBackgroundColor: "transparent"
    }} className="">
      <Navbar.Toggle
        ref={navbarToggleRef}
        onChange={(isSelected: boolean) => setIsSideMenuOpen(isSelected)}
        showIn="xs"
      />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link href="/">
          <Text b color="inherit" hideIn="xs">
            Portfolio
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="warning"
        hideIn="xs"
        variant="highlight"
      >
       <Link color="inherit" href="/">
       <Text b color="White" hideIn="xs">
       Projects
          </Text> 
        </Link>
        <Spacer />
        <Link href="/contact">  <Text b color="inherit" hideIn="xs">
        Contact Me
          </Text> </Link>
        <Spacer />
        <Link href="/stripe"> 
        <Text b color="inherit" hideIn="xs">
        Buy Me A Coffee
          </Text>
          </Link>
        <Spacer />
        <Link href="/guestbook">
        <Text b color="inherit" hideIn="xs">
        Guestbook
          </Text> 
          </Link>
        <Spacer />
        <Link href="/about">
        <Text b color="inherit" hideIn="xs">
        About Me
          </Text> 
          </Link>
        
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <>
              {session?.user?.image && (
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    size="lg"
                    as="button"
                    color="secondary"
                    src={session?.user.image}
                  />
                </Dropdown.Trigger>
              )}
              {!session?.user?.image && (
                <Dropdown.Button>
                  <p className="text-l">Login</p>
                </Dropdown.Button>
              )}
            </>
          </Navbar.Item>

          {session?.user?.image && (
            
        <Dropdown.Menu
        aria-label="User menu actions"
        color="warning"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: "flex" }}>
            {session.user.name}
          </Text>
        </Dropdown.Item>

        <Dropdown.Item key="team_settings">
          <Link href="/profile">Profile</Link>
        </Dropdown.Item>
        {/* <Dropdown.Item key="system">
          {" "}
          <Link href="/extprofile">External Profile</Link>
        </Dropdown.Item> */}

        <Dropdown.Item key="settings" withDivider>
          <Link href="/settings">My Settings</Link>
        </Dropdown.Item>

        <Dropdown.Item key="analytics" withDivider>
          <Link href="/friends">My Friends</Link>
        </Dropdown.Item>

        <Dropdown.Item key="logout" withDivider color="error">
          <div>
            {session?.user?.image && (
              <button onClick={() => signOut()}>Logout</button>
            )}
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
          )}
          {!session?.user?.image && (
            <Dropdown.Menu aria-label="User menu actions" >
              <Dropdown.Item key="profile" css={{ backgroundColor:"inherit", height: "$18" }}>
                <button onClick={() => signIn("google")}>
                  <Text className="p-1 hover:text-orange-300" b color="inherit">
                    Login with Google
                  </Text>
                  <SocialIcon
                    network="google"
                    style={{ height: 25, width: 25 }}
                  />
                </button>
              </Dropdown.Item>
              <Dropdown.Item key="profile" css={{ backgroundColor:"inherit", height: "$18" }}>
                <button onClick={() => signIn("discord")}>
                  <Text className="p-1 hover:text-orange-300" b color="inherit">
                    Login with Discord
                  </Text>
                  <SocialIcon
                    network="discord"
                    style={{ height: 25, width: 25 }}
                  />
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          )}
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse  color="white" disableAnimation>
      <Navbar.CollapseItem key="About" color="white" activeColor="warning">
          <Link onClick={() => HandleSideMenu()} color="inherit" href="/">
            Projects
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem key="About" activeColor="warning">
          <Link onClick={() => HandleSideMenu()} color="inherit" href="/contact">
            Contact Me
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem key="Projects" activeColor="warning">
          <Link onClick={() => HandleSideMenu()} color="inherit" href="/stripe">
            Buy me a coffee
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem key="About" activeColor="warning">
          <Link onClick={() => HandleSideMenu()} color="inherit" href="/about">
            About Me
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem key="About" activeColor="warning">
          <Link onClick={() => HandleSideMenu()} color="inherit" href="/guestbook">
            Guests Book
          </Link>
        </Navbar.CollapseItem>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
