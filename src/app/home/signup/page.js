const SignUp = () => {
    return <>
        <div className="padding-global" style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000, // Ensure it's on top
        }} >
            <div className="container-large" >
                <div className="padding-section-120">
                    <div className="modal_component">
                        <div className="modal_content">
                            <img
                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d222dc39641634c0768bc_cybrary-logo.svg"
                                loading="lazy"
                                alt=""
                                className="modal_logo"
                            />
                            <div className="heading-style-h2">Register</div>
                            <div className="modal_join-text">
                                Join over <span className="text-color-white">3 million</span>{" "}
                                cybersecurity professionals advancing their career
                            </div>
                            <div className="modal_sso-wrap">
                                <a href="#" className="text-color-silver">
                                    or sign up with
                                </a>
                                <div className="modal_socials-wrap">
                                    <a
                                        href="https://app.cybrary.it/login?provider=Google"
                                        target="_blank"
                                        className="modal_social-link w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d70e0a5eaf95947566694_google%20logo.svg"
                                            loading="lazy"
                                            alt=""
                                            className="modal_social-logo"
                                        />
                                    </a>
                                    <a
                                        href="https://app.cybrary.it/login?provider=Apple"
                                        target="_blank"
                                        className="modal_social-link no-border w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d70e01148e53cf9ad961c_apple%20logo.svg"
                                            loading="lazy"
                                            alt=""
                                            className="modal_social-logo"
                                        />
                                    </a>
                                    <a
                                        href="https://app.cybrary.it/login?provider=Microsoft"
                                        target="_blank"
                                        className="modal_social-link w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d70e025fe5ea81d36fa79_microsoft%20logo.svg"
                                            loading="lazy"
                                            alt=""
                                            className="modal_social-logo"
                                        />
                                    </a>
                                    <a
                                        href="https://app.cybrary.it/login?provider=Facebook"
                                        className="modal_social-link w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d70e035ea80b8854896ca_facebook%20logo.svg"
                                            loading="lazy"
                                            alt=""
                                            className="modal_social-logo"
                                        />
                                    </a>
                                    <a
                                        href="https://app.cybrary.it/login?provider=LinkedIn"
                                        target="_blank"
                                        className="modal_social-link w-inline-block"
                                    >
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d70e0d8373cf9c1d5089c_linkedin%20logo.svg"
                                            loading="lazy"
                                            alt=""
                                            className="modal_social-logo"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal_form-block w-form">
                            <form
                                id="wf-form-Modal-Registration-Form"
                                name="wf-form-Modal-Registration-Form"
                                data-name="Modal Registration Form"
                                method="post"
                                cb-element="modal-form"
                                className="modal_form"
                                data-wf-page-id="63eef15e3ff8fdd8b89a688c"
                                data-wf-element-id="7ebe0b2d-fa1a-4f45-c31c-1af397dad224"
                                aria-label="Modal Registration Form"
                            >
                                <div className="modal_form_field-wrap">
                                    <label
                                        htmlFor="modalEmail"
                                        className="modal_form_field-label"
                                    >
                                        Email Address*
                                    </label>
                                    <input
                                        className="modal_form_field w-input"
                                        maxLength={256}
                                        name="modalEmail"
                                        data-name="modalEmail"
                                        cb-element="modal-email"
                                        placeholder="name@email.com"
                                        type="email"
                                        id="modalEmail"
                                        required=""
                                    />
                                </div>
                                <div className="modal_form_field-wrap">
                                    <label
                                        htmlFor="modalPassword"
                                        className="modal_form_field-label"
                                    >
                                        Password*
                                    </label>
                                    <input
                                        className="modal_form_field w-input"
                                        maxLength={256}
                                        name="modalPassword"
                                        data-name="modalPassword"
                                        cb-element="modal-password"
                                        placeholder="••••••••"
                                        type="password"
                                        id="modalPassword"
                                        required=""
                                    />
                                    <div
                                        cb-element="modal-password-alert"
                                        className="modal_form_password-alert"
                                    >
                                        <em>
                                            Your password does not meet the minimum security
                                            qualifications, please try again.
                                        </em>
                                    </div>
                                </div>
                                <div className="common_process_accordion_embed w-embed w-script">
                                    {/* [Finsweet Attributes] A11Y */}
                                </div>
                                <div
                                    className="modal_accordion_item"
                                    style={{ borderColor: "rgb(99, 99, 99)" }}
                                >
                                    <div
                                        cb-element="conditions-header"
                                        tabIndex={0}
                                        role="button"
                                        aria-expanded="false"
                                        className="modal_accordion_header"
                                    >
                                        <img
                                            cb-element="password-invalid"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d73253081f95e7114665d_Question.svg"
                                            loading="lazy"
                                            className="modal_dd_icon-invalid"
                                        />
                                        <img
                                            cb-element="password-valid"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645bff6cfbbd3e0a6295dcdd_ShieldCheck.svg"
                                            loading="lazy"
                                            className="modal_dd_icon-valid"
                                        />
                                        <div cb-element="password-requirements-text">
                                            See Password Requirements
                                        </div>
                                        <div className="modal_accordion_arrow-wrapper">
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d7aac8db87a42878a0352_dropdown%20arrow.svg"
                                                className="modal_accordion_icon"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        cb-element="password-conditions"
                                        aria-labelledby="accordion-header-1"
                                        className="modal_accordion_content"
                                        style={{ width: "100%", height: "0rem", display: "none" }}
                                    >
                                        <div className="modal_dd_list-wrap">
                                            <div className="modal_dd_requirement">
                                                <div
                                                    cb-element="length-check"
                                                    className="modal_dd_check-wrap"
                                                >
                                                    <img
                                                        alt=""
                                                        loading="lazy"
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d74f16881ba8c7f7221ce_Check.svg"
                                                        className="modal_dd_check-icon"
                                                    />
                                                </div>
                                                <div>At least 8 character(s)</div>
                                            </div>
                                            <div className="modal_dd_requirement">
                                                <div
                                                    cb-element="number-check"
                                                    className="modal_dd_check-wrap"
                                                >
                                                    <img
                                                        alt=""
                                                        loading="lazy"
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d74f16881ba8c7f7221ce_Check.svg"
                                                        className="modal_dd_check-icon"
                                                    />
                                                </div>
                                                <div>At least 1 number(s)</div>
                                            </div>
                                            <div className="modal_dd_requirement">
                                                <div
                                                    cb-element="lowercase-check"
                                                    className="modal_dd_check-wrap"
                                                >
                                                    <img
                                                        alt=""
                                                        loading="lazy"
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d74f16881ba8c7f7221ce_Check.svg"
                                                        className="modal_dd_check-icon"
                                                    />
                                                </div>
                                                <div>At least 1 lowercase letter(s)</div>
                                            </div>
                                            <div className="modal_dd_requirement">
                                                <div
                                                    cb-element="uppercase-check"
                                                    className="modal_dd_check-wrap"
                                                >
                                                    <img
                                                        alt=""
                                                        loading="lazy"
                                                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/645d74f16881ba8c7f7221ce_Check.svg"
                                                        className="modal_dd_check-icon"
                                                    />
                                                </div>
                                                <div>At least 1 uppercase letter(s)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className="w-checkbox modal_checkbox_field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom modal_checkbox w--redirected-checked" />
                                    <input
                                        id="subscribe"
                                        type="checkbox"
                                        name="subscribe"
                                        data-name="subscribe"
                                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                                    />
                                    <span
                                        className="modal_checkbox_label w-form-label"
                                        htmlFor="subscribe"
                                    >
                                        I want to receive new courses, feature updates, news, and
                                        discounts from Cybrary
                                    </span>
                                </label>
                                <label className="w-checkbox modal_checkbox_field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom modal_checkbox" />
                                    <input
                                        id="tos"
                                        type="checkbox"
                                        name="tos"
                                        data-name="tos"
                                        required=""
                                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                                    />
                                    <span
                                        className="modal_checkbox_label w-form-label"
                                        htmlFor="tos"
                                    >
                                        By creating an account, you agree to the Terms of Service
                                        and Privacy Policy
                                    </span>
                                </label>
                                <div
                                    cb-element="modal-tos-alert"
                                    className="modal_form_password-alert"
                                >
                                    This is a required field.
                                </div>
                                <input
                                    type="submit"
                                    data-wait="Please wait..."
                                    className="button in-modal w-button"
                                    defaultValue="Create Free Account"
                                    name=""
                                />
                                <a
                                    href="https://app.cybrary.it/login"
                                    className="modal_link-login"
                                >
                                    Already have an account?
                                </a>
                                <div className="modal_terms-text">
                                    This site is protected by reCAPTCHA and the Google Privacy
                                    Policy and Terms of Service apply.
                                </div>
                            </form>
                            <div
                                className="w-form-done"
                                tabIndex={-1}
                                role="region"
                                aria-label="Modal Registration Form success"
                            >
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div
                                className="w-form-fail"
                                tabIndex={-1}
                                role="region"
                                aria-label="Modal Registration Form failure"
                            >
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                        <div cb-element="modal-close" className="modal_close w-embed">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM12 10.586L14.828 7.757L16.243 9.172L13.414 12L16.243 14.828L14.828 16.243L12 13.414L9.172 16.243L7.757 14.828L10.586 12L7.757 9.172L9.172 7.757L12 10.586Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignUp;