const navLinks = [
  { href: '#about', label: 'About us' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#help', label: 'Help & Support' },
  { href: '#tnc', label: 'T&C' },
];

const icons = [{url: '/fb.svg', key: 1},{url:'/ig.svg', key: 2},{url:'/twitter.svg', key: 3}]


const socialLinks = [
  { href: '#facebook', label: 'Facebook',  iconClassName: 'w-4 h-4 fill-current' },
  { href: '#instagram', label: 'Instagram',  iconClassName: 'w-4 h-4 fill-none stroke-current stroke-2' },
  { href: '#twitter', label: 'Twitter', iconClassName: 'w-4 h-4 fill-current' },
];

export default function Footer({ phone = '+911234567890' }) {
  return (
    <footer className="w-full bg-[#f37021] text-white py-10">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight shrink-0">
              <img src="/Subtract2.svg" alt="" className="z-10"/>
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
          </div>

          <div className="text-xs md:text-sm font-medium tracking-wide shrink-0">
            <span>Contact : </span>
            <a href={`tel:${phone}`}>
              {phone.replace(/^\+91/, '+91 ')}
            </a>
          </div>
        </div>
        <div className="flex py-4 gap-6 justify-center">
          {icons.map((icon) => <img src={icon.url} key={icon.key} className="w-5 h-5"></img>)}
        </div>
    </footer>
  );
}