import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            BuildSaaS
                        </h3>
                        <p className="text-muted-foreground">
                            Connecting professionals with clients in architecture, construction, and
                            design.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-base font-semibold">For Professionals</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/auth/signup"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Join as Professional
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/features"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-base font-semibold">For Clients</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/projects"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Browse Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/professionals"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Find Professionals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-base font-semibold">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/50 after:transition-transform hover:after:scale-x-100"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/5 mt-12 pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} BuildSaaS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
