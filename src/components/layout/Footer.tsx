import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navbar");

    const currentYear = new Date().getFullYear();

    const sections = {
        servicios: [
            { name: "Wire Transfer", href: "/servicios" },
            { name: "SEPA Instant", href: "/servicios" },
            { name: "USDT / Crypto", href: "/servicios" },
            { name: "Remesas", href: "/servicios" },
        ],
        legales: [
            { name: "Términos y Condiciones", href: "/confianza" },
            { name: "Política de Privacidad", href: "/confianza" },
            { name: "Cumplimiento AML/KYC", href: "/confianza" },
            { name: "Política de Cookies", href: "/confianza" },
        ],
        contacto: [
            { name: "+57 311 570 1987", href: "https://wa.me/573115701987" },
            { name: "contact@fullbrokersservices.app", href: "mailto:contact@fullbrokersservices.app" },
            { name: "synerbit.xyz", href: "https://synerbit.xyz" },
        ],
    };

    return (
        <footer className="relative mt-20 border-t border-gold-deep/10 bg-black pt-20 pb-10 overflow-hidden">
            {/* Glow Divisor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-deep/40 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-40 h-10 opacity-70 group-hover:opacity-100 transition-opacity">
                                <Image src="/logo-dark.png" alt="FBS Logo" fill className="object-contain" />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            <strong>{t("tagline")}</strong> {t("description")}
                        </p>
                    </div>

                    {/* Links Cols */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">{tNav("servicios")}</h4>
                        <ul className="space-y-4">
                            {sections.servicios.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-500 hover:text-gold-light text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Legales</h4>
                        <ul className="space-y-4">
                            {sections.legales.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-500 hover:text-gold-light text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contacto</h4>
                        <ul className="space-y-4">
                            {sections.contacto.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-slate-500 hover:text-gold-light text-sm transition-colors block"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* AML Disclaimer */}
                <div className="glass-panel-subtle rounded-2xl p-6 mb-12 border-white/5 bg-white/[0.01]">
                    <p className="text-slate-500 text-xs leading-relaxed text-center italic">
                        {t("amlDisclaimer")}
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                    <p className="text-slate-600 text-xs">
                        {t("rights")}
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-slate-600 hover:text-white text-xs transition-colors">Twitter</Link>
                        <Link href="/" className="text-slate-600 hover:text-white text-xs transition-colors">LinkedIn</Link>
                        <Link href="/" className="text-slate-600 hover:text-white text-xs transition-colors">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
