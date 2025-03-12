const helpCentre = () => {
    return <>
        <main role="main">
            <h1 className="visibility-hidden">Cybrary</h1>
            <section id="main-content" className="section hero">
                <div className="hero-inner">
                    <h2 className="visibility-hidden">Search</h2>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        focusable="false"
                        viewBox="0 0 12 12"
                        className="search-icon"
                        aria-hidden="true"
                    >
                        <circle cx="4.5" cy="4.5" r={4} fill="none" stroke="currentColor" />
                        <path stroke="currentColor" strokeLinecap="round" d="M11 11L7.5 7.5" />
                    </svg>
                    <form
                        role="search"
                        className="search search-full"
                        data-search=""
                        data-instant="true"
                        autoComplete="off"
                        action="/hc/en-us/search"
                        acceptCharset="UTF-8"
                        method="get"
                    >
                        <input name="utf8" type="hidden" defaultValue="✓" autoComplete="off" />
                        <input
                            type="search"
                            name="query"
                            id="query"
                            placeholder="Search"
                            autoComplete="off"
                            aria-label="Search"
                        />
                    </form>
                </div>
            </section>
            <div className="container">
                <section className="section knowledge-base">
                    <h2 className="visibility-hidden">Categories</h2>
                    <section className="categories blocks">
                        <ul className="blocks-list">
                            <li className="blocks-item">
                                <a
                                    href="/hc/en-us/sections/360010736014-Cybrary-for-Teams"
                                    className="blocks-item-link"
                                >
                                    <span className="blocks-item-title">Cybrary for Teams</span>
                                    <span className="blocks-item-description">
                                        If you are a team learner or team admin--find answers on
                                        navigation, "how-to's," and more!
                                    </span>
                                </a>
                            </li>
                            <li className="blocks-item">
                                <a
                                    href="/hc/en-us/sections/360009550454-How-to-Get-Started"
                                    className="blocks-item-link"
                                >
                                    <span className="blocks-item-title">How to Get Started!</span>
                                    <span className="blocks-item-description">
                                        Learn all aspects of getting started in the platform!{" "}
                                    </span>
                                </a>
                            </li>
                            <li className="blocks-item">
                                <a
                                    href="/hc/en-us/sections/33851861355923-Billing"
                                    className="blocks-item-link"
                                >
                                    <span className="blocks-item-title">Billing</span>
                                    <span className="blocks-item-description">
                                        Answers to your billing questions and concerns
                                    </span>
                                </a>
                            </li>
                            <li className="blocks-item">
                                <a
                                    href="/hc/en-us/sections/9885330329491-Tech-Know-How"
                                    className="blocks-item-link"
                                >
                                    <span className="blocks-item-title">Tech Know-How</span>
                                    <span className="blocks-item-description">
                                        Common technical occurrences you may experience
                                    </span>
                                </a>
                            </li>
                            <li className="blocks-item">
                                <a
                                    href="/hc/en-us/sections/360010736034-General-FAQ"
                                    className="blocks-item-link"
                                >
                                    <span className="blocks-item-title">General FAQ</span>
                                    <span className="blocks-item-description">
                                        Find answers for the most frequently asked questions
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="articles">
                        <h2>Promoted articles</h2>
                        <ul className="article-list promoted-articles">
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/35339316166547-Cybrary-for-Teams-Handbook">
                                    Cybrary for Teams Handbook
                                </a>
                            </li>
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/31432048013971-Cyber-Risk-Impact-FAQs">
                                    Cyber Risk Impact FAQs
                                </a>
                            </li>
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/31431875801235-Training-Project-Widget-FAQs">
                                    Training Project Widget FAQs
                                </a>
                            </li>
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/25490354338067-Cybrary-Baseline-FAQ">
                                    Cybrary Baseline FAQ
                                </a>
                            </li>
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/28142372468243-Vimeo-Subtitle-Translator">
                                    Vimeo Subtitle Translator
                                </a>
                            </li>
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/36149152421523-Daily-Activity-Limit">
                                    Daily Activity Limit
                                </a>
                            </li>
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/360057227934-Cybrary-Assessments">
                                    Cybrary Assessments
                                </a>
                            </li>
                            <li className="promoted-articles-item">
                                <a href="/hc/en-us/articles/33492558622739-2024-Content-Catalog-Changes">
                                    2024 Content Catalog Changes
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
                <section className="section home-section activity">
                    <div
                        data-app="recent-activity"
                        data-url="/hc/api/internal/recent_activities?locale=en-us"
                    >
                        <div className="recent-activity">
                            <h2 className="recent-activity-header">Recent activity</h2>
                            <div role="status" className="recent-activity-list" style={{}}>
                                <section
                                    className="recent-activity-item"
                                    data-recent-activity-action="article_created"
                                >
                                    <h3>
                                        <a
                                            className="recent-activity-item-parent"
                                            href="/hc/en-us/sections/360010736034-General-FAQ"
                                        >
                                            General FAQ
                                        </a>
                                    </h3>
                                    <a
                                        className="recent-activity-item-link"
                                        href="/hc/en-us/articles/36149152421523-Daily-Activity-Limit"
                                    >
                                        Daily Activity Limit
                                    </a>
                                    <div className="recent-activity-item-meta">
                                        <div className="recent-activity-item-time">
                                            Article created 3 months ago
                                        </div>
                                        <div className="recent-activity-item-comment">
                                            <span
                                                className="recent-activity-comment-icon"
                                                aria-hidden="true"
                                                data-comment-count={0}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={12}
                                                    height={12}
                                                    focusable="false"
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="recent-activity-accessibility-label">
                                                Number of comments: 0
                                            </span>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="recent-activity-item"
                                    data-recent-activity-action="article_created"
                                >
                                    <h3>
                                        <a
                                            className="recent-activity-item-parent"
                                            href="/hc/en-us/sections/360010736014-Cybrary-for-Teams"
                                        >
                                            Cybrary for Teams
                                        </a>
                                    </h3>
                                    <a
                                        className="recent-activity-item-link"
                                        href="/hc/en-us/articles/35339316166547-Cybrary-for-Teams-Handbook"
                                    >
                                        Cybrary for Teams Handbook
                                    </a>
                                    <div className="recent-activity-item-meta">
                                        <div className="recent-activity-item-time">
                                            Article created 3 months ago
                                        </div>
                                        <div className="recent-activity-item-comment">
                                            <span
                                                className="recent-activity-comment-icon"
                                                aria-hidden="true"
                                                data-comment-count={0}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={12}
                                                    height={12}
                                                    focusable="false"
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="recent-activity-accessibility-label">
                                                Number of comments: 0
                                            </span>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="recent-activity-item"
                                    data-recent-activity-action="article_created"
                                >
                                    <h3>
                                        <a
                                            className="recent-activity-item-parent"
                                            href="/hc/en-us/sections/360010736034-General-FAQ"
                                        >
                                            General FAQ
                                        </a>
                                    </h3>
                                    <a
                                        className="recent-activity-item-link"
                                        href="/hc/en-us/articles/33492558622739-2024-Content-Catalog-Changes"
                                    >
                                        2024 Content Catalog Changes
                                    </a>
                                    <div className="recent-activity-item-meta">
                                        <div className="recent-activity-item-time">
                                            Article created 5 months ago
                                        </div>
                                        <div className="recent-activity-item-comment">
                                            <span
                                                className="recent-activity-comment-icon"
                                                aria-hidden="true"
                                                data-comment-count={0}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={12}
                                                    height={12}
                                                    focusable="false"
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="recent-activity-accessibility-label">
                                                Number of comments: 0
                                            </span>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="recent-activity-item"
                                    data-recent-activity-action="article_created"
                                >
                                    <h3>
                                        <a
                                            className="recent-activity-item-parent"
                                            href="/hc/en-us/sections/360010736014-Cybrary-for-Teams"
                                        >
                                            Cybrary for Teams
                                        </a>
                                    </h3>
                                    <a
                                        className="recent-activity-item-link"
                                        href="/hc/en-us/articles/31432048013971-Cyber-Risk-Impact-FAQs"
                                    >
                                        Cyber Risk Impact FAQs
                                    </a>
                                    <div className="recent-activity-item-meta">
                                        <div className="recent-activity-item-time">
                                            Article created 7 months ago
                                        </div>
                                        <div className="recent-activity-item-comment">
                                            <span
                                                className="recent-activity-comment-icon"
                                                aria-hidden="true"
                                                data-comment-count={0}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={12}
                                                    height={12}
                                                    focusable="false"
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="recent-activity-accessibility-label">
                                                Number of comments: 0
                                            </span>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="recent-activity-item"
                                    data-recent-activity-action="article_created"
                                >
                                    <h3>
                                        <a
                                            className="recent-activity-item-parent"
                                            href="/hc/en-us/sections/360010736014-Cybrary-for-Teams"
                                        >
                                            Cybrary for Teams
                                        </a>
                                    </h3>
                                    <a
                                        className="recent-activity-item-link"
                                        href="/hc/en-us/articles/31431875801235-Training-Project-Widget-FAQs"
                                    >
                                        Training Project Widget FAQs
                                    </a>
                                    <div className="recent-activity-item-meta">
                                        <div className="recent-activity-item-time">
                                            Article created 7 months ago
                                        </div>
                                        <div className="recent-activity-item-comment">
                                            <span
                                                className="recent-activity-comment-icon"
                                                aria-hidden="true"
                                                data-comment-count={0}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={12}
                                                    height={12}
                                                    focusable="false"
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="recent-activity-accessibility-label">
                                                Number of comments: 0
                                            </span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div
                                className="recent-activity-no-activities"
                                style={{ display: "none" }}
                            />
                            <div className="recent-activity-loader" style={{ display: "none" }}>
                                ...
                            </div>
                            <div className="recent-activity-controls" style={{}}>
                                <a href="#" data-recent-activity-seemore="">
                                    See more
                                    <span
                                        style={{
                                            clip: "rect(0 0 0 0)",
                                            clipPath: "inset(50%)",
                                            height: 1,
                                            overflow: "hidden",
                                            position: "absolute",
                                            whiteSpace: "nowrap",
                                            width: 1
                                        }}
                                    >
                                        items from recent activity
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    </>
}
export default helpCentre;