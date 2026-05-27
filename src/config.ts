/**
 * Zahit - Site Configuration
 * ----------------------------------------
 * Temayı kişiselleştirmek için bu dosyayı düzenleyin.
 * Edit this file to personalize your site.
 */

export const SITE_CONFIG = {
  /** Sitenin başlığı / Site title */
  title: 'Ad Astra Blog',

  /** Sitenin açıklaması / Site description */
  description: 'Um blog de Ad Astra Artes.',

  /** Sitenin adresi / Site URL */
  url: 'https://adastraartes.lojavirtualnuvem.com.br/',
};

export const AUTHOR = {
  /** Adınız / Your name */
  name: 'Bruna Souza',

  /** Rolünüz / Your role */
  role: {
    pt:: 'Artista',
    en: 'Artist',
  },

  /** Kısa biyografiniz / Your short bio */
  bio: {
    tr: 'Uma artista interessada em múltiplos formatos de arte, e que tem dedicado-se ao ofício desde muito cedo.',
    en: 'An artist interested in multiple art formats, and that has dedicated helrself to the art since a long time.',
  },

  /** Profil fotoğrafı yolu / Profile picture path (/src/assets klasöründen / from /src/assets folder) */
  avatar: '/profile.jpg',
};

export const SOCIALS = [
  {
    label: 'Mail',
    href: 'mailto:johndoe@example.com',
    icon: 'mdi:email',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/example',
    icon: 'mdi:github',
  },
  {
    label: 'X',
    href: 'https://x.com/example',
    icon: 'mdi:twitter',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/example',
    icon: 'mdi:linkedin',
  },
  {
    label: 'Mastodon',
    href: 'https://mastodon.social/@example',
    icon: 'mdi:mastodon',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@example',
    icon: 'mdi:medium',
  },
  {
    label: 'RSS',
    href: '/rss.xml',
    icon: 'mdi:rss',
  }
];
