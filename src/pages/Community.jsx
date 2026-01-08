const Community = () => {
  return (
    <div className="mt-20 px-15">
      <section class="policy-page">
        <div className="text-2xl md:text-4xl mt-20 font-bold py-10 ">
          <span className="text-(--color-accent) ">Community</span> Guidelines
          <h1 className="my-2 text-sm font-normal">
            FindItHere is built on trust, respect, and responsibility. By using
            this platform, every user agrees to follow these guidelines to keep
            the community safe and helpful.
          </h1>
          <br />
        </div>

        <h2 className="text-(--color-accent) ">What You SHOULD Do</h2>
        <ul className="list-disc list-inside">
          <li>Report lost or found items honestly</li>
          <li>Use in-app chat only for verification</li>
          <li>Be respectful and cooperative in conversations</li>
          <li>Provide accurate item details to confirm ownership</li>
          <li>Report suspicious or inappropriate behavior</li>
        </ul>
        <br />

        <h2 className="text-(--color-accent) ">What You MUST NOT Do</h2>
        <ul className="list-disc list-inside">
          <li>Sell or attempt to sell found items</li>
          <li>Demand or force rewards from item owners</li>
          <li>
            Share personal contact details (phone, email, address, social links)
          </li>
          <li>Post fake, misleading, or spam listings</li>
          <li>Harass, threaten, or misuse other users</li>
        </ul>
        <br />

        <h2 className="text-(--color-accent) ">Safety & Enforcement</h2>
        <p>
          Violations of these guidelines may result in content removal,
          temporary suspension, or permanent account banning. Our goal is to
          protect both item owners and finders.
        </p>
        <br />

        <h2 className="text-(--color-accent) ">Our Promise</h2>
        <p>
          FindItHere promotes kindness, honesty, and ethical behavior — not
          profit.
        </p>
      </section>

      <section class="policy-page">
        <div className="text-2xl md:text-4xl mt-20 font-bold pb-10 ">
          <span className="text-(--color-accent) ">Privacy</span> Policy
          <h1 className="my-2 text-sm font-normal">
            FindItHere respects your privacy and is committed to protecting your
            personal information.
          </h1>
          <br />
        </div>

        <h2 className="text-(--color-accent)">Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Basic account details (name, email, age confirmation)</li>
          <li>Item listings (images, descriptions, location details)</li>
          <li>In-app chat messages (for safety and moderation)</li>
        </ul>
        <br />
        <h2 className="text-(--color-accent)">How We Use Your Information</h2>
        <p>
          Your data is used only to operate the platform, help match lost and
          found items, maintain safety, and improve user experience. We do not
          sell or share your data with third parties.
        </p>
        <br />

        <h2 className="text-(--color-accent)">Data Protection</h2>
        <ul className="list-disc list-inside">
          <li>Secure authentication is used</li>
          <li>Personal contact details are never public</li>
          <li>All communication stays inside the app</li>
        </ul>
        <br />

        <h2 className="text-(--coh2r-accent)">User Responsibility</h2>
        <p>
          Users should avoid sharing sensitive or personal information and
          report any misuse immediately.
        </p>
        <br />

        <h2 className="text-(--color-accent)">Policy Updates</h2>
        <p>
          This privacy policy may be updated as the platform evolves. Major
          changes will be communicated to users.
        </p>
      </section>

      <section class="policy-page">
        <div className="text-2xl md:text-4xl mt-20 font-bold pb-10 ">
          <span className="text-(--color-accent) ">Terms</span> & Conditions
          <h1 className="my-2 text-sm font-normal">
            By accessing or using FindItHere, you agree to comply with the
            following terms and conditions.
          </h1>
          <br />
        </div>

        <h2 className="text-(--color-accent)">Eligibility</h2>
        <ul className="list-disc list-inside">
          <li>Users must meet the minimum age requirement</li>
          <li>Users must provide accurate and truthful information</li>
          <li>Accounts are personal and non-transferable</li>
        </ul>
        <br />

        <h2 className="text-(--color-accent)">Platform Usage</h2>
        <p>
          Users agree to use the platform responsibly, follow all community
          guidelines, and avoid any form of misuse, fraud, or unethical
          behavior.
        </p>
        <br />
        <h2 className="text-(--color-accent)">Disclaimer</h2>
        <p>
          FindItHere acts only as a connecting platform and does not guarantee
          item recovery. The platform is not responsible for disputes between
          users.
        </p>
        <br />

        <h2 className="text-(--color-accent)">Account Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          platform rules, without prior notice in serious cases.
        </p>
        <br />
        <h2 className="text-(--color-accent)">Changes to Terms</h2>
        <p>
          These terms may change as the platform evolves. Continued use of
          FindItHere indicates acceptance of updated terms.
        </p>
        <br />
        <h2 className="text-(--color-accent)">Contact</h2>
        <p>
          For questions related to these terms, please contact us through the
          Contact Us page.
        </p>
      </section>
    </div>
  );
};

export default Community;
