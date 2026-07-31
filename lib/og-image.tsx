import { ImageResponse } from 'next/og'

export const ogImageSize = { width: 1200, height: 630 }

const CHROME_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36'

async function loadGoogleFont(family: string, weight: number, text: string) {
  const params = new URLSearchParams({ family: `${family}:wght@${weight}`, text })
  const css = await fetch(`https://fonts.googleapis.com/css2?${params}`, {
    headers: { 'User-Agent': CHROME_UA },
  }).then((res) => res.text())

  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype|woff)'\)/)
  if (!match) throw new Error(`Failed to resolve font file for ${family}`)

  const fontResponse = await fetch(match[1])
  return fontResponse.arrayBuffer()
}

export async function renderInvitationImage() {
  const [playfair, script] = await Promise.all([
    loadGoogleFont(
      'Playfair Display',
      600,
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.·&' "
    ),
    loadGoogleFont('Pinyon Script', 400, 'Adhin&Athira'),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#101a2d',
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(230,202,145,0.16), transparent 55%), radial-gradient(circle at 75% 80%, rgba(230,202,145,0.10), transparent 50%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 28,
            border: '1px solid rgba(230,202,145,0.35)',
            borderRadius: 16,
            display: 'flex',
          }}
        />

        <svg width="44" height="44" viewBox="0 0 180 180" fill="none" style={{ marginBottom: 20 }}>
          <path
            d="M90 142 C58 112 24 86 24 54 C24 30 44 14 66 14 C78 14 87 21 90 33 C93 21 102 14 114 14 C136 14 156 30 156 54 C156 86 122 112 90 142 Z"
            fill="#e6ca91"
          />
        </svg>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: 6,
            color: '#cbb894',
            textTransform: 'uppercase',
          }}
        >
          You are cordially invited to
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: 4,
            color: '#e6ca91',
            marginTop: 8,
            textTransform: 'uppercase',
          }}
        >
          The Wedding Reception of
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginTop: 22 }}>
          <div style={{ display: 'flex', fontFamily: 'Pinyon Script', fontSize: 100, color: '#f7f2e7', lineHeight: 1 }}>
            Adhin
          </div>
          <div style={{ display: 'flex', fontFamily: 'Pinyon Script', fontSize: 72, color: '#e6ca91', lineHeight: 1 }}>
            &amp;
          </div>
          <div style={{ display: 'flex', fontFamily: 'Pinyon Script', fontSize: 100, color: '#f7f2e7', lineHeight: 1 }}>
            Athira
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: 24,
            color: '#cbb894',
            marginTop: 32,
            letterSpacing: 1,
          }}
        >
          14th September 2026 · AGP Garden Heritage Hall, Calicut
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: 'Playfair Display', data: playfair, weight: 600, style: 'normal' },
        { name: 'Pinyon Script', data: script, weight: 400, style: 'normal' },
      ],
    }
  )
}
