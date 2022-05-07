import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

export const ROUTER_LIST = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/subjects",
    name: "Subjects",
  },
  {
    path: "/explanations",
    name: "Explanations",
  },
];

export const ROUTER_BUTTON_CREATE = [
  {
    path: "/study",
    name: "Study set",
    icon: ContentCopyOutlinedIcon,
  },
  {
    path: "/folders",
    name: "Folder",
    icon: FolderOutlinedIcon,
  },
  {
    path: "/classes",
    name: "Classes",
    icon: GroupOutlinedIcon,
  },
];

export const ROUTER_SUB_MENU = [
  {
    name: "group1",
    items: [
      {
        path: "/profile",
        name: "Profile",
      },
      {
        path: "/progress",
        name: "Progress",
      },
      {
        path: "/settings",
        name: "Setting",
      },
    ],
  },
  {
    name: "group2",
    items: [
      {
        path: "/profile",
        name: "Help and Feedback",
      },
      {
        path: "/blog",
        name: "Blog",
      },
      {
        path: "/privacy",
        name: "Privacy",
      },
      {
        path: "/upgrade",
        name: "Upgrade",
      },
    ],
  },
  {
    name: "group3",
    items: [
      {
        path: "/logout",
        name: "Logout",
      },
    ],
  },
];
