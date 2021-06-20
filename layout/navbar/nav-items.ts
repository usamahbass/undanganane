interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Beranda",
    href: "#",
  },
  {
    label: "Profil",
    href: "profil",
  },
  {
    label: "Cctv",
    href: "cctv",
  },
  {
    label: "Toko Desa",
    href: "toko-desa",
  },
  {
    label: "Informasi",
    href: "#informasi",
  },
  {
    label: "Potensi",
    href: "#potensi",
  },
  {
    label: "Peta",
    href: "#peta",
  },
];
