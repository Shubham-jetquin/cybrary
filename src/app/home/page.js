'use client';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const HomePage = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        gsap.to(marqueeRef.current, {
            x: "-100%", // Moves the marquee to the left
            duration: 10, // Speed of animation
            repeat: -1, // Infinite loop
            ease: "linear",
        });
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Abibou F.",
            quote: "I am currently working in a restaurant and going to school full time. But it is not stopping me from working on gaining more and more skills. I have already spent more than 30 hours on Become a SOC Analyst level 1 [with] Cybrary and still have 67 hours to go.",
            avatar: "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        },
        {
            id: 2,
            name: "Jared",
            quote: " Cybrary is just an amazing platform. Literally thousands of hours of quality content. You can find a course or a lab for just about everything, and they are constantly releasing new material.They also have highly responsive customer service.It's been worth every penny.",
            avatar: "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        },
        {
            id: 3,
            name: "Bradly",
            quote: "Greatest investment I have made to dateCybrary is solely responsible for my passing the CompTIA A+ exam and is the reason I am going into my Net + with confidence.I have learned a great deal through virtual labs, practice tests, recorded lessons, and the various other things they offer.The community is great as well.Got a question about the interview process for a tech job ? Ask in discord.Just got a cert ? Post it in discord and let the reactions and comments flow making you feel great about yourself.It is an all around wonderful experience and I rate it as a totally worthwile expense for starting or furthering your career in the IT industry.Invest in yourself.",
            avatar: "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        },
        {
            id: 4,
            name: "JPM",
            quote: "  Training is coolEasy to enroll, instructors are enthusiastic and professionnal, technical stuff is very well explained.",
            avatar: "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };
    return <>
        <main className="main-wrapper">
            <section className="section_hero_left-text-w-laptop">
                <div className="w-embed">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n\n@media (min-width: 991px) and (max-width: 1256px) {\n  .home-hero_image {\n    transform: scale(1.2);\n  }\n}\n\n\n"
                        }}
                    />
                </div>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="home-hero_padding-section no-bottom">
                            <div className="w-layout-grid home-hero_content">
                                <div
                                    id="w-node-_5d49be10-4b7c-fc21-8feb-3dde55e47326-b89a688c"
                                    className="home-hero_left"
                                >
                                    <div className="margin-bottom margin-small">
                                        <h1 className="heading-style-h1">
                                            <span className="text-color-alternate-gradient">
                                                Cybersecurity Training that Tangibly
                                            </span>{" "}
                                            Reduces Business Risk
                                        </h1>
                                    </div>
                                    <div className="max-width-xxsmall is-home-hero">
                                        <div className="margin-bottom margin-medium">
                                            <p className="text-color-light-grey">
                                                Cybrary's structured, hands-on cybersecurity training
                                                empowers professionals to better protect their
                                                organizations. With curated Career Paths, industry-aligned
                                                Certification Preparation Programs, and threat-informed
                                                training, we offer the best in the business.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-large">
                                        <div
                                            cb-element="logged-in"
                                            className="button-group align-center-tablet"
                                            style={{ display: "none" }}
                                        >
                                            <a href="/home/upgrade" className="button w-button">
                                                Start Learning for Free
                                            </a>
                                            <a
                                                href="/home/business"
                                                target="_blank"
                                                className="button is-alternate is-no-outline w-inline-block"
                                            >
                                                <div>Cybrary for Business</div>
                                                <div className="icon-embed_3x6 w-embed">
                                                    <svg
                                                        width={5}
                                                        height={8}
                                                        viewBox="0 0 5 8"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1 1L3.50585 3.50585C3.77876 3.77876 3.77876 4.22124 3.50585 4.49415L1 7"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-large">
                                        <div
                                            cb-element="logged-out"
                                            className="button-group align-center-tablet"
                                            style={{ display: "flex" }}
                                        >
                                            <a href="/home/business" className="button w-button">
                                                Cybrary for Business
                                            </a>
                                            <a
                                                cb-elemen="logged-in-start"
                                                cb-element="trigger-register-modal"
                                                href="/home/upgrade"
                                                className="button-5 is-alternate is-no-outline w-inline-block"
                                            >
                                                <div>Start Learning for Free</div>
                                                <div className="icon-embed-xxsmall w-embed">
                                                    <svg
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6 3L11 8L6 13"
                                                            stroke="CurrentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="static-logos_component is-stacked hidden_logo">
                                        <div className="static-logos_content-left">
                                            <div className="text-size-medium text-color-light-grey">
                                                Trusted by leading organizations
                                            </div>
                                        </div>
                                        <div className="static-logos_logo-list jj-removal">
                                            <div className="static-logos_wrapper">
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6422f39c5e88520f7b97ae99_Frame.svg"
                                                    loading="lazy"
                                                    width={133}
                                                    height={26}
                                                    alt="crowdstrike"
                                                    className="static-logos_logo is-crowdstrike"
                                                />
                                            </div>
                                            <div className="static-logos_wrapper">
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6422f39c7dbef83e7c70f505_Google%20(logo%20%E2%80%94%20Black).svg"
                                                    loading="lazy"
                                                    width={80}
                                                    height={28}
                                                    alt="Google"
                                                    className="static-logos_logo"
                                                />
                                            </div>
                                            <div className="static-logos_wrapper hide">
                                                <img
                                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6422f39c8fa8dd0245287b2b_svg17847.svg"
                                                    loading="lazy"
                                                    width={132}
                                                    height={26}
                                                    alt="Johnson and Johnson"
                                                    className="static-logos_logo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_5d49be10-4b7c-fc21-8feb-3dde55e4734b-b89a688c"
                                    className="home-hero_laptop-image"
                                >
                                    <img
                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min.png"
                                        loading="lazy"
                                        width={1442}
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 83vw, 47vw"
                                        alt=""
                                        srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min-p-500.png 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min-p-800.png 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min-p-1600.png 1600w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min-p-2000.png 2000w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min-p-2600.png 2600w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668680074ea6e8b71c4283d4_Group%2039847-min.png 3020w"
                                        className="full-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="home-trusted-organization">
                            <p>Trusted by leading organizations worldwide</p>
                            <div
                                tr-marquee-speed={50}
                                tr-marquee-element="component"
                                className="logo-marquee_component no-margin-top"
                            >
                                <div
                                    tr-marquee-element="panel"
                                    className="logo-marquee_list"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        transform: "translate(-13.9634%, 0%) translate3d(0px, 0px, 0px)"
                                    }}
                                    ref={marqueeRef}
                                >
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51033-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda772120ceb9ca36d82f_Artboard%201%201.svg"
                                            loading="eager"
                                            width={156}
                                            height={41}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51035-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda78698aea61a322e7f6_svg2.svg"
                                            loading="eager"
                                            width={204}
                                            height={37}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51037-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda78acfcd1bb27412cbe_Layer_1.svg"
                                            loading="eager"
                                            width={199}
                                            height={16}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51039-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda7983c3c9a8d063b703_Frame%2096142.svg"
                                            loading="eager"
                                            width={159}
                                            height={49}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf5103b-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda7709912c75b0740f7e_Frame.svg"
                                            loading="eager"
                                            width={158}
                                            height={36}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div className="logo-marquee_wrapper">
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64676e064bb53c2cdcc92d57_Google%20(logo%20%E2%80%94%20Black).svg"
                                            loading="eager"
                                            width={158}
                                            height={36}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div className="marquee-gsap-embed w-embed w-script"></div>
                                </div>
                                <div
                                    tr-marquee-element="panel"
                                    className="logo-marquee_list"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        transform: "translate(-13.9634%, 0%) translate3d(0px, 0px, 0px)"
                                    }}
                                >
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51033-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda772120ceb9ca36d82f_Artboard%201%201.svg"
                                            loading="eager"
                                            width={156}
                                            height={41}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51035-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda78698aea61a322e7f6_svg2.svg"
                                            loading="eager"
                                            width={204}
                                            height={37}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51037-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda78acfcd1bb27412cbe_Layer_1.svg"
                                            loading="eager"
                                            width={199}
                                            height={16}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf51039-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda7983c3c9a8d063b703_Frame%2096142.svg"
                                            loading="eager"
                                            width={159}
                                            height={49}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_41c259fd-7060-dc78-4543-9f04fdf5103b-fdf51032"
                                        className="logo-marquee_wrapper"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645cda7709912c75b0740f7e_Frame.svg"
                                            loading="eager"
                                            width={158}
                                            height={36}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div className="logo-marquee_wrapper">
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64676e064bb53c2cdcc92d57_Google%20(logo%20%E2%80%94%20Black).svg"
                                            loading="eager"
                                            width={158}
                                            height={36}
                                            alt=""
                                            className="logo-marquee_logo"
                                        />
                                    </div>
                                    <div className="marquee-gsap-embed w-embed w-script"></div>
                                </div>
                                <div className="logo-marquee_shadow pointer-events-off" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_left-align-tabs">
                <div className="left-aligned-tabs_embed w-embed">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n\n@media (pointer: fine) { \n  .left-align-tabs_tabs-link:hover .left-align-tabs_arrow {\n    transform: translate(0.5rem, 0rem)\n  }\n}\n"
                        }}
                    />
                </div>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="home-learn-tabs_content">
                            <h2 className="home-learn-tabs_heading">
                                <span className="text-color-alternate-gradient">
                                    Learn. Practice. Prove.
                                </span>
                            </h2>
                            <div
                                data-duration-in={400}
                                data-duration-out={200}
                                data-current="Learn"
                                data-easing="ease"
                                className="left-align-tabs_component w-tabs"
                            >
                                <div
                                    id="w-node-_5d49be10-4b7c-fc21-8feb-3dde55e47360-b89a688c"
                                    className="left-align-tabs_tabs-menu w-tab-menu"
                                    role="tablist"
                                >
                                    <a
                                        data-w-tab="Learn"
                                        className="left-align-tabs_tabs-link w-inline-block w-tab-link w--current"
                                        id="w-tabs-0-data-w-tab-0"
                                        href="#w-tabs-0-data-w-pane-0"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-0"
                                        aria-selected="true"
                                    >
                                        <div className="left-align-tabs_item">
                                            <div className="left-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator" />
                                                <h3 className="is-mobile-h2">Learn</h3>
                                                <div className="left-align-tabs_arrow w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 8 15"
                                                        fill="none"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        aria-hidden="true"
                                                        role="img"
                                                    >
                                                        <path
                                                            d="M0.999999 1L6.54692 6.42935C7.15103 7.02065 7.15103 7.97935 6.54692 8.57065L1 14"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="left-align-tabs_link-content">
                                                <p>
                                                    Study core concepts and get hands-on with key skills in
                                                    cybersecurity courses and labs led by industry experts.
                                                </p>
                                                <div
                                                    cb-element="trigger-register-modal"
                                                    className="button is-link is-icon"
                                                >
                                                    <div>Get Started</div>
                                                    <div className="icon-embed-custom w-embed">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="100%"
                                                            height="100%"
                                                            viewBox="0 0 5 8"
                                                            fill="none"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            aria-hidden="true"
                                                            role="img"
                                                        >
                                                            <path
                                                                d="M1 1L3.50585 3.50585C3.77876 3.77876 3.77876 4.22124 3.50585 4.49415L1 7"
                                                                stroke="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        data-w-tab="Practice"
                                        className="left-align-tabs_tabs-link w-inline-block w-tab-link"
                                        tabIndex={-1}
                                        id="w-tabs-0-data-w-tab-1"
                                        href="#w-tabs-0-data-w-pane-1"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-1"
                                        aria-selected="false"
                                    >
                                        <div className="left-align-tabs_item">
                                            <div className="left-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator" />
                                                <h3 className="is-mobile-h2">Practice</h3>
                                                <div className="left-align-tabs_arrow w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 8 15"
                                                        fill="none"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        aria-hidden="true"
                                                        role="img"
                                                    >
                                                        <path
                                                            d="M0.999999 1L6.54692 6.42935C7.15103 7.02065 7.15103 7.97935 6.54692 8.57065L1 14"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="left-align-tabs_link-content">
                                                <p>
                                                    Exercise your problem-solving and creative thinking skills
                                                    with interactive labs and security-centric puzzles.
                                                </p>
                                                <div
                                                    cb-element="trigger-register-modal"
                                                    className="button is-link is-icon"
                                                >
                                                    <div>Get Started</div>
                                                    <div className="icon-embed-custom w-embed">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="100%"
                                                            height="100%"
                                                            viewBox="0 0 5 8"
                                                            fill="none"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            aria-hidden="true"
                                                            role="img"
                                                        >
                                                            <path
                                                                d="M1 1L3.50585 3.50585C3.77876 3.77876 3.77876 4.22124 3.50585 4.49415L1 7"
                                                                stroke="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        data-w-tab="Prove"
                                        className="left-align-tabs_tabs-link is-last w-inline-block w-tab-link"
                                        tabIndex={-1}
                                        id="w-tabs-0-data-w-tab-2"
                                        href="#w-tabs-0-data-w-pane-2"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-2"
                                        aria-selected="false"
                                    >
                                        <div className="left-align-tabs_item">
                                            <div className="left-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator" />
                                                <h3 className="is-mobile-h2">Prove</h3>
                                                <div className="left-align-tabs_arrow w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 8 15"
                                                        fill="none"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        aria-hidden="true"
                                                        role="img"
                                                    >
                                                        <path
                                                            d="M0.999999 1L6.54692 6.42935C7.15103 7.02065 7.15103 7.97935 6.54692 8.57065L1 14"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="left-align-tabs_link-content">
                                                <p>
                                                    Demonstrate your mastery of key topics in assessments and
                                                    practice tests.
                                                </p>
                                                <div
                                                    cb-element="trigger-register-modal"
                                                    className="button is-link is-icon"
                                                >
                                                    <div>Get Started</div>
                                                    <div className="icon-embed-custom w-embed">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="100%"
                                                            height="100%"
                                                            viewBox="0 0 5 8"
                                                            fill="none"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            aria-hidden="true"
                                                            role="img"
                                                        >
                                                            <path
                                                                d="M1 1L3.50585 3.50585C3.77876 3.77876 3.77876 4.22124 3.50585 4.49415L1 7"
                                                                stroke="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    id="w-node-_5d49be10-4b7c-fc21-8feb-3dde55e4738b-b89a688c"
                                    className="tabs-content w-tab-content"
                                >
                                    <div
                                        data-w-tab="Learn"
                                        className="left-align-tabs_tab-pane w-tab-pane w--tab-active"
                                        id="w-tabs-0-data-w-pane-0"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-0"
                                    >
                                        <div className="left-align-tabs_content-wrapper">
                                            <img
                                                width={2424}
                                                height={1926}
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f09c8e94e1cb37b8d2c_HP-Learn.png"
                                                loading="lazy"
                                                className="left-align-tabs_image in-tabs"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-tab="Practice"
                                        className="left-align-tabs_tab-pane w-tab-pane"
                                        id="w-tabs-0-data-w-pane-1"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-1"
                                    >
                                        <div className="left-align-tabs_content-wrapper">
                                            <img
                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 55vw, 48vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f2281175b35013c1009_HP-Practice-p-500.png 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f2281175b35013c1009_HP-Practice-p-800.png 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f2281175b35013c1009_HP-Practice-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f2281175b35013c1009_HP-Practice-p-1600.png 1600w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f2281175b35013c1009_HP-Practice-p-2000.png 2000w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f2281175b35013c1009_HP-Practice.png 2424w"
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f2281175b35013c1009_HP-Practice.png"
                                                loading="lazy"
                                                className="left-align-tabs_image in-tabs"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-tab="Prove"
                                        className="left-align-tabs_tab-pane w-tab-pane"
                                        id="w-tabs-0-data-w-pane-2"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-2"
                                    >
                                        <div className="left-align-tabs_content-wrapper">
                                            <img
                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 55vw, 48vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f33ff9ebf112f5a2d8c_HP-Prove-p-500.png 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f33ff9ebf112f5a2d8c_HP-Prove-p-800.png 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f33ff9ebf112f5a2d8c_HP-Prove-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f33ff9ebf112f5a2d8c_HP-Prove-p-1600.png 1600w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f33ff9ebf112f5a2d8c_HP-Prove-p-2000.png 2000w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f33ff9ebf112f5a2d8c_HP-Prove.png 2424w"
                                                alt=""
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66972f33ff9ebf112f5a2d8c_HP-Prove.png"
                                                loading="lazy"
                                                className="left-align-tabs_image in-tabs"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_home-cards">
                <div className="padding-global-2">
                    <div className="container-large">
                        <div className="padding-section-80 no-top">
                            <div className="w-layout-grid cards_component">
                                <div
                                    id="w-node-_9e9258c7-0d43-3834-6c40-af31fa01fff3-b89a688c"
                                    className="w-layout-grid cards_row"
                                >
                                    <div
                                        cb-reverse-mobile="true"
                                        cb-reverse=""
                                        cb-heading="true"
                                        id="w-node-_9e9258c7-0d43-3834-6c40-af31fa01fff4-b89a688c"
                                        className="cards_card-large-horizontal-2"
                                    >
                                        <div
                                            id="w-node-_9e9258c7-0d43-3834-6c40-af31fa01fff5-b89a688c"
                                            className="cards_card-large-horizontal-content"
                                        >
                                            <div className="cards_card-large-horizontal-content-top">
                                                <div className="margin-bottom margin-medium">
                                                    <div>
                                                        <h3 className="heading-style-h2">
                                                            Cybrary for Business
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="max-width-xsmall">
                                                    <p>
                                                        Upskill your team with Cybrary’s suite of cybersecurity
                                                        training and management tools, including hands-on
                                                        Virtual Labs, role-aligned Career Paths, and
                                                        personalized remediation. Request a demo and learn how
                                                        Cybrary tailors our deep library of training to your
                                                        team’s unique needs.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="margin-top-5 margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        href="/home/demo-request"
                                                        className="button-5 is-icon w-inline-block"
                                                    >
                                                        <div>Get a Demo</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_9e9258c7-0d43-3834-6c40-af31fa020007-b89a688c"
                                            className="cards_card-large-horizontal-image-wrapper"
                                        >
                                            <img
                                                width="Auto"
                                                height="Auto"
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e518d5e797cd2a5886027_Cybrary%20For%20Teams.jpeg"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e518d5e797cd2a5886027_Cybrary%20For%20Teams-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e518d5e797cd2a5886027_Cybrary%20For%20Teams-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e518d5e797cd2a5886027_Cybrary%20For%20Teams-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e518d5e797cd2a5886027_Cybrary%20For%20Teams.jpeg 1200w"
                                                sizes="(max-width: 767px) 90vw, 45vw"
                                                className="cards_card-large-horizontal-image"
                                            />
                                        </div>
                                        <div
                                            id="w-node-_9e9258c7-0d43-3834-6c40-af31fa020009-b89a688c"
                                            className="hide w-embed"
                                        >
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n\n@media (min-width:767px) {\n[cb-reverse='true'] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-flow: column;\n  direction: rtl; /* Reverse the order */ \n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n\ttext-align: left;\n  display: flex;\n  justify-content: flex-start;\n  direction: ltr;\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse='true'] {\n    display: flex;\n    flex-direction: column; /* Reverse the order vertically */\n  }\n\n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: left;\n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse-mobile='true'] {\n    display: flex;\n    flex-direction: column-reverse; /* Reverse the order vertically */\n  }\n\n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: center;\n  }\n  \n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n\n[cb-heading='true'] .heading-style-h2 {\n\n  font-family: Figtree;\n  font-size: 2.45rem;\n  line-height: 1;\n  font-weight: 300;\n  letter-spacing: -0.02em;\n}\n\n[cb-heading='true'] .heading-style-h2:small {\n  font-size: 1.5rem;\n}\n\n[cb-heading='true']  .heading-style-h2:medium {\n  font-size: 2.25rem;\n}\n\n\n"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_home-cards">
                <div className="padding-global-2">
                    <div className="container-large">
                        <div className="padding-section-80 no-top">
                            <div className="w-layout-grid cards_component">
                                <div
                                    id="w-node-e6193e11-38a0-ef95-4db5-6df00910c838-b89a688c"
                                    className="w-layout-grid cards_row"
                                >
                                    <div
                                        cb-reverse-mobile="true"
                                        cb-reverse=""
                                        cb-heading="true"
                                        id="w-node-e6193e11-38a0-ef95-4db5-6df00910c839-b89a688c"
                                        className="cards_card-large-horizontal-2"
                                    >
                                        <div
                                            id="w-node-e6193e11-38a0-ef95-4db5-6df00910c83a-b89a688c"
                                            className="cards_card-large-horizontal-content"
                                        >
                                            <div className="cards_card-large-horizontal-content-top">
                                                <div className="margin-bottom margin-medium">
                                                    <div>
                                                        <h3 className="heading-style-h2">
                                                            Cybrary for Individuals
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="max-width-xsmall">
                                                    <p>
                                                        Stand out from the crowd and advance your career with
                                                        Cybrary's role-aligned Career Paths, targeted Skill
                                                        Paths, and best-in-class Certification Prep Paths.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="margin-top-5 margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        href="/home/upgrade"
                                                        cb-element="trigger-register-modal"
                                                        className="button-5 is-icon w-inline-block"
                                                    >
                                                        <div>Start Learning for Free</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-e6193e11-38a0-ef95-4db5-6df00910c84c-b89a688c"
                                            className="cards_card-large-horizontal-image-wrapper"
                                        >
                                            <img
                                                width="Auto"
                                                height="Auto"
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e520f6f0a052a7450f0ed_Cybrary%20For%20Individuals.jpeg"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e520f6f0a052a7450f0ed_Cybrary%20For%20Individuals-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e520f6f0a052a7450f0ed_Cybrary%20For%20Individuals-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e520f6f0a052a7450f0ed_Cybrary%20For%20Individuals-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e520f6f0a052a7450f0ed_Cybrary%20For%20Individuals.jpeg 1200w"
                                                sizes="(max-width: 767px) 90vw, 45vw"
                                                className="cards_card-large-horizontal-image"
                                            />
                                            <img
                                                width="Auto"
                                                height="Auto"
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e52ac7e86ce039e937fa4_Cybrary%20For%20Individuals.jpeg"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e52ac7e86ce039e937fa4_Cybrary%20For%20Individuals-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e52ac7e86ce039e937fa4_Cybrary%20For%20Individuals-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/674e52ac7e86ce039e937fa4_Cybrary%20For%20Individuals.jpeg 950w"
                                                sizes="(max-width: 767px) 90vw, 45vw"
                                                className="cards_card-large-horizontal-image"
                                            />
                                        </div>
                                        <div
                                            id="w-node-e6193e11-38a0-ef95-4db5-6df00910c84e-b89a688c"
                                            className="hide w-embed"
                                        >
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n\n@media (min-width:767px) {\n[cb-reverse='true'] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-flow: column;\n  direction: rtl; /* Reverse the order */ \n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n\ttext-align: left;\n  display: flex;\n  justify-content: flex-start;\n  direction: ltr;\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse='true'] {\n    display: flex;\n    flex-direction: column; /* Reverse the order vertically */\n  }\n\n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: left;\n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse-mobile='true'] {\n    display: flex;\n    flex-direction: column-reverse; /* Reverse the order vertically */\n  }\n\n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: center;\n  }\n  \n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n\n[cb-heading='true'] .heading-style-h2 {\n\n  font-family: Figtree;\n  font-size: 2.45rem;\n  line-height: 1;\n  font-weight: 300;\n  letter-spacing: -0.02em;\n}\n\n[cb-heading='true'] .heading-style-h2:small {\n  font-size: 1.5rem;\n}\n\n[cb-heading='true']  .heading-style-h2:medium {\n  font-size: 2.25rem;\n}\n\n\n"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_home-cards dx-hide">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-80 no-top">
                            <div className="w-layout-grid cards_component">
                                <div
                                    id="w-node-_5d49be10-4b7c-fc21-8feb-3dde55e473f0-b89a688c"
                                    className="w-layout-grid cards_row"
                                >
                                    <div
                                        cb-reverse-mobile="true"
                                        cb-reverse=""
                                        cb-heading="true"
                                        id="w-node-_0564a235-9a5b-3419-4a63-c402483a203c-483a203c"
                                        className="cards_card-large-horizontal"
                                    >
                                        <div
                                            id="w-node-_0564a235-9a5b-3419-4a63-c402483a203d-483a203c"
                                            className="cards_card-large-horizontal-content"
                                        >
                                            <div className="cards_card-large-horizontal-content-top">
                                                <div className="margin-bottom margin-medium">
                                                    <div>
                                                        <h3 className="heading-style-h2">
                                                            Cybrary for Business
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="max-width-xsmall">
                                                    <p>
                                                        Upskill your team with Cybrary’s suite of cybersecurity
                                                        training, learning activities, and management tools,
                                                        including hands-on Virtual Labs, role-aligned Career
                                                        Paths, and personalized remediation. Request a demo and
                                                        learn how Cybrary tailors our deep library of training
                                                        to your team’s unique needs.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="margin-top margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        href="/home/demo-request"
                                                        className="button is-icon w-inline-block"
                                                    >
                                                        <div>Schedule a Demo</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_0564a235-9a5b-3419-4a63-c402483a204c-483a203c"
                                            className="cards_card-large-horizontal-image-wrapper"
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016.webp"
                                                loading="lazy"
                                                width="Auto"
                                                height="Auto"
                                                alt=""
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016-p-800.webp 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016-p-1080.webp 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016.webp 1200w"
                                                sizes="100vw"
                                                className="cards_card-large-horizontal-image"
                                            />
                                        </div>
                                        <div
                                            id="w-node-bdb13e67-2dd8-7831-2495-3653b3b27c3e-483a203c"
                                            className="hide w-embed"
                                        >
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n\n@media (min-width:767px) {\n[cb-reverse='true'] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-flow: column;\n  direction: rtl; /* Reverse the order */ \n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n\ttext-align: left;\n  display: flex;\n  justify-content: flex-start;\n  direction: ltr;\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse='true'] {\n    display: flex;\n    flex-direction: column; /* Reverse the order vertically */\n  }\n\n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: left;\n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse-mobile='true'] {\n    display: flex;\n    flex-direction: column-reverse; /* Reverse the order vertically */\n  }\n\n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: center;\n  }\n  \n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n\n[cb-heading='true'] .heading-style-h2 {\n\n  font-family: Figtree;\n  font-size: 2.45rem;\n  line-height: 1;\n  font-weight: 300;\n  letter-spacing: -0.02em;\n}\n\n[cb-heading='true'] .heading-style-h2:small {\n  font-size: 1.5rem;\n}\n\n[cb-heading='true']  .heading-style-h2:medium {\n  font-size: 2.25rem;\n}\n\n\n"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_home-cards dx-hide">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-80 no-top">
                            <div className="w-layout-grid cards_component">
                                <div
                                    id="w-node-c0dc7d6c-c0eb-c39e-004e-f48be91aca47-b89a688c"
                                    className="w-layout-grid cards_row"
                                >
                                    <div
                                        cb-reverse-mobile="true"
                                        cb-reverse=""
                                        cb-heading="true"
                                        id="w-node-_0564a235-9a5b-3419-4a63-c402483a203c-483a203c"
                                        className="cards_card-large-horizontal"
                                    >
                                        <div
                                            id="w-node-_0564a235-9a5b-3419-4a63-c402483a203d-483a203c"
                                            className="cards_card-large-horizontal-content"
                                        >
                                            <div className="cards_card-large-horizontal-content-top">
                                                <div className="margin-bottom margin-medium">
                                                    <div>
                                                        <h3 className="heading-style-h2">
                                                            Cybrary for Individuals
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="max-width-xsmall">
                                                    <p>
                                                        Jump start your career in cybersecurity with Cybrary's
                                                        deep training library. From role-aligned career paths to
                                                        comprehensive certification prep programs, we have
                                                        everything you need to get ahead and stay ahead in your
                                                        career. Sign up for a Free account today to start
                                                        learning today.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="margin-top margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        href="/demo-request"
                                                        className="button is-icon w-inline-block"
                                                    >
                                                        <div>Schedule a Demo</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_0564a235-9a5b-3419-4a63-c402483a204c-483a203c"
                                            className="cards_card-large-horizontal-image-wrapper"
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016.webp"
                                                loading="lazy"
                                                width="Auto"
                                                height="Auto"
                                                alt=""
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016-p-800.webp 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016-p-1080.webp 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016.webp 1200w"
                                                sizes="100vw"
                                                className="cards_card-large-horizontal-image"
                                            />
                                        </div>
                                        <div
                                            id="w-node-bdb13e67-2dd8-7831-2495-3653b3b27c3e-483a203c"
                                            className="hide w-embed"
                                        >
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n\n@media (min-width:767px) {\n[cb-reverse='true'] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-flow: column;\n  direction: rtl; /* Reverse the order */ \n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n\ttext-align: left;\n  display: flex;\n  justify-content: flex-start;\n  direction: ltr;\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse='true'] {\n    display: flex;\n    flex-direction: column; /* Reverse the order vertically */\n  }\n\n  [cb-reverse='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: left;\n  }\n  \n  [cb-reverse='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n@media (max-width: 767px) {\n  [cb-reverse-mobile='true'] {\n    display: flex;\n    flex-direction: column-reverse; /* Reverse the order vertically */\n  }\n\n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    justify-content: flex-start;\n    align-items: stretch; /* Fill the width */\n    text-align: center;\n  }\n  \n  [cb-reverse-mobile='true'] .cards_card-large-horizontal-content > * {\n    order: -1; /* Reverse the order of individual items */\n  }\n}\n\n\n[cb-heading='true'] .heading-style-h2 {\n\n  font-family: Figtree;\n  font-size: 2.45rem;\n  line-height: 1;\n  font-weight: 300;\n  letter-spacing: -0.02em;\n}\n\n[cb-heading='true'] .heading-style-h2:small {\n  font-size: 1.5rem;\n}\n\n[cb-heading='true']  .heading-style-h2:medium {\n  font-size: 2.25rem;\n}\n\n\n"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_testimonial-slider">
                <div className="padding-global">
                    <div className="page-unique-css w-embed">
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    " \n\n.testimonial-slider_item.swiper-slide-next, .testimonial-slider_item.swiper-slide-prev {\n\theight: 95%;\n  background-color: #101316;\n  border-color: rgba(255, 255, 255, 0.05);\n}\n\n.testimonial-slider_item.is-active {\n\topacity: 1 !important;\n}\n\n.testimonial-slider_item {\n\topacity: 0 !important;\n}\n\n.testimonial-slider_background-cards.is-medium {\n\twidth: calc(100% + 3rem);\n}\n\n.testimonial-slider_background-cards.is-small {\n\twidth: calc(100% + 6rem);\n}\n\n\n\n"
                            }}
                        />
                    </div>
                    <div className="container-large">
                        <div className="padding-section-120">
                            <div className="w-layout-grid testimonial-slider_component">
                                <div className="testimonial-slider_content">
                                    <div className="margin-bottom margin-small">
                                        <h2 className="cs-heading-style-h1-smaller">
                                            Words from our users
                                        </h2>
                                    </div>
                                    <p>
                                        Join 3 million+ users, including 96% of Fortune 1000 companies
                                        who use our platform to upskill their teams. See what the buzz
                                        is about - start learning for free!
                                    </p>
                                </div>
                                <div
                                    id="w-node-_2fcd72fd-d224-f59a-b6b1-e4d8f2ec8f82-704377f1"
                                    className="testimonial-slider_slider w-dyn-list swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress"
                                >
                                    <div
                                        role="list"
                                        className="testimonial-slider_list w-dyn-items"
                                        id="swiper-wrapper-b7e666d88b33102a2"
                                        aria-live="polite"
                                    >
                                        <div
                                            role="group"
                                            className="testimonial-slider_item w-dyn-item swiper-slide-visible is-active"
                                            aria-label="1 / 22"
                                            data-swiper-slide-index={0}
                                            style={{
                                                width: 550,
                                                zIndex: 22,
                                                transform:
                                                    "translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                                opacity: 1,
                                                marginRight: 24
                                            }}
                                        >
                                            <div className="testimonial-slider_slide-content">
                                                <div className="testimonial-slider_avatar-wrapper w-condition-invisible">
                                                    <img
                                                        src={testimonials[currentIndex].avatar}
                                                        loading="lazy"
                                                        alt={testimonials[currentIndex].name}
                                                        className="free-trusted_avatar w-condition-invisible w-dyn-bind-empty"
                                                    />
                                                </div>
                                                <div className="text-color-silver text-size-medium w-richtext">
                                                    <p>{testimonials[currentIndex].quote}</p>
                                                </div>
                                                <div className="testimonial-slider_details-wrapper">
                                                    <div className="testimonial-slider_icon-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/643e7f5cca79b16d7e02223d_quotation-mark.webp"
                                                            loading="lazy"
                                                            alt=""
                                                            className="testimonial-slider_icon"
                                                        />
                                                    </div>
                                                    <div className="testimonial-slider_details-text">
                                                        <div className="testimonial-slider_name">{testimonials[currentIndex].name}</div>
                                                        <div className="testimonial-slider_position w-dyn-bind-empty" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            role="group"
                                            className="testimonial-slider_item w-dyn-item swiper-slide-next"
                                            aria-label="2 / 22"
                                            data-swiper-slide-index={1}
                                            style={{
                                                width: 550,
                                                zIndex: 21,
                                                transform:
                                                    "translate3d(calc(-550px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
                                                opacity: 1,
                                                marginRight: 24
                                            }}
                                        >
                                            <div className="testimonial-slider_slide-content">
                                                <div className="testimonial-slider_avatar-wrapper w-condition-invisible">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                                                        loading="lazy"
                                                        alt=""
                                                        className="free-trusted_avatar w-condition-invisible w-dyn-bind-empty"
                                                    />
                                                </div>
                                                <div className="text-color-silver text-size-medium w-richtext">
                                                    <p>
                                                        Greatest investment I have made to dateCybrary is solely
                                                        responsible for my passing the CompTIA A+ exam and is
                                                        the reason I am going into my Net+ with confidence. I
                                                        have learned a great deal through virtual labs, practice
                                                        tests, recorded lessons, and the various other things
                                                        they offer. The community is great as well. Got a
                                                        question about the interview process for a tech job? Ask
                                                        in discord. Just got a cert? Post it in discord and let
                                                        the reactions and comments flow making you feel great
                                                        about yourself. It is an all around wonderful experience
                                                        and I rate it as a totally worthwile expense for
                                                        starting or furthering your career in the IT industry.
                                                        Invest in yourself.
                                                    </p>
                                                </div>
                                                <div className="testimonial-slider_details-wrapper">
                                                    <div className="testimonial-slider_icon-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/643e7f5cca79b16d7e02223d_quotation-mark.webp"
                                                            loading="lazy"
                                                            alt=""
                                                            className="testimonial-slider_icon"
                                                        />
                                                    </div>
                                                    <div className="testimonial-slider_details-text">
                                                        <div className="testimonial-slider_name">Bradly</div>
                                                        <div className="testimonial-slider_position w-dyn-bind-empty" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    />
                                </div>
                                <div className="margin-top margin-large">
                                    <div className="testimonial-slider_navigation-wrapper">
                                        <div className="testimonial-slider_buttons-wrapper">
                                            <a
                                                aria-label="Previous slide"
                                                onClick={handlePrev}

                                                className="testimonial-slider_prev-button w-inline-block"
                                                tabIndex={0}
                                                role="button"
                                                aria-controls="swiper-wrapper-b7e666d88b33102a2"
                                            >
                                                <div className="testimonial-slider_arrow is-square w-embed">
                                                    <svg
                                                        width={8}
                                                        height={15}
                                                        viewBox="0 0 8 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.99963 14.01L1.73346 8.21722C1.31736 7.75951 1.31736 7.06051 1.73346 6.6028L6.99963 0.81001"
                                                            stroke="currentColor"
                                                            strokeWidth="1.8"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                            <div className="testimonial-slider_pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                                <button
                                                    className="testimonial-slider_pagination-dot is-active"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 1"
                                                    aria-current="true"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 2"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 3"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 4"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 5"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 6"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 7"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 8"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 9"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 10"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 11"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 12"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 13"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 14"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 15"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 16"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 17"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 18"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 19"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 20"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 21"
                                                />
                                                <button
                                                    className="testimonial-slider_pagination-dot"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Go to slide 22"
                                                />
                                            </div>
                                            <a
                                                aria-label="Next slide"
                                                onClick={handleNext}
                                                className="testimonial-slider_next-button w-inline-block"
                                                tabIndex={0}
                                                role="button"
                                                aria-controls="swiper-wrapper-b7e666d88b33102a2"
                                            >
                                                <div className="testimonial-slider_arrow is-square w-embed">
                                                    <svg
                                                        width={8}
                                                        height={15}
                                                        viewBox="0 0 8 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.99963 14.01L1.73346 8.21722C1.31736 7.75951 1.31736 7.06051 1.73346 6.6028L6.99963 0.81001"
                                                            stroke="currentColor"
                                                            strokeWidth="1.8"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hide w-embed w-script" />
            </section>
            <div className="section-courses dx-hide">
                <section className="section_card-component">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="card-component_component">
                                <div className="margin-bottom margin-medium">
                                    <div className="card-component_title-button-wrapper">
                                        <div className="card-component_heading">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6436be260c08aa16c3b0a986_tab-active.webp"
                                                loading="lazy"
                                                width={32}
                                                height={32}
                                                alt=""
                                                className="card-component_heading-circle"
                                            />
                                            <h2 className="heading-style-h4 is-mobile-h2">
                                                Popular Cybersecurity Courses &amp; Training
                                            </h2>
                                        </div>
                                        <a
                                            href="/catalog"
                                            className="button is-alternate is-icon w-inline-block"
                                        >
                                            <div>Full Catalog</div>
                                            <div className="icon-embed-xxsmall w-embed">
                                                <svg
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6 3L11 8L6 13"
                                                        stroke="CurrentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-component_list-wrapper w-dyn-list swiper-initialized swiper-horizontal">
                                    <div
                                        role="list"
                                        className="card-component_list w-dyn-items"
                                        id="swiper-wrapper-3918b5a7389e2d77"
                                        aria-live="polite"
                                        style={{ transitionDuration: "0ms" }}
                                    >
                                        <div role="listitem" className="card-component_item w-dyn-item">
                                            <div className="card-component_item">
                                                <div className="card-component_item-link">
                                                    <div className="card-component_image-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6545fb16b2bd2202e5b7e77f_Defensive_Security_and_Cyber_Risk.png"
                                                            loading="lazy"
                                                            width={250}
                                                            height={175}
                                                            alt=""
                                                            sizes="(max-width: 479px) 82vw, (max-width: 767px) 83vw, (max-width: 991px) 80vw, 22vw"
                                                            srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6545fb16b2bd2202e5b7e77f_Defensive_Security_and_Cyber_Risk-p-500.png 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6545fb16b2bd2202e5b7e77f_Defensive_Security_and_Cyber_Risk-p-800.png 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6545fb16b2bd2202e5b7e77f_Defensive_Security_and_Cyber_Risk-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6545fb16b2bd2202e5b7e77f_Defensive_Security_and_Cyber_Risk-p-1600.png 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6545fb16b2bd2202e5b7e77f_Defensive_Security_and_Cyber_Risk.png 1800w"
                                                            className="card-component_image"
                                                        />
                                                    </div>
                                                    <div className="card-component_item-content">
                                                        <div className="card-component_item-content-top">
                                                            <div className="card-component_meta-wrapper">
                                                                <div className="card-component_category">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Course
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        0
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        H:
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        35
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        M
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        1
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        &nbsp;CEUS
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-component_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    Defensive Security and Cyber Risk
                                                                </h3>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                className="text-size-small w-richtext"
                                                            >
                                                                <p>
                                                                    In this course, you will learn the basics of
                                                                    defensive security and cyber risk. You will review
                                                                    foundational risk management concepts such as
                                                                    calculating risk and strategies for dealing with
                                                                    risk. You will also explore the NIST CSF as a
                                                                    framework for understanding defensive security.
                                                                </p>
                                                            </div>
                                                            <div className="button is-card">
                                                                <div>Learn More &amp; Enroll</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    aria-label="Link to course"
                                                    href="/course/defensive-security-and-cyber-risk"
                                                    className="card-component_lis w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div role="listitem" className="card-component_item w-dyn-item">
                                            <div className="card-component_item">
                                                <div className="card-component_item-link">
                                                    <div className="card-component_image-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_.png"
                                                            loading="lazy"
                                                            width={250}
                                                            height={175}
                                                            alt=""
                                                            sizes="(max-width: 479px) 82vw, (max-width: 767px) 83vw, (max-width: 991px) 80vw, 22vw"
                                                            srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-800.png 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-1600.png 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_.png 1800w"
                                                            className="card-component_image"
                                                        />
                                                    </div>
                                                    <div className="card-component_item-content">
                                                        <div className="card-component_item-content-top">
                                                            <div className="card-component_meta-wrapper">
                                                                <div className="card-component_category">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Course
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-free">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Free
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        18
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        H:
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        28
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        M
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        10
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        &nbsp;CEUS
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-component_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    Comptia Security+ Certification Prep
                                                                </h3>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                className="text-size-small w-richtext"
                                                            >
                                                                <p>
                                                                    CompTIA’s Security+ is a globally recognized
                                                                    certification that equips IT professionals with
                                                                    cybersecurity principles and security best
                                                                    practices, and is often used as a requirement for
                                                                    entry-level cybersecurity positions. This
                                                                    certification prep path is designed to provide you
                                                                    with a comprehensive overview of the concepts and
                                                                    skills you will need to pass the certification
                                                                    exam.
                                                                </p>
                                                            </div>
                                                            <div className="button is-card">
                                                                <div>Learn More &amp; Enroll</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    aria-label="Link to course"
                                                    href="/course/comptia-security-plus"
                                                    className="card-component_lis w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div role="listitem" className="card-component_item w-dyn-item">
                                            <div className="card-component_item">
                                                <div className="card-component_item-link">
                                                    <div className="card-component_image-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c29097e20ef212d01e03_osint_fundamentals.jpeg"
                                                            loading="lazy"
                                                            width={250}
                                                            height={175}
                                                            alt=""
                                                            className="card-component_image"
                                                        />
                                                    </div>
                                                    <div className="card-component_item-content">
                                                        <div className="card-component_item-content-top">
                                                            <div className="card-component_meta-wrapper">
                                                                <div className="card-component_category">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Course
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-free">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Free
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        1
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        H:
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        56
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        M
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        2
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        &nbsp;CEUS
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-component_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    OSINT Certification Course &amp; Training{" "}
                                                                </h3>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                className="text-size-small w-richtext"
                                                            >
                                                                <p>
                                                                    Our OSINT certification course and training for
                                                                    open source intelligence (OSINT), the process of
                                                                    collecting and analyzing publicly available
                                                                    information that can be exploited by adversaries.
                                                                    Learn techniques for gathering intelligence from
                                                                    public data sources and how to leverage this
                                                                    knowledge to defend your organization from those
                                                                    who wish to do harm.
                                                                </p>
                                                            </div>
                                                            <div className="button is-card">
                                                                <div>Learn More &amp; Enroll</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    aria-label="Link to course"
                                                    href="/course/osint-fundamentals"
                                                    className="card-component_lis w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div role="listitem" className="card-component_item w-dyn-item">
                                            <div className="card-component_item">
                                                <div className="card-component_item-link">
                                                    <div className="card-component_image-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1e9d1f6c9a99bb24727_mitre_attack_framework.png"
                                                            loading="lazy"
                                                            width={250}
                                                            height={175}
                                                            alt=""
                                                            className="card-component_image"
                                                        />
                                                    </div>
                                                    <div className="card-component_item-content">
                                                        <div className="card-component_item-content-top">
                                                            <div className="card-component_meta-wrapper">
                                                                <div className="card-component_category">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Course
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-free">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Free
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        8
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        H:
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        29
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        M
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        10
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        &nbsp;CEUS
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-component_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    Application of the MITRE ATT&amp;CK Framework
                                                                </h3>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                className="text-size-small w-richtext"
                                                            >
                                                                This MITRE ATT&amp;CK training is designed to teach
                                                                students how to apply the matrix to help mitigate
                                                                current threats. Students will move through the 12
                                                                core areas of the framework to develop a thorough
                                                                understanding of various access ATT&amp;CK vectors.
                                                            </div>
                                                            <div className="button is-card">
                                                                <div>Learn More &amp; Enroll</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    aria-label="Link to course"
                                                    href="/course/application-of-the-mitre-attack-framework"
                                                    className="card-component_lis w-inline-block"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    />
                                </div>
                                <div className="card-component_navigation-wrapper">
                                    <div className="card-component_buttons-wrapper">
                                        <a
                                            aria-label="Previous slide"
                                            href="#"
                                            className="card-component_prev-button w-inline-block"
                                            tabIndex={0}
                                            role="button"
                                            aria-controls="swiper-wrapper-3918b5a7389e2d77"
                                            aria-disabled="false"
                                        >
                                            <div className="embed-wrapper is-square w-embed">
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.99963 14.01L1.73346 8.21722C1.31736 7.75951 1.31736 7.06051 1.73346 6.6028L6.99963 0.81001"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                        <a
                                            aria-label="Next slide"
                                            href="#"
                                            className="card-component_next-button w-inline-block"
                                            tabIndex={0}
                                            role="button"
                                            aria-controls="swiper-wrapper-3918b5a7389e2d77"
                                            aria-disabled="false"
                                        >
                                            <div className="embed-wrapper is-square w-embed">
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.99963 14.01L1.73346 8.21722C1.31736 7.75951 1.31736 7.06051 1.73346 6.6028L6.99963 0.81001"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-component_pagination hide-mobile-landscape swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_card-component">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="card-component_component">
                                <div className="margin-bottom margin-medium">
                                    <div className="card-component_title-button-wrapper">
                                        <div className="card-component_heading">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6436be260c08aa16c3b0a986_tab-active.webp"
                                                loading="lazy"
                                                width={32}
                                                height={32}
                                                alt=""
                                                className="card-component_heading-circle"
                                            />
                                            <h2 className="heading-style-h4 is-mobile-h2">
                                                New Cybersecurity Courses &amp; Training
                                            </h2>
                                        </div>
                                        <a
                                            href="/catalog"
                                            className="button is-alternate is-icon w-inline-block"
                                        >
                                            <div>Full Catalog</div>
                                            <div className="icon-embed-xxsmall w-embed">
                                                <svg
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6 3L11 8L6 13"
                                                        stroke="CurrentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-component_list-wrapper w-dyn-list swiper-initialized swiper-horizontal">
                                    <div
                                        role="list"
                                        className="card-component_list w-dyn-items"
                                        id="swiper-wrapper-fd62d7492f109145a"
                                        aria-live="polite"
                                        style={{ transitionDuration: "0ms" }}
                                    >
                                        <div role="listitem" className="card-component_item w-dyn-item">
                                            <div className="card-component_item">
                                                <div className="card-component_item-link">
                                                    <div className="card-component_image-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c3c0276e5718758c0462_CISA.png"
                                                            loading="lazy"
                                                            width={250}
                                                            height={175}
                                                            alt=""
                                                            sizes="(max-width: 479px) 82vw, (max-width: 767px) 83vw, (max-width: 991px) 80vw, 22vw"
                                                            srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c3c0276e5718758c0462_CISA-p-500.png 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c3c0276e5718758c0462_CISA-p-800.png 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c3c0276e5718758c0462_CISA-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c3c0276e5718758c0462_CISA-p-1600.png 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c3c0276e5718758c0462_CISA.png 1800w"
                                                            className="card-component_image"
                                                        />
                                                    </div>
                                                    <div className="card-component_item-content">
                                                        <div className="card-component_item-content-top">
                                                            <div className="card-component_meta-wrapper">
                                                                <div className="card-component_category">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Course
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-free">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Free
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        7
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        H:
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        20
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        M
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        8
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        &nbsp;CEUS
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-component_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    CISA Certification Prep
                                                                </h3>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                className="text-size-small w-richtext"
                                                            >
                                                                <p>
                                                                    ISACA’s Certified Information Systems Auditor
                                                                    (CISA) certification is for entry to mid-career
                                                                    professionals who want to understand the process
                                                                    of planning, executing, and reporting on
                                                                    risk-based auditing practices. This certification
                                                                    prep path is designed to provide you with a
                                                                    comprehensive overview of the concepts and skills
                                                                    you will need to pass the certification exam.
                                                                </p>
                                                            </div>
                                                            <div className="button is-card">
                                                                <div>Learn More &amp; Enroll</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    aria-label="Link to course"
                                                    href="/course/cisa"
                                                    className="card-component_lis w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div role="listitem" className="card-component_item w-dyn-item">
                                            <div className="card-component_item">
                                                <div className="card-component_item-link">
                                                    <div className="card-component_image-wrapper">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c23397e20ef212cfd121_kali_linux_fundamentals.jpeg"
                                                            loading="lazy"
                                                            width={250}
                                                            height={175}
                                                            alt=""
                                                            className="card-component_image"
                                                        />
                                                    </div>
                                                    <div className="card-component_item-content">
                                                        <div className="card-component_item-content-top">
                                                            <div className="card-component_meta-wrapper">
                                                                <div className="card-component_category">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Course
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-free">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        Free
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        1
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        H:
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        40
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        M
                                                                    </div>
                                                                </div>
                                                                <div className="card-component_category is-dark">
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        1
                                                                    </div>
                                                                    <div className="text-size-tiny text-weight-semibold">
                                                                        &nbsp;CEUS
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-component_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    Kali Linux Certification Course &amp; Training
                                                                </h3>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                className="text-size-small w-richtext"
                                                            >
                                                                <p>
                                                                    Our Kali Linux certification course and training
                                                                    is designed for those interested in penetration
                                                                    testing and ethical hacking. Kali Linux course is
                                                                    a great place to start your Kali Linux training to
                                                                    learn about the industry-standard tool for
                                                                    penetration and security testing. This is a
                                                                    foundational course that is designed to provide
                                                                    the basics of Kali distribution, installation,
                                                                    troubleshooting, and navigation.
                                                                </p>
                                                            </div>
                                                            <div className="button is-card">
                                                                <div>Learn More &amp; Enroll</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    aria-label="Link to course"
                                                    href="/course/kali-linux-fundamentals"
                                                    className="card-component_lis w-inline-block"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    />
                                </div>
                                <div className="card-component_navigation-wrapper">
                                    <div className="card-component_buttons-wrapper">
                                        <a
                                            aria-label="Previous slide"
                                            href="#"
                                            className="card-component_prev-button w-inline-block"
                                            tabIndex={0}
                                            role="button"
                                            aria-controls="swiper-wrapper-fd62d7492f109145a"
                                            aria-disabled="false"
                                        >
                                            <div className="embed-wrapper is-square w-embed">
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.99963 14.01L1.73346 8.21722C1.31736 7.75951 1.31736 7.06051 1.73346 6.6028L6.99963 0.81001"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                        <a
                                            aria-label="Next slide"
                                            href="#"
                                            className="card-component_next-button w-inline-block"
                                            tabIndex={0}
                                            role="button"
                                            aria-controls="swiper-wrapper-fd62d7492f109145a"
                                            aria-disabled="false"
                                        >
                                            <div className="embed-wrapper is-square w-embed">
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.99963 14.01L1.73346 8.21722C1.31736 7.75951 1.31736 7.06051 1.73346 6.6028L6.99963 0.81001"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-component_pagination hide-mobile-landscape swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-embed">
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    "\n\n.card-component_item {\n\tmin-height: 100% !important;\n}\n\n"
                            }}
                        />
                    </div>
                </section>
            </div>
        </main>

    </>
}

export default HomePage;