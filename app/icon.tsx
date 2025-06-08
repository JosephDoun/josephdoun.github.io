import { ImageResponse } from 'next/og'


// Image metadata
export const size = {
  width: 40,
  height: 40,
}
export const contentType = 'image/xml'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 22,
          fontWeight: 10000,
          background: 'black',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%'
        }}
      >
        JD
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}


