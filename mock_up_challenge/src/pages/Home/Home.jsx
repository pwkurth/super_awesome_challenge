import React, { useEffect, useState } from "react";
import Skeleton from "../../components/skeleton/skeleton";

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
      <div class="flex bg-slate-100 w-1/3 mt-16 mx-auto shadow-md">
        <div class="p-20">
          <article class="prose font-poppins">
            <h1>Did you hear that?</h1>
            <p class="text-left leading-relaxed text-xl ">
              They've shut down the main reactor. We'll be destroyed for sure.
              This is madness! We're doomed! There'll be no escape for the
              Princess this time. What's that? Artoo! Artoo-Detoo, where are
              you? At last! Where have you been? They're heading in this
              direction. Where are those transmissions you intercepted? What
              have you done with those plans? We intercepted no transmissions.
              <blockquote class="text-2xl text-gray-800">
                Aaah....This is a consular ship. Were on a diplomatic mission.
                If this is a consular ship...were is the Ambassador?
              </blockquote>
            </p>
            <p class="text-left leading-relaxed text-xl ">
              Commander, tear this ship apart until you've found those plans and
              bring me the Ambassador. These astro-droids are getting quite out
              of hand. Even I can't understand their logic at times. How could I
              be so stupid? He's nowhere in sight. Blast it! Pardon me, sir, but
              couldn't we go after him? It's too dangerous with all the
              Sandpeople around.
            </p>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img
                class="w-12 h-12 rounded-full"
                src="https://mario.wiki.gallery/images/8/84/MPS_Donkey_Kong_Artwork.png"
                alt="Super Mario"
              />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite class="pr-3 font-medium text-gray-900 ">Super Mario</cite>
                <cite class="pl-3 text-sm font-light text-gray-700 ">
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
