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

function CornerSparkle({ style }: { style: React.CSSProperties }) {
  return (
    <svg width="34" height="34" viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', ...style }}>
      <path
        d="M50 8 L57 43 L92 50 L57 57 L50 92 L43 57 L8 50 L43 43 Z"
        fill="#e6ca91"
        fillOpacity="0.55"
      />
    </svg>
  )
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
          backgroundColor: '#0c1526',
          backgroundImage:
            'radial-gradient(circle at 50% 15%, rgba(230,202,145,0.20), transparent 50%), radial-gradient(circle at 15% 90%, rgba(230,202,145,0.10), transparent 45%), radial-gradient(circle at 90% 85%, rgba(230,202,145,0.10), transparent 45%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 22,
            border: '1px solid rgba(230,202,145,0.28)',
            borderRadius: 20,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: '1px solid rgba(230,202,145,0.45)',
            borderRadius: 14,
            display: 'flex',
          }}
        />

        <CornerSparkle style={{ top: 52, left: 52 }} />
        <CornerSparkle style={{ top: 52, right: 52 }} />
        <CornerSparkle style={{ bottom: 52, left: 52 }} />
        <CornerSparkle style={{ bottom: 52, right: 52 }} />

        <svg width="64" height="64" viewBox="0 0 180 180" fill="none" style={{ marginBottom: 26 }}>
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
            fontSize: 30,
            letterSpacing: 8,
            color: '#cbb894',
            textTransform: 'uppercase',
          }}
        >
          You are cordially invited
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: 38,
            letterSpacing: 5,
            color: '#e6ca91',
            marginTop: 12,
            textTransform: 'uppercase',
          }}
        >
          To the Wedding Reception of
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 34, marginTop: 32 }}>
          <div style={{ display: 'flex', fontFamily: 'Pinyon Script', fontSize: 148, color: '#f7f2e7', lineHeight: 1 }}>
            Adhin
          </div>
          <div style={{ display: 'flex', fontFamily: 'Pinyon Script', fontSize: 104, color: '#e6ca91', lineHeight: 1 }}>
            &amp;
          </div>
          <div style={{ display: 'flex', fontFamily: 'Pinyon Script', fontSize: 148, color: '#f7f2e7', lineHeight: 1 }}>
            Athira
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: 38,
            color: '#f2e9d8',
            marginTop: 44,
            letterSpacing: 2,
          }}
        >
          14th September 2026
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: 28,
            color: '#b8a687',
            marginTop: 10,
            letterSpacing: 1,
          }}
        >
          AGP Garden Heritage Hall, Calicut
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
