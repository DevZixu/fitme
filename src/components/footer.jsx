const navLinks = [
  { href: '#about', label: 'About us' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#help', label: 'Help & Support' },
  { href: '#tnc', label: 'T&C' },
];

function LogoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

const socialLinks = [
  { href: '#facebook', label: 'Facebook', Icon: FacebookIcon, iconClassName: 'w-4 h-4 fill-current' },
  { href: '#instagram', label: 'Instagram', Icon: InstagramIcon, iconClassName: 'w-4 h-4 fill-none stroke-current stroke-2' },
  { href: '#twitter', label: 'Twitter', Icon: TwitterIcon, iconClassName: 'w-4 h-4 fill-current' },
];

export default function Footer({ phone = '+911234567890' }) {
  return (
    <footer className="w-full bg-[#f37021] text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight shrink-0">
          <LogoIcon className="w-7 h-7 fill-current" />
          <span>FitMe</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-xs md:text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline transition-all">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-white/90 pt-1">
            {socialLinks.map(({ href, label, Icon, iconClassName }) => (
              <a key={href} href={href} aria-label={label} className="hover:opacity-80">
                <Icon className={iconClassName} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-xs md:text-sm font-medium tracking-wide shrink-0">
          <span>Contact : </span>
          <a href={`tel:${phone}`} className="hover:underline">
            {phone.replace(/^\+91/, '+91 ')}
          </a>
        </div>
      </div>
    </footer>
  );
}