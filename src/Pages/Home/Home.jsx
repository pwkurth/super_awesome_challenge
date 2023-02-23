import React, { useEffect, useState } from "react";
import Skeleton from "../../Components/Skeleton/Skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Skeleton />;
  } else {
    return (
      <div className="flex bg-slate-100 w-1/3 mt-16 mx-auto shadow-md">
        <div className="p-20">
          <article className="prose font-poppins">
            <h1>Did you hear that?</h1>
            <p className="text-left leading-relaxed text-xl ">
              They've shut down the main reactor. We'll be destroyed for sure.
              This is madness! We're <b>doomed!</b> There'll be no escape for
              the Princess this time. What's that? Artoo! Artoo-Detoo, where are
              you? At last! Where have you been? They're heading in this
              direction. Where are those transmissions you <i>intercepted?</i>{" "}
              What have you done with those plans? We intercepted no
              transmissions.
            </p>
            <blockquote className="text-2xl text-gray-800">
              Aaah....This is a consular ship. Were on a diplomatic mission. If
              this is a consular ship...were is the Ambassador?
            </blockquote>
            <p className="text-left leading-relaxed text-xl ">
              Commander, tear this ship apart until you've found those{" "}
              <b>plans</b> and bring me the <i>Ambassador. </i>These
              astro-droids are getting quite out of hand. Even I can't
              understand their logic at times. How could I be so stupid? He's
              nowhere in sight. Blast it! Pardon me, sir, but couldn't we go
              after him? It's too dangerous with all the Sandpeople around.
            </p>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://mario.wiki.gallery/images/8/84/MPS_Donkey_Kong_Artwork.png"
                alt="Super Mario"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 ">
                  Super Mario
                </cite>
                <cite className="pl-3 text-sm font-light text-gray-700 ">
                  CEO at Sony
                </cite>
              </div>
            </figcaption>
          </article>
        </div>
      </div>
    );
  }
};

export default Home;
