import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dr. Alena Bochi, ND — Naturopathic Medicine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #FAF7F2 0%, #F0EBE1 50%, #FAF7F2 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Decorative top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#8B6F47",
            display: "flex",
          }}
        />

        {/* Leaf icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 20,
            background: "#8B6F47",
            marginBottom: 32,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FAF7F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.9C7.2 7.4 5 10 5 13c0 3.9 3.1 7 7 7" />
            <path d="M15.7 4a5 5 0 0 0-4 7.9A7 7 0 0 1 19 5.3 4.9 4.9 0 0 0 15.7 4z" />
            <path d="M12 20V10" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#3D2E1F",
            textAlign: "center",
            lineHeight: 1.2,
            display: "flex",
          }}
        >
          Dr. Alena Bochi, ND
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#8B6F47",
            marginTop: 16,
            display: "flex",
          }}
        >
          Naturopathic Medicine
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#3D2E1F",
            opacity: 0.6,
            marginTop: 24,
            textAlign: "center",
            maxWidth: 700,
            display: "flex",
          }}
        >
          Whole-Person Care, Rooted in Nature
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 18,
            color: "#7A8B6F",
          }}
        >
          drbochi.com
        </div>
      </div>
    ),
    { ...size }
  );
}
