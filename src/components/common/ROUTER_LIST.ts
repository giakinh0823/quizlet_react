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
