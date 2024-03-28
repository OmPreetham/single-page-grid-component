const SinglePageGrid = () => {
  return (
    <div className="card-container">
      <header>
        <h1>Join our community</h1>
        <p className="header__subtitle">
          30-day, hassle-free money back guarantee
        </p>
        <p className="header__description">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </header>
      <div className="bottom-container">
        <section className="subscription">
          <h2>Monthly Subscription</h2>
          <p className="dollar">
            <span className="dollar__value">&#36;29</span>
            <span className="dollar__rate">per month</span>
          </p>
          <p className="subscription__description">
            Full access for less than &#36;1 a day
          </p>
          <button>Sign Up</button>
        </section>
        <section className="why-us">
          <h2>Why Us</h2>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
export default SinglePageGrid
