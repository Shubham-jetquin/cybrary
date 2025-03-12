'use client';
import { useState, useEffect } from "react";

const header = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [IsMenu, IsSetMenu] = useState(false);
    const [isOpenSignIn, setIsOpenSignIn] = useState(false);

    const [isClicked, setIsClicked] = useState(false);
    let timeoutId = null;

    const handleMouseEnter = (menu) => {
        if (!isClicked) {
            clearTimeout(timeoutId); // Clear any existing timeout
            setIsOpen(menu);
        }
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
            timeoutId = setTimeout(() => {
                setIsOpen(null);
            }, 4000); // Change to 5000 for 5 sec delay
        }
    };

    const handleClick = (menu) => {
        clearTimeout(timeoutId);
        setIsOpen(isOpen === menu ? null : menu);
        setIsClicked(!isClicked);
    };

    // Handles click outside to close dropdown
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setIsOpen(null);
    //             setIsClicked(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    return <>
        <div>
            <div className="fixed_wrapper" >
                <div
                    cl-close-target="Menu"
                    data-animation="default"
                    data-collapse="small"
                    data-duration={400}
                    data-easing="ease"
                    data-easing2="ease"
                    role="banner"
                    className="nav_component with_banner w-nav"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                    <nav className="nav_container">
                        <a
                            href="/"
                            aria-current="page"
                            className="nav_logo-wrapper w-nav-brand w--current"
                            aria-label="home"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6459f4a5613941f629069dc2_Logo-Full-White.svg"
                                loading="lazy"
                                alt=""
                                className="nav_logo"
                            />
                        </a>
                        <nav role="navigation" className="nav_menu w-nav-menu">
                            <div nav-style="outline" className="nav_links-wrapper">
                                <div className="nav_top-bar is-primary">
                                    <a
                                        href="/"
                                        aria-current="page"
                                        className="w-inline-block w--current"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                            loading="lazy"
                                            width={120}
                                            height="16.076351165771484"
                                            alt=""
                                            className="nav_top-bar_logo"
                                        />
                                    </a>
                                    <a href="#" className="w-inline-block">
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                            loading="lazy"
                                            width={24}
                                            height={24}
                                            alt=""
                                            cl-close-nav="Menu"
                                            className="nav_top-bar_x"

                                        />
                                    </a>
                                </div>
                                <div
                                    data-delay={0}
                                    data-hover="false"
                                    className="nav_link_dropdown-wrapper w-dropdown"
                                    onMouseEnter={() => handleMouseEnter("Catalog")}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick("Catalog")}
                                >
                                    <div
                                        className={`nav_link_dropdown-toggle w-dropdown-toggle ${isOpen === 'Catalog' ? "w--open" : ""}`}
                                        id="w-dropdown-toggle-0"
                                        aria-controls="w-dropdown-list-0"
                                        aria-haspopup="menu"
                                        aria-expanded={isOpen}
                                        role="button"
                                        tabIndex={0}

                                    >
                                        <div className="nav_link-alt">Catalog</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645b477d89482a992ae754da_down-chevron.svg"
                                            alt=""
                                        />
                                    </div>
                                    <nav
                                        nav-style="nested"
                                        className={`nav_dropdown-wrapper w-dropdown-list ${isOpen === 'Catalog' ? "w--open" : ""}`}
                                        id="w-dropdown-list-0"
                                        aria-labelledby="w-dropdown-toggle-0"
                                    >
                                        <div className="nav_top-bar hide-mobile-landscape">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={120}
                                                height="16.076351165771484"
                                                alt=""
                                                className="nav_top-bar_logo"
                                            />
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                alt=""
                                                cl-close-nav=""
                                                className="nav_top-bar_x"
                                            />
                                        </div>
                                        <div className="catalog_dropdown-item">
                                            <div className="nav_resources_dropdown is-hover">
                                                <a
                                                    href="/home/career-path"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6459f64833fa1f466669ce29_Vectors-Wrapper.svg"
                                                        loading="lazy"
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Career Paths</div>
                                                        <div className="nav_subtitle">
                                                            Launch or advance your career with curated collections
                                                            of courses, labs, and more.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="catalog_dropdown-item">
                                            <div className="nav_resources_dropdown is-hover">
                                                <a
                                                    href="/home/skill-path"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6459f64833fa1f466669ce29_Vectors-Wrapper.svg"
                                                        loading="lazy"
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Skill Paths</div>
                                                        <div className="nav_subtitle">
                                                            Launch or advance your career with curated collections
                                                            of courses, labs, and more.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="catalog_dropdown-item">
                                            <div className="nav_resources_dropdown is-hover">
                                                <a
                                                    href="/home/certifications"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645bff6b8011b935ffdc4f24_Exam.svg"
                                                        loading="lazy"
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Certification Prep</div>
                                                        <div className="nav_subtitle">
                                                            Prepare for and maintain leading cybersecurity
                                                            certifications
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="catalog_dropdown-item">
                                            <div className="nav_resources_dropdown is-hover">
                                                <a
                                                    href="/home/mitre-attack"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645bff6b5538eddcd9f4f19b_Chalkboard.svg"
                                                        loading="lazy"
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Mission Readiness</div>
                                                        <div className="nav_subtitle">
                                                            Learn how to detect and mitigate the latest threats
                                                            and vulnerabilities.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="catalog_dropdown-item">
                                            <div className="nav_resources_dropdown is-hover">
                                                <a
                                                    href="/home/catalog"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647447f1c78ce7bb4465e579_Article.svg"
                                                        loading="lazy"
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Browse the Catalog</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="catalog_dropdown-item">
                                            <div className="nav_resources_dropdown is-hover">
                                                <a
                                                    href="/home/instructor"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65c51c0275b0a34272cb9c68_icon-forum2.png"
                                                        loading="lazy"
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Instructors</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div
                                    data-hover="false"
                                    data-delay={0}
                                    data-w-id="56eccb58-4fa7-2e39-e988-8500e120c0b3"
                                    className="nav_link_dropdown-wrapper w-dropdown"
                                    onMouseEnter={() => handleMouseEnter("For-Individuals")}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick("For-Individuals")}
                                >
                                    <div
                                        className={`nav_link_dropdown-toggle w-dropdown-toggle ${isOpen === 'For-Individuals' ? "w--open" : ""}`}
                                        id="w-dropdown-toggle-1"
                                        aria-controls="w-dropdown-list-1"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <div className="nav_link-alt">For Individuals</div>
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645b477d89482a992ae754da_down-chevron.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <nav
                                        nav-style="nested"
                                        className={`nav_dropdown-wrapper w-dropdown-list ${isOpen === 'For-Individuals' ? "w--open" : ""}`}
                                        id="w-dropdown-list-1"
                                        aria-labelledby="w-dropdown-toggle-1"
                                    >
                                        <div className="nav_top-bar hide-mobile-landscape">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={120}
                                                height="16.076351165771484"
                                                alt=""
                                                className="nav_top-bar_logo"
                                            />
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                alt=""
                                                cl-close-nav=""
                                                className="nav_top-bar_x"
                                            />
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Study Guides"
                                            className="nav_resources_dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_dropdown-link w-dropdown-toggle"
                                                id="w-dropdown-toggle-2"
                                                aria-controls="w-dropdown-list-2"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/home/free-content"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759bcaeeea08d132530b15_ShieldCheck.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Free Access</div>
                                                        <div className="nav_subtitle">
                                                            Get a taste of the catalog with certification prep,
                                                            introductory courses, and more.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <nav
                                                className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list"
                                                id="w-dropdown-list-2"
                                                aria-labelledby="w-dropdown-toggle-2"
                                            />
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Study Guides"
                                            className="nav_resources_dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_dropdown-link w-dropdown-toggle"
                                                id="w-dropdown-toggle-3"
                                                aria-controls="w-dropdown-list-3"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/home/insiderPro"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759bd3e0efda06ad8a0d13_User.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Insider Pro</div>
                                                        <div className="nav_subtitle">
                                                            Everything you need to learn, practice, and prove your
                                                            cybersecurity skills.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <nav
                                                className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list"
                                                id="w-dropdown-list-3"
                                                aria-labelledby="w-dropdown-toggle-3"
                                            />
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Study Guides"
                                            className="nav_resources_dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_dropdown-link w-dropdown-toggle"
                                                id="w-dropdown-toggle-4"
                                                aria-controls="w-dropdown-list-4"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/home/success-stories"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6470e8772886adf856a7d389_Star.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Success Stories</div>
                                                        <div className="nav_subtitle" />
                                                    </div>
                                                </a>
                                            </div>
                                            <nav
                                                className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list"
                                                id="w-dropdown-list-4"
                                                aria-labelledby="w-dropdown-toggle-4"
                                            />
                                        </div>
                                    </nav>
                                </div>
                                <div
                                    data-hover="false"
                                    data-delay={0}
                                    className="nav_link_dropdown-wrapper w-dropdown"
                                    onMouseEnter={() => handleMouseEnter("For-Business")}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick("For-Business")}
                                >
                                    <div
                                        className={`nav_link_dropdown-toggle w-dropdown-toggle ${isOpen === 'For-Business' ? "w--open" : ""}`}
                                        id="w-dropdown-toggle-5"
                                        aria-controls="w-dropdown-list-5"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <div className="nav_link-alt">For Business</div>
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645b477d89482a992ae754da_down-chevron.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </div>
                                    <nav
                                        nav-style="nested"
                                        className={`nav_dropdown-wrapper w-dropdown-list ${isOpen === 'For-Business' ? "w--open" : ""}`}
                                        id="w-dropdown-list-5"
                                        aria-labelledby="w-dropdown-toggle-5"
                                    >
                                        <div className="nav_top-bar hide-mobile-landscape">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={120}
                                                height="16.076351165771484"
                                                alt=""
                                                className="nav_top-bar_logo"
                                            />
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                alt=""
                                                cl-close-nav=""
                                                className="nav_top-bar_x"
                                            />
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Teams Exclusive"
                                            className="nav_dropdown-item hide_nav-dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_resources_dropdown w-dropdown-toggle"
                                                id="w-dropdown-toggle-6"
                                                aria-controls="w-dropdown-list-6"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/business"
                                                    className="nav_dropdown-link_parent w-inline-block"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645bff6b88e6c7f29a688309_UsersThree.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Teams Exclusive</div>
                                                        <div className="nav_subtitle">
                                                            Upskill your team to better defend your organization
                                                            from attacks.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <nav
                                                className="nav_dropdown-child nav_dropdown-wrapper w-dropdown-list"
                                                id="w-dropdown-list-6"
                                                aria-labelledby="w-dropdown-toggle-6"
                                            >
                                                <div className="nav_top-bar hide-mobile-landscape">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                        loading="lazy"
                                                        width={120}
                                                        height="16.076351165771484"
                                                        alt=""
                                                        className="nav_top-bar_logo"
                                                    />
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        cl-close-nav=""
                                                        className="nav_top-bar_x"
                                                    />
                                                </div>
                                                <div
                                                    cl-close-trigger="Teams Exclusive"
                                                    className="nav_back-btn-wrapper"
                                                >
                                                    <div className="nav_back-btn">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646052a00d31bc5cef844f6d_Vectors-Wrapper.svg"
                                                            loading="lazy"
                                                            width="2.7692313194274902"
                                                            height={6}
                                                            alt=""
                                                            className="nav_back-icon"
                                                        />
                                                        <div className="text-size-normal">Back</div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-hover="false"
                                                    data-delay={0}
                                                    className="nav_dropdown-item w-dropdown"
                                                >
                                                    <div
                                                        className="nav_resources_dropdown w-dropdown-toggle"
                                                        id="w-dropdown-toggle-7"
                                                        aria-controls="w-dropdown-list-7"
                                                        aria-haspopup="menu"
                                                        aria-expanded="false"
                                                        role="button"
                                                        tabIndex={0}
                                                    >
                                                        <a
                                                            href="/cybrary-select"
                                                            className="nav_dropdown-link_parent w-inline-block"
                                                        >
                                                            <div className="nav_dropdown-content">
                                                                <div className="nav_link">Cybrary Select</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <nav
                                                        cl-category-destination="Cybrary Select"
                                                        className="nav_dropdown-child nav_dropdown-wrapper is-final w-dropdown-list"
                                                        id="w-dropdown-list-7"
                                                        aria-labelledby="w-dropdown-toggle-7"
                                                    />
                                                </div>
                                                <div
                                                    data-hover="false"
                                                    data-delay={0}
                                                    className="nav_dropdown-item w-dropdown"
                                                >
                                                    <div
                                                        className="nav_dropdown-link w-dropdown-toggle"
                                                        id="w-dropdown-toggle-8"
                                                        aria-controls="w-dropdown-list-8"
                                                        aria-haspopup="menu"
                                                        aria-expanded="false"
                                                        role="button"
                                                        tabIndex={0}
                                                    >
                                                        <a
                                                            href="/cybrary-live"
                                                            className="nav_dropdown-link_wrapper w-inline-block"
                                                        >
                                                            <div className="nav_dropdown-content">
                                                                <div className="nav_link">Cybrary Live</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <nav
                                                        className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list"
                                                        id="w-dropdown-list-8"
                                                        aria-labelledby="w-dropdown-toggle-8"
                                                    />
                                                </div>
                                            </nav>
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Study Guides"
                                            className="nav_resources_dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_dropdown-link w-dropdown-toggle"
                                                id="w-dropdown-toggle-9"
                                                aria-controls="w-dropdown-list-9"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/home/business"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759bdd61f63e4571f51ef2_UsersThree.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">For Teams</div>
                                                        <div className="nav_subtitle">
                                                            Build your team’s cybersecurity skills and achieve new
                                                            certifications, all in one place
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <nav
                                                className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list"
                                                id="w-dropdown-list-9"
                                                aria-labelledby="w-dropdown-toggle-9"
                                            />
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Study Guides"
                                            className="nav_resources_dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_dropdown-link w-dropdown-toggle"
                                                id="w-dropdown-toggle-10"
                                                aria-controls="w-dropdown-list-10"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/home/government"
                                                    className="nav_dropdown-link_wrapper w-inline-block"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759be5f36e14ee9b8e2cbd_Bank.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">For Government</div>
                                                        <div className="nav_subtitle">
                                                            Support your organization with a custom plan that
                                                            works for your organization.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <nav
                                                className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list"
                                                id="w-dropdown-list-10"
                                                aria-labelledby="w-dropdown-toggle-10"
                                            />
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Business Resources"
                                            data-w-id="ba7747db-7afd-e8d4-348e-10f004efe483"
                                            className="nav_resources_dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_resources_dropdown w-dropdown-toggle"
                                                id="w-dropdown-toggle-11"
                                                aria-controls="w-dropdown-list-11"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/home/industry"
                                                    className="nav_dropdown-link_parent w-inline-block"
                                                >
                                                    <div className="nav_dropdown-icon w-embed">
                                                        <svg
                                                            width={41}
                                                            height={40}
                                                            viewBox="0 0 41 40"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M20.668 21.25C20.668 21.5815 20.5363 21.8995 20.3019 22.1339C20.0674 22.3683 19.7495 22.5 19.418 22.5H11.918C11.5864 22.5 11.2685 22.3683 11.0341 22.1339C10.7997 21.8995 10.668 21.5815 10.668 21.25C10.668 20.9185 10.7997 20.6005 11.0341 20.3661C11.2685 20.1317 11.5864 20 11.918 20H19.418C19.7495 20 20.0674 20.1317 20.3019 20.3661C20.5363 20.6005 20.668 20.9185 20.668 21.25ZM19.418 15H11.918C11.5864 15 11.2685 15.1317 11.0341 15.3661C10.7997 15.6005 10.668 15.9185 10.668 16.25C10.668 16.5815 10.7997 16.8995 11.0341 17.1339C11.2685 17.3683 11.5864 17.5 11.918 17.5H19.418C19.7495 17.5 20.0674 17.3683 20.3019 17.1339C20.5363 16.8995 20.668 16.5815 20.668 16.25C20.668 15.9185 20.5363 15.6005 20.3019 15.3661C20.0674 15.1317 19.7495 15 19.418 15ZM36.918 25.2297V35C36.92 35.2204 36.8636 35.4373 36.7547 35.6289C36.6458 35.8205 36.4882 35.9799 36.2979 36.091C36.1075 36.202 35.8912 36.2608 35.6708 36.2612C35.4504 36.2617 35.2338 36.2039 35.043 36.0938L31.293 33.9469L27.543 36.0938C27.3521 36.2039 27.1355 36.2617 26.9151 36.2612C26.6948 36.2608 26.4784 36.202 26.2881 36.091C26.0977 35.9799 25.9401 35.8205 25.8312 35.6289C25.7223 35.4373 25.666 35.2204 25.668 35V31.25H6.91797C6.25493 31.25 5.61904 30.9866 5.1502 30.5178C4.68136 30.0489 4.41797 29.413 4.41797 28.75V8.75C4.41797 8.08696 4.68136 7.45107 5.1502 6.98223C5.61904 6.51339 6.25493 6.25 6.91797 6.25H34.418C35.081 6.25 35.7169 6.51339 36.1857 6.98223C36.6546 7.45107 36.918 8.08696 36.918 8.75V13.5203C37.7081 14.277 38.337 15.1858 38.7666 16.192C39.1962 17.1982 39.4176 18.2809 39.4176 19.375C39.4176 20.4691 39.1962 21.5518 38.7666 22.558C38.337 23.5642 37.7081 24.473 36.918 25.2297ZM25.668 28.75V25.2297C24.3058 23.916 23.4449 22.168 23.2339 20.2874C23.0229 18.4067 23.4749 16.5114 24.5121 14.9285C25.5492 13.3456 27.1063 12.1743 28.9148 11.6168C30.7233 11.0594 32.6696 11.1507 34.418 11.875V8.75H6.91797V28.75H25.668ZM34.418 26.875C33.428 27.2886 32.3658 27.5016 31.293 27.5016C30.2201 27.5016 29.1579 27.2886 28.168 26.875V32.8469L30.668 31.4156C30.8569 31.3076 31.0707 31.2508 31.2883 31.2508C31.5059 31.2508 31.7197 31.3076 31.9086 31.4156L34.4086 32.8469L34.418 26.875ZM36.918 19.375C36.918 18.2625 36.5881 17.1749 35.97 16.2499C35.3519 15.3249 34.4734 14.6039 33.4456 14.1782C32.4177 13.7524 31.2867 13.641 30.1956 13.8581C29.1044 14.0751 28.1022 14.6109 27.3155 15.3975C26.5288 16.1842 25.9931 17.1865 25.7761 18.2776C25.559 19.3688 25.6704 20.4998 26.0961 21.5276C26.5219 22.5554 27.2429 23.4339 28.1679 24.052C29.0929 24.6701 30.1804 25 31.293 25C32.0317 25 32.7631 24.8545 33.4456 24.5718C34.128 24.2891 34.7481 23.8748 35.2704 23.3525C35.7928 22.8301 36.2071 22.21 36.4898 21.5276C36.7725 20.8451 36.918 20.1137 36.918 19.375Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Framework Alignment</div>
                                                        <div className="nav_subtitle">
                                                            Learn how Cybrary aligns to established industry
                                                            frameworks
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <nav
                                                nav-style="outline"
                                                className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list"
                                                id="w-dropdown-list-11"
                                                aria-labelledby="w-dropdown-toggle-11"
                                            />
                                        </div>
                                        <div
                                            data-hover="false"
                                            data-delay={0}
                                            cl-close-target="Business Resources"
                                            data-w-id="56eccb58-4fa7-2e39-e988-8500e120c0f3"
                                            className="nav_resources_dropdown-item w-dropdown"
                                        >
                                            <div
                                                className="nav_resources_dropdown w-dropdown-toggle"
                                                id="w-dropdown-toggle-12"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <a
                                                    href="/home/business-resource"
                                                    className="nav_dropdown-link_parent w-inline-block"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647447a7ce2f02e8bd2e27a4_Buildings.svg"
                                                        loading="lazy"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                        className="nav_dropdown-icon"
                                                    />
                                                    <div className="nav_dropdown-content">
                                                        <div className="nav_link-alt">Business Resources</div>
                                                        <div className="nav_subtitle">
                                                            Learn how Cybrary can help your team thrive.
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <a
                                    href="/home/upgrade"
                                    data="pricing-link"
                                    data-w-id="56eccb58-4fa7-2e39-e988-8500e120c1c6"
                                    className="nav_link w-nav-link"
                                >
                                    Pricing
                                </a>
                            </div>
                            <div
                                cb-element="logged-out"
                                className="nav_buttons-wrap logged-out"
                                style={{ display: "flex" }}
                            >
                                <a href="/home/demo-request" className="button_outline-pink w-button">
                                    Get a Cybrary for Business Demo
                                </a>
                                <a
                                    cb-element="trigger-register-modal"
                                    href="#"
                                    className="button-5 w-button"
                                    onClick={() => setIsOpenSignIn(true)}
                                >
                                    Sign up
                                </a>
                                <a
                                    href="https://app.cybrary.it/login"
                                    className="nav_link-2 is-nested w-button"
                                >
                                    Login
                                </a>
                            </div>
                        </nav>
                        <div className="nav-right_wrapper">
                            <div
                                data-hover="true"
                                data-delay={200}
                                cb-element="nav-profile"
                                className="nav_profile w-dropdown"
                                style={{ display: "none" }}
                            >
                                <div
                                    className="nav_profile_toggle w-dropdown-toggle"
                                    id="w-dropdown-toggle-13"
                                    aria-controls="w-dropdown-list-13"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <img
                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bc9b6485b17ee470cf17a_UserCircle.svg"
                                        loading="lazy"
                                        alt=""
                                        className="nav_profile_icon"
                                    />
                                    <img
                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bebc1c1b1c9b65da2b2fe_User%20icon%20mobile.svg"
                                        loading="lazy"
                                        alt=""
                                        className="nav_profile_icon-mobile"
                                    />
                                </div>
                                <nav
                                    className="nav_profile_list w-dropdown-list"
                                    id="w-dropdown-list-13"
                                    aria-labelledby="w-dropdown-toggle-13"
                                >
                                    <div
                                        cb-element="logged-in"
                                        className="nav_profile_wrap"
                                        style={{ display: "none" }}
                                    >
                                        <a
                                            href="https://app.cybrary.it/"
                                            className="nav_profile_link has-border w-inline-block"
                                            tabIndex={0}
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcb70b736b95083973672_House.svg"
                                                loading="lazy"
                                                alt=""
                                                className="nav_profile_link-icon"
                                            />
                                            <div className="text-size-small">Dashboard</div>
                                        </a>
                                        <a
                                            href="https://app.cybrary.it/profile"
                                            className="nav_profile_link w-inline-block"
                                            tabIndex={0}
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bc9b6485b17ee470cf17a_UserCircle.svg"
                                                loading="lazy"
                                                alt=""
                                                className="nav_profile_link-icon"
                                            />
                                            <div className="text-size-small">Profile</div>
                                        </a>
                                        <a
                                            href="https://app.cybrary.it/settings/membership"
                                            className="nav_profile_link w-inline-block"
                                            tabIndex={0}
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcc05f5933b13cf51b80f_ArrowsClockwise.svg"
                                                loading="lazy"
                                                alt=""
                                                className="nav_profile_link-icon"
                                            />
                                            <div className="text-size-small">Membership Settings</div>
                                        </a>
                                        <a
                                            href="https://app.cybrary.it/settings/account"
                                            className="nav_profile_link w-inline-block"
                                            tabIndex={0}
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcc1b45e22488bb0ac5b7_UserGear.svg"
                                                loading="lazy"
                                                alt=""
                                                className="nav_profile_link-icon"
                                            />
                                            <div className="text-size-small">Account Settings</div>
                                        </a>
                                        <a
                                            href="https://help.cybrary.it/hc/en-us"
                                            className="nav_profile_link has-border w-inline-block"
                                            tabIndex={0}
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d73253081f95e7114665d_Question.svg"
                                                loading="lazy"
                                                alt=""
                                                className="nav_profile_link-icon"
                                            />
                                            <div className="text-size-small">Support</div>
                                        </a>
                                        <a
                                            href="https://app.cybrary.it/logout"
                                            className="nav_profile_link w-inline-block"
                                            tabIndex={0}
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcc474735f531feac6d0c_SignOut.svg"
                                                loading="lazy"
                                                alt=""
                                                className="nav_profile_link-icon"
                                            />
                                            <div className="text-size-small">Logout</div>
                                        </a>
                                    </div>
                                    <div
                                        cb-element="logged-out"
                                        className="nav_profile_wrap not-loggedin"
                                        style={{ display: "flex" }}
                                    >
                                        <div className="text-align-center">
                                            Start learning with free on-demand video training
                                        </div>
                                        <a
                                            cb-element="trigger-register-modal"
                                            href="#"
                                            className="button w-button"
                                            tabIndex={0}
                                        >
                                            Sign up
                                        </a>
                                        <a
                                            href="https://app.cybrary.it/login"
                                            className="nav_link w-button"
                                            tabIndex={0}
                                        >
                                            Login
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            <div className="nav-right_wrapper">
                                <div
                                    data-hover="true"
                                    data-delay={200}
                                    cb-element="nav-profile"
                                    className="nav_profile w-dropdown"
                                    style={{ display: "flex" }}
                                >
                                    <div
                                        className="nav_profile_toggle w-dropdown-toggle"
                                        id="w-dropdown-toggle-13"
                                        aria-controls="w-dropdown-list-13"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bc9b6485b17ee470cf17a_UserCircle.svg"
                                            loading="lazy"
                                            alt=""
                                            className="nav_profile_icon"
                                        />
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bebc1c1b1c9b65da2b2fe_User%20icon%20mobile.svg"
                                            loading="lazy"
                                            alt=""
                                            className="nav_profile_icon-mobile"
                                        />
                                    </div>
                                    <nav
                                        className="nav_profile_list w-dropdown-list"
                                        id="w-dropdown-list-13"
                                        aria-labelledby="w-dropdown-toggle-13"
                                    >
                                        <div
                                            cb-element="logged-in"
                                            className="nav_profile_wrap"
                                            style={{ display: "none" }}
                                        >
                                            <a
                                                href="https://app.cybrary.it/"
                                                className="nav_profile_link has-border w-inline-block"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcb70b736b95083973672_House.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="nav_profile_link-icon"
                                                />
                                                <div className="text-size-small">Dashboard</div>
                                            </a>
                                            <a
                                                href="https://app.cybrary.it/profile"
                                                className="nav_profile_link w-inline-block"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bc9b6485b17ee470cf17a_UserCircle.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="nav_profile_link-icon"
                                                />
                                                <div className="text-size-small">Profile</div>
                                            </a>
                                            <a
                                                href="https://app.cybrary.it/settings/membership"
                                                className="nav_profile_link w-inline-block"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcc05f5933b13cf51b80f_ArrowsClockwise.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="nav_profile_link-icon"
                                                />
                                                <div className="text-size-small">Membership Settings</div>
                                            </a>
                                            <a
                                                href="https://app.cybrary.it/settings/account"
                                                className="nav_profile_link w-inline-block"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcc1b45e22488bb0ac5b7_UserGear.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="nav_profile_link-icon"
                                                />
                                                <div className="text-size-small">Account Settings</div>
                                            </a>
                                            <a
                                                href="https://help.cybrary.it/hc/en-us"
                                                className="nav_profile_link has-border w-inline-block"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d73253081f95e7114665d_Question.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="nav_profile_link-icon"
                                                />
                                                <div className="text-size-small">Support</div>
                                            </a>
                                            <a
                                                href="https://app.cybrary.it/logout"
                                                className="nav_profile_link w-inline-block"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646bcc474735f531feac6d0c_SignOut.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="nav_profile_link-icon"
                                                />
                                                <div className="text-size-small">Logout</div>
                                            </a>
                                        </div>
                                        <div
                                            cb-element="logged-out"
                                            className="nav_profile_wrap not-loggedin"
                                            style={{ display: "flex" }}
                                        >
                                            <div className="text-align-center">
                                                Start learning with free on-demand video training
                                            </div>
                                            <a
                                                cb-element="trigger-register-modal"
                                                href="#"
                                                className="button w-button"
                                                tabIndex={0}
                                            >
                                                Sign up
                                            </a>
                                            <a
                                                href="https://app.cybrary.it/login"
                                                className="nav_link w-button"
                                                tabIndex={0}
                                            >
                                                Login
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                                <div
                                    className="nav_menu-btn w-nav-button"
                                    style={{ WebkitUserSelect: "text" }}
                                    aria-label="menu"
                                    role="button"
                                    tabIndex={0}
                                    aria-controls="w-nav-overlay-0"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    onClick={() => IsSetMenu(true)}
                                >
                                    <div className="nav_btn-wrapper">
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64606ea1ac4c2f8714aa5609_nav-hamburger.svg"
                                            loading="lazy"
                                            alt=""
                                            className="nav_btn-icon"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>
                    <div className="custom-styles-nav hide w-embed w-script">
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    '\n.nav_list-link::after {\n    content: url(\'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64606d5728ba5a65bd1587c5_right-chevron-silver.svg\');\n    display: inline-block;\n    height: 100%;\n    width: 0rem;\n    padding-right: 0.5rem;\n    justify-self: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: 0.5rem;\n    bottom: 2px;\n    position: relative;\n}\n.nav_logo-wrapper {\n    display: inline-block !important;\n}\n\n@media screen and (min-width: 992px) {\n.nav_logo-wrapper {\n    display: inline-block !important;\n}\n\n\t.nav_list-link::after {\n    content: url(\'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644a423a3fa9a8330ccbe751_Vectors-Wrapper.svg\');\n  }\n\t.nav_list-item:hover .nav_list-link::after {\n  \tdisplay: inline-block;\n  }  \n}\n\n\n@media screen and (max-width:768px) {\n[nav-style="outline"] .nav_dropdown-item:not(:last-child),[nav-style="outline"] .nav_link:not(:last-child) {\n\tborder-bottom: 1px solid rgba(255,255,255,0.1);\n}\n[nav-style="nested"] .nav_dropdown-item:not(:last-child),[nav-style="nested"] .nav_link:not(:last-child) {\n\tborder-bottom: none;\n}\n}\n\n@media screen and (min-width: 992px) {\n.nav_dropdown-item:hover {\nbackground: rgba(255, 255, 255, 0.1);\n}\n.nav_dropdown:hover {\nbackground: rgba(255, 255, 255, 0.1);\n}\n.nav_dropdown-link:hover {\nbackground: rgba(255, 255, 255, 0.1);\n}\n.nav_dropdown-item_level3:hover {\nbackground: rgba(255, 255, 255, 0.1);\n}\n}\n'
                            }}
                        />
                    </div>
                    <div className="banner">
                        <div className="padding-global">
                            <div className="container-large">
                                <div className="banner_component">
                                    <div className="banner_text-wrapper">
                                        <div className="text-align-center text-size-small is-mobile-smaller">
                                            Amazon Web Services is currently experiencing an outage that
                                            may impact your experience on the Cybrary application. We
                                            apologize for any inconvenience and will be monitoring this
                                            situation closely
                                        </div>
                                    </div>
                                    <div className="banner_close-button-wrapper">
                                        <div className="w-embed">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.657 12.071L5 6.414L6.414 5L12.071 10.657L17.728 5L19.142 6.414L13.485 12.071L19.142 17.728L17.728 19.142L12.071 13.485L6.414 19.142L5 17.728L10.657 12.071Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="html-embed w-embed w-script" />
                        </div>
                    </div>

                    {/* For Mobile Views */}
                    {IsMenu &&
                        <div
                            className="w-nav-overlay"
                            data-wf-ignore=""
                            id="w-nav-overlay-0"
                            style={{ height: "6007.12px", display: "block" }}
                        >
                            <nav
                                role="navigation"
                                className="nav_menu w-nav-menu"
                                style={{
                                    transition: "all, transform 400ms",
                                    transform: "translateY(0px) translateX(0px)"
                                }}
                                data-nav-menu-open=""
                            >
                                <div nav-style="outline" className="nav_links-wrapper">
                                    <div className="nav_top-bar is-primary">
                                        <a href="/" aria-current="page" className="w-inline-block w--current">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={120}
                                                height="16.076351165771484"
                                                alt=""
                                                className="nav_top-bar_logo"
                                            />
                                        </a>
                                        <a href="#" className="w-inline-block">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                alt=""
                                                cl-close-nav="Menu"
                                                className="nav_top-bar_x"
                                                onClick={() => IsSetMenu(false)}
                                            />
                                        </a>
                                    </div>
                                    <div
                                        data-delay={0}
                                        data-hover="false"
                                        className="nav_link_dropdown-wrapper w-dropdown w--nav-dropdown-open"
                                        style={{}}
                                    >
                                        <div
                                            className="nav_link_dropdown-toggle w-dropdown-toggle w--nav-dropdown-toggle-open"
                                            id="w-dropdown-toggle-0"
                                            aria-controls="w-dropdown-list-0"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
                                            role="button"
                                            tabIndex={0}
                                        >
                                            <div className="nav_link-alt">Catalog</div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645b477d89482a992ae754da_down-chevron.svg"
                                                alt=""
                                            />
                                        </div>
                                        <nav
                                            nav-style="nested"
                                            className="nav_dropdown-wrapper w-dropdown-list w--nav-dropdown-list-open"
                                            id="w-dropdown-list-0"
                                            aria-labelledby="w-dropdown-toggle-0"
                                        >
                                            <div className="nav_top-bar hide-mobile-landscape">
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                    loading="lazy"
                                                    width={120}
                                                    height="16.076351165771484"
                                                    alt=""
                                                    className="nav_top-bar_logo"
                                                />
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                    loading="lazy"
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                    cl-close-nav=""
                                                    className="nav_top-bar_x"
                                                />
                                            </div>
                                            <div className="catalog_dropdown-item">
                                                <div className="nav_resources_dropdown is-hover">
                                                    <a
                                                        href="/career-path"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                        tabIndex={0}
                                                    >
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6459f64833fa1f466669ce29_Vectors-Wrapper.svg"
                                                            loading="lazy"
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Career Paths</div>
                                                            <div className="nav_subtitle">
                                                                Launch or advance your career with curated collections of
                                                                courses, labs, and more.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="catalog_dropdown-item">
                                                <div className="nav_resources_dropdown is-hover">
                                                    <a
                                                        href="/skill-paths"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                        tabIndex={0}
                                                    >
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6459f64833fa1f466669ce29_Vectors-Wrapper.svg"
                                                            loading="lazy"
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Skill Paths</div>
                                                            <div className="nav_subtitle">
                                                                Launch or advance your career with curated collections of
                                                                courses, labs, and more.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="catalog_dropdown-item">
                                                <div className="nav_resources_dropdown is-hover">
                                                    <a
                                                        href="/certifications"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                        tabIndex={0}
                                                    >
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645bff6b8011b935ffdc4f24_Exam.svg"
                                                            loading="lazy"
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Certification Prep</div>
                                                            <div className="nav_subtitle">
                                                                Prepare for and maintain leading cybersecurity
                                                                certifications
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="catalog_dropdown-item">
                                                <div className="nav_resources_dropdown is-hover">
                                                    <a
                                                        href="/mitre-attack"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                        tabIndex={0}
                                                    >
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645bff6b5538eddcd9f4f19b_Chalkboard.svg"
                                                            loading="lazy"
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Mission Readiness</div>
                                                            <div className="nav_subtitle">
                                                                Learn how to detect and mitigate the latest threats and
                                                                vulnerabilities.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="catalog_dropdown-item">
                                                <div className="nav_resources_dropdown is-hover">
                                                    <a
                                                        href="/catalog"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                        tabIndex={0}
                                                    >
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647447f1c78ce7bb4465e579_Article.svg"
                                                            loading="lazy"
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Browse the Catalog</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="catalog_dropdown-item">
                                                <div className="nav_resources_dropdown is-hover">
                                                    <a
                                                        href="/instructor"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                        tabIndex={0}
                                                    >
                                                        <img
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65c51c0275b0a34272cb9c68_icon-forum2.png"
                                                            loading="lazy"
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Instructors</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                    <div
                                        data-hover="false"
                                        data-delay={0}
                                        data-w-id="56eccb58-4fa7-2e39-e988-8500e120c0b3"
                                        className="nav_link_dropdown-wrapper w-dropdown w--nav-dropdown-open"
                                        style={{}}
                                    >
                                        <div
                                            className="nav_link_dropdown-toggle w-dropdown-toggle w--nav-dropdown-toggle-open"
                                            id="w-dropdown-toggle-1"
                                            aria-controls="w-dropdown-list-1"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
                                            role="button"
                                            tabIndex={0}
                                        >
                                            <div className="nav_link-alt">For Individuals</div>
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645b477d89482a992ae754da_down-chevron.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <nav
                                            nav-style="nested"
                                            className="nav_dropdown-wrapper w-dropdown-list w--nav-dropdown-list-open"
                                            id="w-dropdown-list-1"
                                            aria-labelledby="w-dropdown-toggle-1"
                                        >
                                            <div className="nav_top-bar hide-mobile-landscape">
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                    loading="lazy"
                                                    width={120}
                                                    height="16.076351165771484"
                                                    alt=""
                                                    className="nav_top-bar_logo"
                                                />
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                    loading="lazy"
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                    cl-close-nav=""
                                                    className="nav_top-bar_x"
                                                />
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Study Guides"
                                                className="nav_resources_dropdown-item w-dropdown w--nav-dropdown-open"
                                                style={{}}
                                            >
                                                <div
                                                    className="nav_dropdown-link w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-2"
                                                    aria-controls="w-dropdown-list-2"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/free-content"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                    >
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759bcaeeea08d132530b15_ShieldCheck.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Free Access</div>
                                                            <div className="nav_subtitle">
                                                                Get a taste of the catalog with certification prep,
                                                                introductory courses, and more.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <nav
                                                    className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list w--nav-dropdown-list-open"
                                                    id="w-dropdown-list-2"
                                                    aria-labelledby="w-dropdown-toggle-2"
                                                />
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Study Guides"
                                                className="nav_resources_dropdown-item w-dropdown w--nav-dropdown-open"
                                            >
                                                <div
                                                    className="nav_dropdown-link w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-3"
                                                    aria-controls="w-dropdown-list-3"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/cybrary-insider-pro"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                    >
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759bd3e0efda06ad8a0d13_User.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Insider Pro</div>
                                                            <div className="nav_subtitle">
                                                                Everything you need to learn, practice, and prove your
                                                                cybersecurity skills.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <nav
                                                    className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list w--nav-dropdown-list-open"
                                                    id="w-dropdown-list-3"
                                                    aria-labelledby="w-dropdown-toggle-3"
                                                />
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Study Guides"
                                                className="nav_resources_dropdown-item w-dropdown w--nav-dropdown-open"
                                            >
                                                <div
                                                    className="nav_dropdown-link w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-4"
                                                    aria-controls="w-dropdown-list-4"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/success-stories"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                    >
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6470e8772886adf856a7d389_Star.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Success Stories</div>
                                                            <div className="nav_subtitle" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <nav
                                                    className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list w--nav-dropdown-list-open"
                                                    id="w-dropdown-list-4"
                                                    aria-labelledby="w-dropdown-toggle-4"
                                                />
                                            </div>
                                        </nav>
                                    </div>
                                    <div
                                        data-hover="false"
                                        data-delay={0}
                                        className="nav_link_dropdown-wrapper w-dropdown w--nav-dropdown-open"
                                        style={{}}
                                    >
                                        <div
                                            className="nav_link_dropdown-toggle w-dropdown-toggle w--nav-dropdown-toggle-open"
                                            id="w-dropdown-toggle-5"
                                            aria-controls="w-dropdown-list-5"
                                            aria-haspopup="menu"
                                            aria-expanded="false"
                                            role="button"
                                            tabIndex={0}
                                        >
                                            <div className="nav_link-alt">For Business</div>
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645b477d89482a992ae754da_down-chevron.svg"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <nav
                                            nav-style="nested"
                                            className="nav_dropdown-wrapper w-dropdown-list w--nav-dropdown-list-open"
                                            id="w-dropdown-list-5"
                                            aria-labelledby="w-dropdown-toggle-5"
                                        >
                                            <div className="nav_top-bar hide-mobile-landscape">
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                    loading="lazy"
                                                    width={120}
                                                    height="16.076351165771484"
                                                    alt=""
                                                    className="nav_top-bar_logo"
                                                />
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                    loading="lazy"
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                    cl-close-nav=""
                                                    className="nav_top-bar_x"
                                                />
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Teams Exclusive"
                                                className="nav_dropdown-item hide_nav-dropdown-item w-dropdown w--nav-dropdown-open"
                                            >
                                                <div
                                                    className="nav_resources_dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-6"
                                                    aria-controls="w-dropdown-list-6"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/business"
                                                        className="nav_dropdown-link_parent w-inline-block"
                                                    >
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645bff6b88e6c7f29a688309_UsersThree.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Teams Exclusive</div>
                                                            <div className="nav_subtitle">
                                                                Upskill your team to better defend your organization from
                                                                attacks.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <nav
                                                    className="nav_dropdown-child nav_dropdown-wrapper w-dropdown-list w--nav-dropdown-list-open"
                                                    id="w-dropdown-list-6"
                                                    aria-labelledby="w-dropdown-toggle-6"
                                                >
                                                    <div className="nav_top-bar hide-mobile-landscape">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603abf9e8b1cbd2a4cc808_Vectors-Wrapper.svg"
                                                            loading="lazy"
                                                            width={120}
                                                            height="16.076351165771484"
                                                            alt=""
                                                            className="nav_top-bar_logo"
                                                        />
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64603ac0191f0817ca0ec0c2_Vectors-Wrapper.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            cl-close-nav=""
                                                            className="nav_top-bar_x"
                                                        />
                                                    </div>
                                                    <div
                                                        cl-close-trigger="Teams Exclusive"
                                                        className="nav_back-btn-wrapper"
                                                    >
                                                        <div className="nav_back-btn">
                                                            <img
                                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646052a00d31bc5cef844f6d_Vectors-Wrapper.svg"
                                                                loading="lazy"
                                                                width="2.7692313194274902"
                                                                height={6}
                                                                alt=""
                                                                className="nav_back-icon"
                                                            />
                                                            <div className="text-size-normal">Back</div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-hover="false"
                                                        data-delay={0}
                                                        className="nav_dropdown-item w-dropdown w--nav-dropdown-open"
                                                    >
                                                        <div
                                                            className="nav_resources_dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                            id="w-dropdown-toggle-7"
                                                            aria-controls="w-dropdown-list-7"
                                                            aria-haspopup="menu"
                                                            aria-expanded="false"
                                                            role="button"
                                                            tabIndex={0}
                                                        >
                                                            <a
                                                                href="/cybrary-select"
                                                                className="nav_dropdown-link_parent w-inline-block"
                                                            >
                                                                <div className="nav_dropdown-content">
                                                                    <div className="nav_link">Cybrary Select</div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <nav
                                                            cl-category-destination="Cybrary Select"
                                                            className="nav_dropdown-child nav_dropdown-wrapper is-final w-dropdown-list w--nav-dropdown-list-open"
                                                            id="w-dropdown-list-7"
                                                            aria-labelledby="w-dropdown-toggle-7"
                                                        />
                                                    </div>
                                                    <div
                                                        data-hover="false"
                                                        data-delay={0}
                                                        className="nav_dropdown-item w-dropdown w--nav-dropdown-open"
                                                    >
                                                        <div
                                                            className="nav_dropdown-link w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                            id="w-dropdown-toggle-8"
                                                            aria-controls="w-dropdown-list-8"
                                                            aria-haspopup="menu"
                                                            aria-expanded="false"
                                                            role="button"
                                                            tabIndex={0}
                                                        >
                                                            <a
                                                                href="/cybrary-live"
                                                                className="nav_dropdown-link_wrapper w-inline-block"
                                                            >
                                                                <div className="nav_dropdown-content">
                                                                    <div className="nav_link">Cybrary Live</div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <nav
                                                            className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list w--nav-dropdown-list-open"
                                                            id="w-dropdown-list-8"
                                                            aria-labelledby="w-dropdown-toggle-8"
                                                        />
                                                    </div>
                                                </nav>
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Study Guides"
                                                className="nav_resources_dropdown-item w-dropdown w--nav-dropdown-open"
                                            >
                                                <div
                                                    className="nav_dropdown-link w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-9"
                                                    aria-controls="w-dropdown-list-9"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/business"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                    >
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759bdd61f63e4571f51ef2_UsersThree.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">For Teams</div>
                                                            <div className="nav_subtitle">
                                                                Build your team’s cybersecurity skills and achieve new
                                                                certifications, all in one place
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <nav
                                                    className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list w--nav-dropdown-list-open"
                                                    id="w-dropdown-list-9"
                                                    aria-labelledby="w-dropdown-toggle-9"
                                                />
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Study Guides"
                                                className="nav_resources_dropdown-item w-dropdown w--nav-dropdown-open"
                                            >
                                                <div
                                                    className="nav_dropdown-link w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-10"
                                                    aria-controls="w-dropdown-list-10"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/government"
                                                        className="nav_dropdown-link_wrapper w-inline-block"
                                                    >
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64759be5f36e14ee9b8e2cbd_Bank.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">For Government</div>
                                                            <div className="nav_subtitle">
                                                                Support your organization with a custom plan that works for
                                                                your organization.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <nav
                                                    className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list w--nav-dropdown-list-open"
                                                    id="w-dropdown-list-10"
                                                    aria-labelledby="w-dropdown-toggle-10"
                                                />
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Business Resources"
                                                data-w-id="ba7747db-7afd-e8d4-348e-10f004efe483"
                                                className="nav_resources_dropdown-item w-dropdown w--nav-dropdown-open"
                                            >
                                                <div
                                                    className="nav_resources_dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-11"
                                                    aria-controls="w-dropdown-list-11"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/industry"
                                                        className="nav_dropdown-link_parent w-inline-block"
                                                    >
                                                        <div className="nav_dropdown-icon w-embed">
                                                            <svg
                                                                width={41}
                                                                height={40}
                                                                viewBox="0 0 41 40"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M20.668 21.25C20.668 21.5815 20.5363 21.8995 20.3019 22.1339C20.0674 22.3683 19.7495 22.5 19.418 22.5H11.918C11.5864 22.5 11.2685 22.3683 11.0341 22.1339C10.7997 21.8995 10.668 21.5815 10.668 21.25C10.668 20.9185 10.7997 20.6005 11.0341 20.3661C11.2685 20.1317 11.5864 20 11.918 20H19.418C19.7495 20 20.0674 20.1317 20.3019 20.3661C20.5363 20.6005 20.668 20.9185 20.668 21.25ZM19.418 15H11.918C11.5864 15 11.2685 15.1317 11.0341 15.3661C10.7997 15.6005 10.668 15.9185 10.668 16.25C10.668 16.5815 10.7997 16.8995 11.0341 17.1339C11.2685 17.3683 11.5864 17.5 11.918 17.5H19.418C19.7495 17.5 20.0674 17.3683 20.3019 17.1339C20.5363 16.8995 20.668 16.5815 20.668 16.25C20.668 15.9185 20.5363 15.6005 20.3019 15.3661C20.0674 15.1317 19.7495 15 19.418 15ZM36.918 25.2297V35C36.92 35.2204 36.8636 35.4373 36.7547 35.6289C36.6458 35.8205 36.4882 35.9799 36.2979 36.091C36.1075 36.202 35.8912 36.2608 35.6708 36.2612C35.4504 36.2617 35.2338 36.2039 35.043 36.0938L31.293 33.9469L27.543 36.0938C27.3521 36.2039 27.1355 36.2617 26.9151 36.2612C26.6948 36.2608 26.4784 36.202 26.2881 36.091C26.0977 35.9799 25.9401 35.8205 25.8312 35.6289C25.7223 35.4373 25.666 35.2204 25.668 35V31.25H6.91797C6.25493 31.25 5.61904 30.9866 5.1502 30.5178C4.68136 30.0489 4.41797 29.413 4.41797 28.75V8.75C4.41797 8.08696 4.68136 7.45107 5.1502 6.98223C5.61904 6.51339 6.25493 6.25 6.91797 6.25H34.418C35.081 6.25 35.7169 6.51339 36.1857 6.98223C36.6546 7.45107 36.918 8.08696 36.918 8.75V13.5203C37.7081 14.277 38.337 15.1858 38.7666 16.192C39.1962 17.1982 39.4176 18.2809 39.4176 19.375C39.4176 20.4691 39.1962 21.5518 38.7666 22.558C38.337 23.5642 37.7081 24.473 36.918 25.2297ZM25.668 28.75V25.2297C24.3058 23.916 23.4449 22.168 23.2339 20.2874C23.0229 18.4067 23.4749 16.5114 24.5121 14.9285C25.5492 13.3456 27.1063 12.1743 28.9148 11.6168C30.7233 11.0594 32.6696 11.1507 34.418 11.875V8.75H6.91797V28.75H25.668ZM34.418 26.875C33.428 27.2886 32.3658 27.5016 31.293 27.5016C30.2201 27.5016 29.1579 27.2886 28.168 26.875V32.8469L30.668 31.4156C30.8569 31.3076 31.0707 31.2508 31.2883 31.2508C31.5059 31.2508 31.7197 31.3076 31.9086 31.4156L34.4086 32.8469L34.418 26.875ZM36.918 19.375C36.918 18.2625 36.5881 17.1749 35.97 16.2499C35.3519 15.3249 34.4734 14.6039 33.4456 14.1782C32.4177 13.7524 31.2867 13.641 30.1956 13.8581C29.1044 14.0751 28.1022 14.6109 27.3155 15.3975C26.5288 16.1842 25.9931 17.1865 25.7761 18.2776C25.559 19.3688 25.6704 20.4998 26.0961 21.5276C26.5219 22.5554 27.2429 23.4339 28.1679 24.052C29.0929 24.6701 30.1804 25 31.293 25C32.0317 25 32.7631 24.8545 33.4456 24.5718C34.128 24.2891 34.7481 23.8748 35.2704 23.3525C35.7928 22.8301 36.2071 22.21 36.4898 21.5276C36.7725 20.8451 36.918 20.1137 36.918 19.375Z"
                                                                    fill="white"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Framework Alignment</div>
                                                            <div className="nav_subtitle">
                                                                Learn how Cybrary aligns to established industry frameworks
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <nav
                                                    nav-style="outline"
                                                    className="nav_dropdown-child nav_dropdown-wrapper is-transparent w-dropdown-list w--nav-dropdown-list-open"
                                                    id="w-dropdown-list-11"
                                                    aria-labelledby="w-dropdown-toggle-11"
                                                />
                                            </div>
                                            <div
                                                data-hover="false"
                                                data-delay={0}
                                                cl-close-target="Business Resources"
                                                data-w-id="56eccb58-4fa7-2e39-e988-8500e120c0f3"
                                                className="nav_resources_dropdown-item w-dropdown w--nav-dropdown-open"
                                            >
                                                <div
                                                    className="nav_resources_dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                                                    id="w-dropdown-toggle-12"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <a
                                                        href="/business-resources"
                                                        className="nav_dropdown-link_parent w-inline-block"
                                                    >
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647447a7ce2f02e8bd2e27a4_Buildings.svg"
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            className="nav_dropdown-icon"
                                                        />
                                                        <div className="nav_dropdown-content">
                                                            <div className="nav_link-alt">Business Resources</div>
                                                            <div className="nav_subtitle">
                                                                Learn how Cybrary can help your team thrive.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                    <a
                                        href="/upgrade?ref=wwwnavpricing"
                                        data="pricing-link"
                                        data-w-id="56eccb58-4fa7-2e39-e988-8500e120c1c6"
                                        className="nav_link w-nav-link w--nav-link-open"
                                    >
                                        Pricing
                                    </a>
                                </div>
                                <div
                                    cb-element="logged-out"
                                    className="nav_buttons-wrap logged-out"
                                    style={{ display: "flex" }}
                                >
                                    <a href="/demo-request" className="button_outline-pink w-button">
                                        Get a Cybrary for Business Demo
                                    </a>
                                    <a
                                        cb-element="trigger-register-modal"
                                        href="#"
                                        className="button-5 w-button"
                                    >
                                        Sign up
                                    </a>
                                    <a
                                        href="https://app.cybrary.it/login"
                                        className="nav_link-2 is-nested w-button"
                                    >
                                        Login
                                    </a>
                                </div>
                            </nav>
                        </div>
                    }


                </div>
            </div>
        </div>

        {/* Signin POPUP */}



    </>
}

export default header;