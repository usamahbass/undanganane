import { ReactFragment } from "react";
import { Pocket as ClassicIcon } from "react-feather";

export type DESAIN_TYPE = {
  title: string;
  price: string;
  href: string;
};

type INVITATION = {
  type: string;
  title: string;
  template: {
    title: string;
    name: string;
    amount: number;
    icon: ReactFragment;
    desain: Array<DESAIN_TYPE>;
  }[];
};

export const TYPE_OF_INVITATION: Array<INVITATION> = [
  {
    type: "pernikahan",
    title: "Pernikahan",
    template: [
      {
        name: "classic",
        title: "Classic",
        amount: 2,
        icon: ClassicIcon,
        desain: [
          {
            title: "Classic tanpa gambar",
            href: "/classic/design-one",
            price: "gratis",
          },
          {
            title: "Classic dengan gambar",
            href: "/classic/design-two",
            price: "gratis",
          },
        ],
      },
    ],
  },
];
