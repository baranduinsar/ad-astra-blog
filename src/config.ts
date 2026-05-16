/**
 * Zahit - Site Configuration
 * ----------------------------------------
 * Temayı kişiselleştirmek için bu dosyayı düzenleyin.
 * Edit this file to personalize your site.
 */

export const SITE_CONFIG = {
  /** Sitenin başlığı / Site title */
  title: 'Zahit',

  /** Sitenin açıklaması / Site description */
  description: 'A raw, flat minimalist theme built on the philosophy that simplicity is depth.',

  /** Sitenin adresi / Site URL */
  url: 'https://zahit.dev',
};

export const AUTHOR = {
  /** Adınız / Your name */
  name: 'Oğuzhan Kuşca',

  /** Rolünüz / Your role */
  role: {
    tr: 'YBS | Python | Linux',
    en: 'MIS | Python | Linux',
  },

  /** Kısa biyografiniz / Your short bio */
  bio: {
    tr: 'Teknik detayları iş süreçleriyle buluşturan bir YBS öğrencisiyim. Python, Linux ve Backend üzerine geliştirdiğim projeleri ve sistem analizlerimi burada belgeliyorum.',
    en: 'MIS student bridging the gap between technical details and business processes. Documenting my Python projects, Linux automations, and system analysis here.',
  },

  /** Profil fotoğrafı yolu / Profile picture path (public klasöründen / from public folder) */
  avatar: '/profile.jpeg',
};

export const SOCIALS = [
  {
    label: 'Mail',
    href: 'mailto:kuscadev@outlook.com',
    icon: 'mdi:email',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kuscadev',
    icon: 'mdi:github',
  },
  {
    label: 'X',
    href: 'https://x.com/kuscadev',
    icon: 'mdi:twitter',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/oguzhankusca',
    icon: 'mdi:linkedin',
  },
  {
    label: 'Mastodon',
    href: 'https://mastodon.social/@kuscadev',
    icon: 'mdi:mastodon',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@kuscadev',
    icon: 'mdi:medium',
  }
  // Daha fazla eklemek için bu formatı kopyalayın:
  // { label: 'RSS', href: '/rss.xml', icon: 'mdi:rss' },
];
