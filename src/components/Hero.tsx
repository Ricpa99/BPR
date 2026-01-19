import { Button } from './Button'

interface HeroProps {
  title: string
  description: string
  image: string
  buttonText: string
  onButtonClick?: () => void
}

function Hero({ title, description, image, buttonText, onButtonClick }: HeroProps) {
  return (
    <section className="bg-brand-background pt-2 pb-12 md:pt-4 md:pb-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button
                onClick={onButtonClick}
                className="border-2 border-white bg-[#AA8549] text-white shadow-custom-gold"
              >
                {buttonText}
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={image}
              alt={title}
              className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
