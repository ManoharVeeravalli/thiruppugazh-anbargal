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
      {
        text: `Thiruppugazh Thaalangal`,
        icon: "",
        link: "./pdf/Thiruppugazh Thaalangal_0001.pdf",
        type: 'pdf'
      },
      {
        text: `Thaalam Details`,
        icon: "",
        link: "./pdf/Thaalam details_0001.pdf",
        type: 'pdf'
      },
    ]
  },
  {
    text: `Meanings`,
    icon: BookIcon,
    items: [
      {
        text: `Songs1-4, V Agavalbook1-1`,
        icon: "",
        link: "./pdf/Songs1-4,V Agavalbook1-1.pdf",
        type: 'pdf'
      },
      {
        text: `Songs5-52 book2`,
        icon: "",
        link: "./pdf/Songs5-52 book2.pdf",
        type: 'pdf'
      },
      {
        text: `Songs57-113 book3`,
        icon: "",
        link: "./pdf/Songs57-113 book3.pdf",
        type: 'pdf'
      },
      {
        text: `Songs114-145 book4`,
        icon: "",
        link: "./pdf/Songs114-145 book4.pdf",
        type: 'pdf'
      },
      {
        text: `Songs146-202 book5`,
        icon: "",
        link: "./pdf/Songs146-202 book5.pdf",
        type: 'pdf'
      },
      {
        text: `Songs203-249 book6`,
        icon: "",
        link: "./pdf/Songs203-249 book6.pdf",
        type: 'pdf'
      },
      {
        text: `Songs250-322book7-2`,
        icon: "",
        link: "./pdf/Songs250-322book7-2.pdf",
        type: 'pdf'
      },
      {
        text: `Songs323-372 book8-1`,
        icon: "",
        link: "./pdf/Songs323-372 book8-1.pdf",
        type: 'pdf'
      },
      {
        text: `Songs373-421 book9`,
        icon: "",
        link: "./pdf/Songs373-421 book9.pdf",
        type: 'pdf'
      },
      {
        text: `Songs422-493 book10`,
        icon: "",
        link: "./pdf/Songs422-493 book10.pdf",
        type: 'pdf'
      },
      {
        text: `Songs494-501book11`,
        icon: "",
        link: "./pdf/Songs494-501book11.pdf",
        type: 'pdf'
      },
      {
        text: `Krishna Leela Songs`,
        icon: "",
        link: "./pdf/Krishna Leela Songs.pdf",
        type: 'pdf'
      },
      {
        text: `Ramayanam Songs`,
        icon: "",
        link: "./pdf/Ramayanam Songs.pdf",
        type: 'pdf'
      },

    ],
  },
  {

    text: `TIV Lists With Theme`,
    icon: BookIcon,
    items: [
      {
        "text": "Song list Navaham",
        "icon": "BookIcon",
        "link": "./pdf/Song list Navaham_0001.pdf",
        type: 'pdf'
      },
      {
        "text": "Song lists with theme",
        "icon": "BookIcon",
        "link": "./pdf/Song lists with theme_0001.pdf",
        type: 'pdf'
      },
      {
        "text": "Song lists with theme2",
        "icon": "BookIcon",
        "link": "./pdf/Song lists with theme2_0001.pdf",
        type: 'pdf'
      },
      {
        "text": "A1. Anbu avirodham new",
        "icon": "BookIcon",
        "link": "./pdf/A1.Anbu avirodham new.pdf",
        type: 'pdf'
      },
      {
        "text": "Few avatars in Dasavatharam (except Rama and Krishna)",
        "icon": "BookIcon",
        "link": "./pdf/Few avatars in Dasvatharam (except Rama and Krishna).pdf",
        type: 'pdf'
      }
    ],
  }

];
