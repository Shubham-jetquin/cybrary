import { Podkova } from "next/font/google"

const podcast = () => {
    return <>
        <div className="main-wrapper">
            <section className="section_header_main">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-xlarge">
                            <div className="w-layout-grid header_main_component">
                                <div
                                    cb-max="tru"
                                    className="header_main_content is-hero-left-max-width"
                                >
                                    <div className="margin-bottom margin-xsmall-2">
                                        <div className="label">CYBRARY Podcasts</div>
                                    </div>
                                    <div className="margin-bottom margin-xsmall-2">
                                        <h1 className="heading-style-h1">
                                            Tune in to industry leaders and cybersecurity professionals
                                            sharing their stories
                                        </h1>
                                    </div>
                                    <div className="max-width-small align-center-tablet">
                                        <p cb-white="">
                                            We discuss a range topics from DevSecOps and Ransomware
                                            attacks to diversity and how to retain of talent.
                                            Entrepreneurs at all stages of their startup companies join us
                                            to share their stories and experience, including how to get
                                            funding, hiring the best talent, driving sales, and choosing
                                            where to base your business.
                                        </p>
                                    </div>
                                    <div className="margin-bottom margin-large">
                                        <div
                                            cb-element="logged-in"
                                            className="button-group align-center-tablet"
                                            style={{ display: "none" }}
                                        >
                                            <a href="https://app.cybrary.it/" className="button w-button">
                                                Start Learning for Free
                                            </a>
                                            <a
                                                href="/business"
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
                                            <a
                                                href="#"
                                                cb-elemen="logged-in-start"
                                                cb-element="trigger-register-modal"
                                                className="button w-button"
                                            >
                                                Start Learning for Free
                                            </a>
                                            <a
                                                href="/business"
                                                className="button-5 is-alternate is-no-outline w-inline-block"
                                            >
                                                <div>Cybrary for Business</div>
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
                                </div>
                                <div
                                    id="w-node-ce31113d-c39a-437d-7c7e-51b2e6049f1d-367b57aa"
                                    className="background-image-wrapper"
                                >
                                    <img
                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4.webp"
                                        loading="lazy"
                                        alt=""
                                        sizes="(max-width: 479px) 93vw, (max-width: 767px) 92vw, (max-width: 991px) 84vw, 800px"
                                        srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4-p-800.webp 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4-p-1080.webp 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4-p-1600.webp 1600w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4.webp 1900w"
                                        className="background-image"
                                    />
                                    <div className="image-overlay-layer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-embed">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n\n@media (min-width: 991px) {\n[cb-max='true'] {\n\tmax-width: 57rem !important;\n}\n\n[cb-max='true'] .max-width-small {\n\tmax-width: 48rem !important;\n}\n\n}\n[cb-white='true'] {\n\tcolor: white !important;\n}\n@media screen and (max-width: 1310px) {\n\t.background-image-wrapper {\n\t\tposition: static;\n\t}\n}\n@media screen and (max-width: 1310px) {\n\t.header_main_content.is-hero-left-max-width {\n\t\tposition: static;\n\t}\n}\n@media screen and (max-width: 1310px) {\n\t.background-image {\n\t\tposition: static;\n\t}\n}\n"
                        }}
                    />
                </div>
            </section>
            <section className="section_logo2">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-medium">
                            <div className="logo2_component">
                                <div className="logo2_content-left">
                                    <div className="text-size-medium text-color-light-grey">
                                        Subscribe to the Cybrary Podcast using your favorite app
                                    </div>
                                </div>
                                <div className="logo2_logo-list">
                                    <a
                                        href="https://open.spotify.com/show/3ZgT6fgd4rIvCaM45pnIkB"
                                        target="_blank"
                                        className="logo2_wrapper w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091cafbdc23cc771c559_listen-on-spotify-seeklogo.com-2%201.svg"
                                            loading="lazy"
                                            alt=""
                                            className="logo2_logo"
                                        />
                                    </a>
                                    <a
                                        href="https://podcasts.apple.com/us/podcast/cybrarys-podcast/id1485295700?ls=1"
                                        target="_blank"
                                        className="logo2_wrapper w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091c19818292942e6c57_US_UK_Apple_Podcasts_Listen_Badge_RGB%201.svg"
                                            loading="lazy"
                                            alt=""
                                            className="logo2_logo"
                                        />
                                    </a>
                                    <a
                                        href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vY3licmFyeS1wb2RjYXN0Lw"
                                        target="_blank"
                                        className="logo2_wrapper w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091c482ffc6714693b32_EN_Google_Podcasts_Badge%201.svg"
                                            loading="lazy"
                                            alt=""
                                            className="logo2_logo"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_header_main">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-150">
                            <div
                                cl-reverse="true"
                                className="w-layout-grid simple-left-align_component"
                            >
                                <div className="simple-left-align_content">
                                    <div className="margin-bottom margin-small">
                                        <h2 className="heading-style-h3 is-larger-mobile">
                                            Looking for a new{" "}
                                            <span className="text-color-alternate-gradient">
                                                Podcast?
                                            </span>
                                        </h2>
                                    </div>
                                    <p>
                                        Join thousands of other listeners to hear from the current
                                        leaders, experts, vendors, and instructors in the IT and
                                        Cybersecurity fields regarding DevSecOps, InfoSec, Ransomware
                                        attacks, the diversity and the retention of talent, and more.
                                        Gain the confidence, consistency, and courage to succees at work
                                        and in life.
                                    </p>
                                    <div className="margin-top margin-medium">
                                        <div>Download our free media kit today to learn more.</div>
                                    </div>
                                    <div className="margin-top margin-medium">
                                        <div className="button-group">
                                            <a
                                                cb-element=""
                                                href="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64582f9a78faaa5cf0f6c5fd_Podcast_Media_Kit_2021.pdf"
                                                target="_blank"
                                                className="button w-button"
                                            >
                                                Download media kit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="simple-left-align_image-wrapper">
                                    <img
                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64380fff865fa42e6d8ebd71_webp-Vector%2024.webp"
                                        loading="lazy"
                                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 58vw, 51vw"
                                        srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64380fff865fa42e6d8ebd71_webp-Vector%2024-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64380fff865fa42e6d8ebd71_webp-Vector%2024.webp 778w"
                                        alt=""
                                        className="simple-left-align_gradient pointer-events-off"
                                    />
                                    <img
                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fb6e4814367f7b00d9e7a_Frame%2096059.webp"
                                        loading="lazy"
                                        alt="Podcast image"
                                        className="simple-left-align_image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_podcast_channels">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-120 no-top">
                            <div className="podcast-channels_component">
                                <div className="margin-bottom margin-large">
                                    <div className="podcast-channels-2_heading-wrapper">
                                        <div className="margin-bottom margin-xsmall-2">
                                            <div className="podcast-channels_heading">
                                                <div className="active-button is-heading" />
                                                <h2 className="heading-style-h4 is-heading">
                                                    Podcast Channels
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="podcast-channels_list-wrapper w-dyn-list">
                                    <div role="list" className="podcast-channels_list w-dyn-items">
                                        <div
                                            role="listitem"
                                            className="podcast-channels_item w-dyn-item"
                                        >
                                            <a
                                                href="/podcast-series/intruder-alert"
                                                className="podcast-channels_item-link w-inline-block"
                                            >
                                                <div className="podcast-channels_image-wrapper">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp"
                                                        loading="lazy"
                                                        alt=""
                                                        className="podcast-channels_image"
                                                    />
                                                    <div className="podcast-channels_overlay pointer-events-off" />
                                                </div>
                                                <div className="podcast-channels_item-content">
                                                    <div className="podcast-channels_item-content-top">
                                                        <div className="podcast-channels_title-wrapper">
                                                            <h3 className="heading-style-h5">Intruder Alert</h3>
                                                        </div>
                                                        <div
                                                            cl-function="truncate-two"
                                                            className="text-size-small text-color-light-grey"
                                                        >
                                                            Ready to take your cybersecurity knowledge to the next
                                                            level? Look no further than Intruder Alert:
                                                            Conversations with Cybrary's Hackers. Hosted by the
                                                            legendary Marcus Hutchins, this bi-weekly podcast is
                                                            the ultimate destination for hacking enthusiasts and
                                                            practitioners alike. Each episode features a deep dive
                                                            into the latest trends and techniques used by hackers
                                                            and cybersecurity experts, along with real-world
                                                            stories and case studies that bring these concepts to
                                                            life. From ethical hacking and penetration testing to
                                                            cyber espionage and data breaches, Intruder Alert
                                                            covers it all. So tune in, subscribe, and get ready to
                                                            join the conversation on Intruder Alert: Conversations
                                                            with Cybrary's Hackers!
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div
                                            role="listitem"
                                            className="podcast-channels_item w-dyn-item"
                                        >
                                            <a
                                                href="/podcast-series/cybrary-podcasts"
                                                className="podcast-channels_item-link w-inline-block"
                                            >
                                                <div className="podcast-channels_image-wrapper">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220ec1313f758121ec81_podcast_default.jpeg"
                                                        loading="lazy"
                                                        alt=""
                                                        sizes="(max-width: 479px) 93vw, (max-width: 767px) 91vw, (max-width: 991px) 42vw, 34vw"
                                                        srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220ec1313f758121ec81_podcast_default-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220ec1313f758121ec81_podcast_default-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220ec1313f758121ec81_podcast_default-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220ec1313f758121ec81_podcast_default.jpeg 1400w"
                                                        className="podcast-channels_image"
                                                    />
                                                    <div className="podcast-channels_overlay pointer-events-off" />
                                                </div>
                                                <div className="podcast-channels_item-content">
                                                    <div className="podcast-channels_item-content-top">
                                                        <div className="podcast-channels_title-wrapper">
                                                            <h3 className="heading-style-h5">Cybrary Podcasts</h3>
                                                        </div>
                                                        <div
                                                            cl-function="truncate-two"
                                                            className="text-size-small text-color-light-grey"
                                                        >
                                                            Listen in to the Cybrary Podcast where industry
                                                            leaders and professionals from all aspects on the
                                                            cybersecurity and IT fields give insight into how they
                                                            got where they are today and what new and emerging
                                                            technology we should be taking notice of.
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div
                                            role="listitem"
                                            className="podcast-channels_item w-dyn-item"
                                        >
                                            <a
                                                href="/podcast-series/401-access-denied"
                                                className="podcast-channels_item-link w-inline-block"
                                            >
                                                <div className="podcast-channels_image-wrapper">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg"
                                                        loading="lazy"
                                                        alt=""
                                                        sizes="(max-width: 479px) 93vw, (max-width: 767px) 91vw, (max-width: 991px) 42vw, 34vw"
                                                        srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg 1601w"
                                                        className="podcast-channels_image"
                                                    />
                                                    <div className="podcast-channels_overlay pointer-events-off" />
                                                </div>
                                                <div className="podcast-channels_item-content">
                                                    <div className="podcast-channels_item-content-top">
                                                        <div className="podcast-channels_title-wrapper">
                                                            <h3 className="heading-style-h5">
                                                                401 Access Denied
                                                            </h3>
                                                        </div>
                                                        <div
                                                            cl-function="truncate-two"
                                                            className="text-size-small text-color-light-grey"
                                                        >
                                                            The 2021 award-winning 401 Access Denied Podcast
                                                            brings together cybersecurity leaders from Cybrary and
                                                            Delinea, along with special guests, to discuss cyber
                                                            security and IT topics in order to make them more
                                                            accessible and entertaining for laymen and experts
                                                            alike. Joseph Carson, Chief Security Scientist at
                                                            Delinea, joins guests to share insights on various
                                                            security topics such as hiring in cyber, thinking like
                                                            a hacker, mitigating insider threats, helping secure
                                                            your kids online, and IoT and OT security. Our 401
                                                            Access Denied podcast with Delinea won the 2022 award
                                                            for Best Cybersecurity Podcast in North America.
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div
                                            role="listitem"
                                            className="podcast-channels_item w-dyn-item"
                                        >
                                            <a
                                                href="/podcast-series/go-for-it"
                                                className="podcast-channels_item-link w-inline-block"
                                            >
                                                <div className="podcast-channels_image-wrapper">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64582210a4850a3154ffa5bf_podcast_go.jpeg"
                                                        loading="lazy"
                                                        alt=""
                                                        className="podcast-channels_image"
                                                    />
                                                    <div className="podcast-channels_overlay pointer-events-off" />
                                                </div>
                                                <div className="podcast-channels_item-content">
                                                    <div className="podcast-channels_item-content-top">
                                                        <div className="podcast-channels_title-wrapper">
                                                            <h3 className="heading-style-h5">Go For It</h3>
                                                        </div>
                                                        <div
                                                            cl-function="truncate-two"
                                                            className="text-size-small text-color-light-grey"
                                                        >
                                                            We’re exited to introduce Sarah, the President and
                                                            Founder of LeadingLadies.co, as she shares her story
                                                            and inspiration to go for it, every day. From her
                                                            part-time work through high school and college, to the
                                                            experiences that taught her how to run operations for
                                                            large businesses, Sarah shares how she discovered her
                                                            Ah-Ha moment and how people can find theirs.
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="show-mobile-landscape">
                                    <div className="card-component_navigation-wrapper">
                                        <div className="card-component_buttons-wrapper">
                                            <a
                                                aria-label="previous slide button"
                                                href="#"
                                                className="card-component_prev-button w-inline-block"
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
                                                aria-label="next slide button"
                                                href="#"
                                                className="card-component_next-button w-inline-block"
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
                                        <div className="card-component_pagination hide-mobile-landscape">
                                            <div className="card-component_pagination-dot" />
                                            <div className="card-component_pagination-dot is-active" />
                                        </div>
                                    </div>
                                </div>
                                <div className="podcast-channels-2_button-row is-hidden">
                                    <a href="#" className="button is-alternate w-button">
                                        View all
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <header
                id="blog-header-7"
                fs-cmsload-element="scroll-anchor"
                className="section_podcast-list background-color-black-gradient"
            >
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-120">
                            <div className="podcast-list_component">
                                <div className="podcast-list_category-menu no-scrollbar no-divider">
                                    <div className="podcast-channels_heading">
                                        <div className="active-button is-heading" />
                                        <h2 className="heading-style-h4 is-heading">All Episodes</h2>
                                    </div>
                                    <div className="podcast-list_category-wrapper is-hidden">
                                        <div className="text-style-label">Sort by</div>
                                        <a
                                            cl-function="reset"
                                            href="#"
                                            className="podcast-list_menu-link hide w-inline-block"
                                        >
                                            <div className="podcast-list_tick w-embed">
                                                <svg
                                                    width={13}
                                                    height={10}
                                                    viewBox="0 0 13 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 1.5L5 8.5L1.5 5"
                                                        stroke="#0C0C0C"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <div>Popular</div>
                                        </a>
                                        <a
                                            cl-function="trigger"
                                            fs-cmssort-field="date"
                                            fs-cmssort-type="date"
                                            fs-cmssort-element="trigger"
                                            href="#"
                                            className="podcast-list_menu-link w-inline-block"
                                            role="columnheader"
                                            tabIndex={0}
                                            aria-sort="none"
                                        >
                                            <div>Recent Uploads</div>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    fs-cmsfilter-element="scroll-anchor"
                                    className="podcast-list_list-wrapper w-dyn-list"
                                >
                                    <div
                                        fs-cmsfilter-element="scroll-anchor"
                                        fs-cmsload-element="list"
                                        fs-cmsload-mode="pagination"
                                        fs-cmssort-element="list"
                                        role="list"
                                        className="podcast-list_list w-dyn-items"
                                    >
                                        <div role="listitem" className="podcast-list_item w-dyn-item">
                                            <div className="podcast-list_item-wrapper">
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fcc-a8e465f9"
                                                    className="podcast-list_image-wrapper"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg"
                                                        loading="lazy"
                                                        alt="401 Access Denied Podcast Ep. 83 | The AI Revolution with Diana Kelley"
                                                        sizes="(max-width: 991px) 100vw, 20vw"
                                                        srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg 1601w"
                                                        className="podcast-list_image"
                                                    />
                                                </div>
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fce-a8e465f9"
                                                    className="podcast-list_item-content"
                                                >
                                                    <div className="podcast-list_item-content-top">
                                                        <div className="podcast-list_top-wrapper">
                                                            <div
                                                                id="w-node-_95d82fc5-6aeb-b7fc-d002-047ca4f3d0dd-a8e465f9"
                                                                className="podcast-list_image-wrapper is-small"
                                                            >
                                                                <img
                                                                    alt=""
                                                                    loading="lazy"
                                                                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg"
                                                                    sizes="(max-width: 479px) 69vw, (max-width: 767px) 23vw, (max-width: 991px) 21vw, 100vw"
                                                                    srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg 1601w"
                                                                    className="podcast-list_image"
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="podcast-list_category-wrapper">
                                                                    <div
                                                                        fs-cmssort-field="date"
                                                                        className="text-size-tiny text-color-light-grey text-weight-semibold"
                                                                    >
                                                                        June 28, 2023
                                                                    </div>
                                                                </div>
                                                                <div className="podcast-list_title-wrapper">
                                                                    <h3 className="heading-style-h4">
                                                                        401 Access Denied Podcast Ep. 83 | The AI
                                                                        Revolution with Diana Kelley
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                id="w-node-a3bddb08-d788-62a3-551a-85b811cd0bf5-a8e465f9"
                                                                className="w-richtext"
                                                            >
                                                                <p>
                                                                    Everybody’s talking about it - the AI revolution
                                                                    is here. But given the rapid evolution in this
                                                                    field, it’s hard to keep up with the sweeping
                                                                    effects this technology is causing. Luckily, Joe
                                                                    Carson is joined by longtime AI expert Diana
                                                                    Kelley to shed light on all of these changes. She
                                                                    addresses the many misconceptions and media
                                                                    misrepresentations surrounding AI, breaks down the
                                                                    different forms of this technology, and emphasizes
                                                                    the need for a better understanding of AI's
                                                                    capabilities and limitations. They also discuss
                                                                    the ethical and legal implications that will only
                                                                    become more potent as AI continues to advance. Now
                                                                    is the best time to learn about AI, and this
                                                                    episode is a great place to start!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-top margin-small">
                                                        <div className="button-group">
                                                            <a
                                                                href="/podcast/401-access-denied-ep-83-the-ai-revolution-with-diana-kelley"
                                                                className="button is-alternate w-button"
                                                            >
                                                                Listen or Watch
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="podcast-list_item w-dyn-item">
                                            <div className="podcast-list_item-wrapper">
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fcc-a8e465f9"
                                                    className="podcast-list_image-wrapper"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp"
                                                        loading="lazy"
                                                        alt="Intruder Alert Ep. 6 | Deconstructing Malware Attacks and Forging a Successful Career in Cybersecurity with Caitlin Sarian"
                                                        className="podcast-list_image"
                                                    />
                                                </div>
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fce-a8e465f9"
                                                    className="podcast-list_item-content"
                                                >
                                                    <div className="podcast-list_item-content-top">
                                                        <div className="podcast-list_top-wrapper">
                                                            <div
                                                                id="w-node-_95d82fc5-6aeb-b7fc-d002-047ca4f3d0dd-a8e465f9"
                                                                className="podcast-list_image-wrapper is-small"
                                                            >
                                                                <img
                                                                    alt=""
                                                                    loading="lazy"
                                                                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp"
                                                                    className="podcast-list_image"
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="podcast-list_category-wrapper">
                                                                    <div
                                                                        fs-cmssort-field="date"
                                                                        className="text-size-tiny text-color-light-grey text-weight-semibold"
                                                                    >
                                                                        June 23, 2023
                                                                    </div>
                                                                </div>
                                                                <div className="podcast-list_title-wrapper">
                                                                    <h3 className="heading-style-h4">
                                                                        Intruder Alert Ep. 6 | Deconstructing Malware
                                                                        Attacks and Forging a Successful Career in
                                                                        Cybersecurity with Caitlin Sarian
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                id="w-node-a3bddb08-d788-62a3-551a-85b811cd0bf5-a8e465f9"
                                                                className="w-richtext"
                                                            >
                                                                <p>
                                                                    In this episode of Intruder Alert, Marcus Hutchins
                                                                    is joined by cybersecurity expert Caitlin Sarian,
                                                                    known for her role as the Global Lead of
                                                                    Cybersecurity Advocacy and Culture at TikTok and
                                                                    her expertise in data protection and privacy
                                                                    compliance. Marcus and Caitlin provide technical
                                                                    insight into the latest US malware attacks and
                                                                    share invaluable advice on breaking into the
                                                                    cybersecurity field.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-top margin-small">
                                                        <div className="button-group">
                                                            <a
                                                                href="/podcast/intruder-alert-ep-6-deconstructing-malware-attacks-and-forging-a-successful-career-in-cybersecurity-with-caitlin-sarian"
                                                                className="button is-alternate w-button"
                                                            >
                                                                Listen or Watch
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="podcast-list_item w-dyn-item">
                                            <div className="podcast-list_item-wrapper">
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fcc-a8e465f9"
                                                    className="podcast-list_image-wrapper"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg"
                                                        loading="lazy"
                                                        alt="401 Access Denied Podcast Ep. 82 | Hacking the Government with Bryan Seely"
                                                        sizes="(max-width: 991px) 100vw, 20vw"
                                                        srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg 1601w"
                                                        className="podcast-list_image"
                                                    />
                                                </div>
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fce-a8e465f9"
                                                    className="podcast-list_item-content"
                                                >
                                                    <div className="podcast-list_item-content-top">
                                                        <div className="podcast-list_top-wrapper">
                                                            <div
                                                                id="w-node-_95d82fc5-6aeb-b7fc-d002-047ca4f3d0dd-a8e465f9"
                                                                className="podcast-list_image-wrapper is-small"
                                                            >
                                                                <img
                                                                    alt=""
                                                                    loading="lazy"
                                                                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg"
                                                                    sizes="(max-width: 479px) 69vw, (max-width: 767px) 23vw, (max-width: 991px) 21vw, 100vw"
                                                                    srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg 1601w"
                                                                    className="podcast-list_image"
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="podcast-list_category-wrapper">
                                                                    <div
                                                                        fs-cmssort-field="date"
                                                                        className="text-size-tiny text-color-light-grey text-weight-semibold"
                                                                    >
                                                                        June 14, 2023
                                                                    </div>
                                                                </div>
                                                                <div className="podcast-list_title-wrapper">
                                                                    <h3 className="heading-style-h4">
                                                                        401 Access Denied Podcast Ep. 82 | Hacking the
                                                                        Government with Bryan Seely
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                id="w-node-a3bddb08-d788-62a3-551a-85b811cd0bf5-a8e465f9"
                                                                className="w-richtext"
                                                            >
                                                                <p>
                                                                    In this eye-opening episode, dive into the
                                                                    captivating world of cybercrime and social
                                                                    engineering with our host, Joe Carson, and special
                                                                    guest Bryan Seely! Bryan, a keynote speaker and
                                                                    cybersecurity expert best known for his Secret
                                                                    Service exposé, discusses his journey from a young
                                                                    computer enthusiast to a renowned public speaker.
                                                                    Join them as they investigate the mindset and
                                                                    techniques used by hackers, such as the use of
                                                                    aliases to deceive and manipulate their targets,
                                                                    as well as the importance of responsible
                                                                    disclosure and changing cybersecurity laws.
                                                                </p>
                                                                <p>
                                                                    <strong>
                                                                        Jump-start your cybersecurity career for FREE
                                                                        with{" "}
                                                                    </strong>
                                                                    <a
                                                                        href="https://www.cybrary.it/?utm_source=youtube&utm_medium=video&utm_campaign=open-source-intelligence-with-the-grugq"
                                                                        target="_blank"
                                                                    >
                                                                        <strong>Cybrary</strong>
                                                                    </a>
                                                                    <strong>!</strong>
                                                                </p>
                                                                <p>Follow Bryan!</p>
                                                                <p>
                                                                    ~
                                                                    <a
                                                                        href="https://www.linkedin.com/in/bryanthemapsguy/"
                                                                        target="_blank"
                                                                    >
                                                                        LinkedIn
                                                                    </a>
                                                                </p>
                                                                <p>
                                                                    ~
                                                                    <a
                                                                        href="https://twitter.com/bryanthemapsguy/"
                                                                        target="_blank"
                                                                    >
                                                                        Twitter
                                                                    </a>
                                                                </p>
                                                                <p>Follow us on Social!</p>
                                                                <p>
                                                                    ~
                                                                    <a
                                                                        href="https://twitter.com/cybraryIT"
                                                                        target="_blank"
                                                                    >
                                                                        Cybrary Twitter
                                                                    </a>
                                                                </p>
                                                                <p>
                                                                    ~
                                                                    <a
                                                                        href="https://twitter.com/DelineaInc"
                                                                        target="_blank"
                                                                    >
                                                                        Delinea Twitter
                                                                    </a>
                                                                </p>
                                                                <p>
                                                                    ~
                                                                    <a
                                                                        href="https://www.instagram.com/cybrary.it/"
                                                                        target="_blank"
                                                                    >
                                                                        Instagram
                                                                    </a>
                                                                </p>
                                                                <p>
                                                                    ~
                                                                    <a
                                                                        href="https://www.facebook.com/cybraryit/"
                                                                        target="_blank"
                                                                    >
                                                                        Facebook
                                                                    </a>
                                                                </p>
                                                                <p>
                                                                    ~
                                                                    <a
                                                                        href="https://www.youtube.com/channel/UCzWPaANpPISEE_xvJm8lqHA"
                                                                        target="_blank"
                                                                    >
                                                                        YouTube
                                                                    </a>
                                                                </p>
                                                                <p>‍</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-top margin-small">
                                                        <div className="button-group">
                                                            <a
                                                                href="/podcast/401-access-denied-ep-82-hacking-the-government-with-bryan-seely"
                                                                className="button is-alternate w-button"
                                                            >
                                                                Listen or Watch
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="podcast-list_item w-dyn-item">
                                            <div className="podcast-list_item-wrapper">
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fcc-a8e465f9"
                                                    className="podcast-list_image-wrapper"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp"
                                                        loading="lazy"
                                                        alt="Intruder Alert Ep. 5 | Community Uprising: Unravelling the Reddit Blackout"
                                                        className="podcast-list_image"
                                                    />
                                                </div>
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fce-a8e465f9"
                                                    className="podcast-list_item-content"
                                                >
                                                    <div className="podcast-list_item-content-top">
                                                        <div className="podcast-list_top-wrapper">
                                                            <div
                                                                id="w-node-_95d82fc5-6aeb-b7fc-d002-047ca4f3d0dd-a8e465f9"
                                                                className="podcast-list_image-wrapper is-small"
                                                            >
                                                                <img
                                                                    alt=""
                                                                    loading="lazy"
                                                                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp"
                                                                    className="podcast-list_image"
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="podcast-list_category-wrapper">
                                                                    <div
                                                                        fs-cmssort-field="date"
                                                                        className="text-size-tiny text-color-light-grey text-weight-semibold"
                                                                    >
                                                                        June 9, 2023
                                                                    </div>
                                                                </div>
                                                                <div className="podcast-list_title-wrapper">
                                                                    <h3 className="heading-style-h4">
                                                                        Intruder Alert Ep. 5 | Community Uprising:
                                                                        Unravelling the Reddit Blackout
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                id="w-node-a3bddb08-d788-62a3-551a-85b811cd0bf5-a8e465f9"
                                                                className="w-richtext"
                                                            >
                                                                <p>
                                                                    In the latest episode of Intruder Alert, Marcus
                                                                    Hutchins and Cybrary blue teamer, Marc Balingit,
                                                                    delve into the recent news of social media uproar.
                                                                    They unravel the intricacies of Reddit’s
                                                                    contentious API changes, which have cornered
                                                                    third-party apps like Apollo, sparking a sweeping
                                                                    blackout protest across thousands of subreddits.
                                                                    Furthermore, they explore the impact of Twitch’s
                                                                    fresh policy adjustments, which are a threat to
                                                                    streamers' ad revenue, and other news impacting
                                                                    online communities.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-top margin-small">
                                                        <div className="button-group">
                                                            <a
                                                                href="/podcast/intruder-alert-ep-5-community-uprising-unravelling-the-reddit-blackout"
                                                                className="button is-alternate w-button"
                                                            >
                                                                Listen or Watch
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="podcast-list_item w-dyn-item">
                                            <div className="podcast-list_item-wrapper">
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fcc-a8e465f9"
                                                    className="podcast-list_image-wrapper"
                                                >
                                                    <img
                                                        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg"
                                                        loading="lazy"
                                                        alt="401 Access Denied Podcast Ep. 81 | Open Source Intelligence with The Grugq"
                                                        sizes="(max-width: 991px) 100vw, 20vw"
                                                        srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg 1601w"
                                                        className="podcast-list_image"
                                                    />
                                                </div>
                                                <div
                                                    id="w-node-b35a3740-e166-acf0-bd8f-171df8540fce-a8e465f9"
                                                    className="podcast-list_item-content"
                                                >
                                                    <div className="podcast-list_item-content-top">
                                                        <div className="podcast-list_top-wrapper">
                                                            <div
                                                                id="w-node-_95d82fc5-6aeb-b7fc-d002-047ca4f3d0dd-a8e465f9"
                                                                className="podcast-list_image-wrapper is-small"
                                                            >
                                                                <img
                                                                    alt=""
                                                                    loading="lazy"
                                                                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg"
                                                                    sizes="(max-width: 479px) 69vw, (max-width: 767px) 23vw, (max-width: 991px) 21vw, 100vw"
                                                                    srcSet="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-500.jpeg 500w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-800.jpeg 800w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg 1601w"
                                                                    className="podcast-list_image"
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="podcast-list_category-wrapper">
                                                                    <div
                                                                        fs-cmssort-field="date"
                                                                        className="text-size-tiny text-color-light-grey text-weight-semibold"
                                                                    >
                                                                        May 31, 2023
                                                                    </div>
                                                                </div>
                                                                <div className="podcast-list_title-wrapper">
                                                                    <h3 className="heading-style-h4">
                                                                        401 Access Denied Podcast Ep. 81 | Open Source
                                                                        Intelligence with The Grugq
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div
                                                                cl-function="truncate-three"
                                                                id="w-node-a3bddb08-d788-62a3-551a-85b811cd0bf5-a8e465f9"
                                                                className="w-richtext"
                                                            >
                                                                <p>
                                                                    Given the complex and evolving nature of security,
                                                                    how do different countries approach cyber strategy
                                                                    on a global scale? In this episode of 401 Access
                                                                    Denied, Joe Carson is joined by the one and only
                                                                    Thaddeus E. Grugq (“The Grugq”), who brings along
                                                                    decades of security research and operational
                                                                    security experience. They explore various
                                                                    countries' approaches to cyber operations,
                                                                    including the US, UK and EU, India, Russia, and
                                                                    China. The Grugq also touches on the importance of
                                                                    legal frameworks, cooperation between different
                                                                    government entities, and the dynamic relationships
                                                                    between intelligence groups and law enforcement
                                                                    agencies.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-top margin-small">
                                                        <div className="button-group">
                                                            <a
                                                                href="/podcast/401-access-denied-podcast-ep-81-open-source-intelligence-with-the-grugq"
                                                                className="button is-alternate w-button"
                                                            >
                                                                Listen or Watch
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="navigation"
                                        aria-label="List"
                                        className="w-pagination-wrapper pagination"
                                    >
                                        <a
                                            href="?cfb51257_page=0"
                                            aria-label="Previous Page"
                                            className="w-pagination-previous pagination-button is-prev"
                                            style={{ display: "none" }}
                                        >
                                            <div className="icon-embed-custom w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 7 13"
                                                    fill="none"
                                                    preserveAspectRatio="xMidYMid meet"
                                                    aria-hidden="true"
                                                    role="img"
                                                >
                                                    <path
                                                        d="M1.5 1L5.88848 5.82733C6.23523 6.20875 6.23523 6.79125 5.88848 7.17267L1.5 12"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                        <div className="pagination-number-wrapper">
                                            <a
                                                cl-style="1x1"
                                                fs-cmsload-element="page-button"
                                                href="?cfb51257_page=1"
                                                className="page-number w-inline-block w--current"
                                                aria-current="page"
                                            >
                                                1
                                            </a>
                                            <a
                                                cl-style="1x1"
                                                fs-cmsload-element="page-button"
                                                href="?cfb51257_page=2"
                                                className="page-number w-inline-block"
                                            >
                                                2
                                            </a>
                                            <a
                                                cl-style="1x1"
                                                fs-cmsload-element="page-button"
                                                href="?cfb51257_page=3"
                                                className="page-number w-inline-block"
                                            >
                                                3
                                            </a>
                                            <a
                                                cl-style="1x1"
                                                fs-cmsload-element="page-button"
                                                href="?cfb51257_page=4"
                                                className="page-number w-inline-block"
                                            >
                                                4
                                            </a>
                                            <a
                                                cl-style="1x1"
                                                fs-cmsload-element="page-button"
                                                href="?cfb51257_page=5"
                                                className="page-number w-inline-block"
                                            >
                                                5
                                            </a>
                                            <a
                                                fs-cmsload-element="page-dots"
                                                href="#"
                                                className="page-truncation w-inline-block"
                                            >
                                                <div>...</div>
                                            </a>
                                            <a
                                                cl-style="1x1"
                                                fs-cmsload-element="page-button"
                                                href="?cfb51257_page=44"
                                                className="page-number w-inline-block"
                                            >
                                                44
                                            </a>
                                        </div>
                                        <a
                                            cl-style="1x1"
                                            href="?cfb51257_page=2"
                                            aria-label="Next Page"
                                            className="w-pagination-next pagination-button"
                                        >
                                            <div className="embed-wrapper w-embed">
                                                <svg
                                                    width={7}
                                                    height={13}
                                                    viewBox="0 0 7 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.5 1L5.88848 5.82733C6.23523 6.20875 6.23523 6.79125 5.88848 7.17267L1.5 12"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                        <link rel="prerender" href="?cfb51257_page=2" />
                                        <div
                                            aria-label="Page 1 of 44"
                                            role="heading"
                                            className="w-page-count hide"
                                        >
                                            1 / 44
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-embed">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n\n.w-pagination-wrapper {\n\tmargin-top: 2rem;\n}\n\n"
                        }}
                    />
                </div>
            </header>
        </div>

    </>
}

export default podcast;