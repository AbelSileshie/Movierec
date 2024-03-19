import React from "react";
import { Link, NavLink } from "react-router-dom";
import Action from "./genere/Action";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  PlayIcon,
  UserCircleIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const navListMenuItems = [
  {
    title: "Action",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Adventure",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Comedy",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Drama",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Horror",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Romance",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Thriller",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Sci_Fi",
    description: "",
    icon: PlayIcon,
  },
  {
    title: "Family",
    description: "",
    icon: PlayIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex relative items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg relative">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-white w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="white"
              className="flex items-center text-sm font-bold"
            >
              <NavLink to={title}>{title}</NavLink>
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Genres
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block bg-transparent">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >

      </Typography>
      <NavListMenu />
    </List>
  );
}

function Header({ setWatchedList, query, setQuery }) {

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="fixed top-0 left-0  right-0 max-w-full z-10 bg-transparent no-white-border rounded-none">
      <Navbar className="sticky top-0 z-10 h-max max-w-full  px-4 py-2 bg-transparent no-white-border rounded-none">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white bg-transparent no-white-border rounded-none">
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <NavLink to="/">Movie-Rec</NavLink>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="hidden gap-2 lg:flex">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              onChange={(e) => setQuery(e.target.value)}
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button variant="" size="xl">
              <NavLink to="Login">
                <UserCircleIcon className="h-4 w-4 size-5" />
              </NavLink>
            </Button>
            <Button variant="solid" size="xl">
              <Link
                to={`watched`}
                onClick={() => setWatchedList((watch) => !watch)}
              >
                <BookmarkIcon className="h-4 w-4 size-5" />
              </Link>

            </Button>
          </div>
          <IconButton
            variant="text"
            color="white"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="" size="sm" fullWidth>
              <UserCircleIcon className="h-4 w-4" />
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}
export default Header;
