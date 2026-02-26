import '@fontsource/montserrat/400.css';
import SplitText from '@/Animations/SplitText';

function Vision() {
  //   const VISION =
  //     'To develop a quality spiritual education and good behavior among Hindus in Malaysia.';
  const VISION =
    'Nurturing spiritual growth and values among Hindus in Malaysia & Inspiring faith, etiquette, and virtuous character through spiritual education.';

  return (
    <section className="flex flex-col container mx-auto px-4 py-12 items-center justify-between font-montserrat mt-4 mb-4">
      <div className="flex items-center text-center py-4 mx-auto">
        <span className="block">
          <h3
            className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl 
               text-center max-w-3xl leading-relaxed lg:leading-loose px-2 sm:px-6"
          >
            <SplitText
              text={VISION.toUpperCase()}
              className="text-4xl text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h3>
        </span>
      </div>
    </section>
  );
}

export default Vision;
