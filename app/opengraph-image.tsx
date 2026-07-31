import { ogImageSize, renderInvitationImage } from '@/lib/og-image'

export const dynamic = 'force-static'
export const alt = 'Adhin & Athira Wedding Reception'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function Image() {
  return renderInvitationImage()
}
