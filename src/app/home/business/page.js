'use client';
import { useRef,useEffect } from "react";
import gsap from 'gsap';
const business = () => {

    const marqueeRef = useRef(null);

    useEffect(() => {
        gsap.to(marqueeRef.current, {
            x: "-100%", // Moves the marquee to the left
            duration: 10, // Speed of animation
            repeat: -1, // Infinite loop
            ease: "linear",
        });
    }, []);

    return <>
        <main className="main-wrapper">
            <section className="section_team-hero">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-xlarge">
                            <div className="w-layout-grid teams-hero_content">
                                <div cb-max="" className="teams-hero_left">
                                    <h1 className="dx-heading-style-h1">
                                        Unlock{" "}
                                        <span className="text-color-alternate-gradient">
                                            Effective Cybersecurity
                                        </span>{" "}
                                        Professional Development
                                    </h1>
                                    <div className="teams-hero_subtext">
                                        <p>
                                            Join Cybrary for Business to better protect your organization.
                                            Invest in cybersecurity training for employees. Onboard new
                                            team members. Retain top talent. Baseline and benchmark your
                                            team. Remediate skill gaps. Prepare for certifications. Align
                                            with key industry frameworks. All within Cybrary.
                                        </p>
                                    </div>
                                    <div className="button-group is-center-mobile">
                                        <a href="/home/demo-request" className="button w-button">
                                            Get a Demo
                                        </a>
                                        <a
                                            href="/home/upgrade"
                                            className="button is-alternate is-no-outline w-inline-block"
                                        >
                                            <div>Get Started Now</div>
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
                                <img
                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 87vw, (max-width: 991px) 61vw, 40vw"
                                    srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min-p-500.png 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min-p-800.png 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min-p-1600.png 1600w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min-p-2000.png 2000w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min.png 2438w"
                                    alt=""
                                    className="teams-hero_image"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba158c09733c6fafd13ae_Vector%2029.svg"
                                    loading="lazy"
                                    alt=""
                                    className="teams-hero_bg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_teams-leading">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="teams-leading_content">
                            <div className="teams-leading_title">
                                <h2>
                                    <span className="text-color-alternate-gradient">
                                        Leading organizations{" "}
                                    </span>
                                    trust Cybrary <br />
                                    to keep their teams sharp
                                </h2>
                            </div>
                            <div
                                tr-marquee-speed={50}
                                tr-marquee-element="component"
                                className="logo-marquee_component no-margin-top"
                                ref={marqueeRef}
                            >
                                <div
                                    tr-marquee-element="panel"
                                    className="logo-marquee_list"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        transform: "translate(-73.6717%, 0%) translate3d(0px, 0px, 0px)"
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
                                <div
                                    tr-marquee-element="panel"
                                    className="logo-marquee_list"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        transform: "translate(-73.6717%, 0%) translate3d(0px, 0px, 0px)"
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
                                <div className="logo-marquee_shadow-copy" />
                            </div>
                            <div className="teams-awards-images_wrapper">
                                <img
                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba83cca34696350f851a3_image%2055-min.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 92vw, (max-width: 991px) 83vw, 72vw"
                                    srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba83cca34696350f851a3_image%2055-min-p-500.png 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba83cca34696350f851a3_image%2055-min-p-800.png 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba83cca34696350f851a3_image%2055-min-p-1080.png 1080w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba83cca34696350f851a3_image%2055-min.png 3000w"
                                    alt="cybrary cybersecurity excellence awards"
                                    className="teams-awards-images"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section_teams-infographics">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="teams-infographics_content">
                            <div className="teams-infographics_header">
                                <h2>Why Cybrary for Business?</h2>
                                <div className="text-color-silver">
                                    Provide team members with clarity on how to learn, grow, and
                                    advance their careers within your organization.
                                </div>
                            </div>
                            <div className="w-layout-grid infographic-3-column_component">
                                <div className="infographic-3-column_item">
                                    <div className="margin-bottom margin-xsmall-2">
                                        <h3 className="heading-style-h2 text-color-orange-gradient">
                                            80%
                                        </h3>
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <p className="text-color-silver">
                                            of security professionals feel inadequately prepared to defend
                                            their organization
                                        </p>
                                    </div>
                                </div>
                                <div className="infographic-3-column_item is-center">
                                    <div className="margin-bottom margin-xsmall-2">
                                        <h3 className="heading-style-h2 text-color-pink-gradient">
                                            68%
                                        </h3>
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <p className="text-color-silver">
                                            of security professionals don't believe their organization
                                            provides the right training
                                        </p>
                                    </div>
                                </div>
                                <div className="infographic-3-column_item is-last">
                                    <div className="margin-bottom margin-xsmall-2">
                                        <h3 className="heading-style-h2 text-color-purple-gradient">
                                            70%
                                        </h3>
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <p className="text-color-silver">
                                            of professionals claim their organization is impacted by the
                                            security skills shortage
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section_teams-upskill">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="teams-upskill_content">
                            <div className="teams-upskill_header">
                                <h2 id="w-node-e1e6c464-d089-fdb5-dc18-ad1315a20e76-09c4c13a">
                                    <span className="text-color-alternate-gradient"> </span>
                                    <span className="text-color-alternate-gradient">
                                        People first,
                                    </span>{" "}
                                    Security first
                                </h2>
                                <div
                                    id="w-node-f48ebbff-e8fa-731c-68cc-00c7e1761fcf-09c4c13a"
                                    className="teams-upskill_description"
                                >
                                    <div className="text-color-light-grey">
                                        Many companies provide “online training.” But in cybersecurity,
                                        that’s not enough. Now, more than ever, companies need
                                        effective, hands-on cybersecurity training for employees that
                                        prepares teams to stay ahead of emerging threats, trends, and
                                        technologies.
                                        <br />
                                        <br />
                                        With our baselining and benchmarking tools, role-aligned Career
                                        Paths, and focused Certification Prep courses, your team will
                                        shore up their skills and join a community of over 4 million
                                        cybersecurity professionals worldwide. Partner with Cybrary to
                                        unlock your team’s potential and protect your organization from
                                        harm.
                                    </div>
                                </div>
                                <div className="button-group">
                                    <a href="/demo-request" className="button w-button">
                                        Get a Demo
                                    </a>
                                    <a
                                        href="https://www.cybrary.it/upgrade?team=true"
                                        className="button is-alternate is-no-outline w-inline-block"
                                    >
                                        <div>Get Started Now</div>
                                        <div className="w-embed">
                                            <svg
                                                width={5}
                                                height={8}
                                                viewBox="0 0 5 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L3.50585 3.50585C3.77876 3.77876 3.77876 4.22124 3.50585 4.49415L1 7"
                                                    stroke="white"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="upskill_slider-wrapper">
                                <div className="upskill_card-wrapper">
                                    <div
                                        id="w-node-_0f8d6153-0067-6b59-c582-012063aed6fa-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 256 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">
                                            Baseline &amp; Benchmark team member’s knowledge and skills
                                        </h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            Our next-gen assessments evaluate practical skills and
                                            benchmark capabilities across a range of experience, industry,
                                            and role. By using the data from the largest global provider
                                            of cybersecurity skill development and certification prep,
                                            you’ll gain unprecedented insights into your team’s
                                            capabilities.
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-_93b39be2-248d-c25b-96d1-c3c257cd13a0-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 320 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">
                                            Structured Career Paths aligned to key industry frameworks,
                                            including MITRE ATT&amp;CK, the NICE Cybersecurity Workforce
                                            Framework, and DoD 8140
                                        </h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            <span>
                                                Our integration of practical cybersecurity skill training
                                                with industry frameworks provides realistic scenarios
                                                designed to build real skills. This equips teams not only
                                                with theoretical knowledge but also with applicable skills
                                                used in their everyday jobs.
                                            </span>
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-e04c7f32-e86e-fa08-f8c8-4b2b5b6571a6-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 320 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">
                                            Hands-on technical training and certification prep for your
                                            enterprise
                                        </h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            <span>
                                                Combined with on-demand certification prep for the
                                                industry’s most in-demand exams, Cybrary offers the only
                                                holistic solution for both technical cybersecurity skill
                                                development and certification prep. Live sandbox
                                                environments ensure learning covers both theory and
                                                practical skills aligned around task-based content.
                                            </span>
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-fa4f0b1c-3b04-cd22-aca0-ae9d9da0e79d-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon is-puzzle w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 384 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">
                                            Stay ahead of cybersecurity threats with courses covering the
                                            latest CVEs and threat actors
                                        </h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            <span className="text-weight-bold text-color-alternate-gradient">
                                                80% of security professionals feel inadequately prepared to
                                                defend their organization
                                            </span>{" "}
                                            -Ponemon Institute
                                            <br />‍<br />
                                            Our Cybrary Threat Intelligence Team monitors the latest
                                            threats and threat actors to create realistic
                                            “threat-breaking” simulations.
                                            <br />
                                            <br />
                                            Map the vulnerabilities, tactics and techniques to industry
                                            frameworks and build visualizations to MITRE ATT&amp;CK.
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-_502c7af2-baf1-3887-c8bc-ca0e7f5bdc4c-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 320 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="heading-style-h5">
                                                <strong>Identify up-and-coming talent and </strong>
                                                <strong>‍</strong>
                                                <strong>
                                                    increase retention of your current cybersecurity workforce
                                                </strong>
                                            </h3>
                                            <div className="padding-bottom padding-xxsmall" />
                                            <p className="text-color-light-grey">
                                                <span className="text-weight-bold text-color-alternate-gradient">
                                                    48% of cybersecurity leaders report training helps reduce
                                                    employee turnover
                                                </span>{" "}
                                                -OMDIA Report, Cybrary
                                                <br />
                                                <br />
                                                Learning analytics and skill insights allow managers to
                                                identify key talent within their organizations and create
                                                new opportunities for their most committed personnel.
                                                Properly invest in your people and watch your retention
                                                rates soar.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-_3c9e3de0-41d3-3a25-d5f8-26cd57d2ed3d-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon hide_upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 448 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                                                </svg>
                                            </div>
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 320 512"
                                                >
                                                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                                    <path d="M232.4 84.7c11.4-13.5 9.7-33.7-3.8-45.1s-33.7-9.7-45.1 3.8L38.6 214.7C14.7 242.9 1.1 278.4 .1 315.2c0 1.4-.1 2.9-.1 4.3c0 .2 0 .3 0 .5c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.5-67.1-155.4-151.5-159.8l63.9-75.6zM256 320A96 96 0 1 1 64 320a96 96 0 1 1 192 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">
                                            Work with a dedicated Customer Success Team to create and
                                            implement an effective training strategy
                                            <br />
                                        </h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            Implementing a cybersecurity skills strategy is challenging.
                                            Our team has worked with the most prominent commercial
                                            businesses and government entities to help build, develop, and
                                            scale incredibly effective training programs We're ready to do
                                            the same for you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_upskill">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="teams-perks_content-2">
                            <div className="teams-perks_header-2">
                                <h2>
                                    Bonus Perks:{" "}
                                    <span className="text-color-alternate-gradient text-weight-bold">
                                        Exclusive to Cybrary for Business
                                    </span>
                                </h2>
                                <div className="margin-top margin-medium">
                                    <div className="button-group is-center-mobile">
                                        <a href="/demo-request" className="button w-button">
                                            Get a Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="upskill_slider-wrapper">
                                <div className="upskill_card-wrapper">
                                    <div
                                        id="w-node-b2c95125-4e68-175a-ca49-8651b2c2ca96-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    width={32}
                                                    height={32}
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M29.6013 23.5113L18.6701 4.5275C18.3969 4.06241 18.007 3.67677 17.5388 3.40883C17.0707 3.14088 16.5407 2.99992 16.0013 2.99992C15.462 2.99992 14.9319 3.14088 14.4638 3.40883C13.9957 3.67677 13.6058 4.06241 13.3326 4.5275L2.40134 23.5113C2.13851 23.9611 2 24.4727 2 24.9938C2 25.5148 2.13851 26.0264 2.40134 26.4763C2.671 26.9442 3.0603 27.3319 3.52929 27.5997C3.99828 27.8674 4.53007 28.0056 5.07009 28H26.9326C27.4722 28.0052 28.0035 27.8668 28.472 27.599C28.9405 27.3313 29.3294 26.9438 29.5988 26.4763C29.8621 26.0266 30.001 25.5151 30.0014 24.9941C30.0019 24.4731 29.8638 23.9613 29.6013 23.5113ZM15.0013 13C15.0013 12.7348 15.1067 12.4804 15.2942 12.2929C15.4818 12.1054 15.7361 12 16.0013 12C16.2666 12 16.5209 12.1054 16.7084 12.2929C16.896 12.4804 17.0013 12.7348 17.0013 13V18C17.0013 18.2652 16.896 18.5196 16.7084 18.7071C16.5209 18.8946 16.2666 19 16.0013 19C15.7361 19 15.4818 18.8946 15.2942 18.7071C15.1067 18.5196 15.0013 18.2652 15.0013 18V13ZM16.0013 24C15.7047 24 15.4147 23.912 15.168 23.7472C14.9213 23.5824 14.7291 23.3481 14.6155 23.074C14.502 22.7999 14.4723 22.4983 14.5302 22.2074C14.588 21.9164 14.7309 21.6491 14.9407 21.4393C15.1505 21.2296 15.4177 21.0867 15.7087 21.0288C15.9997 20.9709 16.3013 21.0007 16.5754 21.1142C16.8495 21.2277 17.0837 21.42 17.2485 21.6666C17.4134 21.9133 17.5013 22.2033 17.5013 22.5C17.5013 22.8978 17.3433 23.2794 17.062 23.5607C16.7807 23.842 16.3992 24 16.0013 24Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">CVE Simulations</h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            Realistic simulations of “threat-breaking” Common
                                            Vulnerabilities and Exposures as observed by the Cybrary
                                            Threat Intelligence Team. Get hands-on with the CVEs in a
                                            safe, browser-based sandbox.
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-b2c95125-4e68-175a-ca49-8651b2c2ca9e-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    width={28}
                                                    height={32}
                                                    viewBox="0 0 28 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1286_3084)">
                                                        <path
                                                            d="M22.999 8C22.999 10.775 21.4115 13.2188 18.999 14.65V16C18.999 17.1063 18.1053 18 16.999 18H10.999C9.89279 18 8.99904 17.1063 8.99904 16V14.65C6.58654 13.2125 4.99904 10.7688 4.99904 8C4.99904 3.58125 9.03029 0 13.999 0C18.9678 0 22.999 3.58125 22.999 8ZM10.499 11C11.0295 11 11.5382 10.7893 11.9133 10.4142C12.2883 10.0391 12.499 9.53043 12.499 9C12.499 8.46957 12.2883 7.96086 11.9133 7.58579C11.5382 7.21071 11.0295 7 10.499 7C9.96861 7 9.4599 7.21071 9.08483 7.58579C8.70975 7.96086 8.49904 8.46957 8.49904 9C8.49904 9.53043 8.70975 10.0391 9.08483 10.4142C9.4599 10.7893 9.96861 11 10.499 11ZM19.499 9C19.499 8.46957 19.2883 7.96086 18.9133 7.58579C18.5382 7.21071 18.0295 7 17.499 7C16.9686 7 16.4599 7.21071 16.0848 7.58579C15.7098 7.96086 15.499 8.46957 15.499 9C15.499 9.53043 15.7098 10.0391 16.0848 10.4142C16.4599 10.7893 16.9686 11 17.499 11C18.0295 11 18.5382 10.7893 18.9133 10.4142C19.2883 10.0391 19.499 9.53043 19.499 9ZM0.21154 17.1063C0.70529 16.1188 1.90529 15.7188 2.89279 16.2125L13.999 21.7625L25.1053 16.2125C26.0928 15.7188 27.2928 16.1188 27.7865 17.1063C28.2803 18.0938 27.8803 19.2938 26.8928 19.7875L18.474 24L26.899 28.2125C27.8865 28.7063 28.2865 29.9063 27.7928 30.8938C27.299 31.8813 26.099 32.2813 25.1115 31.7875L13.999 26.2375L2.89279 31.7875C1.90529 32.2813 0.70529 31.8813 0.21154 30.8938C-0.28221 29.9063 0.11779 28.7063 1.10529 28.2125L9.52404 24L1.10529 19.7875C0.11779 19.2938 -0.28221 18.0938 0.21154 17.1063Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1286_3084">
                                                            <rect width={28} height={32} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">Purple Team Exercises</h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            Curious how active threat-actors tactics and techniques come
                                            together to exploit organizations? Purple Team Exercises
                                            recreate realistic threat campaign simulations observed being
                                            used by real threat actors like APT35, Royal, APT41 and more.
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-b2c95125-4e68-175a-ca49-8651b2c2caa6-09c4c13a"
                                        className="upskill_card business_feature hidden_upskill-card"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 640 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">
                                            Live-online Certification Prep (add-on)
                                        </h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            For Teams interested in live-online instructor-led
                                            certification prep, Cybrary Live offers an alternative way to
                                            fast-track certification prep for your team.
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-b2c95125-4e68-175a-ca49-8651b2c2caae-09c4c13a"
                                        className="upskill_card business_feature hidden_upskill-card"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon is-puzzle w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 460 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">
                                            Digital Forensics and Incidence Response (DFIR) Intensive
                                        </h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            Deep-dive into practical DFIR practices and procedures using a
                                            variety of popular tools, such as Windows, Linux, and MacOS.
                                        </p>
                                    </div>
                                    <div
                                        id="w-node-b2c95125-4e68-175a-ca49-8651b2c2cab6-09c4c13a"
                                        className="upskill_card business_feature hidden_upskill-card"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.5em"
                                                    viewBox="0 0 576 512"
                                                >
                                                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "svg{fill:#ffffff}"
                                                        }}
                                                    />
                                                    <path d="M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1L48.1 379.6c-12.5 7.3-28.4 5.3-38.7-4.9S-3 348.7 4.2 336.1L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="heading-style-h5">
                                                Red Team Exercises and Operations (RTXO) Intensive
                                            </h3>
                                            <div className="padding-bottom padding-xxsmall" />
                                            <p className="text-color-light-grey">
                                                Red Teams don’t just work to ethically breach an
                                                organization or application; they study the TTPs of various
                                                adversaries that fit their organization’s threat profile;
                                                they get into the mindset of these threat actors and execute
                                                emulation plans to find weaknesses in their organization's
                                                defenses.
                                                <br />
                                                <br />
                                                If you want to defend organizations by deploying
                                                adversaries' tactics, then Cybrary’s RTXO series is for you.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-b2c95125-4e68-175a-ca49-8651b2c2cac2-09c4c13a"
                                        className="upskill_card business_feature"
                                    >
                                        <div className="upskill_icon-wrapper">
                                            <div className="upskill_icon w-embed">
                                                <svg
                                                    width={32}
                                                    height={32}
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M29 26C29 26.2652 28.8946 26.5196 28.7071 26.7071C28.5196 26.8946 28.2652 27 28 27H4C3.73478 27 3.48043 26.8946 3.29289 26.7071C3.10536 26.5196 3 26.2652 3 26C3 25.7348 3.10536 25.4804 3.29289 25.2929C3.48043 25.1054 3.73478 25 4 25H5V17C5 16.7348 5.10536 16.4804 5.29289 16.2929C5.48043 16.1054 5.73478 16 6 16H9C9.26522 16 9.51957 16.1054 9.70711 16.2929C9.89464 16.4804 10 16.7348 10 17V25H12V11C12 10.7348 12.1054 10.4804 12.2929 10.2929C12.4804 10.1054 12.7348 10 13 10H17C17.2652 10 17.5196 10.1054 17.7071 10.2929C17.8946 10.4804 18 10.7348 18 11V25H20V5C20 4.73478 20.1054 4.48043 20.2929 4.29289C20.4804 4.10536 20.7348 4 21 4H26C26.2652 4 26.5196 4.10536 26.7071 4.29289C26.8946 4.48043 27 4.73478 27 5V25H28C28.2652 25 28.5196 25.1054 28.7071 25.2929C28.8946 25.4804 29 25.7348 29 26Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="heading-style-h5">Baseline &amp; Benchmark</h3>
                                        <div className="padding-bottom padding-xxsmall" />
                                        <p className="text-color-light-grey">
                                            Cybrary’s Baseline feature allows Team Administrators to
                                            proactively assign role-based assessments to their team
                                            members and gain nuanced insight into their development. Learn
                                            how to start measuring your team's skills effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_right-align-tabs">
                <div className="w-embed">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n\n.left-align-tabs_tabs-link:hover .left-align-tabs_arrow {\n\ttransform: translate(0.5rem, 0)\n}\n\n.left-align-tabs_tabs-link.w--current .left-align-tabs_link-content.is-right {\n\tdisplay: block;\n}\n\n"
                        }}
                    />
                </div>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-120">
                            <div className="max-width-features">
                                <h2 className="heading-style-h2">
                                    Here's how Cybrary improves your employees' cybersecurity training
                                </h2>
                            </div>
                            <div
                                data-duration-in={400}
                                data-duration-out={200}
                                data-current="Framework"
                                data-easing="ease"
                                className="right-align-tabs_component w-tabs"
                            >
                                <div
                                    id="w-node-edd43c5c-f1f6-3976-61f5-df2ca4aada29-09c4c13a"
                                    className="right-align-tabs_tabs-menu w-tab-menu"
                                    role="tablist"
                                >
                                    <a
                                        data-w-tab="Framework"
                                        className="left-align-tabs_tabs-link w-inline-block w-tab-link w--current"
                                        id="w-tabs-0-data-w-tab-0"
                                        href="#w-tabs-0-data-w-pane-0"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-0"
                                        aria-selected="true"
                                    >
                                        <div className="right-align-tabs_item">
                                            <div className="right-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator is-small" />
                                                <div className="insider-info_icon is-pink w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.5em"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                        <style
                                                            dangerouslySetInnerHTML={{
                                                                __html: "svg{fill:#ffffff}"
                                                            }}
                                                        />
                                                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                                    </svg>
                                                </div>
                                                <div className="text-size-large text-align-left">
                                                    Continuously demonstrate and measure cyber capability
                                                </div>
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
                                            <div className="left-align-tabs_link-content is-right text-align-left">
                                                <p className="text-color-silver">
                                                    Realistic simulations using tools in virtual challenge
                                                    environments create opportunities for professionals to
                                                    demonstrate their strengths and build new capabilities.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        data-w-tab="Action"
                                        className="left-align-tabs_tabs-link w-inline-block w-tab-link"
                                        tabIndex={-1}
                                        id="w-tabs-0-data-w-tab-1"
                                        href="#w-tabs-0-data-w-pane-1"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-1"
                                        aria-selected="false"
                                    >
                                        <div className="right-align-tabs_item">
                                            <div className="right-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator is-small" />
                                                <div className="insider-info_icon is-pink w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.5em"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                        <style
                                                            dangerouslySetInnerHTML={{
                                                                __html: "svg{fill:#ffffff}"
                                                            }}
                                                        />
                                                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                                    </svg>
                                                </div>
                                                <div className="text-size-large text-align-left">
                                                    Reduce Cybersecurity Costs
                                                </div>
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
                                            <div className="left-align-tabs_link-content is-right text-align-left">
                                                <p className="text-color-silver">
                                                    The average cost of losing a cybersecurity employee can be
                                                    nearly $50,000 per employee.
                                                    <br />
                                                    <br />
                                                    Consolidate your cybersecurity team’s training budget
                                                    needs and reduce reliance on third-party staffing and
                                                    consultants to fill talent gaps.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        data-w-tab="Plan"
                                        className="left-align-tabs_tabs-link w-inline-block w-tab-link"
                                        tabIndex={-1}
                                        id="w-tabs-0-data-w-tab-2"
                                        href="#w-tabs-0-data-w-pane-2"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-2"
                                        aria-selected="false"
                                    >
                                        <div className="right-align-tabs_item">
                                            <div className="right-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator is-small" />
                                                <div className="insider-info_icon is-pink w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.5em"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                        <style
                                                            dangerouslySetInnerHTML={{
                                                                __html: "svg{fill:#ffffff}"
                                                            }}
                                                        />
                                                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                                    </svg>
                                                </div>
                                                <div className="text-size-large text-align-left">
                                                    Maximize your cybersecurity budget
                                                </div>
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
                                            <div className="left-align-tabs_link-content is-right text-align-left">
                                                <p className="text-color-silver">
                                                    The best products aren’t always the most expensive ones.
                                                    Ditch the $2000/per person/per year license, maximize your
                                                    budget and get more for less with Cybrary.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        data-w-tab="Tab"
                                        className="left-align-tabs_tabs-link is-last w-inline-block w-tab-link"
                                        tabIndex={-1}
                                        id="w-tabs-0-data-w-tab-3"
                                        href="#w-tabs-0-data-w-pane-3"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-3"
                                        aria-selected="false"
                                    >
                                        <div className="right-align-tabs_item">
                                            <div className="right-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator is-small" />
                                                <div className="insider-info_icon is-pink w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.5em"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                        <style
                                                            dangerouslySetInnerHTML={{
                                                                __html: "svg{fill:#ffffff}"
                                                            }}
                                                        />
                                                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                                    </svg>
                                                </div>
                                                <div className="text-size-large text-align-left">
                                                    Improve speed and quality of response
                                                </div>
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
                                            <div className="left-align-tabs_link-content is-right text-align-left">
                                                <p className="text-color-silver">
                                                    Start with building the foundations junior employees need
                                                    to be effective.
                                                    <br />
                                                    <br />
                                                    Continually train against new threats and vulnerabilities
                                                    to increase MTTR (mean-time-to-respond).
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        data-w-tab="Tab 2"
                                        className="left-align-tabs_tabs-link is-last w-inline-block w-tab-link"
                                        tabIndex={-1}
                                        id="w-tabs-0-data-w-tab-4"
                                        href="#w-tabs-0-data-w-pane-4"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-4"
                                        aria-selected="false"
                                    >
                                        <div className="right-align-tabs_item">
                                            <div className="right-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator is-small" />
                                                <div className="insider-info_icon is-pink w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.5em"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                        <style
                                                            dangerouslySetInnerHTML={{
                                                                __html: "svg{fill:#ffffff}"
                                                            }}
                                                        />
                                                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                                    </svg>
                                                </div>
                                                <div className="text-size-large text-align-left">
                                                    Improve recruitment and career development
                                                </div>
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
                                            <div className="left-align-tabs_link-content is-right text-align-left">
                                                <p className="text-color-silver">
                                                    Ensure every new hire has the same fundamentals and can
                                                    speak the same language with the rest of the team.
                                                    <br />
                                                    <br />
                                                    Build a scalable, repeatable cybersecurity skill
                                                    development program at your organization.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        data-w-tab="Tab 3"
                                        className="left-align-tabs_tabs-link is-last w-inline-block w-tab-link"
                                        tabIndex={-1}
                                        id="w-tabs-0-data-w-tab-5"
                                        href="#w-tabs-0-data-w-pane-5"
                                        role="tab"
                                        aria-controls="w-tabs-0-data-w-pane-5"
                                        aria-selected="false"
                                    >
                                        <div className="right-align-tabs_item">
                                            <div className="right-align-tabs_item-heading">
                                                <div className="left-align-tabs_active-indicator is-small" />
                                                <div className="insider-info_icon is-pink w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1.5em"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                                        <style
                                                            dangerouslySetInnerHTML={{
                                                                __html: "svg{fill:#ffffff}"
                                                            }}
                                                        />
                                                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                                    </svg>
                                                </div>
                                                <div className="text-size-large text-align-left">
                                                    Reduce AWS and Microsoft Azure vulnerabilities
                                                </div>
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
                                            <div className="left-align-tabs_link-content is-right text-align-left">
                                                <p className="text-color-silver">
                                                    Enable your team to learn the basics of AWS and Microsoft
                                                    Azure, get them certified, then immerse them in virtual
                                                    cloud labs to learn how to create, manage and secure cloud
                                                    environments.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    id="w-node-edd43c5c-f1f6-3976-61f5-df2ca4aada56-09c4c13a"
                                    className="right-align-tabs_tabs-content hide-tablet w-tab-content"
                                >
                                    <div
                                        data-w-tab="Framework"
                                        className="left-align-tabs_tab-pane w-tab-pane w--tab-active"
                                        id="w-tabs-0-data-w-pane-0"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-0"
                                    >
                                        <div className="left-align-tabs_content-wrapper is-max">
                                            <img
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf01ddb7b5b826c960e93_demonstrate_cyber_capability_2x-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf01ddb7b5b826c960e93_demonstrate_cyber_capability_2x.webp 706w"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf01ddb7b5b826c960e93_demonstrate_cyber_capability_2x.webp"
                                                loading="lazy"
                                                alt=""
                                                className="left-align-tabs_image"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-tab="Action"
                                        className="left-align-tabs_tab-pane w-tab-pane"
                                        id="w-tabs-0-data-w-pane-1"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-1"
                                    >
                                        <div className="left-align-tabs_content-wrapper is-max">
                                            <img
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dd06d02c29bf4f18f79d82_reduce_cybersecurity_costs_2x-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dd06d02c29bf4f18f79d82_reduce_cybersecurity_costs_2x.webp 706w"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dd06d02c29bf4f18f79d82_reduce_cybersecurity_costs_2x.webp"
                                                loading="lazy"
                                                alt=""
                                                className="left-align-tabs_image"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-tab="Plan"
                                        className="left-align-tabs_tab-pane w-tab-pane"
                                        id="w-tabs-0-data-w-pane-2"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-2"
                                    >
                                        <div className="left-align-tabs_content-wrapper is-max">
                                            <img
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf63b16322a3d62364519_maximize_budget_cybrary_2x-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf63b16322a3d62364519_maximize_budget_cybrary_2x.webp 706w"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf63b16322a3d62364519_maximize_budget_cybrary_2x.webp"
                                                loading="lazy"
                                                alt=""
                                                className="left-align-tabs_image"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-tab="Tab"
                                        className="left-align-tabs_tab-pane w-tab-pane"
                                        id="w-tabs-0-data-w-pane-3"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-3"
                                    >
                                        <div className="left-align-tabs_content-wrapper is-max">
                                            <img
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf53aad961f26c04b0ae5_threat_actor_magic_hound_2x-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf53aad961f26c04b0ae5_threat_actor_magic_hound_2x.webp 706w"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf53aad961f26c04b0ae5_threat_actor_magic_hound_2x.webp"
                                                loading="lazy"
                                                alt=""
                                                className="left-align-tabs_image"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-tab="Tab 2"
                                        className="left-align-tabs_tab-pane w-tab-pane"
                                        id="w-tabs-0-data-w-pane-4"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-4"
                                    >
                                        <div className="left-align-tabs_content-wrapper is-max">
                                            <img
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcfbfffba1187053879e71_improve_recruitment_career_development_2x-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcfbfffba1187053879e71_improve_recruitment_career_development_2x.webp 706w"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcfbfffba1187053879e71_improve_recruitment_career_development_2x.webp"
                                                loading="lazy"
                                                alt=""
                                                className="left-align-tabs_image"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-tab="Tab 3"
                                        className="left-align-tabs_tab-pane w-tab-pane"
                                        id="w-tabs-0-data-w-pane-5"
                                        role="tabpanel"
                                        aria-labelledby="w-tabs-0-data-w-tab-5"
                                    >
                                        <div className="left-align-tabs_content-wrapper is-max">
                                            <img
                                                sizes="(max-width: 991px) 100vw, 50vw"
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf5b1c5f6822281c1082e_aws_azure_reduce_vulnerabilities_2x-p-500.webp 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf5b1c5f6822281c1082e_aws_azure_reduce_vulnerabilities_2x.webp 706w"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf5b1c5f6822281c1082e_aws_azure_reduce_vulnerabilities_2x.webp"
                                                loading="lazy"
                                                alt=""
                                                className="left-align-tabs_image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_pricing-new-use hide">
                <div className="padding-global">
                    <div className="container-large">
                        <div>
                            <div className="use_wrapper">
                                <div className="use_left">
                                    <div className="div-block-59">
                                        <h2 className="h2">
                                            Will <span className="text-span-3">my team</span> actually use
                                            it?
                                        </h2>
                                        <div className="div-block-82">
                                            <div className="body_regular">
                                                To provide transparency to the purchase process, we’d like
                                                to share several of the following statistics.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-61">
                                        <div className="div-block-62">
                                            <div className="text-block-5">30%</div>
                                            <div className="p_small">
                                                Licenses are learning every week
                                            </div>
                                        </div>
                                        <div className="line_up" />
                                        <div className="div-block-62">
                                            <div className="text-block-5">14.36</div>
                                            <div className="p_small">Average ROI of training program</div>
                                        </div>
                                        <div className="line_up" />
                                        <div className="div-block-62">
                                            <div className="text-block-5">77%</div>
                                            <div className="p_small">
                                                Reach 100% license utilization in 90 days
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="use_imag-wrapper">
                                    <img
                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae38e9ed6977681210ce82_Frame%2096093.png"
                                        loading="lazy"
                                        sizes="100vw"
                                        srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae38e9ed6977681210ce82_Frame%2096093-p-500.png 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae38e9ed6977681210ce82_Frame%2096093-p-800.png 800w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae38e9ed6977681210ce82_Frame%2096093.png 980w"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_home-cards">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-120 no-top padding-mobile-small">
                            <div className="margin-bottom margin-xlarge">
                                <div className="max-width-medium align-center">
                                    <div className="text-align-center">
                                        <h2>
                                            <span className="text-color-alternate-gradient">Empower</span>{" "}
                                            Your Team with Framework-Aligned Training Programs
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="w-layout-grid cards_component">
                                <div
                                    id="w-node-_95e52a93-5851-770c-8c7a-b355888961b8-09c4c13a"
                                    className="w-layout-grid teams-empower_card-list"
                                >
                                    <div className="cards_card-small">
                                        <div className="cards_card-small-image-wrapper no-margin is-square">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp"
                                                loading="lazy"
                                                width={1200}
                                                height={588}
                                                alt=""
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375-p-500.jpg 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp 1200w"
                                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 91vw, (max-width: 991px) 87vw, 78vw"
                                                className="cards_card-small-image"
                                            />
                                        </div>
                                        <div className="cards_card-small-content">
                                            <div className="cards_card-small-content-top">
                                                <div className="margin-bottom margin-medium">
                                                    <h3 className="heading-style-h3 is-mobile-h2">
                                                        MITRE ATT&amp;CK Framework
                                                    </h3>
                                                </div>
                                                <p>
                                                    Cybrary’s exclusive MITRE ATT&amp;CK courses empower
                                                    cybersecurity professionals to level up their analytical
                                                    and hands-on skills. Adopt innovative strategies for
                                                    conducting threat hunts, emulating adversaries, enhancing
                                                    detections, and performing CTI analysis. Focus on the TTPs
                                                    that are most important to you, or follow the favored
                                                    playbooks of known Threat Actor groups.
                                                    <br />
                                                </p>
                                            </div>
                                            <div className="margin-top margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        aria-label="Visit page"
                                                        href="/mitre-attack"
                                                        className="button is-link is-icon w-inline-block"
                                                    >
                                                        <div>Learn More</div>
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
                                    </div>
                                    <div className="cards_card-small">
                                        <div className="cards_card-small-image-wrapper no-margin is-square">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp"
                                                loading="lazy"
                                                width={1200}
                                                height={588}
                                                alt=""
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375-p-500.jpg 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp 1200w"
                                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 91vw, (max-width: 991px) 87vw, 78vw"
                                                className="cards_card-small-image"
                                            />
                                        </div>
                                        <div className="cards_card-small-content">
                                            <div className="cards_card-small-content-top">
                                                <div className="margin-bottom margin-medium">
                                                    <h3 className="heading-style-h3 is-mobile-h2">
                                                        NICE Workforce Framework for Cybersecurity
                                                    </h3>
                                                </div>
                                                <p>
                                                    Rest assured your cybersecurity training is aligned with
                                                    an established professional development framework. Cybrary
                                                    has mapped all content to the NICE Categories (7),
                                                    Specialty Areas (33), and Work Roles (52). Maximize your
                                                    training budget, bring new hires up to speed, develop IT
                                                    leaders, and equip your security team.
                                                    <br />
                                                </p>
                                            </div>
                                            <div className="margin-top margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        aria-label="Visit page"
                                                        href="/nist-nice-framework"
                                                        className="button is-link is-icon w-inline-block"
                                                    >
                                                        <div>Learn More</div>
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
                                    </div>
                                    <div className="cards_card-small">
                                        <div className="cards_card-small-image-wrapper no-margin is-square">
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp"
                                                loading="lazy"
                                                width={1200}
                                                height={588}
                                                alt=""
                                                srcSet="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375-p-500.jpg 500w, https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp 1200w"
                                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 91vw, (max-width: 991px) 87vw, 78vw"
                                                className="cards_card-small-image"
                                            />
                                        </div>
                                        <div className="cards_card-small-content">
                                            <div className="cards_card-small-content-top">
                                                <div className="margin-bottom margin-medium">
                                                    <h3 className="heading-style-h3 is-mobile-h2">
                                                        DoD 8140/8570
                                                    </h3>
                                                </div>
                                                <p>
                                                    Cybrary provides one source for DoD 8140/8570-compliant
                                                    online training. Our catalog includes 1,200+ self-paced
                                                    learning activities, including certification prep courses
                                                    aligned with the approved baseline certifications for all
                                                    14 IA Workforce roles. Go beyond 8140/8570 standards with
                                                    our CVE series and test your skills with our Threat Actor
                                                    Campaigns.
                                                    <br />
                                                </p>
                                            </div>
                                            <div className="margin-top margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        aria-label="Visit page"
                                                        href="/nist-nice-framework"
                                                        className="button is-link is-icon w-inline-block"
                                                    >
                                                        <div>Learn More</div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_home-cards">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-120 no-top">
                            <div className="w-layout-grid cards_component">
                                <div
                                    id="w-node-_5710bb6e-4b36-8026-62a1-fee69fc3e0cf-09c4c13a"
                                    className="w-layout-grid cards_row"
                                >
                                    <div
                                        cb-reverse-mobile=""
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
                                                            Read the latest research: The Myths of Training
                                                            Cybersecurity Professionals
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="max-width-xsmall">
                                                    <p>
                                                        Cybersecurity training can improve an organization’s
                                                        defenses, yet common myths make leadership hesitant to
                                                        implement formal training platforms. New research
                                                        dispels these myths, helping team leads make the case to
                                                        prioritize training.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="margin-top margin-medium">
                                                <div className="button-group">
                                                    <a
                                                        href="https://www.cybrary.it/business-resources/the-myths-of-training-cybersecurity-professionals"
                                                        target="_blank"
                                                        className="button is-icon w-inline-block"
                                                    >
                                                        <div>Download Now</div>
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
            <section className="section_upskill">
                <section className="section_case-studies">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="padding-section-100">
                                <div className="case-studies_component">
                                    <div className="margin-bottom margin-xxlarge">
                                        <div className="case-studies_heading-wrapper">
                                            <div className="case-studies_heading">
                                                <div className="text-align-center">
                                                    <div className="max-width-blog-header align-center">
                                                        <div className="margin-bottom margin-xsmall-2">
                                                            <h2>
                                                                See How Cybrary Has Impacted Teams{" "}
                                                                <span>Around the World</span>
                                                            </h2>
                                                        </div>
                                                        <div className="blog-header_para-wrapper">
                                                            <p className="text-size-medium text-color-light-grey">
                                                                Learn how other organizations are using Cybrary to
                                                                drive meaningful results.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-embed">
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n\n.case-studies_item:hover .case-studies_button svg {\n\ttransform: translate(0.5rem, 0);\n}\n\n"
                                                }}
                                            />
                                        </div>
                                        <div className="show-tablet">
                                            <div className="margin-top margin-large">
                                                <div className="button-group is-center">
                                                    <a
                                                        href="/business-resources"
                                                        className="button w-inline-block"
                                                    >
                                                        <div>More Case Studies</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-embed">
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n\n.case-studies_item-wrapper:hover svg {\n\ttransform: translate(0.5rem, 0)\n}\n\n"
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-_1f0042f9-f3aa-185b-f764-d528cc27d57a-09c4c13a"
                                        className="case-studies_list-wrapper w-dyn-list"
                                    >
                                        <div role="list" className="case-studies_list w-dyn-items">
                                            <div role="listitem" className="case-studies_item w-dyn-item">
                                                <div className="case-studies_item-wrapper">
                                                    <div
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64588ad1b1af2ca83614cdf2_resources_military_cover.jpeg")'
                                                        }}
                                                        className="case-studies_image-wrapper"
                                                    />
                                                    <div className="case-studies_item-content">
                                                        <div className="case-studies_item-content-top">
                                                            <div className="case-studies_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    How Cybrary Equips Cybersecurity Analysts to
                                                                    Defend Military Networks Against Modern Threats
                                                                </h3>
                                                            </div>
                                                            <div className="text-size-small text-color-light-grey is-case-studies">
                                                                Military Cyber Defense
                                                            </div>
                                                            <div className="padding-bottom padding-xsmall" />
                                                            <div className="case-study_ellipsis-text">
                                                                The Cyber Defense Team (CDT) is a global task force
                                                                of cybersecurity professionals who protect, detect,
                                                                and respond to attacks on US military networks
                                                                around the world. Their team of analysts collect and
                                                                analyze data from various information systems and
                                                                receive millions of alerts every day. The CDT
                                                                deploys tools like forensics, malware analysis,
                                                                incident response, and countermeasure development,
                                                                and relies on a diverse skill set to adapt to the
                                                                changing tactics of adversaries.
                                                            </div>
                                                            <div className="w-embed">
                                                                <style
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            "\n.case-study_ellipsis-text {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;}\n.case-studies_title-wrapper {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;}\n"
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="padding-top padding-small is-case-studies">
                                                                <a
                                                                    cb-element=""
                                                                    href="/business-resources/how-cybrary-equips-cybersecurity-analysts-to-defend-military-networks-against-modern-threats"
                                                                    className="button is-link is-icon w-inline-block"
                                                                >
                                                                    <div>Full Case Study</div>
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
                                                    <a
                                                        href="/business-resources/how-cybrary-equips-cybersecurity-analysts-to-defend-military-networks-against-modern-threats"
                                                        className="case-studies_item-link w-inline-block"
                                                    />
                                                </div>
                                            </div>
                                            <div role="listitem" className="case-studies_item w-dyn-item">
                                                <div className="case-studies_item-wrapper">
                                                    <div
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64588acf35fd8504f96369b6_plexsys_cover.jpeg")'
                                                        }}
                                                        className="case-studies_image-wrapper"
                                                    />
                                                    <div className="case-studies_item-content">
                                                        <div className="case-studies_item-content-top">
                                                            <div className="case-studies_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    How PLEXSYS Increased Market Share through
                                                                    Employee Skill Development Case Study
                                                                </h3>
                                                            </div>
                                                            <div className="text-size-small text-color-light-grey is-case-studies">
                                                                Simulation Software
                                                            </div>
                                                            <div className="padding-bottom padding-xsmall" />
                                                            <div className="case-study_ellipsis-text">
                                                                Continuous skill development is a vital part of
                                                                training and cybersecurity today. With increased
                                                                pressure on organizations to meet new guidelines and
                                                                regulations on security, privacy, and personnel,
                                                                finding a solution to facilitate growth,
                                                                development, and retention can be just as difficult.
                                                                PLEXSYS, a U.S. Federal Government contracted
                                                                company, wanted a way to train their people with the
                                                                best options available and provide opportunities for
                                                                employees to achieve more and feel fulfilled. This
                                                                case study dives into PLEXSYS’ search for the right
                                                                training partner and why they ultimately chose
                                                                Cybrary’s workforce development platform to meet
                                                                their business needs.
                                                            </div>
                                                            <div className="w-embed">
                                                                <style
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            "\n.case-study_ellipsis-text {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;}\n.case-studies_title-wrapper {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;}\n"
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="padding-top padding-small is-case-studies">
                                                                <a
                                                                    cb-element=""
                                                                    href="/business-resources/how-plexsys-increased-market-share-through-employee-skill-development"
                                                                    className="button is-link is-icon w-inline-block"
                                                                >
                                                                    <div>Full Case Study</div>
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
                                                    <a
                                                        href="/business-resources/how-plexsys-increased-market-share-through-employee-skill-development"
                                                        className="case-studies_item-link w-inline-block"
                                                    />
                                                </div>
                                            </div>
                                            <div role="listitem" className="case-studies_item w-dyn-item">
                                                <div className="case-studies_item-wrapper">
                                                    <div
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64588acb6786ce5ea8bfaf04_rapid_cover.jpeg")'
                                                        }}
                                                        className="case-studies_image-wrapper"
                                                    />
                                                    <div className="case-studies_item-content">
                                                        <div className="case-studies_item-content-top">
                                                            <div className="case-studies_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    How Cybrary Empowers High Touch Providers with
                                                                    Scalable Rapid Development
                                                                </h3>
                                                            </div>
                                                            <div className="text-size-small text-color-light-grey is-case-studies">
                                                                Managed Detection and Response
                                                            </div>
                                                            <div className="padding-bottom padding-xsmall" />
                                                            <div className="case-study_ellipsis-text">
                                                                Managed Detection and Response (MDR) providers like
                                                                this company have felt first hand the talent
                                                                shortage that is plaguing the cybersecurity
                                                                industry. Aiming to improve how they detect threats
                                                                and respond to incidents, they looked to Cybrary as
                                                                an attainable and scalable way to prepare employees
                                                                for work in a Security Operations Center (SOC). With
                                                                clients that depend on this company’s detection and
                                                                response services, every SOC member must be able to
                                                                exceed client expectations and perform at the
                                                                highest level. Learn how this MDRP implemented
                                                                Cybrary for their teams to be customer-ready in less
                                                                time.
                                                            </div>
                                                            <div className="w-embed">
                                                                <style
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            "\n.case-study_ellipsis-text {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;}\n.case-studies_title-wrapper {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;}\n"
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="padding-top padding-small is-case-studies">
                                                                <a
                                                                    cb-element=""
                                                                    href="/business-resources/how-cybrary-empowers-high-touch-providers-with-scalable-rapid-development"
                                                                    className="button is-link is-icon w-inline-block"
                                                                >
                                                                    <div>Full Case Study</div>
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
                                                    <a
                                                        href="/business-resources/how-cybrary-empowers-high-touch-providers-with-scalable-rapid-development"
                                                        className="case-studies_item-link w-inline-block"
                                                    />
                                                </div>
                                            </div>
                                            <div role="listitem" className="case-studies_item w-dyn-item">
                                                <div className="case-studies_item-wrapper">
                                                    <div
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64588ac813c0fd0a0ef037a5_resources_webhelp_cover.jpeg")'
                                                        }}
                                                        className="case-studies_image-wrapper"
                                                    />
                                                    <div className="case-studies_item-content">
                                                        <div className="case-studies_item-content-top">
                                                            <div className="case-studies_title-wrapper">
                                                                <h3 className="heading-style-h5">
                                                                    How Webhelp Streamlined Skill Development To Take
                                                                    Their Team To The Next Level
                                                                </h3>
                                                            </div>
                                                            <div className="text-size-small text-color-light-grey is-case-studies">
                                                                Technology Services
                                                            </div>
                                                            <div className="padding-bottom padding-xsmall" />
                                                            <div className="case-study_ellipsis-text">
                                                                In order to address their clients’ unique security
                                                                challenges, Webhelp must move quickly to adapt to
                                                                emerging trends, threats, and technologies. But with
                                                                employees on one large account dispersed across 12
                                                                countries, they struggled to find a consistent
                                                                training solution to help their team stay
                                                                up-to-date.​Webhelp partners with Cybrary to make
                                                                learning more accessible and to create tailored
                                                                development plans that align to their client’s
                                                                objectives. As a result, Webhelp has been able to
                                                                meet their client’s evolving security training
                                                                requirements, expand their team’s skill sets, and
                                                                deliver best-in-class service.
                                                            </div>
                                                            <div className="w-embed">
                                                                <style
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            "\n.case-study_ellipsis-text {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;}\n.case-studies_title-wrapper {overflow: hidden; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;}\n"
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="padding-top padding-small is-case-studies">
                                                                <a
                                                                    cb-element=""
                                                                    href="/business-resources/how-webhelp-streamlined-skill-development-to-take-their-team-to-the-next-level"
                                                                    className="button is-link is-icon w-inline-block"
                                                                >
                                                                    <div>Full Case Study</div>
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
                                                    <a
                                                        href="/business-resources/how-webhelp-streamlined-skill-development-to-take-their-team-to-the-next-level"
                                                        className="case-studies_item-link w-inline-block"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <div className="hide-tablet">
                                        <div className="margin-top margin-large">
                                            <div className="button-group is-center">
                                                <a
                                                    href="/business-resources"
                                                    className="button w-inline-block"
                                                >
                                                    <div>More Case Studies</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>

    </>
}

export default business;