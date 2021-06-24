export const DefaultSEO = {
  title: "UndanganAne - Buat undangan online dengan mudah",
  url: "https://undanganane.vercel.app/",
  description: `UndanganAne adalah platform undangan online gratis yang dapat membuat undangan online seperti pernikahan dll..`,
  openGraph: {
    type: "website",
    locale: "id",
    url: "https://undanganane.vercel.app/",
    site_name: "@undanganane",
    images: [
      {
        url: "https://undanganane.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "UndanganAne",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export const TypeInvitationSEO = {
  title: "Jenis Undangan - UndanganAne",
  url: "https://undanganane.vercel.app/jenis-undangan",
  description: `Ini nih jenis undangan yang ada di undanganane`,
  openGraph: {
    type: "website",
    locale: "id",
    url: "https://undanganane.vercel.app/jenis-undangan",
    site_name: "@undanganane",
    images: [
      {
        url: "https://undanganane.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "UndanganAne",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export const TypeInvitationSlugSEO = (
  title?: string | any,
  type?: string | any,
  isQuery?: boolean,
  queryName?: string | any
) => {
  return {
    title: `Jenis Undangan ${title} ${
      isQuery ? `tipe ${queryName}` : ""
    } - UndanganAne`,
    url: `https://undanganane.vercel.app/jenis-undangan/${type}${
      isQuery ? `?type=${queryName}` : ""
    }`,
    description: `Ini nih jenis undangan ${title} yang ada di undanganane`,
    openGraph: {
      type: "website",
      locale: "id",
      url: `https://undanganane.vercel.app/jenis-undangan/${type}${
        isQuery ? `?type=${queryName}` : ""
      }`,
      site_name: "@undanganane",
      images: [
        {
          url: "https://undanganane.vercel.app/logo.png",
          width: 800,
          height: 600,
          alt: "UndanganAne",
        },
      ],
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  };
};

export const InvitationSEO = (title?: string, path?: string) => {
  return {
    title: `Jenis Desain ${title} - UndanganAne`,
    url: `https://undanganane.vercel.app/${path}`,
    description: `Ini nih desain ${title} yang ada di undanganane`,
    openGraph: {
      type: "website",
      locale: "id",
      url: `https://undanganane.vercel.app/${path}`,
      site_name: "@undanganane",
      images: [
        {
          url: "https://undanganane.vercel.app/logo.png",
          width: 800,
          height: 600,
          alt: "UndanganAne",
        },
      ],
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  };
};
