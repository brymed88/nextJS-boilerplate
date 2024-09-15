import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./features/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
     webpack: (config) => {
          config.externals.push('@node-rs/argon2', '@node-rs/bcrypt')
          return config
     },
}

export default withNextIntl(nextConfig)
