// Shared theme constants and helper styles
export const palette = {
  primaryStart: '#0d47a1',
  primaryEnd: '#1976d2',
  primary: '#1565c0',
  bg: '#eef2f5',
  surface: '#ffffff',
  surfaceAlt: '#f8fafc',
  text: '#1f2937',
  textLight: '#f1f5f9',
  accent: '#ffb300',
  success: '#2e7d32',
  danger: '#c62828'
};

export const shadows = {
  card: '0 4px 14px rgba(0,0,0,0.08)',
  elevated: '0 8px 24px rgba(0,0,0,0.12)'
};

export const radius = {
  sm: '6px',
  md: '12px',
  lg: '20px'
};

export const layout = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '0 28px'
  }
};

export const gradient = (start = palette.primaryStart, end = palette.primaryEnd) => `linear-gradient(90deg, ${start}, ${end})`;

export const focusRing = {
  outline: '2px solid rgba(255,255,255,0.7)',
  outlineOffset: '2px'
};
