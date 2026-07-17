import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#030712",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#F8FAFC",
            marginBottom: 16,
          }}
        >
          {profile.name}
          <span style={{ color: "#2563EB" }}>.</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#CBD5E1",
            marginBottom: 32,
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#64748B",
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 18,
            color: "#3B82F6",
          }}
        >
          {profile.domain}
        </div>
      </div>
    ),
    { ...size }
  );
}
