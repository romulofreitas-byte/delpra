type BrandIconProps = {
  size?: number;
};

export function InstagramIcon({ size = 14 }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GoogleIcon({ size = 14 }: BrandIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.5-1.78 4.4-5.27 4.4-3.17 0-5.76-2.62-5.76-5.86s2.59-5.86 5.76-5.86c1.81 0 3.02.77 3.72 1.43l2.54-2.45C16.7 4.1 14.6 3.1 12.17 3.1 7.3 3.1 3.35 7.05 3.35 11.92s3.95 8.82 8.82 8.82c5.09 0 8.46-3.58 8.46-8.62 0-.58-.06-1.02-.28-1.02z"
      />
    </svg>
  );
}
