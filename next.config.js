/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'bn', 'bg', 'nl',
              'fr', 'de', 'el', 'lt',
              'pl', 'ro', 'ru', 'es',
              'tr', 'uk', 'vi'
            ], // Find a way to keep this synchronized with Crowdin
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/bVjMZSgtbY',
        permanent: true,
      },
      {
        source: '/downloads/preview',
        destination: 'https://fossbilling-public.s3.eu-central-1.amazonaws.com/FOSSBilling-preview.tar',
        permanent: true
      },
      {
        source: '/donate',
        destination: 'https://opencollective.com/FOSSBilling',
        permanent: true
      },
      {
        source: '/feature-request',
        destination: 'https://github.com/FOSSBilling/FOSSBilling/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=%5BFeature+Request%5D',
        permanent: true
      },
      {
        source: '/bug-report',
        destination: 'https://github.com/FOSSBilling/FOSSBilling/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D',
        permanent: true
      }
    ]
  },
  // FOSSBilling-specific configuration
  appConfig: {
    announcement: {
      icon: "",
      mobileText: "",
      fullText: "" // Leave blank to hide the banner
    },
    navbar: {
      solutions: // Disabled for now
      {
        items: [
          {
            name: 'Analytics',
            description: 'Get a better understanding of where your traffic is coming from.',
            href: '#',
            icon: "",
          },
        ],
        callsToAction: [
          { name: 'Watch Demo', href: '#', icon: "" },
          { name: 'Install', href: '#', icon: "" },
        ]
      },
      otherLinks: [
        {
          name: 'Docs',
          href: 'https://docs.fossbilling.org/',
          type: 'external'
        },
        {
          name: 'Contribute',
          href: 'https://github.com/FOSSBilling/FOSSBilling/',
          type: 'external'
        },
        {
          name: 'Discord',
          href: '/discord',
          type: 'external'
        },
      ],
      community: // Disabled for now
      {
        items: [
          {
            name: 'Discord',
            description: '',
            href: '/discord',
            icon: "",
          },
          {
            name: 'GitHub',
            description: '',
            href: 'https://github.com/FOSSBilling/FOSSBilling',
            icon: "",
          },
        ]
      }
    }
  }
}

module.exports = nextConfig;
