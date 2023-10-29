import NoteIcon from '@material-ui/icons/Note';
import GavelIcon from '@material-ui/icons/Gavel';
import PublicIcon from '@material-ui/icons/Public';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import FolderIcon from '@material-ui/icons/Folder';
import EventIcon from '@material-ui/icons/Event';
import CommentIcon from '@material-ui/icons/Comment';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';

export const items = [
  {
    text: `Thiruppugazh Anbargal`,
    icon: NoteIcon,
    items: [
      {
        text: `About Guruji`,
        icon: NoteIcon,
        link: `/`
      },
      {
        text: `Golden Rules, Message from Guruji`,
        icon: GavelIcon,
        link: `/rules`,
      },
      {
        text: `Centers in India & World`,
        icon: PublicIcon,
        link: `/centers`,
      },
      {
        text: `Major Events & Office Bearers`,
        icon: EventIcon,
        link: `/events`,
      },
      {
        text: `Write To Us`,
        icon: CommentIcon,
        link: `/feedback`,
      },
      {
        text: `About Us`,
        icon: InfoIcon,
        link: `/about-us`,
      },
    ]
  },
  {
    text: `Songs With Script & Audio`,
    icon: QueueMusicIcon,
    link: `/songs`,
  },
  // {
  //   text: `Playlists`,
  //   icon: QueueMusicIcon,
  //   link: `/playlists`,
  // },
  {
    text: `Vel Mayil Virutham`,
    icon: FolderIcon,
    link: `/vel-mayil-virutham`,
  },
  {
    text: `Vaguppu`,
    icon: FolderIcon,
    link: `/vaguppu`,
  },
  {
    text: `Viruthams Sung By Guruji`,
    icon: FolderIcon,
    link: `/virutham`,
  },
  {
    text: `Abhirami Andadi Pathikam`,
    icon: FolderIcon,
    link: `/abhirami`,
  },



  {
    text: `Valli Kalyanam`,
    icon: FolderIcon,
    link: `/valli-kalyanam`,
  },
  {
    text: `Virtual Bhajans`,
    icon: FolderIcon,
    link: `/virtual-bhajans`,
  },
  {
    text: `Resources`,
    icon: BookIcon,
    items: [
      {
        text: `TIV Book Regional`,
        icon: BookIcon,
        link: `/resources#books`,
      },
      {
        text: `All Songs With Meaning`,
        icon: BookIcon,
        link: `/resources#meanings`,
      },
      {
        text: `Articles`,
        icon: BookIcon,
        link: `/resources#articles`,
      },
      {
        text: `Paddhathi of a Bhajan`,
        icon: FolderIcon,
        link: `/paddhathi`,
      },
      {
        text: `List Of Songs`,
        icon: QueueMusicIcon,
        link: `/songs-list`,
      },
    ]
  }
];
