export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <section>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FGknQHW3DiI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <section className="grid grid-cols-2 grid-rows-2">
          <iframe
            width="200"
            height="350"
            src="https://www.youtube.com/embed/3hgZaeiWV4U"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </section>
      </div>
    </div>
  );
}
