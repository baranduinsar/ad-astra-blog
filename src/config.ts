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
  description: 'O blog da Ad Astra Artes reúne textos sobre arte autoral, processos criativos, bordado artístico, pintura, artesanato contemporâneo, estética fantástica e imaginários mitológicos. Explore conteúdos sobre técnicas artesanais, inspiração visual, referências medievais e mágicas, bastidores das criações, decoração artística e o universo da arte handmade brasileira. Um espaço dedicado à fantasia, à criação manual e às pequenas obsessões entre sonho, técnica e expressão artística.',

  /** Sitenin adresi / Site URL */
  url: 'https://adastrablog.vercel.app/',
};

export const AUTHOR = {
  /** Adınız / Your name */
  name: 'Bruna Souza',

  /** Rolünüz / Your role */
  role: {
    tr: 'Artista',
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
    label: 'Loja Online',
    href: 'https://adastraartes.lojavirtualnuvem.com.br/',
    icon: 'mdi:shop',
  },
  {
    label: 'Email',
    href: 'mailto:992530936bruna@gmail.com',
    icon: 'mdi:email',
  },
  {
    label: 'Whatsapp',
    href: 'mailto:johndoe@example.come',
    icon: 'mdi:whatsapp',
  },
  {
    label: 'Facebook',
    href: 'https://x.com/example',
    icon: 'mdi:facebook',
  },
  {
    label: 'Instagram',
    href: 'https://github.com/example',
    icon: 'mdi:instagram',
  },
  {
    label: 'RSS',
    href: '/rss.xml',
    icon: 'mdi:streamline-freehand-color:wireless-signal-rss-feed',
  }
];
